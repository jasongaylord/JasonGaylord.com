---
title: Publishing a .NET Core 5 Directly to Azure from Visual Studio 2019
author: Jason Gaylord
date: 2020-06-06
categories: [cloud,development,dotnet,visual-studio]
tags:  [cloud,development,dotnet,visual-studio]
post-number: 931
image: https://cdn.jasongaylord.com/images/2020/06/06/change-deployment-mode-to-self-contained.jpg
bitly: https://jasong.us/30dqpkH
---

By default, if you setup publishing of an application to Azure from within Visual Studio 2019, the deployment mode is set to `Framework-Dependent`. When deploying to Azure, this will be a problem as Azure App Services currently do not support .NET Core 5. So, you'll need to modify your deployment mode to `Self-Contained`. You can do this by entering the publish settings and clicking on the pencil icon next to _Deployment Mode_. A dialogue box will appear allowing you to change the deployment mode to `Self-Contained`.

{% include open-thumbnail.html path="2020/06/06/change-deployment-mode-to-self-contained.jpg" alt="Dialogue box allowing you to change the deployment mode to self-contained." %}