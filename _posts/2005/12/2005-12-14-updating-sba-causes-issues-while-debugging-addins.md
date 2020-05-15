---
title: Updating SBA causes issues while debugging Add-Ins
author: Jason Gaylord
date: 2005-12-14 09:04:00
aspnet-weblog-link: http://weblogs.asp.net/jgaylord/archive/2005/12/14/433115.aspx
categories: [aspnet-weblog]
tags: [archive]
bitly: https://jasong.us/2Zab2ZI
---

It's been a little while since I've posted. Reason being, I've been hard at work building a few add-in modules for [Microsoft](http://www.microsoft.com/ "Microsoft") Small Business Accounting 2006. Yesterday, I needed to install SBA and BCM SP1 on the server and client machines. Little did I realize that because I was debugging my add-ins using SBA.exe, my debugging database and resource files had the old `sbaiapi.dll` and `sbaapi.dll`. It appeared that when I ran my add-in in debug mode, VS.NET would replace the SP1 exe and dlls with the old ones. If I closed out of VS.NET and attempted to run SBA, it still wouldn't work. I had to repair SBA. After I deleted the debugging files, temp files (including temporary resource files), and old compiled copies of the .dll, it worked with no issues.