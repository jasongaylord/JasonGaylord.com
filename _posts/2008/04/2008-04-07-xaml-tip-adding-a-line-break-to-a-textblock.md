---
title: "XAML Tip: Adding a Line Break to a TextBlock"
author: Jason Gaylord
date: 2008-04-07 16:50:00
aspnet-weblog-link: http://weblogs.asp.net/jgaylord/archive/2008/04/07/xaml-tip-adding-a-line-break-to-a-textblock.aspx
msmvps_path: https://blogs.msmvps.com/jgaylord/2008/04/07/xaml-tip-adding-a-line-break-to-a-textblock/
categories: [aspnet-weblog]
tags: [archive]
bitly: https://bit.ly/2zRQ4Ep
---

I'm just starting to mess with XAML as I'm looking to see what I can do with it. As I come across some pretty basic tasks that I'm struggling with, I'll post about it in case any other newbies run into the same issue. One of my first tasks was to create some text on a canvas. However, I couldn't figure out how to do a line break. After searching Live and Google in an attempt to find something, I finally did (on page 3 of each engine). There is an object called `<LineBreak/>` that will perform a line break in your text. For example:
I'm just starting to mess with XAML as I'm looking to see what I can do with it. As I come across some pretty basic tasks that I'm struggling with, I'll post about it in case any other newbies run into the same issue. One of my first tasks was to create some text on a canvas. However, I couldn't figure out how to do a line break. After searching Live and Google in an attempt to find something, I finally did (on page 3 of each engine). There is an object called `<LineBreak/>` that will perform a line break in your text. For example:

```xml
<TextBlock Margin="5,5,5,5">This is line 1.<LineBreak/>This is line 2.</TextBlock>
```