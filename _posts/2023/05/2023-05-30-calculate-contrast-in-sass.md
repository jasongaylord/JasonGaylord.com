---
title: Calculating Color Contrast in Dart SASS
author: Jason Gaylord
date: 2023-05-30
categories: [design,tip,web]
tags: [design,tip,web]
post-number: 1254
image: https://cdn.jasongaylord.com/images/2023/05/30/contrast-calculated.jpg
bitly: https://jasong.us/3IIbxQE
---

The TechBash Foundation is working on an updated website for TechBash. One of the requests that came in from one of our presenters for this year's [TechBash conference](https://jasong.us/tb) was to ensure that our color contrast between `background-color` and text `color` was within the guidelines set forth by [WCAG](https://jasong.us/3MwKvNk). Since I'm building a lot of my styles using SASS, and more specifically, [Dart Sass](https://jasong.us/3C0m85I), it's actually not hard to create a function to return the contrast ratio.

First, we'll pick two colors that we want to check. I'll use two colors that I know are out of compliance that are part of our existing site:

```scss
$color1: #5fb0e5;
$color2: #e3f1fa;
```

It doesn't matter which color is lighter and which is darker. The functions we'll be using will calculate appropriately.

The next thing I'm going to do is calculate the linear value of a single color in the RGB spectrum like so:

```scss
@use "sass:math";

@function sRGBToLinear($colorValue) {
    $colorValue: calc($colorValue / 255);
    @if $colorValue <= 0.04045 {
        @return calc($colorValue / 12.92);
    } @else {
        @return calc(math.pow($colorValue + 0.055, 2.4));
    }
}
```

At this point, this is just a function that is calculating values, but I'm not passing in the colors just yet.

{% include info-notice.html %}
Dart Sass is currently the only library that includes the Sass Math modules out of the box using the `use` directive. Some documentation that you'll find on the Sass website lacks bringing in the library and also calling the fully qualified library function. If you do not do this, you will most certainly get errors.
{% include end-notice.html %}

Next, we'll convert the Hex color values to RGB by using the built-in `color.red`, `color.green`, and `color.blue` functions and pass those individual values into our `sRGBToLinear` function. Using the defined values from WCAG, we'll then calculate the luminance of each color and determine, using `min` and `max`, which is the "darker" color. Finally, we'll return the ratio.

```scss
@function calculate-contrast($value1, $value2) {
    $luminance1: (0.2126 * sRGBToLinear(red($value1))) + (0.7152 * sRGBToLinear(green($value1))) + (0.0722 * sRGBToLinear(blue($value1)));
    $luminance2: (0.2126 * sRGBToLinear(red($value2))) + (0.7152 * sRGBToLinear(green($value2))) + (0.0722 * sRGBToLinear(blue($value2)));

    @return calc((max($luminance1, $luminance2) + 0.05)/(min($luminance1, $luminance2) + 0.05));
}
```

To use our new functions, we can now pass in and obtain the value like so:

```scss
.compare-colors {
    contrast-ratio: "#{calculate-contrast($color1,$color2)}";
}
```

In the above, `contrast-ratio` is not a valid CSS property and will be ignored. However, we can evaluate this value to make decisions at runtime. 

{% include open-thumbnail.html path="2023/05/30/contrast-calculated.jpg" alt="Calculating Color Contrast in Dart SASS" %}

But, this doesn't really show the power of what we're trying to do. Really, we want to be able to calculate a WCAG safe color when we have a background (or foreground) color. So, I whipped up a couple of quick helper functions to do just that:

```scss
@function find-safe-color($color, $ratio: 4.5) {
    $lightness: lightness($color);
    $value: $color;
    $contrast: 0.0;

    @if $lightness < 50 {
        $value: lighten($value, 5%);
        $contrast: calculate-contrast($color,$value);

        @while $contrast < $ratio {
            $value: lighten($value, 5%);
            $contrast: calculate-contrast($color,$value);
        }
    } @else {
        $value: darken($value, 5%);
        $contrast: calculate-contrast($color,$value);

        @while $contrast < $ratio {
            $value: darken($value, 5%);
            $contrast: calculate-contrast($color,$value);
        }
    }

    @return ($value, $contrast);
}

@function wcag-safe-colors($base-color) {
    $colors: ();

    $wcag30: find-safe-color($base-color, 3.0);
    $wcag45: find-safe-color($base-color);
    $wcag70: find-safe-color($base-color, 7.0);

    // Generate shades
    $colors: map-merge($colors, (
        'base-color': $base-color,
        'wcag20-aa-normal-color': nth($wcag45, 1),
        'wcag20-aa-normal-ratio': nth($wcag45, 2),
        'wcag20-aa-large-color': nth($wcag30, 1),
        'wcag20-aa-large-ratio': nth($wcag30, 2),
        'wcag21-aa-input-color': nth($wcag30, 1),
        'wcag21-aa-input-ratio': nth($wcag30, 1),
        'wcag21-aaa-normal-color': nth($wcag70, 1),
        'wcag21-aaa-normal-ratio': nth($wcag70, 2),
        'wcag21-aaa-large-color': nth($wcag45, 1),
        'wcag21-aaa-large-ratio': nth($wcag45, 2)
    ));

    @return $colors;
}
```

The first function, `find-safe-color`, will find a color that meets the appropriate contrast ratio. If the `lightness` value is less than 50%, meaning it's a dark color, we'll step and lighten by 5% until we find the color we're looking for. Conversely, we'll darken the color by 5% if it's a light color. The return value includes not only the color, but the calculated contrast value.

The second function, `wcag-safe-colors`, builds an array map of values. This will allow you to use the value you need for your use case. WCAG 2.0 states that if you use large text, which is defined as 18pt text or 14pt bold text, a ratio of 3:1 is all that's needed. Smaller text requires a ratio of 4.5:1. For WCAG 2.1, input box borders should have a ratio of 3:1, large text at 4.5:1, and normal text at 7:1. 

Using these functions like so:

```scss
$base-color: #5fb0e5;
$colors: wcag-safe-colors($base-color);

.wcag-safe-base-colors {
    background-color: $color2;
    color: map-get($colors, 'wcag21-aaa-normal-color');
    font-size: 12pt;
}
```

I can now generate "WCAG safe" CSS that looks like this:

```css
.wcag-safe-base-colors{background-color:#5fb0e5;color:#061925;font-size:12pt}
```

I'll show further examples of how I plan on using this in a future post.