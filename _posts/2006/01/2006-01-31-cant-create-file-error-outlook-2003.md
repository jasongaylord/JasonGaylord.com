---
title: "\"Can't create file: FILE NAME.pdf. Right-click...\" Error in Outlook 2003"
author: Jason Gaylord
date: 2006-01-31 12:07:00
windowsadvice-link: http://windowsadvice.com/blogs/jason_n_gaylord/archive/2006/01/31/Outlook-2003-Cant-Create-File.aspx
categories: [windowsadvice-blog]
tags: [archive]
bitly: https://bit.ly/3cQZA9r
---

Ever receive an error message similar to: "Can't create file: FILE NAME.pdf. Right-click the folder you want to create the file in, and then click Properties on the shortcut menu to check your permissions for the folder."? Well, I have the solution. It appears that when you install any Microsoft Small Business products (including Small Business Accounting 2006 and Business Contact Manager), the OutlookSecureTempFolder key in the registry is changed from `..\\Temp\\...` to `...\\Temporary Internet Files\\...`.

So, go into the registry and change the `HKEY\_CURRENT\_USER\\Software\\Microsoft\\Office\\11.0\\Outlook\\Security registry key OutlookSecureTempFolder` value from `...\\Temporary Internet Files\\...` to `...\\Temp\\...`.