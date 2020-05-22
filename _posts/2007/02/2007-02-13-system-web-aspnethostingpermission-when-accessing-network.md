---
title: System.Web.AspNetHostingPermission when Accessing Network or Intranet Projects using Visual Studio 2005
author: Jason Gaylord
date: 2007-02-13 16:39:00
aspnet-weblog-link: http://weblogs.asp.net/jgaylord/archive/2007/02/13/system-web-aspnethostingpermission-when-accessing-network-or-intranet-projects-using-visual-studio-2005.aspx
categories: [aspnet-weblog]
tags: [archive]
bitly: https://jasong.us/2ADXMlR
---

I rebuilt one of my development machines recently and attempted to access a project that I had out on a network share. I continually received project messages about the project not being trusted. I remembered that I had to change something but couldn't remember what it was until I found an old note I left in Outlook. The message I would receive in Visual Studio 2005 was: ASP.NET runtime error: Request for the permission of type `'System.Web.AspNetHostingPermission, System, Version=2.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089'` failed.

To resolve this issue, you must change your development machine .net security configuration since you are accessing items across the network. In the event that you need this ability at runtime, you must change the trust level in your config file to full. However, since this is only in development, I can change my local PC's security by going to Start > Control Panel > Administrative Tools > Microsoft .NET Framework 2.0 Configuration. After it fully loads (sometimes takes a bit), fully expand My Computer in the navigation tree and click Runtime Security Policy. In the right hand pane, choose Adjust Zone Security. Leave the default option (Make changes to this computer) and hit next. Choose Local Intranet and change the trust level to Full Trust. Then choose next and then finish. Restart Visual Studio 2005 and you should be all set.