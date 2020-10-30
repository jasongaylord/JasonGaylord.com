---
title: "Creating a Twitter ViewComponent in ASP.NET Core – Part 2"
author: Jason Gaylord
cloudscribe_id: "97689e0c-737e-4e9b-8232-218aa4933630"
cloudscribe_path: "/blog/creating-a-twitter-viewcomponent-in-aspnet-core-–-part-2"
permalink: /blog/creating-a-twitter-viewcomponent-in-aspnet-core-–-part-2
date: 2018-11-07
categories: [dev,dotnet]
tags:  [dev,dotnet]
bitly: https://jasong.us/2PbDOpg
---

Yesterday, I started heading down the path to create a Twitter ViewComponent. As I mentioned, when redesigning my website I wanted to show a list of recent tweets that I've made on the homepage. 

There will be 2 parts in this series:

- [Part 1: Create an Interface and a Class to connect to Twitter](https://jasong.us/2Os34lz)
- [Part 2: Create a View Component to handle pre-packaged UI](https://jasong.us/2PbDOpg)

If you are looking for a feature complete, ready to use example, feel free to visit [https://github.com/jasongaylord/gaylordsolutions.TwitterWidget](https://jasong.us/2SNMBvE). 

## Setting up the Twitter Service in Middleware
Since we'll start to add MVC features to our Class Library project, we'll want to add the `Microsoft.AspNetCore.Mvc`, `Microsoft.AspNetCore.Mvc.ViewFeatures` and `Microsoft.Extensions.Options.ConfigurationExtensions` NuGet packages.

![https://cdn.jasongaylord.com/images/2018/11/07/Nuget_Packages.png](https://cdn.jasongaylord.com/images/2018/11/07/Nuget_Packages.png)

Next, we'll create a static class called `ServiceCollectionExtensions`. In the class, we'll create a new method called `AddTwitter` that's an extension method of `IServiceCollection`. We'll then add in our Twitter options we created in Part 1 as a singleton service and our Twitter service as a scoped service. An example is shown below:

{% gist jasongaylord/f4b824f341fc38cc6fa2847bd919e275 %}

## Adding the ViewComponent
Up to this point, we've spent a decent amount of time setting up the foundation for our `ViewComponent` to work. Of course, if we had a different purpose, we may be reaching this point sooner. We'll create a new class and name it `RetrieveTweetsViewComponent`. This will allow us to use RetrieveTweets in our Razor files or Razor pages.

{% gist jasongaylord/1dde496f0df23ffc3f06664c0914a40d %}

As you can see, there's not much to it. We'll create a local protected property to hold our Twitter options that are passed in through the constructor. Then, we have a single async method called `InvokeAsync()` that creates the service and waits for the tweets to come back. Finally, you'll see we are returning a default view. However, we haven't created the view yet. So, let's go do that now.

To do that, we'll create a folder called Views\Shared\Components\RetrieveTweets and place a new Razor file called Default.cshtml in there. 

![https://cdn.jasongaylord.com/images/2018/11/07/ViewComponentFolderStructure.png](https://cdn.jasongaylord.com/images/2018/11/07/ViewComponentFolderStructure.png)

The Razor file won't have much in it either. Within the file, we'll loop through the tweets listing the message and showing the friendly date.

{% gist jasongaylord/5d487ac6cad9e63dbf7bd08c604b43b1 %}

## Adding Razor Support to the Library
This is one of the most important steps in this process. If you do not follow this step, you will not have the compiled views library included as an artifact in your build. Edit your .csproj file and change the project type from `Microsoft.NET.Sdk` to `Microsoft.NET.Sdk.Razor`. Your .csproj file should look similar to this:

{% gist jasongaylord/1f9254ab55e9e9ff87683f3844d2cbfa %}

## Creating the Demo Application
If you are using Visual Studio, it's probably easiest to create a new Web Project within the same solution as your library. If you are using VSCode, be sure to compile the class library and reference both DLLs that are generated. The files generated will look like this:

![https://cdn.jasongaylord.com/images/2018/11/07/LibrariesGenerated.png](https://cdn.jasongaylord.com/images/2018/11/07/LibrariesGenerated.png)

In your appsettings.json, you'll want to add in the TwitterOptions section as we defined yesterday. For example:

{% gist jasongaylord/bf13d2a342626865a3ea774e99d9c308 %}

Then, in your startup file, you'll want to add the Twitter middleware by using:

```csharp
services.AddTwitter(Configuration.GetSection("TwitterOptions"));
```

Finally, create a Razor page or edit an existing one so that the component is invoked. For example, you may end up with something like this:

{% gist jasongaylord/bd41f59b545aa282fb9a677eec5c89f9 %}

## Conclusion
Between the two days, we were able to put together a `ViewComponent` that should render our recent tweets. After compiling our demo application, we should get a result like this:

![https://cdn.jasongaylord.com/images/2018/11/07/RecentTweets.png](https://cdn.jasongaylord.com/images/2018/11/07/RecentTweets.png)

Of course we can take next steps to expand this by changing the formatting or including more options. I'll be interested in seeing what you come up with. Be sure to post back or submit a pull request to the project at [https://github.com/jasongaylord/gaylordsolutions.TwitterWidget](https://jasong.us/2SNMBvE).