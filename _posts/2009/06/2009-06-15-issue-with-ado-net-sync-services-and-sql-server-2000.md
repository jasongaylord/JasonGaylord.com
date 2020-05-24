---
title: Issue with ADO.NET Sync Services and SQL Server 2000
author: Jason Gaylord
date: 2009-06-15 09:58:00
aspnet-weblog-link: http://weblogs.asp.net/jgaylord/archive/2009/06/15/issue-with-ado-net-sync-services-and-sql-server-2000.aspx
categories: [aspnet-weblog]
tags: [archive]
bitly: https://bit.ly/3bSlUyg
---

Last Friday I had a battle and won. I was working in VS 2010 on an internal project that was being targeted for .NET 3.5. Everything was going good until I decided to be fancy. The application pulled down several tables that contain mostly static stuff such as states, counties, municipalities, old orders, products, etc. In total, it's around 1GB of data. I decided to modify the datasets to support offline access. I thought that would improve performance as the data would be available locally and not on the SQL server. Little did I realize, the application that accessed the data was setup to read the column definitions from the database to display in the application and omitted columns on the client side.

So, after [ADO.NET Sync services](http://www.microsoft.com/downloads/details.aspx?FamilyID=02989F70-49AA-43D7-81B8-A651120F8D65&displaylang=en) was enabled on those 6 tables, the application displayed the _LastEditDate_ and _EditDate_. This was obviously causing confusion and a few errors within the application. I determined that it had to be removed. However, since Visual Studio 2010 connected to it remotely to make the changes, there was nothing installed on the database server. Besides adding the two columns above to the database, each table had a phantom table added that looked like _tablename\_Tombstone_. Having never setup the Sync services before, I started by removing the 2 columns from each of the 6 tables and the Tombstone tables from the database. However, errors were occurring even more often now. Totally confused, I installed [Red Gate's SQL Compare](http://www.red-gate.com/products/SQL_Compare/index.htm) (Great product!!!). I ran a comparison between the database and one of the database backups. Bing!

[![triggersforsyncservices](http://weblogs.asp.net/blogs/jgaylord/WindowsLiveWriter/Issuewit.NETSyncServicesandSQLServer2000_8C53/triggersforsyncservices_thumb.jpg "triggersforsyncservices")](http://weblogs.asp.net/blogs/jgaylord/WindowsLiveWriter/Issuewit.NETSyncServicesandSQLServer2000_8C53/triggersforsyncservices_2.jpg)

The issue was that Sync Services creates triggers on each table to look at the inserts, updates, and deletes for each table and modifies the Tombstone table as needed. I then had to open up SQL Server 2000 Enterprise Manager (can't believe that console is still legal) to find the triggers. Of course I had to Google, err I mean Bing it to find out how to manage triggers in [SQL Server Enterprise Manager 2000](http://msdn.microsoft.com/en-us/library/aa176799(SQL.80).aspx). Everything is finally back to order again. Phew!