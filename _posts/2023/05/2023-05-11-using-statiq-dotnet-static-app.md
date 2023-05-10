---
title: Using Statiq, a .NET Static Content Generator
author: Jason Gaylord
date: 2023-05-11
categories: [dev,web]
tags: [dev,web]
post-number: 1250
image: https://cdn.jasongaylord.com/images/2023/05/11/statiq-web.jpg
bitly: https://jasong.us/3VZBsJe
---

I'm a huge fan of static web apps mostly because of performance but also because they're so easy to generate content using the tools that I use. I also enjoy using just Visual Studio Code and not opening Visual Studio anymore. When I first started web development, I used notepad instead of Visual InterDev. I was THAT guy.

Recently I've been hearing a lot about Statiq, a .NET framework for building static content. With Statiq, there are prepackaged pipelines called Statiq Web, for general websites and Statiq Docs for documentation websites. For purposes of this post, I'm going to kick things off with Statiq Web.

## Getting Started
The quick start available on the [Statiq website](https://jasong.us/3VTUIYj) is a pretty good way to get things started. The only difference is that you may want to start by adding initializing a folder as a Git repo. If you do this, I highly recommend adding to your repo:

1. A `readme.md` file that may or may contain some markdown
2. More importantly, the `VisualStudio.gitignore` file from the `github/gitignore` repository by clicking below...

{% include github-browse.html bitly="https://jasong.us/2xlcFrZ" repo="github/gitignore" branch="main" %}

Next, make sure that you have .NET Core 3.1, .NET 6, or later installed on your device. From there we'll setup a new .NET console application by opening up a command-line and using the `dotnet` CLI like so:

```shell
dotnet new console --name SiteName
```

Next, we'll add in the `Statiq.Web` package in our project like so:

```shell
dotnet add package Statiq.Web --version 1.0.0-beta.54
```

{% include warning-notice.html %}
Since the library is still in pre-release, you must append the `--version`. You can find the latest version by visiting <a href="https://jasong.us/3NX2eQe" target="_blank">nuget.org/packages/Statiq.Web</a.
{% include end-notice.html %}

## Create a Bootstrapper
The implementation of the bootstrapper is different if you have `<ImplicitUsings>enable</ImplicitUsings>` in your project file AND you are using .NET 6 or later. If you are, you can just return the `Bootstrapper` like so:

```csharp
return await Bootstrapper
  .Factory
  .CreateWeb(args)
  .RunAsync();
```

If not, you will want to replace the `Program.cs` contents with a method that looks like this:

```csharp
using System.Threading.Tasks;
using Statiq.App;
using Statiq.Web;

namespace SiteName
{
  public class Program
  {
    public static async Task<int> Main(string[] args) =>
      await Bootstrapper
        .Factory
        .CreateWeb(args)
        .RunAsync();
  }
}
```

## Summary
We're now ready to begin expanding on this and building in a theme and adding content. Be sure to continue following my blog for more posts related to Statiq.

{% include link-thumbnail.html path="2023/05/11/statiq-web.jpg" alt="Statiq Web" url="https://jasong.us/3VTUIYj" %}