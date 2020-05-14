---
title: Computer Inventory Cleanup
author: Jason Gaylord
date: 2003-06-26 10:07:00
aspnet-weblog-link: http://weblogs.asp.net/jgaylord/posts/9319.aspx
categories: [aspnet-weblog]
tags:  [archive]
bitly: https://jasong.us/2T0wxZ4
---

The firm that I work at inventories all of the computers that come in. However, the inventory becomes outdated at times. So, I built in a small component into the inventory system that uses the NT "ping" command to find out if the machine is online, offline, or still exists. This is fairly inefficient as for speed, but we needed a tool to be setup rather quickly to find machines. So, I modified my [MAC address web service](http://www.aspalliance.com/jgaylord/services/) to use "ping". Then using the varied responses from the different operating systems, I was able to determine the status. If anyone is interested in the code, let me know and I'll post what I used.