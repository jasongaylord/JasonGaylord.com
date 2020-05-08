---
title: "Dropping MS SQL Tables that have a Prefix using T-SQL"
author: Jason Gaylord
email: jason@jasongaylord.com
cloudscribe_id: "2d244b1e-dc2a-4e4c-83ef-98b5351466df"
cloudscribe_path: "/Blog/dropping-ms-sql-tables-that-have-a-prefix-using-t-sql"
permalink: /Blog/dropping-ms-sql-tables-that-have-a-prefix-using-t-sql
date: 2012-11-16
categories: [Archive]
tags:  [Archive]
---

How many times have you wanted to drop a selection of Microsoft SQL Server tables that have begin with some common characters? I have many times especially when I’m testing certain web applications, such as Orchard CMS, and using different database prefix values to switch between instances. Thanks to [](http://blogs.msdn.com/b/curth/)[Curt Hagenlocher](http://jasong.us/UJWppw) over at a [](http://stackoverflow.com/questions/4393/sql-server-drop-all-tables-whose-names-begin-with-a-certain-string)[StackOverflow post](http://jasong.us/UJWt8T), I now can.

This can easily be updated to include views, stored procedures, and functions.
