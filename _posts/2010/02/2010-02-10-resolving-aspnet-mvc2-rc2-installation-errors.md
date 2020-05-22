---
title: Resolving ASP.NET MVC 2 RC 2 Installation Errors
author: Jason Gaylord
date: 2010-02-10 10:49:00
aspnet-weblog-link: http://weblogs.asp.net/jgaylord/archive/2010/02/10/resolving-asp-net-mvc-2-rc-2-installation-errors.aspx
categories: [aspnet-weblog]
tags: [archive]
bitly: https://bit.ly/3edDOx4
---

On a Virtual Machine, I had Visual Studio 2008 SP1 installed along with ASP.NET 3.5 SP1. I tried installing the newly released ASP.NET MVC 2 Release Candidate 2 on that machine and received the following:

> The project file '<project path and name>' cannot be opened.
> 
> The project type is not supported by this installation.

To resolve this, ensure that the VS 2008 tooling support for MVC 2 is installed in Add/Remove Programs. Regardless, uninstall all MVC 2 installations (should be 2 items in add/remove programs if the previous is the case). Then reboot your machine and reinstall. It should work now.

Hope that helps!