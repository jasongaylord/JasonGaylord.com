---
title: Issue Binding Custom IList to DataList
author: Jason Gaylord
date: 2005-05-11 14:40:00
aspnet-weblog-link: http://weblogs.asp.net/jgaylord/archive/2005/05/11/406508.aspx
categories: [aspnet-weblog]
tags:  [archive]
bitly: https://jasong.us/2zGLGrz
---

I had an issue this week binding a custom `IList` to a `DataList`. I struggled with this one because a was able to bind directly to a `DataGrid`. I knew that `DataGrid`s bind differently than `DataList`s, but forgot what the difference was. They both look for an `IEnumerable`, however, DataGrids are more particular. Ambrose Little pointed out in an email that the `DataGrid` builds its own enumerator of type `PagedDataSource.EnumeratorOnIList` whereas the `DataList` is relying on a custom `GetEnumerator` function. I sent [Teemu Keiski](http://blogs.aspadvice.com/joteke/archive/2005/05/11/3529.aspx) a copy of my code so he can act as a second pair of eyes (always a good thing). Luckily, he spotted that for some strange reason, I missed the `Return` keyword in my `GetEnumerator` function. I placed that in and everything works now. Thanks to everyone that helped me out. Hopefully if someone else runs into this foolish issue, this helps! ;)