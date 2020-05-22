---
title: "How To: Validate HTML Email Content For Outlook 2007"
author: Jason Gaylord
date: 2008-02-08 13:36:00
aspnet-weblog-link: http://weblogs.asp.net/jgaylord/archive/2008/02/08/how-to-validate-html-email-content-for-outlook-2007.aspx
categories: [aspnet-weblog]
tags: [archive]
bitly: https://bit.ly/3cRW2nl
---

Quite often, we send out automated emails from our .NET applications. Usually they are for our own internal users, but from time to time, they are for external users. Outlook 2007 and Word 2007 revamped the HTML Email rendering. They now use the Word 2007 Schema, a subset of the 4.01 Transitional Schema. Apparently, Word 2007 doesn't like certain CSS attributes especially if you use normal CSS to layout your email (fixed width divs, etc). More information about this topic can be found by visiting [http://msdn2.microsoft.com/en-us/library/aa338200.aspx](http://msdn2.microsoft.com/en-us/library/aa338200.aspx) and [http://msdn2.microsoft.com/en-us/library/aa338201.aspx](http://msdn2.microsoft.com/en-us/library/aa338201.aspx). Microsoft offers a few options to validate your HTML, CSS, XML, etc with the Word 2007 Schema. Using the two links above, you can find all of the aforementioned information.