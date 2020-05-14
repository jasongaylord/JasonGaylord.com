---
title: "ASP.NET 2.0: No Compile Pages"
author: Jason Gaylord
date: 2005-04-20 14:07:00
aspnet-weblog-link: http://weblogs.asp.net/jgaylord/archive/2005/04/20/403580.aspx
categories: [aspnet-weblog]
tags:  [archive]
bitly: https://jasong.us/35ZqARv
---

If you have a large ASP.NET website, you may want to turn off compilation of your non-code ASP.NET pages. You can do this by setting the `CompilationMode` property of the `Page` directive to `Never`. If you aren't in the mood to check all pages, let ASP.NET decide. In the web.config file, set the `CompilationMode` property in the `<pages />` section to `Auto`. This will allow ASP.NET to evaluate each page and decide whether or not it should be compiled.