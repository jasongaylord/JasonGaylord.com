---
title: Error Using Templates
author: Jason Gaylord
date: 2003-09-01 15:39:00
aspnet-weblog-link: http://weblogs.asp.net/jgaylord/archive/2003/09/01/26047.aspx
categories: [aspnet-weblog]
tags:  [archive]
bitly: https://jasong.us/3cwOS7J
---

Today I was creating a custom template for a DataGrid (something I don't do too often). I created one template and it worked just fine. On my second template I received an error:

```
Key can not be null. Parameter name: key
```

So, I began investigating. Of course the error message doesn't mean much, so I started looking for things like primary keys in the data base and making sure the db and sproc returned results. Well, the error was actually caused by a misspelling of one of the variables (using C# - argh!). Turns out that was the problem. I'm not sure if anyone will ever run into that error, but if you do, hope this helps!