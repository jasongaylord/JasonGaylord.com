---
title: "Using the LINQ Keyword \"First\""
author: Jason Gaylord
date: 2008-07-08 14:42:00
aspnet-weblog-link: http://weblogs.asp.net/jgaylord/archive/2008/07/08/using-the-linq-keyword-quot-first-quot.aspx
msmvps_path: https://blogs.msmvps.com/jgaylord/2008/07/08/using-the-linq-keyword-quot-first-quot/
categories: [aspnet-weblog]
tags: [archive]
bitly: https://jasong.us/2X9RDpU
---

All day I was stumped on why there wasn't a simple way to grab the first object in a sequence other than using:

```vb
.Take(1).Single
```

Then I discovered the keyword First. I'm still a little puzzled as to why .Single would throw an exception if more than a single element would be returned. I can't really see a practical use for it unless you wanted to force only 1 object being returned.