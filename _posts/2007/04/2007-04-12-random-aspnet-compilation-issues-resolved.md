---
title: "FIX: Random ASP.NET Compilation Issues Resolved"
author: Jason Gaylord
date: 2007-04-12 09:38:00
aspnet-weblog-link: http://weblogs.asp.net/jgaylord/archive/2007/04/12/fix-random-asp-net-compilation-issues-resolved.aspx
categories: [aspnet-weblog]
tags: [archive]
bitly: https://jasong.us/2LGA3E2
---

Scott Guthrie posted a fix on his blog yesterday regarding random ASP.NET compilation issues. I've received these issues before when working on projects especially the following type of issue:

```
Could not load file or assembly 'App\_Web\_e9dbmaj, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null' or one of its dependencies. The system cannot find the file specified.
```

or

```
Compiler Error Message: CS0006: Metadata file 'C:\\WINDOWS\\Microsoft.NET\\Framework\\v2.0.50727\\Temporary ASP.NET Files\\cms.web\\44e73607\\b028acb3\\App\_global.asax.fakktchx.dll' could not be found
```

To get around this issue, I would touch my web.config, or a code file, save it, and then rebuild it. Sometimes that would work and other times it wouldn't. So, from time to time I'd have to close out of VS.NET and go back in to get it to rebuild. Well, Scott has posted a work around and a hotfix at [http://weblogs.asp.net/scottgu/archive/2007/04/11/public-hotfix-patch-available-for-asp-net-compilation-issues.aspx](http://weblogs.asp.net/scottgu/archive/2007/04/11/public-hotfix-patch-available-for-asp-net-compilation-issues.aspx).

Now, if only the VS/Crystal Reports team can figure out how to resolve a similar issue that occurs from time to time when using a Crystal Report and embedding it into a win project, we'd be set. :-)