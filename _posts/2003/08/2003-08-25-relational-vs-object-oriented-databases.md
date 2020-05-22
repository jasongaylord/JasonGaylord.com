---
title: Relational vs Object-Oriented Databases
author: Jason Gaylord
date: 2003-08-25 08:26:00
sqljunkies-link: http://sqljunkies.com/WebLog/j_gaylord/archive/2003/08/25/193.aspx
categories: [sqljunkies-blog]
tags: [archive]
bitly: https://bit.ly/3edKATw
---

Awhile ago I was discussing with a few other peers on the ASP.NET forums regarding relational and object-oriented databases. In my opinion, it seems as though a .NET programmer would find an object-oriented database more useful than a relational database because you would then be allowed to pass entire objects to the application. However, the only object-oriented database that I'm aware of is called Caché by InterSystems ([www.InterSystems.com](http://www.intersystems.com/)). I have not had the opportunity to fully test their system. However, I do know some valuable information about the database and .NET development. OO databases allow for objects to be created and then passed between applications. .NET doesn't directly support the Caché database nor any other OO databases. To get the OO database to work with the current framework, you can either use it as a relational database or pass the objects to web services; none of which uses the speed of an OO database. So, it will be interesting to see what OO databases will do in the future. I'm wondering if a future version of MS SQL will contain OO technology. Hmmm...  :-)