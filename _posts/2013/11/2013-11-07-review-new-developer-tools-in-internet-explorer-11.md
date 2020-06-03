---
title: "Review: New Developer Tools in Internet Explorer 11"
author: Jason Gaylord
msmvps_path: "https://blogs.msmvps.com/jgaylord/2013/11/07/review-new-developer-tools-in-internet-explorer-11/"
date: 2013-11-07
categories: [archive]
tags: [archive]
bitly: https://jasong.us/3doWBW6
---

Windows 8.1 has been out for a few weeks now. Along with Windows 8.1, Internet Explorer 11 was released. IE11 offers the best web standard support of any Internet Explorer browser. This means that the latest finalized specifications for HTML5 and CSS3 features have been implemented within the browser. In addition, the IE team revamped the developer tools (F12 tools).

When you press F12 in the new IE, the first thing you'll notice is that IE11 is bringing forward the modern Windows style.

[![image](http://jasongaylord.com/Media/Default/WindowsLiveWriter/ReviewNewDeveloperToolsinInternetExplore_13F97/image_thumb.png "image")](http://jasongaylord.com/Media/Default/WindowsLiveWriter/ReviewNewDeveloperToolsinInternetExplore_13F97/image_2.png)

The options, in order from top to bottom, are DOM Explorer, Console, Debugger, Network, UI Responsiveness, Profiler, Memory, and Emulator. Below, I'll try my best to touch upon each of these options.

## DOM Explorer

The DOM Explorer option has several enhancements. One of the areas that I particularly like are the improvements to "Inspect Element." For instance, my current web theme needs to be updated so my Twitter bird is properly positioned. I'll fix this in the upcoming weeks as I tweak my website theme for even better HTML5 support. However, for the purpose of this article, let's assume it's still broken. Here's an example of what it looks like if you right-click the image, and choose to Inspect Element:

[![dom-explorer-1](http://jasongaylord.com/Media/Default/WindowsLiveWriter/ReviewNewDeveloperToolsinInternetExplore_13F97/dom-explorer-1_thumb.png "dom-explorer-1")](http://jasongaylord.com/Media/Default/WindowsLiveWriter/ReviewNewDeveloperToolsinInternetExplore_13F97/dom-explorer-1_2.png)

As you can see, it's off to the right. It's not positioned correctly. You can easily see that one of my style elements is causing some of the offset. From within IE, you can alter this by deselecting that style to see it's immediate impact.

[![dom-explorer-2](http://jasongaylord.com/Media/Default/WindowsLiveWriter/ReviewNewDeveloperToolsinInternetExplore_13F97/dom-explorer-2_thumb.png "dom-explorer-2")](http://jasongaylord.com/Media/Default/WindowsLiveWriter/ReviewNewDeveloperToolsinInternetExplore_13F97/dom-explorer-2_2.png)

You can also click on the same line as the closing curly brace to add new styles:

[![image](http://jasongaylord.com/Media/Default/WindowsLiveWriter/ReviewNewDeveloperToolsinInternetExplore_13F97/image_thumb_1.png "image")](http://jasongaylord.com/Media/Default/WindowsLiveWriter/ReviewNewDeveloperToolsinInternetExplore_13F97/image_4.png)

As in above under the Styles sub-item, you can also manipulate the container size, padding, border, and margins by clicking on the Layout sub-item. If you click the item, the image below will appear. From this, you can click any of the values to edit them:

[![image](http://jasongaylord.com/Media/Default/WindowsLiveWriter/ReviewNewDeveloperToolsinInternetExplore_13F97/image_thumb_2.png "image")](http://jasongaylord.com/Media/Default/WindowsLiveWriter/ReviewNewDeveloperToolsinInternetExplore_13F97/image_6.png)

Finally, the DOM explorer was updated to show a bread crumb trail of nested elements. This allows you to jump to an up-level element to update the style or see the element selected.

[![image](http://jasongaylord.com/Media/Default/WindowsLiveWriter/ReviewNewDeveloperToolsinInternetExplore_13F97/image_thumb_3.png "image")](http://jasongaylord.com/Media/Default/WindowsLiveWriter/ReviewNewDeveloperToolsinInternetExplore_13F97/image_8.png)

## Console

The console option allows you to access elements using JavaScript. Even if you are unaware of methods or elements, the JavaScript console will provide hints by using Intellisense as shown below:

[![image](http://jasongaylord.com/Media/Default/WindowsLiveWriter/ReviewNewDeveloperToolsinInternetExplore_13F97/image_thumb_4.png "image")](http://jasongaylord.com/Media/Default/WindowsLiveWriter/ReviewNewDeveloperToolsinInternetExplore_13F97/image_10.png)

## Debugger

The debugger provides more options than the console. As one of the most powerful debugger's yet, this debugger allows you to place breakpoints within scripts or to watch variables defined within your scripts. One of the biggest enhancements to this version of the debugger is that this debugger finally stays within the browser window. Previous IE debugger's would detach from the browser window and open within a new window. If you had a breakpoint set, the window with the web page would "lock up" causing an unpleasant experience. With the IE11 developer tools, when a breakpoint is hit, the page informs you properly as shown below:

[![image](http://jasongaylord.com/Media/Default/WindowsLiveWriter/ReviewNewDeveloperToolsinInternetExplore_13F97/image_thumb_5.png "image")](http://jasongaylord.com/Media/Default/WindowsLiveWriter/ReviewNewDeveloperToolsinInternetExplore_13F97/image_12.png)

## Network

The network option provides the network traffic that takes place for your site. It breaks down each round trip to the server or other network resource including content delivery network (CDN) assets. As you can see from the image below, certain resources can really take some time to return a response. I can improve my responsiveness by updating those elements.

[![image](http://jasongaylord.com/Media/Default/WindowsLiveWriter/ReviewNewDeveloperToolsinInternetExplore_13F97/image_thumb_6.png "image")](http://jasongaylord.com/Media/Default/WindowsLiveWriter/ReviewNewDeveloperToolsinInternetExplore_13F97/image_14.png)

Besides viewing the overall responsiveness, I can dive further into the individual elements to see the request and response information to get a better understanding of what is going on. As you can see from the image above, there's some code pulling from Amazon, which is an Amazon advertisement, that is causing some slowness on my site. I can see this in greater detail by choosing the details:

[![image](http://jasongaylord.com/Media/Default/WindowsLiveWriter/ReviewNewDeveloperToolsinInternetExplore_13F97/image_thumb_7.png "image")](http://jasongaylord.com/Media/Default/WindowsLiveWriter/ReviewNewDeveloperToolsinInternetExplore_13F97/image_16.png)

While the network data provides a great overview on the traffic, it doesn't solve the responsiveness issues solely.

## UI Responsiveness

To complement the network option, you can start a performance profile by using the UI Responsiveness option. From this option, you can get a better understanding of the resources needed during a browsing session. You can start a profile session and stop it whenever. As an example, the image below shows a lengthy session that was zoomed in.

[![image](http://jasongaylord.com/Media/Default/WindowsLiveWriter/ReviewNewDeveloperToolsinInternetExplore_13F97/image_thumb_8.png "image")](http://jasongaylord.com/Media/Default/WindowsLiveWriter/ReviewNewDeveloperToolsinInternetExplore_13F97/image_18.png)

From this image, you can see that you can zoom in further to get a better understanding of the cost that style or scripts have on the overall performance for your UI. As I scroll down to the timeline graph, I can choose an item, such as my base.js file, to see the overall load time.

[![image](http://jasongaylord.com/Media/Default/WindowsLiveWriter/ReviewNewDeveloperToolsinInternetExplore_13F97/image_thumb_9.png "image")](http://jasongaylord.com/Media/Default/WindowsLiveWriter/ReviewNewDeveloperToolsinInternetExplore_13F97/image_20.png)

## Profiler

The profiler option allows a profiler to be initiated and captured. When you stop the profiler, it allows you to review the items that were loaded and see the amount of time spent in the area. As an example, the Google Analytics script took some time in certain areas.

[![image](http://jasongaylord.com/Media/Default/WindowsLiveWriter/ReviewNewDeveloperToolsinInternetExplore_13F97/image_thumb_10.png "image")](http://jasongaylord.com/Media/Default/WindowsLiveWriter/ReviewNewDeveloperToolsinInternetExplore_13F97/image_22.png)

So, I can double-click a line to jump into the location in debugger.

[![image](http://jasongaylord.com/Media/Default/WindowsLiveWriter/ReviewNewDeveloperToolsinInternetExplore_13F97/image_thumb_11.png "image")](http://jasongaylord.com/Media/Default/WindowsLiveWriter/ReviewNewDeveloperToolsinInternetExplore_13F97/image_24.png)

## Memory

The memory option will capture the overall memory spent within a page. If there are memory leaks on your site, you can take a baseline snapshot and additional snapshots to see any potential memory issues.

[![image](http://jasongaylord.com/Media/Default/WindowsLiveWriter/ReviewNewDeveloperToolsinInternetExplore_13F97/image_thumb_12.png "image")](http://jasongaylord.com/Media/Default/WindowsLiveWriter/ReviewNewDeveloperToolsinInternetExplore_13F97/image_26.png)

## Emulation

The emulation option allows developers to emulate beyond just a version of Internet Explorer. Previous versions of IE would allow you to change the version and jump into quirks mode. This version offers something similar, but by default, runs in "edge" mode. Edge mode is the latest version of web standards running in IE. You can also change to a Windows Phone mode instead of Desktop. While it's not a best practice to detect a browser based on user agent string, you can change the user agent string that's being relayed to the web server in the emulation screen. Additional options allow you to specify the orientation and geolocation information. These two settings allow developers to simulate the most common tablet functionality. The emulation tab looks similar to the following:

[![image](http://jasongaylord.com/Media/Default/WindowsLiveWriter/ReviewNewDeveloperToolsinInternetExplore_13F97/image_thumb_13.png "image")](http://jasongaylord.com/Media/Default/WindowsLiveWriter/ReviewNewDeveloperToolsinInternetExplore_13F97/image_28.png)

## Wrap-Up

Hopefully this post provided some insight into the new developer tools provided in Internet Explorer 11.