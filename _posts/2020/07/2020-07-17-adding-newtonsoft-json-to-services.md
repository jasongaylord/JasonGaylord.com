---
title: Adding Newtonsoft JSON back to .NET Core 3.1 and Later
author: Jason Gaylord
date: 2020-07-17
categories: [dev,dotnet,microsoft]
tags:  [dev,dotnet,microsoft]
post-number: 975
image: https://cdn.jasongaylord.com/images/2020/07/17/update-configure-services-add-newtonsoft-json.jpg
bitly: https://jasong.us/2ZBGyiY
---

When developing .NET Core 3.1 applications or later, you may notice that Microsoft has changed to use the default dependency to `System.Text.Json`. The new serializer is very lightweight, but is still maturing. So, you may find that you need to add Newtonsoft JSON back in. To do this, we'll first need to add a reference to the package by either running:

```shell
Install-Package Microsoft.AspNetCore.Mvc.NewtonsoftJson
```

or

```shell
dotnet add package Microsoft.AspNetCore.Mvc.NewtonsoftJson
```

Then, update the `ConfigureServices` method by adding `AddNewtonsoftJson()` to `AddControllers()` like so:

{% include open-thumbnail.html path="2020/07/17/update-configure-services-add-newtonsoft-json.jpg" alt="AddNewtonsoftJson to AddControllers" %}
