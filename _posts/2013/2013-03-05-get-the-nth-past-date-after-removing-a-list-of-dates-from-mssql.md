---
title: Get the Nth Past Date After Removing a List of Dates from MSSQL
author: Jason Gaylord
cloudscribe_id: "019977c5-4dee-4f12-b1a4-18ab15096679"
cloudscribe_path: "/blog/get-the-nth-past-date-after-removing-a-list-of-dates-from-mssql"
permalink: /blog/get-the-nth-past-date-after-removing-a-list-of-dates-from-mssql
date: 2013-03-05
categories: [archive]
tags:  [archive,data]
---

This stemmed from a strange request that came across my desk. I had the need to pull a date 7 business days ago by using T-SQL in Microsoft SQL Server. Sounds simple right? Here's the catch: the date had to be the 7th business day in the past after removing the days the individual was off.

As an example, let's assume that we're running this today, March 5th, 2013. The US representation for this is '3/5/2013'. Now, let's assume that the person we're pulling this for usually has weekends off. However, when he has to work weekends, he has the Wednesday before and after the weekend he's working off. So, going back a couple of weeks, this would mean that the following dates would be "off dates:" '2/20/2013', '2/27/2013', '3/2/2013', and '3/3/2013'. If you're looking at a calendar, you may have counted back to February 24th. However, let's see how we can do this in T-SQL.

First, before we begin, I'd recommend downloading the latest version of [LINQPad](http://jasong.us/YMpXib). LINQPad is a great tool that allows you to run various languages against various databases and test the results. Of course it's main purpose is to use it for LINQ to Entities. Here's what it looks like:

[![](https://cdn.jasongaylord.com/images/2013/03/05/linqpad.png)](https://cdn.jasongaylord.com/images/2013/03/05/linqpad.png)

There's several ways we can tackle this problem. The best way I could think of is to use a stored procedure (sproc) passing in the date from where we want to go back from (in my sample I'm just using `GetDate()`) and the number of days to go back (in my sample I have this hard coded to 7). Next, I'd check each date, one at a time, to see if they are in the table of values that store the days off (table variable defined as `@myDaysOff`, but would likely be an actual table in the database). 

Here's what I came up with:

{% gist [site.git.owner]/5096224 %}

You can view all of my Github Gists at [https://gist.github.com/jasongaylord](https://gist.github.com/jasongaylord)