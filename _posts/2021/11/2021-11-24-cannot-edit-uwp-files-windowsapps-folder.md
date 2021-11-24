---
title: Cannot edit WindowsApps Folder and Installed UWP Files
author: Jason Gaylord
date: 2021-11-24
categories: [dev,dotnet,microsoft,security,windows]
tags:  [dev,dotnet,microsoft,security,windows]
post-number: 1210
image: https://cdn.jasongaylord.com/images/2021/11/24/windowsapps.jpg
bitly: https://jasong.us/3CLo2VO
---

There may be times where you develop a Universal Windows App (UWP) and need to modify files. For instance, in a recent UWP app that I've created, I need to move videos in and out of the folder without packaging them up. This allows for a smaller app package. It's also still in the testing phase where I really don't want to use a `KnownFolder`, which I find limiting anyway. 

{% include warning-notice.html %}
You should not update the permissions on this folder unless you know what you are doing. By doing this, you can corrupt applications installed in this folder. Be aware of the consequences before proceeding!
{% include end-notice.html %}

By default, you do not have access to the `WindowsApps` folder. To get access, there's two basic steps to follow. First, you need to give yourself ownership rights to that folder.

```shell
takeown /F "C:\Program Files\WindowsApps" /A /R
```

Next, you can either browse to your application's specific folder and give yourself **Full Access** to the folder or do that at the top level. I prefer the latter when testing UWP apps so I do not need to perform the same task for every app I create. 

{% include open-thumbnail.html path="2021/11/24/windowsapps.jpg" alt="WindowsApps folder permissions" %}