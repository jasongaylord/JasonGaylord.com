---
title: Only One Dialog Box is Allowed in Silverlight
author: Jason Gaylord
msmvps_path: "https://blogs.msmvps.com/jgaylord/2012/05/21/only-one-dialog-box-is-allowed-in-silverlight/"
date: 2012-05-21
categories: [archive]
tags: [archive]
bitly: https://jasong.us/3dpAi2o
---

Today I came across an interesting issue. I have a Silverlight project in which I'd like to be able to show the OpenFileDialog as well as a JavaScript alert. However, I was able to determine (and [](http://stackoverflow.com/questions/1391579/simple-silverlight-open-file-dialog-errors)[confirmed at StackOverflow](http://jasong.us/K5YwgF)), that the alert cannot happen first as the OpenFileDialog would be a second dialog on a single user action to the browser. By commenting out the alert, I was able to continue just as planned.

The error that results is the following:

[![SNAGHTML1dc03d0](http://jasongaylord.com/Media/Default/Windows-Live-Writer/Only-One-Dialog-Box-is-Allowed-in-Silver_F1D0/SNAGHTML1dc03d0_thumb.png "SNAGHTML1dc03d0")](http://jasongaylord.com/Media/Default/Windows-Live-Writer/Only-One-Dialog-Box-is-Allowed-in-Silver_F1D0/SNAGHTML1dc03d0.png)

The text reads: \[FileDialog\_UserInitiated\] Arguments:

Debugging resource strings are unavailable. Often the key and arguments provide sufficient information to diagnose the problem. See http://go.microsoft.com/fwlink/?linkid=106663&Version=4.1.10111.0& File=System.Windows.dll&Key=FileDialog\_UserInitiated

However, when browsing to the URL, you'll notice that the link no longer exists.

I don't use Silverlight much and so I haven't come across this before. Hopefully this helps someone in the future.