---
title: Generics Saved Me Time With RSSToolkit
author: Jason Gaylord
date: 2006-04-06 17:15:00
aspnet-weblog-link: http://weblogs.asp.net/jgaylord/archive/2006/04/06/442160.aspx
categories: [aspnet-weblog]
tags: [archive]
bitly: https://jasong.us/3cCPoRV
---

I needed a quick and easy way to consume RSS. Scott Guthrie let me know about a cool toolkit that Dmitry from his team setup. The toolkit can be downloaded from [Dmitry's blog](http://blogs.msdn.com/dmitryr/archive/2006/03/26/561200.aspx) or by visiting the [Sandbox site](http://www.asp.net/default.aspx?tabindex=7&tabid=60) on [ASP.NET](http://www.asp.net/ "ASP.NET"). I downloaded the toolkit and began using it. However, the RSS feed I was using was from a Linux installed forums application and although the posts placed the newest on top, the RSS feed did not. So, I needed to modify the code from Dmitry. With a few small modifications to allow an additional property in which I called ReverseItems, I was able to use the Reverse function of the generic type List to reverse the item collection in the control and return the items in reverse order. All I can say is good thing we have generics! :)