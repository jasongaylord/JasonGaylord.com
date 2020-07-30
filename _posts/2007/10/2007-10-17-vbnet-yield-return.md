---
title: VB.NET's yield return
author: Jason Gaylord
date: 2007-10-17 11:12:00
aspnet-weblog-link: http://weblogs.asp.net/jgaylord/archive/2007/10/17/vb-net-s-quot-yield-return-quot.aspx
msmvps_path: https://blogs.msmvps.com/jgaylord/2007/10/17/vb-net-s-quot-yield-return-quot/
categories: [aspnet-weblog]
tags: [archive]
bitly: https://jasong.us/30Sgrny
---

I was struggling with an issue today when converting some C# to VB.NET. C# has a really cool `yield return` statement that is used in an iterator block to provide a value to the enumerator object. VB.NET does not have the `yield` keyword. So, there are a few solutions (none of which are really clean) to get around this. You could use a return statement to return the value if you are looping through and would like to break an enumerator and return a single value. However, if you'd like to return the entire enumeration, create a `List()` of the child type and return the list. Since you are usually using this with an `IEnumerable`, the `List()` will work nice.