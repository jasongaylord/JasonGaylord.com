---
title: Small Business Accounting 2006 on Windows Server 2003
author: Jason Gaylord
date: 2005-10-12 09:43:00
windowsadvice-link: http://windowsadvice.com/blogs/jason_n_gaylord/archive/2005/10/12/Small-Business-Accounting-2006-Tip-01.aspx
categories: [windowsadvice-blog]
tags: [archive]
bitly: https://bit.ly/3ggBk2L
---

If you plan on installing Small Business Accounting 2006 on Windows Server 2003, be aware that the multi-user setting menu will throw an error unless you enable Internet Connection Sharing (ICS). ICS can be found be right-clicking on the active network adapter and going into properties. You'll find the setting under the Advanced tab. Enable ICS and add a new service for TCP Port 56183. This will allow SBA 2006 to communicate and open itself up to external boxes.