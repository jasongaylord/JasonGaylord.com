---
title: Retrieving SQL Type Image Using LINQ
author: Jason Gaylord
date: 2008-05-27 23:23:00
aspnet-weblog-link: http://weblogs.asp.net/jgaylord/archive/2008/05/27/asp-net-mvc-preview-3-announced.aspx
categories: [aspnet-weblog]
tags: [archive]
bitly: https://bit.ly/3d3D2Tb
---

LINQ views the Image type in SQL Server as Binary. So, there are a few options that we have. We can either (a) modify our LINQ to SQL class and change the property to Byte() instead of Binary or we can (b) convert the `Binary` to an array. To do the latter, you can use a lambda expression to obtain the image you are looking for and grabbing just the image. Here's an example:

```vb
MySqlContext.Photos.Single(Function(p) p.PhotoID = PhotoID).OriginalBytes.ToArray
```

The above assumes that we have a table called Photos that contains a column called `PhotoID`. We'll filter the `PhotoID (p.PhotoID)` based on our variable `PhotoID`. Then, we'll return the `Byte Array` of the `OriginalBytes` column to display our image.