---
title: "Performance Tip: Return Only Necessary Columns Using LINQ"
author: Jason Gaylord
date: 2008-06-10 22:30:00
aspnet-weblog-link: http://weblogs.asp.net/jgaylord/archive/2008/06/10/performance-tip-return-only-necessary-columns-using-linq.aspx
msmvps_path: https://blogs.msmvps.com/jgaylord/2008/06/10/performance-tip-return-only-necessary-columns-using-linq/
categories: [aspnet-weblog]
tags: [archive]
bitly: https://jasong.us/2BFrIPz
---

I was running into an issue where one of my webmethods was taking a large amount of time to return a small set (5-10 objects). I was using LINQ to SQL. I noticed that the LINQ to SQL query was returning all of the rows. After looking into the table a bit further, I noticed that the table included some columns with a larger type (old text column, image column, etc). So, I decided to modify my select to contain just the columns I needed. It improved my response time from roughly 8 seconds to 250 milliseconds. Here's a sample select statement:

```sql
From t In db.News \_
Where t.NewsID = NewsID \_
Select New With {.Title = t.Title, .Abstract = t.Abstract, .DatePublished = t.DatePublished)
```

Instead of enumerating these items as type `NewsPosting`, I had to build a list of type Object or create a new custom type. For my purpose, a `Generic.List(Of Object)` worked just fine.