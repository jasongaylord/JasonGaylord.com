---
title: Removing the Adobe Acrobat toolbar from MS Outlook
author: Jason Gaylord
date: 2006-09-18 16:16:00
windowsadvice-link: http://windowsadvice.com/blogs/jason_n_gaylord/archive/2006/09/18/Removing-the-Adobe-Acrobat-toolbar-from-MS-Outlook.aspx
categories: [windowsadvice-blog]
tags: [archive]
bitly: https://bit.ly/3giWmxM
---

Below is the full registry key for Outlook 2003's PDF add-in:

Windows Registry Editor Version 5.00

```
\[HKEY\_LOCAL\_MACHINE\\SOFTWARE\\Microsoft\\Office\\Outlook\\Addins\\PDFMOutlook.PDFMOutlook\]  
"Description"="PDFMOutlook"  
"FriendlyName"="PDFMOutlook"  
"CommandLineSafe"=dword:00000000  
"LoadBehavior"=dword:00000002
```

To remove the toolbar, you can change the LoadBehavior from a `2` to a `1`.