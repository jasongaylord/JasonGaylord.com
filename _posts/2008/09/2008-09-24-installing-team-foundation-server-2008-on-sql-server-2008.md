---
title: Installing Team Foundation Server 2008 on SQL Server 2008
author: Jason Gaylord
date: 2008-09-24 15:11:00
aspnet-weblog-link: http://weblogs.asp.net/jgaylord/archive/2008/09/24/installing-team-foundation-server-2008-on-sql-server-2008.aspx
categories: [aspnet-weblog]
tags: [archive]
bitly: https://bit.ly/2TtG7UB
---

One of the prerequisites for TFS 2008 is that it must be installed to work with SQL Server 2005 SP2 or SQL Server 2008. However, TFS 2008, by itself, will not work with SQL Server 2008. You'll receive an error message that your SQL Server instance is not compatible as I've mentioned at [http://tinyurl.com/4shjod](http://tinyurl.com/4shjod "http://tinyurl.com/4shjod"). You'll receive other error messages such as Full Text not being installed. After struggling for a couple of days, I decided to ask one of my local TFS guru's, [Steve Andrews](http://platinumbay.com/). He pointed me to an article that led me to Abdelhamid's blog post at [http://blogs.msdn.com/aabdou/archive/2008/05/13/team-foundation-server-sp1-beta-now-available.aspx](http://blogs.msdn.com/aabdou/archive/2008/05/13/team-foundation-server-sp1-beta-now-available.aspx "http://blogs.msdn.com/aabdou/archive/2008/05/13/team-foundation-server-sp1-beta-now-available.aspx"). Following this, I was able to get it installed.