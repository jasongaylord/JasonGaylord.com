---
title: "SQL Server 2005: Oops, Application Broken!"
author: Jason Gaylord
date: 2005-07-15 09:55:00
sqljunkies-link: http://sqljunkies.com/WebLog/j_gaylord/archive/2005/05/24/15294.aspx
categories: [sqljunkies-blog]
tags: [archive]
bitly: https://bit.ly/2XpLW6A
---

I came in this morning and to my surprise, my one app kept failing. It was a win app that used a SQL Server 2005 backend. I checked the error logs that it generates to find that the error stated that the password expired for the 'testuser' account. Luckily, this was a test application that didn't need to be back online immediately. The 'testuser' account is both an NT account that I use impersonation with the app and also a SQL 2005 account. It took me about 15 minutes until it dawned on me that maybe I didn't un-check the expire password option on the SQL account. Wow, don't make that mistake in an enterprise environment unless you plan on changing those passwords and staying on top of it! I guess by un-checking it I just threw out a *best practice.*