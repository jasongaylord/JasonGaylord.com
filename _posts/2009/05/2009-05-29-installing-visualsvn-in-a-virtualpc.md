---
title: Installing VisualSVN in a Virtual PC
author: Jason Gaylord
date: 2009-05-29 15:26:00
aspnet-weblog-link: http://weblogs.asp.net/jgaylord/archive/2009/05/29/installing-visualsvn-in-a-virtual-pc.aspx
msmvps_path: https://blogs.msmvps.com/jgaylord/2009/05/29/installing-visualsvn-in-a-virtual-pc/
categories: [aspnet-weblog]
tags: [archive]
bitly: https://bit.ly/3gnV2cW
---

I'm moving all of my development environment over to a few different VPCs so that way it's easier to archive my environment when a new one is released. So, I setup a new VPC with Vista SP2 and installed Visual Studio 2008 (with SP1). I wanted to install a Subversion client, more specifically Visual SVN, which usually requires a base Subversion library. In my case, I needed to install Tortoise SVN. When I tried to install it, I received a dialog box in the [Microsoft](http://microsoft.com/) Installer that read:

> Please wait while the installer finishes determining your disk space requirements.

After poking around on the web, it seems like many have suggested uninstalling the Virtual Machine Additions. That didn't work for me, so I began to look into the switches I could use for msiexec. After fudging around a bit, I came up with some ideas, then validated those ideas when I found a post by [Hai Ning](http://www.hyperbina.com/tech/blog/?page_id=2). The final command was:

> msiexec.exe /package _MSIPackageName_.msi /qr

Both Tortoise and Visual SVN installed fine. The switch suppressed the dialogs on the main package.