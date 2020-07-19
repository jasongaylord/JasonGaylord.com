---
title: Using Octokit.NET to Integrate Your .NET Core Applications with GitHub
author: Jason Gaylord
date: 2020-07-19
categories: [developer,devops,dotnet]
tags:  [developer,devops,dotnet]
post-number: 977
image: https://cdn.jasongaylord.com/images/2020/07/19/octokit-dotnet_2.png
bitly: https://jasong.us/3exuRyl
---

Over 170 contributors have assisted GitHub in creating a GitHub API client library for .NET called [Octokit.NET](https://jasong.us/2B1V3U1). The library targets .NET Framework 4.6+ and .NET Standard 2+ and above and makes it much easier to interact with the GitHub API. It's quite easy to get started. If using a .NET Core application, from a command line you can use the dotnet installer tool by executing:

```shell
dotnet add package Octokit
```

There is another package, called `Octokit.Reactive` that provides an `IObservable` based GitHub API client for .NET Core.

```shell
dotnet add package Octokit.Reactive
```

You can also clone the repository locally by clicking the button below:

{% include github-clone.html bitly="jasong.us/3j72jze" repo="octokit/octokit.net" branch="main" %}

In a future post, I'll use the following code snippet to obtain a count of pull requests for my site.

```csharp
const string owner = "jasongaylord";
const string repo = "JasonGaylord.com";
const string token = "<INSERT_TOKEN_HERE>";
const string project_name = "MyFirstOctokitProject";

public int CountPullRequests()
{
    var creds = new InMemoryCredentialStore(new Credentials(token));
    var client = new GitHubClient(new ProductHeaderValue(project_name), creds);
    var pullrequests = client.PullRequest.GetAllForRepository(owner, repo).Result;
    return pullrequests.Count();
}
```

If you haven't checked out the client library yet, be sure to check it out.

{% include link-thumbnail.html path="2020/07/19/octokit-dotnet_2.png" alt="Octokit.NET Project" url="https://jasong.us/3j72jze" %}