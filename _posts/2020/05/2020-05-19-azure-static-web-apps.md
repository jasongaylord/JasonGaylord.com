---
title: Announcing Azure Static Web Apps
author: Jason Gaylord
date: 2020-05-19 13:30:00 -4
categories: [cloud,dev,devops]
tags:  [cloud,dev,devops]
bitly: https://jasong.us/3bLB2x9
---

Announced today at Microsoft Build is a new service called [Azure Static Web Apps](https://jasong.us/2X4WzeQ). 

![](https://cdn.jasongaylord.com/images/2020/05/19/azure-static-web-apps.png)

Azure Static Web Apps allows static sites to be built using Visual Studio Code or your editor of choice. I prefer Visual Studio Code as I prefer to use the new preview of the [GitHub Pull Requests and Issues](https://jasong.us/36fLFr1) extension. Here is what the extension looks like inside of Visual Studio Code:

![](https://cdn.jasongaylord.com/images/2020/05/19/github-pull-requests-demo.gif)

Next, I can use any JavaScript or TypeScript framework including, but not limited to:

- Angular
- React
- Vue
- Aurelia

I can also use a static generator such as:

- Jekyll
- Gatsby
- DocFx

By connecting your GitHub account to Azure and using the new GitHub Action, you can deploy your static application to Azure. Of course, Static web apps also give you the power of adding APIs by using Azure Functions. So, quickly and easily, you can be up and running with a thin, lightweight application.