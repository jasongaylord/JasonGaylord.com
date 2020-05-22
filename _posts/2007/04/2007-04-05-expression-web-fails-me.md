---
title: Expression Web Fails Me
author: Jason Gaylord
date: 2007-04-05 16:40:00
aspnet-weblog-link: http://weblogs.asp.net/jgaylord/archive/2007/04/05/expression-web-fails-me.aspx
categories: [aspnet-weblog]
tags: [archive]
bitly: https://jasong.us/3cTmrBe
---

I was using Expression Web to setup a basic CSS layout for a demo I was doing. I had a header, menu, 2 column body, and a footer. The two column body was setup using 2 divs inside of a parent div. Each div used a float attribute which floated the element to the left or right. When viewing in Expression Web and IE, there were no issues. However when viewing in FireFox, the footer element creped up into the parent element. I struggled for hours looking over the styles and thinking maybe I missed a closing tag somewhere. Turns out, I was missing the clear attribute in the footer. Its nice that when I run the CSS reports in Expression Web, everything checked out fine.