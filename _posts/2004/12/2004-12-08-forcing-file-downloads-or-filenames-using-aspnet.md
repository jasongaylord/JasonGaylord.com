---
title: Forcing File Downloads or File Names using ASP.NET
author: Jason Gaylord
date: 2004-12-08 10:06:00
aspnet-weblog-link: http://weblogs.asp.net/jgaylord/archive/2004/12/08/278309.aspx
categories: [aspnet-weblog]
tags:  [archive]
bitly: https://jasong.us/3cyH3i7
---

To force a file to download using ASP.NET (or classic ASP for that matter), you must add a header to the page. The header should look similar to:

```vb
Response.AddHeader("content-disposition", "attachment; filename=File.doc")
```

However, in some instances you may use an HTTP Module or HTTP Handler to handle downloading of files. These are used quite often if you store files in SQL server.When using a module or handler, you'll most likely take the "cheap" way out and reference your files by an ID number. The problem with this is that if your user doesn't support a particular type of file in-browser, they will by downloading the file with a filename of download3.aspx and not File.doc. So, you should always add the filename with the type associated even if you are not forcing a download. To do this, use the following:

```vb
Response.AddHeader("content-disposition", "inline; filename=File.doc")
```

This header appends the filename to the document.