---
title: T-SQL Count of Tables, Views, Stored Procedures and Functions
author: Jason Gaylord
cloudscribe_id: "317bb8c7-0cab-4830-b596-a3b3bec5513d"
cloudscribe_path: "/blog/tsql-count-tables-views-sprocs-functions"
permalink: /blog/tsql-count-tables-views-sprocs-functions
date: 2013-10-29
categories: [archive]
tags:  [archive,data]
---

Have you ever needed to obtain a list or count of all tables, views, stored procedures, and functions in a database? It's quite easy. Simply copy the T-SQL from below to a query window, set the desired database and execute.

```sql
SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_TYPE='BASE TABLE'
SELECT * FROM INFORMATION_SCHEMA.VIEWS
SELECT * FROM INFORMATION_SCHEMA.ROUTINES WHERE ROUTINE_TYPE = 'PROCEDURE'
SELECT * FROM INFORMATION_SCHEMA.ROUTINES WHERE ROUTINE_TYPE = 'FUNCTION'
```

This will produce four result sets that will list the tables, views, stored procedures and functions. You can simply update the select statements with the keyword count to grab the count of each object if that's all you are looking for.