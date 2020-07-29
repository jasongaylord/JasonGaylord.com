---
title: Color Copiers and Permission Issue
author: Jason Gaylord
date: 2006-10-13 09:09:00
windowsadvice-link: http://windowsadvice.com/blogs/jason_n_gaylord/archive/2006/10/13/Color-Copiers-and-Permission-Issue.aspx
categories: [windowsadvice-blog]
tags: [archive]
bitly: https://jasong.us/2P46Zrw
---

Many new enterprise-level copiers are equipped with color printing, copying, and scanning capabilities. Recently, we've replaced one of ours with a new Canon ImageRunner. In our setup, only one or two departments are allowed to print or copy in color, but we want everyone to be able to scan in color. So, we have created departmental codes for "logging in" to the copier and created mailboxes for print capabilities. One of the issues we ran into is with one of our custom apps. The app is quite old and desperately needs updating. When the app prints, it publishes data from SQL to an Access database. From there, the Access database prints a Snapshot report to a PDF file using Adobe Acrobat. The default print setting for the Adobe PDF writer is Color. We had to switch it to Black and White so the users would not receive an error message stating that their copy amounts have been exceeded. Very interesting stuff.