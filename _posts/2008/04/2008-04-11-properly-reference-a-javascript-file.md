---
title: "How To: Properly Reference A JavaScript File"
author: Jason Gaylord
date: 2008-04-11 09:30:00
aspnet-weblog-link: http://weblogs.asp.net/jgaylord/archive/2008/04/11/how-to-properly-reference-a-javascript-file.aspx
msmvps_path: https://blogs.msmvps.com/jgaylord/2008/04/11/how-to-properly-reference-a-javascript-file/
categories: [aspnet-weblog]
tags: [archive]
bitly: https://bit.ly/2LMd4r1
---

Wow. After 2 hours of pain and suffering, I ran into my own daily WTF. I had some script contained within a .js file in my web. Like many times before, I created a reference to the script in the header. However, the script would only work in the Internet Explorer family and not in Firefox. After some aggravation (and my Starbuck's Pike Place Roast kicking in) I realized that the MIME type was set to `text/jscript` instead of `text/javascript`. I wish we can modify IntelliSense locally to get items added/removed as needed.