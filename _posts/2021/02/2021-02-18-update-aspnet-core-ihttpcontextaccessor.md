---
title: Old ASP.NET Core Projects and IHttpContextAccessor
author: Jason Gaylord
date: 2021-02-18
categories: [dev,dotnet,tip]
tags:  [dev,dotnet,tip]
post-number: 1135
image: https://cdn.jasongaylord.com/images/2021/02/18/invalidoperationexception-ihttpcontextaccessor.jpg
bitly: https://jasong.us/3qmb4IN
---

Last week, I was updating an application from .NET Core 1.1.2 to .NET 5. One of the errors I noticed when building the application was: `InvalidOperationException: Unable to resolve service for type 'Microsoft.AspNetCore.Http.IHttpContextAccessor'`. 

{% include open-thumbnail.html path="2021/02/18/invalidoperationexception-ihttpcontextaccessor.jpg" alt="InvalidOperationException: Unable to resolve service for type 'Microsoft.AspNetCore.Http.IHttpContextAccessor'" %}

It took me a few minutes before I remembered that `IHttpContextAccessor` is not wired up by default. So, I added the following in my `services` by doing this:

```csharp
services.AddHttpContextAccessor();
```

which is the equivalent of doing this:

```csharp
services.TryAddSingleton<IHttpContextAccessor, HttpContextAccessor>();
```

I know that many of the .NET Core applications have been updated by now, but if you still have an old one lingering as I did, be sure to properly update.