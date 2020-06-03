---
title: Using \"Like\" in LINQ to SQL
author: Jason Gaylord
date: 2008-05-21 11:37:00
aspnet-weblog-link: http://weblogs.asp.net/jgaylord/archive/2008/05/21/using-quot-like-quot-in-linq-to-sql.aspx
msmvps_path: https://blogs.msmvps.com/jgaylord/2008/05/21/using-quot-like-quot-in-linq-to-sql/
categories: [aspnet-weblog]
tags: [archive]
bitly: https://bit.ly/2ZqY3D8
---

I've recently discovered that LINQ and VB can be confusing. I was attempting to pull the top 10 rows of a table where the column started with 'W'. You'd think after I typed that, I'd figure out the solution. That's not the case. Instead, I struggled. Here's what I originally came up with:

```vb
Dim q = From t In db.Employees Where t.LastName Like prefixText & "%" Select t.LastName Take count
```

Little did I realize that the Like operator in my query was the VB Like operator. So, I had to modify my lambda expression to this:

```vb
Dim q = From t In db.Employees Where t.LastName.StartsWith(prefixText) Select t.LastName Take count
```

You'll notice that StartsWith makes more sense. `<sigh>` If only VB were...