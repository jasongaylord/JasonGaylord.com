---
title: "Lightbulb: How to add a Custom Class to ViewState"
author: Jason Gaylord
date: 2008-01-03 20:45:00
aspnet-weblog-link: http://weblogs.asp.net/jgaylord/archive/2008/01/03/lightbulb-how-to-add-a-custom-class-to-viewstate.aspx
msmvps_path: https://blogs.msmvps.com/jgaylord/2008/01/03/lightbulb-how-to-add-a-custom-class-to-viewstate/
categories: [aspnet-weblog]
tags: [archive]
bitly: https://jasong.us/3hOjIew
---

I was building a page today that allows an admin to do some configuration and doesn't save anything back to the server until the admin chooses. I could have used XML or a temporary SQL table, but I choose ViewState for now. I continually received the error: `Type 'MyNamespace.MyClass' in Assembly 'App_Code.gvg30s8w, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null'` is not marked as serializable. Of course the error spells out what's wrong. But, because I was still flustered with my earlier issue, I didn't read into it far enough. Again, a search online turns up almost nothing. Finally, the light came on. To get it to work you will need to add the `<Serializable>` (in VB) or `[serializable]` (in C# to the beginning of your class. Well, back to the grind.