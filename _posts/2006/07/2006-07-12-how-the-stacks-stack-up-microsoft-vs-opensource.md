---
title: "How the stacks stack up: Microsoft vs Open Source"
author: Jason Gaylord
date: 2006-07-12 11:34:00
aspnet-weblog-link: http://weblogs.asp.net/jgaylord/archive/2006/07/12/How-the-stacks-stack-up_3A00_-Microsoft-vs-Open-Source.aspx
categories: [aspnet-weblog]
tags: [archive]
bitly: https://jasong.us/368AGQ8
---

I was reading an [article earlier by Jim Rapoza of eWeek](http://www.eweek.com/article2/0,1895,1983364,00.asp). In the eWeek labs, eWeek setup "stack packs". Each pack had their own server OS, web server, database, scripting/development language, and test portal.  
  
The Windows JBoss had Server 2k3, Apache, MySQL, JSP, and JBoss Portal. The Windows Python had Server 2k3, Zope, ZODB, Python, and Plone. The WAMP had Server 2k3, Apache, MySQL, PHP, XOOPS. The Linux Python had SUSE Linux, Zope, ZODB, Python, and Plone. The LAMP had Linux, Apache, MySQL, PHP, and XOOPS. The Linux JBoss had CentOS, Apache, MySQL, JSP, JBoss Portal. The Linux J2EE had CentOS, Apache, Hypersonic SQL, JSP, and Liferay. The .NET solution had Server 2k3, IIS, Sql 2k5, ASP, and SharePoint 2003.  
  
According to their tests, the Windows JBoss, Python, and WAMP solutions all were between 14 and 18 transactions per second. The .NET solution was around 6 transactions per second. The rest were all below 3 transactions per second. However, The Linux J2EE solution averaged 240 hits per second with .NET behind around 165 hits per second. The others were all below 25. .NET also performed the best or near the top in the average throughput per second, average page download time, and average document download time. All stacks used Borland's SilkPerformer to gauge performance.  
  
The issue I have with these results is that I believe they are not accurate. Easily said without proving it, but if you are going to take the time to test these IT "stack packs", why wouldn't use use additional software for measuring purposes? Also, why wouldn't you include the specs of the hardware? Is the hardware the same throughout? What kind of application is being executed? Is it the portal? In my opinion, I think this article proved nothing. It was nice to see .NET at the top or near the top through all the tests, but the results mean very little without answering these questions.