---
title: Content on Non-Secured Site When Browsing Secured Web Application or Web Site
author: Jason Gaylord
date: 2009-06-15 15:07:00
aspnet-weblog-link: http://weblogs.asp.net/jgaylord/archive/2009/06/15/content-on-non-secured-site-when-browsing-secured-web-application-or-web-site.aspx
categories: [aspnet-weblog]
tags: [archive]
bitly: https://bit.ly/3bUhV4b
---

Nothing frustrates me more as when I try to login on a secured site and images, CSS, javascript files, and other content files are not secured. For instance, I went to retrieve/reset my password on last.fm and found this:

[![error](http://weblogs.asp.net/blogs/jgaylord/WindowsLiveWriter/ContentonNonSecuredSiteWhenBrowsingSecur_D4A6/error_thumb.jpg "error")](http://weblogs.asp.net/blogs/jgaylord/WindowsLiveWriter/ContentonNonSecuredSiteWhenBrowsingSecur_D4A6/error_2.jpg)

A general rule of thumb is that your content should be hosted on a self-hosted or third party content delivery network (CDN) on both HTTP and HTTPS protocols. Secured pages should only reference HTTPS linked files.