---
title: Need To Set Bounds for onscroll to Work
author: Jason Gaylord
date: 2008-05-02 15:24:00
aspnet-weblog-link: http://weblogs.asp.net/jgaylord/archive/2008/05/02/need-to-set-bounds-for-onscroll-to-work.aspx
msmvps_path: https://blogs.msmvps.com/jgaylord/2008/05/02/need-to-set-bounds-for-onscroll-to-work/
categories: [aspnet-weblog]
tags: [archive]
bitly: https://bit.ly/3d3y8FL
---

Sonu Kapoor over at DotNetSlackers.com has, not only a great site, but also some great AJAX controls. He's always looking to improve his controls and today he stumbled across something. He was working on a prototype where he had a div nested inside of an AJAX `tabControl`. The div had the property `onscroll` set. When the div was inside the tabControl, the `onscroll` function didn't work. However, outside of the `tabControl`, it did. Turns out he missed adding the CssStyle to set the proper height/width of the div for the overflow css property and `onscroll` javascript function to work properly. It's a really simple thing to overlook.