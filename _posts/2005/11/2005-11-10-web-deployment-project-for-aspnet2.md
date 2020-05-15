---
title: Web Deployment Project for ASP.NET 2.0
author: Jason Gaylord
date: 2005-11-10 09:44:00
aspnet-weblog-link: http://weblogs.asp.net/jgaylord/archive/2005/11/10/430193.aspx
categories: [aspnet-weblog]
tags: [archive]
bitly: https://jasong.us/3bEKkuS
---

As Scott Guthrie already detailed in his [blog](http://weblogs.asp.net/scottgu/archive/2005/11/06.aspx), the [ASP.NET](http://www.asp.net/ "ASP.NET") team has released a new add-in for VS.NET to make deploying web apps much easier. One of the coolest features in my opinion is the fact that you can replace sections of the web.config from debugging to release. So, I can modify my debug build options to replace the ConnectionStrings section of the web.config. The release build options can replace the same section with a "release-version" of the section. This makes testing and deploying much easier as now you don't have to worry about forgetting if the web.config needs to be changed for testing, staging, or production. Great job guys!