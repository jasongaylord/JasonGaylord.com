---
title: "VB vs C#: Case 1"
author: Jason Gaylord
date: 2003-09-03 08:05:00
aspnet-weblog-link: http://weblogs.asp.net/jgaylord/archive/2003/09/03/26192.aspx
categories: [aspnet-weblog]
tags:  [archive]
bitly: https://jasong.us/3bwoQQW
---

After creating a few controls in C#, I will admit that C# does come more fluent. However, I found something in C# that I completely despise. For VB programmers that didn't already know, C# likes everything in lowercase. There is no String, it is string. If you declare a variable as type String, you can get an error. But, there is one catch. The most used routine in all of web programming, `Page_Load`, is not spelled `page_load`. In fact, if you use `page_load`, the page loads, but without anything that was in your `page_load`. When creating a custom control then adding it to the page in code behind, it was very difficult to pick out what the issue was. I must have "combed" my code a thousand times making sure I added all child controls to the parent and then added the parent to the uc, etc. Finally it hit me. :-)