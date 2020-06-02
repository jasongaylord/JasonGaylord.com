---
title: Dropping MS SQL Tables that have a Prefix using T-SQL
author: Jason Gaylord
cloudscribe_id: "2d244b1e-dc2a-4e4c-83ef-98b5351466df"
cloudscribe_path: "/blog/dropping-ms-sql-tables-that-have-a-prefix-using-t-sql"
msmvps_path: "https://blogs.msmvps.com/jgaylord/2012/11/16/dropping-ms-sql-tables-that-have-a-prefix-using-t-sql/"
permalink: /blog/dropping-ms-sql-tables-that-have-a-prefix-using-t-sql
date: 2012-11-16
categories: [archive]
tags:  [archive,data]
bitly: https://jasong.us/2TWcXgX
---

How many times have you wanted to drop a selection of Microsoft SQL Server tables that have begin with some common characters? I have many times especially when I'm testing certain web applications, such as Orchard CMS, and using different database prefix values to switch between instances. Thanks to [Curt Hagenlocher](http://jasong.us/UJWppw) over at a [StackOverflow post](http://jasong.us/UJWt8T), I now can.

This can easily be updated to include views, stored procedures, and functions.