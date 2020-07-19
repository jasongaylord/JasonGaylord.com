---
title: Resolving 500.31 ANCM on Azure App Service when Deploying form Visual Studio Code
author: Jason Gaylord
date: 2020-07-20
categories: [cloud,developer,dotnet,microsoft,visual-studio]
tags:  [cloud,developer,dotnet,microsoft,visual-studio]
post-number: 978
image: https://cdn.jasongaylord.com/images/2020/07/20/appservice-deploy-subpath.jpg
bitly: https://jasong.us/2Zy9sRi
---

When a new version of .NET Core is released, Azure may still be behind receiving the framework version. At any point, you can see what is installed within your Azure App Service by entering the **Console** within the **Development Tools** menu on the Azure App Service resource and typing `dotnet --info`:

{% include open-thumbnail.html path="2020/07/20/dotnet-info.jpg" alt="dotnet --info in the Azure Portal" %}

Even the .NET Core 5.0 Preview 4 is now released, it is still not a valid target framework for Azure. So, if you are using .NET Core 5 and run `dotnet new` to create a new project, you may find that you need to make a few subtle changes.

1. You will need to update the `.csproj` so the target framework is set to 3.1 (or a valid installed Azure framework) such as `<TargetFramework>netcoreapp3.1</TargetFramework>`
2. You will need to deploy your application as a [self-contained app](https://jasong.us/3eCibGr).

Depending on the approach, you may still notice that the app is not functioning correctly. This may be because of the `.vscode` folder that is created in the app. Visual Studio Code creates this folder so that it can store project level settings, tasks, and launch settings. If you pay attention to the `settings.json` file, you may see a setting called `appService.deploySubpath`

<strong>Note:</strong> At the time of this post, .NET Core 5.0 is not a valid target framework for Azure. Be sure you are deploying your app as a .NET Core 3.1 application or deploying your app as a <a href="">self-contained app</a>. You may also have to update the <strong>.vscode\settings.json</strong> file and update the <strong>appService.deploySubpath</strong> to use the correct .NET Core version.

{% include open-thumbnail.html path="2020/07/20/appservice-deploy-subpath.jpg" alt="appService deploySubpath version" %}