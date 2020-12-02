---
title: Using Spy++ in Visual Studio 2019
author: Jason Gaylord
date: 2020-12-02
categories: [dev,dotnet,visual-studio,windows]
tags:  [dev,dotnet,visual-studio,windows]
post-number: 1116
image: https://cdn.jasongaylord.com/images/2020/12/02/visual-studio-2019-installer.jpg
bitly: https://jasong.us/2I51rxm
---

Back in [November of 2018](https://jasong.us/2AelZv6), I shared a brief explanation to obtain Winform control information by using a tool packaged in Visual Studio called Spy++. This tool is included in Visual Studio 2019 as well. To find it, you'll need to modify your Visual Studio 2019 installation by going to the menu and clicking on `Tools > Modify`. The Visual Studio Installer should appear. Browse to the _Individual Components_ tab and search for _C++ core features_.

{% include open-thumbnail.html path="2020/12/02/visual-studio-2019-installer.jpg" alt="Visual Studio 2019 Installer" %}

Check the _C++ core features_ option and choose _Modify_. This will install the C++ Core Features as well as the `spyxx.exe` and `spyxx_amd64.exe` files at `C:\Program Files (x86)\Microsoft Visual Studio\2019\Enterprise\Common7\Tools`.