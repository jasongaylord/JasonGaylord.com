---
title: Referencing Classes in ASP.NET 2.0
author: Jason Gaylord
date: 2006-07-06 14:32:00
aspnet-weblog-link: http://weblogs.asp.net/jgaylord/archive/2006/07/06/Referencing-Classes-in-ASP.NET-2.0.aspx
categories: [aspnet-weblog]
tags: [archive]
bitly: https://jasong.us/2LG5iiw
---

I was reading a list response by Joteke (Teemu Keiski) earlier about referencing a class in an ASP.NET 2.0 project. In ASP.NET 2.0, if your class is in a code file in the App_Code folder, you do not need to include the assembly in the page directive in the page code. Also, if you are referencing a class in the web.config, you no longer have to reference the "class library name, class name" if the class file is in the `App_Code` folder. All files in the `App_Code` folder will be pre-compiled and will use the same class library name as the IL pulled from the rest of the project uses.