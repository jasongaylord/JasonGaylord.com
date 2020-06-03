---
title: "AJAX Tip: Don't forget about the Async Web Service Calls!"
author: Jason Gaylord
date: 2008-06-16 11:15:00
aspnet-weblog-link: http://weblogs.asp.net/jgaylord/archive/2008/06/16/ajax-tip-don-t-forget-about-the-async-web-service-calls.aspx
msmvps_path: https://blogs.msmvps.com/jgaylord/2008/06/16/ajax-tip-don-t-forget-about-the-async-web-service-calls/
categories: [aspnet-weblog]
tags: [archive]
bitly: https://bit.ly/3ggTrWn
---

FireFox. Internet Explorer 8. Both have great JavaScript debugging tools. Thanks to those tools, I only spent 5 minutes on an issue that could have taken hours to figure out. It was one of those moments when you know its something simple but you can't figure out what it is. I had a page that loaded web service data into an `AjaxDataControl Repeater`. After the web service call, I entered some JavaScript to grab a page parameter and choose the item on the page that was selected. When I ran the page, I received an error that the object was undefined. However, if I added an alert to check the parameter, the page loaded fine. After using one of the debug tools I saw that the data wasn't populated yet. That's because ASP.NET AJAX makes web service and WCF calls asynchronously. To resolve this issue, I moved the code from the page load method to the method assigned to the successful data binding.

Sometimes you need to take a step back, take a deep breathe and realize what you're working with. Other times you have to rely on the tools at hand. :)