---
title: How Microsoft Shutdown AppGet
author: Jason Gaylord
date: 2020-05-29
categories: [microsoft,windows]
tags:  [microsoft,windows]
image: https://cdn.jasongaylord.com/images/2020/05/29/appget.jpg
bitly: https://jasong.us/303HEEO
---

There are many package managers for Windows these days. Probably the most popular is [Chocolatey](https://jasong.us/2K7k5C6). Microsoft has shown examples to get their own stuff installed using Chocolatey in the past. However, there was an interesting package manager that I started using a few months ago called [AppGet](https://jasong.us/2XL4miq).

[![](https://cdn.jasongaylord.com/images/2020/05/29/appget.jpg)](https://jasong.us/2XL4miq)

AppGet is a free and open package manager for Windows. It uses a GitHub repository for package manifest files which can be found at [https://github.com/appget/appget.packages](https://jasong.us/2XpoibP).

The future of AppGet changed with the [announcement of WinGet](https://jasong.us/3coOiIy) at Build 2020. WinGet is very similar to AppGet. First, the name is very similar. Sure AppGet was likely a play on NuGet, a package manager for .NET applications. But there's more. The package manifests for WinGet are stored in a [GitHub repository](https://jasong.us/2Y3GUNJ). The CLI contains many of the same features. In fact, Keivan Beigi, the author of AppGet, blogged about [the day AppGet died](https://jasong.us/36O28mo).

For a company who has worked so hard to tout support of several OSS projects and their communities, this seems like a step back in time. It will be interesting to see if this is a new trend or simply a one-off. 