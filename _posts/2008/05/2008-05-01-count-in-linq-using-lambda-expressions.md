---
title: Count in LINQ using Lambda Expressions
author: Jason Gaylord
date: 2008-05-01 11:52:00
aspnet-weblog-link: http://weblogs.asp.net/jgaylord/archive/2008/05/01/count-in-linq-using-lambda-expressions.aspx
categories: [aspnet-weblog]
tags: [archive]
bitly: https://bit.ly/3cTWhhJ
---

I had a table that contained a couple of columns defined in SQL 2005 as `tinyint`. In SQL, I'd generally write something like:

```sql
SELECT COUNT(EmailOptIn)  
FROM Members  
WHERE EmailOptIn = 1
```

Of course using LINQ there are lots of different ways to option the count. The simplest way is to use a Lambda Expression. Here's what I came up with in VB.NET:

```csharp
db.Members.Count(Function(p) p.EmailOptIn)
```

Translated in C#, it would be this:

```csharp
db.Members.Count(p => p.EmailOptIn);
```

Hope that helps!