---
title: "DYK: You can remove the ASP.NET MVC version from the Response Header"
author: Jason Gaylord
date: 2009-08-27 11:27:00
aspnet-weblog-link: http://weblogs.asp.net/jgaylord/archive/2009/08/27/dyk-you-can-remove-the-asp-net-mvc-version-from-the-response-header.aspx
msmvps_path: https://blogs.msmvps.com/jgaylord/2009/08/27/dyk-you-can-remove-the-asp-net-mvc-version-from-the-response-header/
categories: [aspnet-weblog]
tags: [archive]
bitly: https://jasong.us/3gfP3q0
---

Did you know that you can remove `X-AspNetMvc-Version` from the response header on your ASP.NET MVC web application?

It's actually quite simple to remove the MVC version from the response header within a web application. Open up the Global.asax file and add to the `Application\Start` method the following:

```csharp
MvcHandler.DisableMvcResponseHeader = true;
```

That's it. Hope that helps!