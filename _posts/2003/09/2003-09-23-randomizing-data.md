---
title: Randomizing Data
author: Jason Gaylord
date: 2003-09-23 08:38:00
sqljunkies-link: http://sqljunkies.com/WebLog/j_gaylord/archive/2003/09.aspx
categories: [sqljunkies-blog]
tags: [archive]
bitly: https://jasong.us/3g3QR5k
---

This past week, I had an issue where I needed to randomize the data coming from SQL to use in a SqlDataReader in an ASP.NET page. I posted [an issue](http://www.asp.net/Forums/ShowPost.aspx?tabindex=1&PostID=344835) on the ASP.NET forums and soon received help from Scott Mitchell. He pointed out that in the stored procedure I can use the code:

```sql
Select \*  
From MyDatabase.MyTable  
Order by NewID()
```

Of course, since Scott is the .NET Data Objects King, it worked like a charm. He received that information from [http://sqlteam.com/item.asp?ItemID=8747](http://sqlteam.com/item.asp?ItemID=8747). Thanks to Scott for the help.