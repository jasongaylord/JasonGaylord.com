---
title: Missing or out-of-date export DLL for Crystal Reports
author: Jason Gaylord
date: 2006-07-24 11:39:00
windowsadvice-link: http://windowsadvice.com/blogs/jason_n_gaylord/archive/2006/07/24/Missing-or-out-of-date-export-DLL-in-Crystal-Reports.aspx
categories: [windowsadvice-blog]
tags: [archive]
bitly: https://bit.ly/3eaDMWr
---

I received a message earlier today while attempting to run a compiled Crystal Report from version 8.5. If you attempt to run any compiled Crystal Report, this may solve your issue. Find the machine where it's running just fine. Copy all of the DLLs from C:\Windows\Crystal (or C:\WINNT\Crystal) to the same folder on the destination PC. DO NOT REPLACE any DLLs in that folder. No DLL registration is necessary. The report should then work fine.