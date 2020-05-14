---
title: Installing Different Versions of Visual Studio 2005 and Components
author: Jason Gaylord
date: 2005-03-02 11:33:00
aspnet-weblog-link: http://weblogs.asp.net/jgaylord/archive/2005/03/02/383623.aspx
categories: [aspnet-weblog]
tags:  [archive]
bitly: https://jasong.us/2T7EeNb
---

Make sure that before you install a later version of Visual Studio 2005 no matter the edition that you completely remove all previous version components first. I had two installations and I got caught. I forgot to remove SQL Express and when I tried to reinstall .NET to then remove it, I received an error stating that some pointers are no longer valid and that there is no memory available to remove it. So, I need to reformat my PC to fix this issue.