---
title: Debugging ASP.NET MVC Routing
author: Jason Gaylord
date: 2008-10-03 16:57:00
aspnet-weblog-link: http://weblogs.asp.net/jgaylord/archive/2008/10/03/debugging-asp-net-mvc-routing.aspx
categories: [aspnet-weblog]
tags: [archive]
bitly: https://bit.ly/2zkdrGD
---

One of the most critical pieces to MVC is routing users to the proper controller. During the development process, you must keep in mind that routes will take users to the first pattern that matches. It’s not that difficult to create patterns that are too similar that users are routed to the incorrect place. Phil Haack, from the ASP.NET team, has created a cool library to help routes. You can download his library at [http://haacked.com/archive/2008/03/13/url-routing-debugger.aspx](http://haacked.com/archive/2008/03/13/url-routing-debugger.aspx "http://haacked.com/archive/2008/03/13/url-routing-debugger.aspx"). When you download the library, be sure to place it in your bin directory and add a reference to it within your project. He’s updated it for MVC Preview 5.