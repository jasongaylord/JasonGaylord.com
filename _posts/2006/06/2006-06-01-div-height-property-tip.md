---
title: "Div \"Height\" Property Tip"
author: Jason Gaylord
date: 2006-06-01 16:12:00
aspnet-weblog-link: http://weblogs.asp.net/jgaylord/archive/2006/06/01/Div-_2200_Height_2200_-Property-Tip.aspx
categories: [aspnet-weblog]
tags: [archive]
bitly: https://jasong.us/2ZgxErI
---

Sometimes on a web page you have a div container with 2 or more `div`s within. In many cases, you'll want the background from one of the `div`s to fill the container div. Unfortunately, the div style property height does not support a percentage value as of XHTML 1.1. Instead, you can "fool" the `div` by repeating the background on the container control like this:  
  
```html
<div id="container" style="background-image: url('containerbkg.gif'); background-repeat: repeat-y;">  
    <div id="menu" style="float: left; width: 100px;">  
        Item 1<br/>  
        Item 2  
    </div>  
    <div id="body" style="margin-left: 100px; width: 300pt;">  
        Body goes here<br/><br/>  
        Body continues here<br/><br/>  
        Body ends here.  
    </div>  
</div>
```