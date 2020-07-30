---
title: "Lightbulb: How To Access the Item's Index in a DataList or Repeater"
author: Jason Gaylord
date: 2008-01-03 20:39:00
aspnet-weblog-link: http://weblogs.asp.net/jgaylord/archive/2008/01/03/lightbulb-how-to-access-the-item-s-index-in-a-datalist-or-repeater.aspx
msmvps_path: https://blogs.msmvps.com/jgaylord/2008/01/03/lightbulb-how-to-access-the-item-s-index-in-a-datalist-or-repeater/
categories: [aspnet-weblog]
tags: [archive]
bitly: https://jasong.us/2P269vE
---

Like every other day, I'm blowing through some really complex code trying to create hacks to get around difficult issues. Then, a road block. I have a mind freeze and oops, I forgot what the issue is. I had that earlier today when I forgot how to access the item index number in an `ItemTemplate` of a `DataList` or `Repeater`. I pinged the aspadvice.com lists and Ryan Trudelle-Schwarz responded (although he forgot the big Duh! on the top) to use the `Container.ItemIndex`. Low and behold, adding this: `<%# Container.ItemIndex %>` to your code does spit out the Item Index number. After a good hour or so of searching MSDN trying to find it, Ryan came to the rescue. Thanks again Ryan for kick starting my brain.