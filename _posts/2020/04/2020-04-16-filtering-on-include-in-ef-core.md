---
title: Filtering on Include in EF Core
author: Jason Gaylord
cloudscribe_id: "dd4d0a8b-148b-43f1-95f0-a56b036a90b2"
cloudscribe_path: "/blog/filtering-on-include-in-ef-core"
permalink: /blog/filtering-on-include-in-ef-core
date: 2020-04-16
categories: [data,dev,dotnet]
tags:  [data,dev,dotnet]
bitly: https://jasong.us/2KcoUdu
---

For years ([quite literally 3 years](https://jasong.us/34I5FSg)) I've been waiting for filtering to be available on includes within Entity Framework, or more specifically, EF Core. Finally, the next preview should [have this included](https://jasong.us/34NUSWL). From the pull request, the additional operations to be specified inside Include/ThenInclude are:

- `Where`
- `OrderBy(Descending)/ThenBy(Descending)`
- `Skip`
- `Take`

The [original request](https://jasong.us/3euxIJh) has been updated to show a few of the supported examples and restrictions. From the original request, note that only one filter allowed per navigation, so for cases where the same navigation needs to be included multiple times (e.g. multiple ThenInclude on the same navigation) apply the filter only once, or apply exactly the same filter for that navigation.

Example:

```csharp
customers 
    .Include(c => c.Orders.Where(o => o.Name != "Foo")).ThenInclude(o => o.OrderDetails) 
    .Include(c => c.Orders).ThenInclude(o => o.Customer)
```

or

```csharp
customers
    .Include(c => c.Orders.Where(o => o.Name != "Foo")).ThenInclude(o => o.OrderDetails)
    .Include(c => c.Orders.Where(o => o.Name != "Foo")).ThenInclude(o => o.Customer)
```

Special thanks to [Maurycy Markowski](https://jasong.us/2VhXFo9) for updating us all and [Gert Arnold](https://jasong.us/2yHwGtL) for updating my original Stack Overflow request.