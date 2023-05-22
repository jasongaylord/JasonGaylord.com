---
title: Creating Your First Statiq Theme
author: Jason Gaylord
date: 2023-05-11
categories: [dev,web]
tags: [dev,web]
post-number: 1252
image: https://cdn.jasongaylord.com/images/2023/05/##/static-theme.jpg
bitly: https://www.jasongaylord.com/blog/2023/05/11/using-statiq-dotnet-static-app
---

In the [previous post](https://jasong.us/3VZBsJe), we walked through getting a folder setup and started for a Statiq app. At this point, we can get started with content. However, I find that having a theme with a layout and structure helps to inspire the structure the static web app will follow going forward. So, in this post, we'll create our first Statiq Web theme.

## Getting Started
We have three of options in creating our theme.

1. We can create our theme by adding a folder called `theme` directly to our project
2. We can clone a theme from a repository using `git clone`
3. We can reference our theme by adding it as a sub-module by using `git submodule`

Any of the three approaches will work. For our purposes, we're going to reference our theme by adding it as a sub-module. This is going to allow us to share the theme with others and to update the theme from the repository easier.

To do this, we'll want to create a new folder and initialize this as a new Git repository.

## Setting the Basic Structure
The theme is installed in the root of the application along side the `input` folder. So, the basic theme folder would look like this:

* `theme\`
  * `themesettings.yml`
  * `input`
    * `_Layout.cshtml`

As you can see from the list above, themes have an `input` folder much like the application. This allows you to specify "base" content that is then shared with the application. As the files found in this `input` folder are "inherited", they can be overwritten by a file with the same name in the application `input` folder. So, if you add a theme, you can completely change the base layout by having your own `_Layout.cshtml` file in your application's `input` folder.

The `themesettings.yml` file is a settings or configuration file. These files can be `.yaml`, `.yml`, `.json`, or `.xml` files and are typically named `settings`, `appsettings`, `statiq`, or `themesettings`. More information about the configuration files can be found on the [Statiq website here](https://jasong.us/3pDM5Fa).


## Installation
As mentioned in the Getting Started section above, there are three options for installation. Well, actually there's only two. The first option to getting started does not require installation as it's part of the same application.

For purposes of this post, we're going to use the theme I created called `SpaacedOutStatiq`. At the time of this post, this theme is not fully complete and lacks the same features as my existing blog. 







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
Since the library is still in pre-release, you must append the `--version`. You can find the latest version by visiting <a href="https://jasong.us/3NX2eQe" target="_blank">nuget.org/packages/Statiq.Web</a>.
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