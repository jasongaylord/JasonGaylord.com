---
title: Visual Studio 2008 Web Service Issue
author: Jason Gaylord
date: 2007-09-19 16:25:00
aspnet-weblog-link: http://weblogs.asp.net/jgaylord/archive/2007/09/19/visual-studio-2008-web-service-issue.aspx
msmvps_path: https://blogs.msmvps.com/jgaylord/2007/09/19/visual-studio-2008-web-service-issue/
categories: [aspnet-weblog]
tags: [archive]
bitly: https://jasong.us/337aHsD
---

I discovered an issue in VS 2008 Beta 2 that will most likely be an issue when the product goes to RTM. I notified Microsoft of the issue and they have pushed this back to VS 2008 SP1 because its so late in the development process. The issue is with adding a web service to a website. When adding a web service to a pre-existing website, a template for a web service is created. It will take VS 2008 to realize that the file has inline code. Then, when adding a snippet (right-click in the code window and choose Insert Snippet) that contains imports for a namespace, the namespaces are added at the top of the page like:

```csharp
<%@ import namespace="System.Data" %>
```

instead of

```csharp
using System.Data;
```

There is currently no resolution to this issue.