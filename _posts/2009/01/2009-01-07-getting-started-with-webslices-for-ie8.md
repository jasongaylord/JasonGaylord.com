---
title: Getting Started with Web Slices for Internet Explorer 8
author: Jason Gaylord
date: 2009-01-07 13:45:00
aspnet-weblog-link: http://weblogs.asp.net/jgaylord/archive/2009/01/07/getting-started-with-web-slices-for-internet-explorer-8.aspx
msmvps_path: https://blogs.msmvps.com/jgaylord/2009/01/07/getting-started-with-web-slices-for-internet-explorer-8/
categories: [aspnet-weblog]
tags: [archive]
bitly: https://jasong.us/3fba7wy
---

## What is a Web Slice?**
One of the most interesting features in [Internet Explorer 8](http://www.microsoft.com/windows/internet-explorer/) is the ability to subscribe to information you frequently check on a website. This is called a [web slice](http://www.microsoft.com/windows/internet-explorer/beta/features/web-slices.aspx) (![](http://i.msdn.microsoft.com/Cc895600.webslice_icon(en-us,VS.85).gif)). I find myself frequently checking sports scores and news on [ESPN](http://espn.go.com/), weather on the [Weather Channel](http://www.weather.com/), stocks at various online sites (and searches), and auctions at [eBay](http://www.ebay.com/). Now these sites could easily serve content without me having to visit the site. If you have Internet Explorer 8 installed, you can visit a website such as msn.com to see what a Web Slice looks like to the end user. I've attached two screenshots below to show how one would subscribe to a webslice:

- [![screen01](http://weblogs.asp.net/blogs/jgaylord/WindowsLiveWriter/GettingStartedwithWebSlicesforInternetEx_C187/screen01_thumb.jpg "screen01")](http://weblogs.asp.net/blogs/jgaylord/WindowsLiveWriter/GettingStartedwithWebSlicesforInternetEx_C187/screen01_2.jpg)
- 
- [![Screen02](http://weblogs.asp.net/blogs/jgaylord/WindowsLiveWriter/GettingStartedwithWebSlicesforInternetEx_C187/Screen02_thumb.jpg "Screen02")](http://weblogs.asp.net/blogs/jgaylord/WindowsLiveWriter/GettingStartedwithWebSlicesforInternetEx_C187/Screen02_2.jpg)

Notice in the top image, there's a green box around the center news item. This is web slice content that will be displayed. You can subscribe by clicking the green icon or by clicking the feed with the green icon under the Feeds menu item shown in the second image.

- [![screen03](http://weblogs.asp.net/blogs/jgaylord/WindowsLiveWriter/GettingStartedwithWebSlicesforInternetEx_C187/screen03_thumb.jpg "screen03")](http://weblogs.asp.net/blogs/jgaylord/WindowsLiveWriter/GettingStartedwithWebSlicesforInternetEx_C187/screen03_2.jpg)

After we subscribe, we can then see the content from any instance of Internet Explorer by clicking on the web slice:

## Building Our Own Web Slices
So, now that you understand what a web slice is, you're probably thinking it's really difficult to create one, right? Not exactly. In fact, web slices are quite easy to build and they are independent on the language you are using for your web site or web application.

I wanted to see how difficult it was for myself, so I created a basic HTML page with the two necessary attributes: a parent element with `hslice` specified as the value of the class attribute and a sub-element with `entry-title` specified as the value of the class attribute. I also added a third element and attribute to my source, which ended up like this:

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns\="http://www.w3.org/1999/xhtml" >
<head\>
    <title\>My First Web Slice</title\>
</head\>
<body\>
    <div class\="hslice" id\="firstSlice">
        <h3 class\="entry-title">My First Web Slice</h3\>
        <div class\="entry-content"- The content of my first Web Slice would go here. For now,
            because I'm boring, nothing will be placed here. Too bad.
        </div\>
    </div\>
</body\>
</html\>
```

In the browser, it looks like this:

- [![screen05](http://weblogs.asp.net/blogs/jgaylord/WindowsLiveWriter/GettingStartedwithWebSlicesforInternetEx_C187/screen05_thumb.jpg "screen05")](http://weblogs.asp.net/blogs/jgaylord/WindowsLiveWriter/GettingStartedwithWebSlicesforInternetEx_C187/screen05_2.jpg)

As a Web Slice, it looks like this:

- [![screen06](http://weblogs.asp.net/blogs/jgaylord/WindowsLiveWriter/GettingStartedwithWebSlicesforInternetEx_C187/screen06_thumb.jpg "screen06")](http://weblogs.asp.net/blogs/jgaylord/WindowsLiveWriter/GettingStartedwithWebSlicesforInternetEx_C187/screen06_2.jpg)

## That's It?
Of course not! There's tons of options when building Web Slices such as specifying alternative update sources, the ttl (time to live) value for the content, and more! For a more in depth look, be sure to check out the [Internet Explorer 8 Web Slice overview](http://msdn.microsoft.com/en-us/library/cc196992%28VS.85%29.aspx) and [tutorials](http://msdn.microsoft.com/en-us/library/cc956159(VS.85).aspx) found on the MSDN website.