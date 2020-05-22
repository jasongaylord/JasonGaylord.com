---
title: The log file for database 'tempdb' is full...
author: Jason Gaylord
date: 2005-03-08 08:03:00
sqljunkies-link: http://sqljunkies.com/WebLog/j_gaylord/archive/2005/03/08/8680.aspx
categories: [sqljunkies-blog]
tags: [archive]
bitly: https://bit.ly/2LSIImY
---

Today I received an error message within one of our applications stating that `The log file for database 'tempdb' is full. Back up the transaction log for the database to free up some log space.` I posted to the ASPAdvice.com lists and received more information than I bargained for. Mike Campbell and Wally McClure provided some very valuable information regarding this issue. Here is Mike's post below:  
  
Jason,  
  
Let your log file grow a bit more in size and/or jump on query analyzer and run the following:  
  
```sql
BACKUP LOG <database\_name> WITH TRUNCATE\_ONLY  
GO
```
  
That will truncate your log (meaning recoverability won't allow point-in-time recovery... though I doubt you'll need it).  
  
1 MB may not sound like much, and really isn't the issue. The issue is that SQL Server will only allow a certain amount of space for logging transactions/activity. when that space is up it's game over (unless you allow the log file to grow -- and then if you allow it to grow, it can grow until there are only 5MB left on the disk, and when that fills up you'll get the same message). The best way to deal with this: make your log file 25% of the size of your .mdf and do nightly backups, which truncate the log after recording all of the changes to the backup. If you do LARGE transactional changes during the day you may run into this a bit.  
  
Here's a quick overview of some other info (but the sql statement above will get your app working again... then you'll just need to solve the problem, not just the incident). [http://blogs.sqladvice.com/aweiker/archive/2004/03/31/883.aspx](http://blogs.sqladvice.com/aweiker/archive/2004/03/31/883.aspx)  
  
Turns out that the issue wasn't necessarily with the transaction log. In fact, the C: drive on the server dipped below 500 MB of free space. Once temp files were cleared out and the free space hit 2 GB, the web app started working again. Go figure!