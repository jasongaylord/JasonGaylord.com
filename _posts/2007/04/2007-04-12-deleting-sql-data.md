---
title: Daily WTF - Deleting SQL Data (or Properly Formatting SQL)
author: Jason Gaylord
date: 2007-04-12 10:54:00
aspnet-weblog-link: http://weblogs.asp.net/jgaylord/archive/2007/04/12/daily-wtf-deleting-sql-data-or-properly-formatting-sql.aspx
categories: [aspnet-weblog]
tags: [archive]
bitly: https://jasong.us/2zXsE0d
---

We've been having an issue with one of our database tables' mysteriously deleting data at random. We could have *swore* it was some sort of SQL intrusion or code bug. We leaned towards SQL intrusion because this database has been in use for quite some time. However, that was not the case. A new Stored Procedure that touched this table was added recently. In quick review, it didn't appear that anything was wrong. Here it is:

```sql
ALTER PROCEDURE \[dbo\].\[ProcedureName\]  
@EmailAddress varchar(256)  
AS  
IF EXISTS (SELECT TableID from The\_Table\_Name\_Was\_Pretty\_Long  
WHERE EmailAddress=@EmailAddress)  
BEGIN  
         DELETE The\_Table\_Name\_Was\_Pretty\_Long  
         WHERE @EmailAddress = @EmailAddress  
END
```

Lesson Learned. :-)

It's kind of embarrassing that I've reviewed this statement at least 2 dozen times in the past 3 days and couldn't figure out what the issue was.