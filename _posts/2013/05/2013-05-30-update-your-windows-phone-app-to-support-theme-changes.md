---
title: Update your Windows Phone App to Support Theme Changes
author: Jason Gaylord
msmvps_path: "https://blogs.msmvps.com/jgaylord/2013/05/30/update-your-windows-phone-app-to-support-theme-changes/"
date: 2013-05-30
categories: [archive]
tags: [archive]
bitly: https://jasong.us/2XmSN21
---

If you've ever built a Windows Phone 7 or Windows Phone 8 application, you may have found that your app looks great when building it in Visual Studio. However, as soon as you attempt to change the theme of the application, the design would not appear correct.

One resource on MSDN that you may find useful is the article titled [](http://msdn.microsoft.com/en-us/library/windowsphone/develop/ff769552(v=vs.105).aspx)[Theme Resources for Windows Phone](http://jasong.us/18zjeT2). This article shows several tables that explain the built-in resource names for themes. Besides setting a brush or color within your application to one of the resource values, you may be interested in knowing the theme color (light or dark) or the foreground color chosen within the settings.

Windows Phone does not provide a resource that contains a value as to which theme is chosen. Rather, the visibility of one (or both) of the theme visibility resources must be checked. An example of this is shown below:

```csharp
Visibility isVisible = 
   (Visibility)Application.Current.Resources\["PhoneLightThemeVisibility"\];
```

The foreground is a bit easier. In my case, I usually obtain a brush. The reason for this is that I'm usually using this to programmatically set the background color of one or more controls to this color. Rather than obtaining the foreground brush, I'm really interested in the foreground accent brush. The reason for this is that the accent is the color choice that is made in settings. I can get this be doing the following:

```csharp
SolidColorBrush Foreground = 
   (SolidColorBrush)Application.Current.Resources\["PhoneAccentBrush"\];
```

After doing this once, I quickly realized that this should go into a common class library that I've begun to include on every phone project. So, I created a class called theme.cs which is available in a [GitHub Gist](http://jasong.us/18zpLgs) (please feel free to submit revisions or suggestions as necessary). The complete Gist can also be copied from below:

One of the reasons you may need to know the theme is when you are deciding what logo to use. For instance, you wouldn't want a white logo to appear on the light background. So, to see the Theme.cs in action, I would first update the App.xaml.cs file to call the static method by using Theme.Detect(). This should be done in both the Application\_Launching and Application\_Activated methods. Then, update each of the pages that use the logo to set the source in a manner similar to the following:

```csharp
Logo.Source = new BitmapImage(
                 new Uri(
                    Theme.CurrentTheme == Theme.ThemeColor.Dark ? 
                       "/Assets/Logo-Light.png" : 
                       "/Assets/Logo-Dark.png", 
                       UriKind.Relative));
```

Another way to accomplish this would be to consistently use the same naming convention and location for assets such as logos. If this is the case, you can move this to the Theme.cs class and create a new static property with a private setter that automatically populates the bitmap.