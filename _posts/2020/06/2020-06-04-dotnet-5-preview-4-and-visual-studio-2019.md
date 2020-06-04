---
title: Installing .NET Core 5 Preview 4 and the Latest Visual Studio 2019 Previews
author: Jason Gaylord
date: 2020-06-04
categories: [development,dotnet,visual-studio]
tags:  [development,dotnet,visual-studio]
post-number: 929
image: https://cdn.jasongaylord.com/images/2020/06/04/dotnet-5-sdk-installer-windows.png
bitly: https://jasong.us/2AzR0ha
---

On May 19th, the development division at Microsoft [released the latest preview, preview 4, of .NET 5](https://jasong.us/2zXE2ty). As with the other previews, you can install the full SDK which is needed to build applications. If you only plan on running a new .NET Core 5 application, you can use the ASP.NET Core runtime, the Desktop runtime (for Windows desktop applications), or the .NET Runtime (for console applications). The installers are available for Linux, macOS, and Windows machines.

## Installing the SDK
If you use Visual Studio Code or another IDE other than Visual Studio 2019, you can jump right to the SDK installer and install away.

{% include open-thumbnail.html path="2020/06/04/dotnet-5-sdk-installer-windows.png" alt=".NET 5 Preview 4 Installer" %}

After you are done installing, you can execute the `dotnet --version` command to see the version installed:

{% include open-thumbnail.html path="2020/06/04/dotnet-version.jpg" alt="dotnet --version output" %}

## Supporting Future Preview Builds of Visual Studio and .NET Core
Prior to version 16.6 of Visual Studio, the only way to install the .NET 5 preview was to use a preview build of Visual Studio. To setup preview builds for the future, go to the Visual Studio search bar and type `Preview Features`:

{% include open-thumbnail.html path="2020/06/04/settings-preview-features.jpg" alt="Searching Visual Studio to enable Preview Features" %}

After the Preview Features settings pop up, scroll down until you find `Use previews of the .NET Core SDK (requires restart)`:

{% include open-thumbnail.html path="2020/06/04/previews-of-dotnet-core-sdk.jpg" alt="The setting to check to enable previews of .NET Core SDK to run with Visual Studio" %}

By checking this setting, you'll now enable previews of .NET Core within Visual Studio. You may also enable preview versions of Visual Studio that support the latest .NET Core previews.

## Supporting Visual Studio 2019
At the time of this post, the most current version of Visual Studio 2019 was version 16.6.1. .NET 5 Preview 4 requires that you have a minimum of version 16.6 installed. You can see the version of Visual Studio 2019 installed by going to _Help_ > _About Microsoft Visual Studio_. You'll see the value in the About dialogue box as shown highlighted below:

{% include open-thumbnail.html path="2020/06/04/visual-studio-version.jpg" alt="The current Visual Studio version installed is 16.6.1" %}

If you do not have version 16.6 or greater, go back to _Help_ > _Check for Updates_ and install the latest version. After the install, you'll be able to [install the SDK](#installing-the-sdk).

{% include warning-notice.html %}
If you installed the SDK before upgrading Visual Studio 2019 and before you <a href="#supporting-future-preview-builds-of-visual-studio-and-net-core">enabled previews of .NET Core</a>, you'll have to repair your SDK install after Visual Studio has been upgraded. This will register .NET 5 with Visual Studio.
{% include end-notice.html %}