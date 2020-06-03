---
title: JavaScript onClick Navigation Issues within Google Chrome are Solved
author: Jason Gaylord
cloudscribe_id: "493938d7-6de9-45e2-b1f0-aabcf693c0a8"
cloudscribe_path: "/blog/onclick-location-href-within-google-chrome"
msmvps_path: "https://blogs.msmvps.com/jgaylord/2012/03/08/javascript-onclick-navigation-issues-within-google-chrome-are-solved/"
permalink: /blog/onclick-location-href-within-google-chrome
date: 2012-03-08
categories: [archive]
tags: [archive,javascript]
bitly: https://jasong.us/2AwC577
---

For the longest time, If I needed to use an `onclick` event for navigation (`div` or some other page element), I'd use something similar to:

```html
<div onClick="location.href('/admin');"><!-- Something here --></div>
```

However, Google Chrome interprets the `href` property as a method or an object initializer. Instead, to get the `onclick` navigation to work properly in Chrome, set the property to a value using a typical setter such as:

```html
<div onClick="location.href='/admin';"><!-- Something here --></div>
```

This simple change will allow Google Chrome to properly navigate to the page.

Hope that helps!