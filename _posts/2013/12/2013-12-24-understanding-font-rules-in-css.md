---
title: Understanding Font Rules in CSS
author: Jason Gaylord
cloudscribe_id: "4fcd6bec-525a-4e1b-956c-0dd8f4353d71"
cloudscribe_path: "/blog/understanding-font-rules-in-css"
msmvps_path: "https://blogs.msmvps.com/jgaylord/2013/12/24/understanding-font-rules-in-css/"
permalink: /blog/understanding-font-rules-in-css
date: 2013-12-24
categories: [archive]
tags:  [archive,css,web]
bitly: https://jasong.us/2XLpipw
---

Quite often, developers or designers include a list of fonts within their CSS. As an example, one might define a CSS rule such as:

```css
font-family: 'Segoe UI', Arial, Tahoma, Helvetica;
```

However, what some developers or designers may not realize is that the font, Tahoma, will never be reached. The reason for this is that Arial is much more prevalent than Tahoma. In fact, most Mac users would not see the site render using the Helvetica font as one may expect. This is because the Arial font has been included with Macs since OS X.

If your application targets the Windows platform primarily, you should be aware of [when fonts have been introduced](http://jasong.us/1cvGp2Z). For example, unless the client machine is Windows 8 or later, the 'Segoe UI' font will not be used. Rather, the 'Arial' font in our case would be used. In addition, Apple has started to introduce and license the more common Windows fonts in their operating systems. As an example, [since OS X 10.4](http://jasong.us/1cvGsfk), Verdana has been included on Macs. It's also included on iPads and in many Linux installations. Knowing this can help developers and designers include the right fonts for their situation.

Knowing this, we should probably define our rule, if this meets the styles we expect, such as:

```css
font-family: 'Segoe UI', Helvetica, Tahoma, Arial;
```

In this case, the 'Segoe UI' font will be used on modern Windows machines, Helvetica will be used on any Macs, Tahoma will be used on most other machines, and Arial will fill in the gaps. The minute remainder of activity that doesn't have one of these fonts will default to that machine's default system font. In most of those cases, you are most likely not targeting those users for browsing activity.

If you'd like to ensure that everyone is receiving the same typeface experience, you may also want to consider using Web Fonts. Web fonts allow font files to be hosted external from your site. There are [many resources](http://jasong.us/1cvGpQF) for [web fonts](http://jasong.us/1cvGtjq) available across the web. To use the @font-face rule, be sure that the [browser you are targeting support it](http://jasong.us/1cvGu6S). Most modern browsers do support this rule.