---
title: IIS7 Integrated Mode and Global.asax
author: Jason Gaylord
date: 2008-09-04 23:20:00
aspnet-weblog-link: http://weblogs.asp.net/jgaylord/archive/2008/09/04/iis7-integrated-mode-and-global-asax.aspx
msmvps_path: https://blogs.msmvps.com/jgaylord/2008/09/04/iis7-integrated-mode-and-global-asax/
categories: [aspnet-weblog]
tags: [archive]
bitly: https://jasong.us/307rni2
---

In IIS7, there are two modes for ASP.NET application pools: classic mode (only mode available for IIS6) and integrated mode. Integrated Mode offers quite a bit with IIS7 and is the recommended mode for application pools (more details at [http://learn.iis.net/page.aspx/244/how-to-take-advantage-of-the-iis7-integrated-pipeline/](http://learn.iis.net/page.aspx/244/how-to-take-advantage-of-the-iis7-integrated-pipeline/ "http://learn.iis.net/page.aspx/244/how-to-take-advantage-of-the-iis7-integrated-pipeline/")). One of the changes is that the Integrated mode does not have access to the HttpContext during the `Application\_Start` method in the global.asax. It also has an affect on HttpModules and HttpHandlers that reference the HttpContext as well. You'll want to keep this in mind when building your application structure.