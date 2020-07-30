---
title: SharePoint 2007 Beta 2 - Installation Snag 1
author: Jason Gaylord
date: 2006-06-20 15:07:00
windowsadvice-link: http://windowsadvice.com/blogs/jason_n_gaylord/archive/2006/06/19/Top-10-Flops-In-Bill-Gates-Career.aspx
categories: [windowsadvice-blog]
tags: [archive]
bitly: https://jasong.us/3gbX6En
---

Well, I tried installing the SharePoint 2007 beta 2 and my services won't start. The very first error I received was:

> The SQL Server collation on SQL Server instance 'DEV01\\OfficeServers' is not supported.  Windows SharePoint Services requires a Latin1 General dictionary order, case insensitive, accent sensitive, kana sensitive, and width sensitive collation (Latin1\_General\_CI\_AS\_KS\_WS).

Pretty interesting given that its a fresh install on a machine with the framework on it and thats it. ![Smile [:)]](http://windowsadvice.com/emoticons/emotion-1.gif)

The next error I see in the event viewer is:

> [http://dev01:32441/default.aspx](http://dev01:32441/default.aspx) - An unexpected error has been encountered in this Web Part.  Error: A Web Part or Web Form Control on this Page cannot be displayed or imported because it is not registered on this site as safe.

Again, interesting thing here is that this was a fresh install and I haven't been able to browse the site yet to attempt to add the web part.

I guess I'm going to search around the web to see if anyone has seen these first two issues.