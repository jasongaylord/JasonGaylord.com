---
title: Saving Design Changes from Internet Explorer to Visual Studio 2013
author: Jason Gaylord
msmvps_path: "https://blogs.msmvps.com/jgaylord/2013/11/15/moving-on-to-guard-insurance-group/"
date: 2013-11-18
categories: [archive]
tags: [archive]
bitly: https://jasong.us/3dnKKYr
---

How many times as a web developer did you make a change to a web application in your browser and were disappointed when the changes didn't update back within Visual Studio? With the recent updates to [Mads Kristensen's](http://jasong.us/17iDyGQ)[](http://madskristensen.net/) [](http://vswebessentials.com/)[VS Web Essentials](http://jasong.us/17iDrv3), you can. The Web Essentials download is a VSIX package (Visual Studio Extension).

To use it, open an existing project or create a new one. For purposes of this blog post, I created a new ASP.NET Web Application and used the MVC project template. The default project template has a master layout file that contains an ActionLink Html Helper with the first value being set as "Application name."

```html
<body>
    <div class\="navbar navbar-inverse navbar-fixed-top"\>
        <div class\="container"\>
            <div class\="navbar-header"\>
                <button type\="button" class\="navbar-toggle" data-toggle\="collapse" data-target\=".navbar-collapse"\>
                    <span class\="icon-bar"\></span>
                    <span class\="icon-bar"\></span>
                    <span class\="icon-bar"\></span>
                </button>
                @Html.ActionLink("Application name", "Index", "Home", null, new { @class = "navbar-brand" })
            </div>
        </div>
    </div>
    ...
</body>
```

This is the display text that will be shown in the upper, left-hand corner of the default template as shown in the image below:

[![image](http://jasongaylord.com/Media/Default/WindowsLiveWriter/SavingDesignChangesfromInternetExplorert_1373E/image_thumb.png "image")](http://jasongaylord.com/Media/Default/WindowsLiveWriter/SavingDesignChangesfromInternetExplorert_1373E/image_2.png)

However, we may not have known where that value had come from or may want to tweak it when running our application. When we press F5 in Visual Studio, our application will run in the browser. If we press the Ctrl key, we'll notice a new toolbar appear like shown below:

[![image](http://jasongaylord.com/Media/Default/WindowsLiveWriter/SavingDesignChangesfromInternetExplorert_1373E/image_thumb_1.png "image")](http://jasongaylord.com/Media/Default/WindowsLiveWriter/SavingDesignChangesfromInternetExplorert_1373E/image_4.png)

You'll notice that I have checked the box for F12 auto-sync. This means that if I make any changes within the design of the page, it will sync back to Visual Studio. If we enter the developer tools (F12 in Internet Explorer) and expand the DOM to this element, we'll see the text in F12 will show ‘Application name' as shown below:

[![image](http://jasongaylord.com/Media/Default/WindowsLiveWriter/SavingDesignChangesfromInternetExplorert_1373E/image_thumb_3.png "image")](http://jasongaylord.com/Media/Default/WindowsLiveWriter/SavingDesignChangesfromInternetExplorert_1373E/image_8.png)

If we press the Web Essentials Design link, and click on that text, we can change it to something such as ‘Web Essentials ‘. Notice that while we are editing the text, the F12 screen changes the value as we are typing.

[![image](http://jasongaylord.com/Media/Default/WindowsLiveWriter/SavingDesignChangesfromInternetExplorert_1373E/image_thumb_4.png "image")](http://jasongaylord.com/Media/Default/WindowsLiveWriter/SavingDesignChangesfromInternetExplorert_1373E/image_10.png)

Back in Visual Studio, we'll see the change in the layout file as such:

[![image](http://jasongaylord.com/Media/Default/WindowsLiveWriter/SavingDesignChangesfromInternetExplorert_1373E/image_thumb_5.png "image")](http://jasongaylord.com/Media/Default/WindowsLiveWriter/SavingDesignChangesfromInternetExplorert_1373E/image_12.png)

Notice how the tool is intelligent enough to make the change to the HTML Helper and not replace the code with a value.

This tool works for more than text changes. It also works for styles, classes, and other markup within the page.