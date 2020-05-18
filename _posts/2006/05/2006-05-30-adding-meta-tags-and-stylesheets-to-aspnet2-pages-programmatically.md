---
title: Adding Meta Tags and Stylesheets to ASP.NET 2.0 Pages Programmatically
author: Jason Gaylord
date: 2006-05-30 11:04:00
aspnet-weblog-link: http://weblogs.asp.net/jgaylord/archive/2006/05/30/Adding-Meta-Tags-and-Stylesheets-to-ASP.NET-2.0-Pages-Programatically.aspx
categories: [aspnet-weblog]
tags: [archive]
bitly: https://jasong.us/2X5aJNm
---

I came across a [blog entry by Rich Strahl](http://west-wind.com/weblog/posts/5706.aspx) about adding stylesheets to ASP.NET 2.0 web pages. The way Rick explained it is that he'd recommend a `contentplaceholder` in the header section of a `MasterPage` and to set the properties there. That's just fine and dandy if the content you'd like to set is in a `MasterPage` to Page setup. However, you can easily set the header information programmatically in 2.0 by accessing the new Header class. Here is an example of how to do this:  
  
```vb
Dim KeywordsHtmlMeta as new HtmlMeta  
  
KeywordsHtmlMeta.Name = "Keywords"  
KeywordsHtmlMeta.Content = "ASP.NET, Blog, Jason, Gaylord"  
Page.Header.Controls.Add(KeywordsHtmlMeta)  
  
Dim CSSHtmlLink as new HtmlLink  
  
CSSHtmlLink.href="~/style.css"  
CSSHtmlLink.Attributes.Add("rel", "Stylesheet")  
CSSHtmlLink.Attributes.Add("type", "text/css")  
CSSHtmlLink.Attributes.Add("media", "all")  
Page.Header.Controls.Add(CSSHtmlLink)
```