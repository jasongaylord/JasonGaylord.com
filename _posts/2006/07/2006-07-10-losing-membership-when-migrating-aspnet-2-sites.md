---
title: 'Losing' Membership Data When Migrating ASP.NET 2.0 Websites
author: Jason Gaylord
date: 2006-07-10 11:23:00
aspnet-weblog-link: http://weblogs.asp.net/jgaylord/archive/2006/07/10/456122.aspx
categories: [aspnet-weblog]
tags: [archive]
bitly: https://jasong.us/3e1LLoD
---

On one of the email lists earlier in the week, someone struggled with moving the Membership portion of their website from a staging environment to production environment. I've seen this many times before and have a solution. Scott Guthrie has posted about this awhile ago. Many developers use the built-in providers without specifying the properties of each section. It is important that the applicationName be set in the web.config. If not, you'll run into the same struggles. Scott's post detailing what I'm talking about can be [found here](http://weblogs.asp.net/scottgu/archive/2006/04/22/443634.aspx).