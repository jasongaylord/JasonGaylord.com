---
title: Solving 'The remote provider was unable to process the request' in Azure DevOps
author: Jason Gaylord
date: 2022-01-26
categories: [dev,devops,dotnet,tip]
tags:  [dev,devops,dotnet,tip]
post-number: 1212
image: https://cdn.jasongaylord.com/images/2022/01/26/azure-devops-pipelines-legacy.jpg
bitly: https://jasong.us/3AxCfGu
---

I've been using Azure DevOps pipelines for quite some time. I do have a few older web applications that are only built once a year if that. When working on one of the applications recently, I noticed an error with the pipeline where the deployment would be cancelled. When reviewing the logs, I found the following error:

```shell
##[warning]An image label with the label Ubuntu-16.04 does not exist.
,##[error]The remote provider was unable to process the request.
Pool: Azure Pipelines
Image: Ubuntu-16.04
...
```

I had forgotten that the images have been updated. To play it safe, I've changed the pipeline YML to use `ubuntu-latest` or `windows-latest` wherever I can. In addition, you can make the change in the legacy UI for the Azure DevOps pipelines like so:

{% include open-thumbnail.html path="2022/01/26/azure-devops-pipelines-legacy.jpg" alt="Legacy UI for Azure DevOps Pipelines" %}