---
title: Enabling File Access in Universal Windows Apps
author: Jason Gaylord
date: 2021-11-17
categories: [dev,dotnet,microsoft,security,windows]
tags:  [dev,dotnet,microsoft,security,windows]
post-number: 1209
image: https://cdn.jasongaylord.com/images/2021/11/17/enable-file-system-access-for-your-app.jpg
bitly: https://jasong.us/3nn9NlO
---

I was working on a new app that I'm going to introduce into [MyLightDisplay](https://jasong.us/mylightdisplay) this year. The idea behind the app is that I'd use another app that I have to output the current status of the light show. Based on the status, I'd kick off a corresponding video for the display.

I started with a Classic WinForms application. However, the problem I ran into is that the Windows Media Player support just isn't there to load .mp4 files anymore. So, I started to venture into Universal Windows Apps (UWP). However, I'm a web developer. I really haven't used XAML in at least 5 or 6 years. So, this was a bit new for me.

I ran into several snags with setting up the application. One of the biggest snags I ran into was access to the file system. I mean, what's wrong with:

```csharp
File.ReadAllText(@"C:\Shows\status.txt");
```

Apparently, something. I quickly found out that I had to use new classes that are part of the `Windows.Storage` namespace to do something like:

```csharp
var folder = await StorageFolder.GetFolderFromPathAsync(@"C:\Shows");
var file = await folder.GetFileAsync("status.txt");
var statusFile = await FileIO.ReadTextAsync(file);
```

But wait. Simply doing the above would lead me to the following error:

{% include open-thumbnail.html path="2021/11/17/access-is-denied-storagefolder-getfolderfrompathasync.jpg" alt="StorageFolder.GetFolderFromPathAsync error 'Access is Denied'" %}

Great. Now what?

{% include warning-notice.html %}
The instructions below assume that you've enabled Developer mode on your machine. If you have not, go to the <strong>Settings</strong> application on your computer and browse to <i>Privacy & security</i> and then <i>For Developers</i>. Then in the menu click the toggle under the <i>Developer Mode</i>.
{% include end-notice.html %}

### Updating Application Capabilities
All is not lost. There is a namespace that you can add to your `Package.appxmanifest` file. Simply _View Code_ on that file and update your capabilities as such:

```xml
<Package
  ...
  xmlns:rescap="http://schemas.microsoft.com/appx/manifest/foundation/windows10/restrictedcapabilities"
  IgnorableNamespaces="uap mp rescap">
...
  <Capabilities>
    ...
	<rescap:Capability Name="broadFileSystemAccess" />  
  </Capabilities>
```

This brings in a new namespace and then adds a new capability called the `broadFileSystemAccess`. This isn't the ideal or recommended method to add file system access. Microsoft tends to recommend using a `FileOpenPicker()` and saving the file for future application uses to lock the app down to just what it needs. In this case, this app is just for my personal use so I didn't care to setup something like that. In fact, I remote into the machine frequently to do a system reboot. I wanted something I could trust as soon as I executed.

But wait. If we now hit **F5**, we'll still get the same error. This is because we need to allow the app to have the access in the _Settings_ app.

### Update Settings
While the instructions here will show Windows 11 screenshots, the same basic process applies for Windows 10.

Go to the _Settings_ app by searching for _Settings_ or launching _Settings_ from the _Control Panel_. From there, click on **Privacy & Security** (or **Privacy** in Windows 10) and then **File system**. In Windows 11, you'll have to scroll a bit. 

{% include open-thumbnail.html path="2021/11/17/file-system-security-settings.jpg" alt="Privacy & Security > File system Settings" %}

Once you click on the setting, you'll then see a toggle to _Let apps access your file system_. Make sure you toggle that to _On_. If your application hasn't executed, you may not see it as an installed app. However, if it has, click the toggle to enable access for your app as I have below:

{% include open-thumbnail.html path="2021/11/17/enable-file-system-access-for-your-app.jpg" alt="Privacy & Security > File system Settings" %}

### Summary
Hopefully this quick little tutorial will save you some time. I wish I had found something like this to assist me in my development.