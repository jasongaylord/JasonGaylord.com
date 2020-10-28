---
title: Using Modern CSS Frameworks
author: Jason Gaylord
date: 2020-10-29
categories: [css,design,web]
tags:  [css,design,web]
post-number: 1086
image: https://cdn.jasongaylord.com/images/2020/10/29/foundation.jpg
bitly: https://jasong.us/3e2TEvw
---

For years, Bootstrap was the most widely used CSS framework and is still the [7th highest starred](https://jasong.us/2G7v685) open source project on GitHub. It originally started by a couple of developers at Twitter before being released as an open source project in 2011. However, many have started to slowly abandon Bootstrap. It has been 6 years since the last major release (officially today) and Bootstrap 5 is still in Alpha and includes many breaking changes including, but not limited to:

* dropping jQuery for vanilla JavaScript
* rewriting the grid
* dropping IE support

If you haven't moved to a different framework yet and are looking for new, modern CSS frameworks, here are five to consider:

## Foundation

{% include link-thumbnail.html path="2020/10/29/foundation.jpg" alt="Foundation Front-End Framework" url="https://jasong.us/3jzYJML" %}

The Zurb foundation considers [Foundation](https://jasong.us/3jzYJML) the most advanced responsive front-end framework in the world. Foundation is very similar to Bootstrap in that it offers Semantic styling. In fact, Foundation boasts that everything is semantic. It's also mobile first, just like Bootstrap. The one major difference between Foundation and many other CSS frameworks is the ability to use [Foundation for Emails](https://jasong.us/37Q5Azq) to generate responsive emails. Go ahead and check out the Getting Started link on [get.foundation](https://jasong.us/3jzYJML).

_Note: At the time of this post, the Foundation Showcase appears to be offline._

## Pure

{% include link-thumbnail.html path="2020/10/29/pure.jpg" alt="Pure CSS Framework" url="https://jasong.us/3kQg1XL" %}

Yahoo! used to emphasize the [Yahoo UI library](https://jasong.us/3ozHNtF) for building web interfaces. However, as developers shifted from using pre-build AJAX controls to using jQuery, Yahoo! focussed their efforts on releasing Pure, a small set of responsive CSS modules that can be used within web projects. The entire set of Pure modules, when minified and gzipped, is only 3.7KB. Pure builds on [Normalize.css](https://jasong.us/35GDyDX) and includes grids, menus and more. You can check it out by visiting [purecss.io](https://jasong.us/3kQg1XL).

## TailwindCSS

{% include link-thumbnail.html path="2020/10/29/tailwindcss.jpg" alt="Tailwind CSS Framework" url="https://jasong.us/34DVjEO" %}

Tailwind CSS is a highly customizable, low-level CSS framework that provides building blocks but does not include opinionated styles and UI like other frameworks. Tailwind is considered a utility-first CSS framework because of this. As with the others, Tailwind is responsive throughout and component-friendly that will clean your HTML class list:

```html
<!-- Using utilities: -->
<button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
  Button
</button>

<!-- Extracting component classes: -->
<button class="btn btn-blue">
  Button
</button>

<style>
  .btn {
    @apply font-bold py-2 px-4 rounded;
  }
  .btn-blue {
    @apply bg-blue-500 text-white;
  }
  .btn-blue:hover {
    @apply bg-blue-600;
  }
</style>
```

While Tailwind does not have UI components, well, until now. The creators of Tailwind have a commercial product, [Tailwind UI](https://jasong.us/2HyZlWh), that will be released soon. If you are looking for just Tailwind CSS, visit [tailwindcss.com](https://jasong.us/34DVjEO).

## Semantic UI

{% include link-thumbnail.html path="2020/10/29/semanticui.jpg" alt="Semantic UI Framework" url="https://jasong.us/2TvXOlV" %}

HTML 5 introduced more semantic elements for the web. Semantic UI is hoping to shape CSS the same way by providing semantic classes to elements. As an example, if I'd like to have a button bar with three buttons, I'd simply add classes to my div element as `ui three buttons`. Here is the complete example:

```html
<div class="ui three buttons">
  <button class="ui active button">One</button>
  <button class="ui button">Two</button>
  <button class="ui button">Three</button>
</div>
```

The same applies to JavaScript. There are over 3000 theme variables, 50 UI components and to date, well over 5000 commits to the open source project. To get started, visit [semantic-ui.com](https://jasong.us/2TvXOlV).

## Bulma

{% include link-thumbnail.html path="2020/10/29/bulma.jpg" alt="Bulma Framework" url="https://jasong.us/3jA8kmL" %}

Like the others, [Bulma](https://jasong.us/3jA8kmL) is a free, open source CSS framework. Bulma bases everything in the framework off on `flexbox`. It is one of the simplest grid systems you'll find. Also, like many of the others, it's quick and simple to customize as it also uses SASS. There are no JavaScript frameworks that are required. To learn more about bulma, visit [bulma.io](https://jasong.us/3jA8kmL).

## Bonus: Milligram
Back in July, I [posted about Milligram](https://jasong.us/32RQzL5), a minimalist CSS framework. Milligram is even lighter than Pure at just 2KB and is a very good framework for the minimalist developer. Be sure to check out my post at [jasong.us/32RQzL5](https://jasong.us/32RQzL5)