---
title: Azure Functions Upgrade to v3 by October 31 2020
author: Jason Gaylord
date: 2020-07-23
categories: [cloud,developer,dotnet,microsoft]
tags:  [cloud,developer,dotnet,microsoft]
post-number: 982
image: https://cdn.jasongaylord.com/images/2020/07/23/azure-function-upgrade-v3.jpg
bitly: https://jasong.us/2ClUuVG
---

In order to keep all elements of Azure Functions patched and maintained, Microsoft is rolling out a platform upgrade on October 31, 2020 for all Azure Functions v2 applications. Azure Functions v2 applications currently run on .NET Core 2.2. Microsoft will be upgrading the foundation to support .NET Core 3.1.

You may have received an email over the past week titled **Action required: Upgrade your function apps to Azure Functions v3 before 31 October 2020**. The reason you'd receive this email is that you are likely using [APIs that will be impacted](https://jasong.us/2WwdI1J) by the upgrade in underlying framework. So, it is recommended that you upgrade your functions to version 3. You can [opt out of the upgrade](https://jasong.us/2CphnaF) by adding an application setting in your function app called `FUNCTIONS_EXTENSION_VERSION` to `~2.0`. This will force your function to stay at version 2. 

{% include link-thumbnail.html path="2020/07/23/azure-function-upgrade-v3.jpg" alt="Platform Upgrade for Azure Functions v2 to v3 coming October 2020" url="https://jasong.us/2CphnaF" %}