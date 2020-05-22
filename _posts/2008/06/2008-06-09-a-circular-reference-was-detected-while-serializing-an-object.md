---
title: "A circular reference was detected while serializing an object of type 'FOO'"
author: Jason Gaylord
date: 2008-06-09 16:43:00
aspnet-weblog-link: http://weblogs.asp.net/jgaylord/archive/2008/06/09/a-circular-reference-was-detected-while-serializing-an-object-of-type.aspx
categories: [aspnet-weblog]
tags: [archive]
bitly: https://bit.ly/36qIHjC
---

I ran into an issue earlier when trying to return an entity class through a web service for use in an AJAX page. After some quick research, I came across a post by [Darren Neimke](http://showusyourcode.spaces.live.com/Blog/cns!15630F96CB7D86C1!416.entry) that referenced Rick Strahl's post about [LINQ to SQL and Serialization](http://www.west-wind.com/WebLog/posts/147218.aspx). For me, performing the first work-around and setting the relationship to 'Friend' worked.

Thanks Rick and Darren!