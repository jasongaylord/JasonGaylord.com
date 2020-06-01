---
title: "CSS Tip: Use the Correct Viewport Size"
author: Jason Gaylord
cloudscribe_id: "d97fa4ef-b9fb-4336-b814-68369d65e9b3"
cloudscribe_path: "/blog/css-tip-use-the-correct-viewport-size"
permalink: /blog/css-tip-use-the-correct-viewport-size
date: 2020-05-05
categories: [development,style,tip,web]
tags:  [development,style,tip,web]
bitly: https://jasong.us/3foiczm
---

Last night, I ran into an issue with a container that was not expanding to full height. I could not understand why it wasn't expanding properly. After tearing it down and rebuilding it by ***copying*** the CSS rules from my original, I noticed the height property. I had set the value for height to 100vw. Sometimes, when looking at something so simple in DevTools, it's very easy to overlook typos. Be sure to double-check your values. In case you're not sure what 100vw equates to, this is 100% of the viewport width, not height. I corrected the value to 100vh and of course it is now working as expected.

![https://cdn.jasongaylord.com/images/2020/05/05/viewport-height.jpg](https://cdn.jasongaylord.com/images/2020/05/05/viewport-height.jpg)

Happy Cinco de Mayo everyone!