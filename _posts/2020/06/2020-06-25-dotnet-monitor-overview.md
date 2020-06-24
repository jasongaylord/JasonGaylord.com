---
title: "Microsoft Experiment: dotnet-monitor"
author: Jason Gaylord
date: 2020-06-25
categories: [development,dotnet,microsoft]
tags:  [development,dotnet,microsoft]
post-number: 950
image: https://cdn.jasongaylord.com/images/2020/06/25/dotnet-monitor-install-and-running.png
bitly: https://jasong.us/31htdOb
---

Microsoft [released an experimental tool](https://jasong.us/3ewgVVP) that allows a consistent method to obtain diagnostic information from .NET Core applications. This new tool is called `dotnet-monitor`. Depending on the target environment, the setup can differ, but the endpoints for the information collected are the same. This includes on the native OS or inside of a container.

{% include open-thumbnail.html path="2020/06/25/dotnet-monitor-install-and-running.png" alt="dotnet-monitor install and running" %}

You can see in the screenshot above, I have installed `dotnet-monitor` using the global tool install method as opposed to using the container image from the Microsoft Container Repository found on the [MCR site](https://jasong.us/3dzZz9f).

Regardless of install approach, you'll receive a local URL when you execute `dotnet monitor collect`. There will be several endpoints you can hit including:

- `/processes`
- `/dump/{pid?}`
- `/gcdump/{pid?}`
- `/trace/{pid?}`
- `/logs/{pid?}`
- `/metrics`

For more of what you can and can't do, [check out the devblog post by the Microsoft team here](https://jasong.us/3ewgVVP).