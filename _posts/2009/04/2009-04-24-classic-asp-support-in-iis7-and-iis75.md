---
title: Classic ASP Support in IIS 7 and IIS 7.5
author: Jason Gaylord
date: 2009-04-24 09:48:00
aspnet-weblog-link: http://weblogs.asp.net/jgaylord/archive/2009/04/24/classic-asp-support-in-iis-7-and-iis-7-5.aspx
msmvps_path: https://blogs.msmvps.com/jgaylord/2009/04/24/classic-asp-support-in-iis-7-and-iis-7-5/
categories: [aspnet-weblog]
tags: [archive]
bitly: https://jasong.us/2Dip9Dg
---

I'm working on reverse engineering an application that was written about 8 years ago in Classic ASP. When I first hit the site, one of the things I noticed was that the traditional error messages weren't displayed. You can turn this on by double-clicking on the ASP icon under IIS, finding compilation, and expanding debugging properties. You'll see that one of the properties in IIS is called Send Errors To Browser. Set that property to true and you're all set!

One last thing, be sure that you have Classic ASP enabled in IIS. If not, go to add/remove programs to do so.