---
title: Add a Pipeline Expression Value to an Azure DevOps Variable
author: Jason Gaylord
date: 2021-02-25
categories: [dev,devops,dotnet,tip]
tags: [dev,devops,dotnet,tip]
post-number: 1138
image: https://cdn.jasongaylord.com/images/2021/02/25/release-variables.jpg
bitly: https://jasong.us/3qQe40c
---

Last week I talked about updating a website to .NET 5. In that same application, I had a need to use a value generated at build time in the release so that my `appsettings.json` file would be updated appropriately. An example of why you may need this is to set the last modified meta tag based on the build:

```html
<meta http-equiv="last-modified" content="YYYY-MM-DD" />
```

Using Azure DevOps makes this task pretty easy. In my particular case, I created a Variable Group as the variables would then be shared across both the build pipeline and release. However, you can simply create an individual pipeline variable like so:

{% include open-thumbnail.html path="2021/02/25/pipeline-variables.jpg" alt="Creating a custom pipeline variable" %}

The value I had set for this variable is `$[format('{0:yyyy}-{0:MM}-{0:dd}', pipeline.startTime)]`. This will take the pipeline's start time and format in the way I'd need it to. Remember, this value is generated on the application build. Because I named a property in the root of my `appsettings.json` as `BuildDateTime` and added the `appsettings.json` file to the transform step in release, the proper value will simply be replaced on release. I can see the complete list of variables in the release logs including my new variable and value:

{% include open-thumbnail.html path="2021/02/25/release-variables.jpg" alt="Viewing the variables available during release" %}

If you'd like to learn more about pipeline expressions, visit [docs.microsoft.com/en-us/azure/devops/pipelines/process/expressions](http://jasong.us/3stOj6t).