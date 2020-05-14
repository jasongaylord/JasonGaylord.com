---
title: Windows XP SP2 and Outlook
author: Jason Gaylord
date: 2004-10-13 11:52:00
aspnet-weblog-link: http://weblogs.asp.net/jgaylord/archive/2004/10/13/241777.aspx
categories: [aspnet-weblog]
tags:  [archive]
bitly: https://jasong.us/3cy3FiI
---

This week I had experienced an issue with Outlook. My Outlook is setup to talk with my Exchange server. However, when I setup a new PC with Windows XP SP2 and installed Office 2003, Outlook was slow to respond. It seemed as though there was a refresh issue. After reviewing all Outlook settings, I realized I should start looking within Windows XP. Luckily, I remembered that XP SP2 installs the Windows XP "Firewall". By turning it off, I resolved the issue.

The correct way to solve this issue is as follows:

- Leave the Windows XP Firewall on. But, choose to add a program to the list.
- Browse to your Program Files\Microsoft Office directory.
- Choose your MS Office applications directory (For Office 2003 it is Office11, Office XP is Office10, Office 2000 is Office9).
- Choose the OUTLOOK.exe file.
- Then, modify the scope to include your Exchange servers in the list.

I have not tried this out yet to check HTTP mail such as Hotmail, IMAP, or others.