---
title: Deploying SQL Express with ASP.NET 2.0 Providers
author: Jason Gaylord
date: 2005-04-29 08:06:00
sqljunkies-link: http://sqljunkies.com/WebLog/j_gaylord/archive/2005/04/29/13031.aspx
categories: [sqljunkies-blog]
tags: [archive]
bitly: https://jasong.us/2P5gFSQ
---

If you plan on keeping your SQL Express data when you deploy an ASP.NET 2.0 application that you add the applicationName attribute to each of your providers under each special ASP.NET configuration section (ie: Membership). If you do not, ASP.NET 2.0 will look to see if the app was run under a different application or not. If it was, it will create a new application entry in the database and none of your users and profiles will be associated.