---
title: Integrating Azure DevOps with Slack
author: Jason Gaylord
date: 2020-06-02
categories: [collaboration,devops,development]
tags:  [collaboration,devops,development]
post-number: 927
image: https://cdn.jasongaylord.com/images/2020/06/02/alternative-to-vsts-app-in-slack.jpg
bitly: https://jasong.us/2TWZZjl
---

Several years back, the Slack team built their own app for integrating with Azure DevOps, or then, Visual Studio Team Services (VSTS). The app provided some basic information about VSTS in Slack channels, but was quite useful. Over the past year, Microsoft had created three different apps that were enhancements over what Slack had built:

- [Azure Boards app for Slack](https://jasong.us/3eGYai6)
- [Azure Pipelines app for Slack](https://jasong.us/2zGvJ5q)
- [Azure Repos app for Slack](https://jasong.us/36RFc5G)

On July 31,2020, Slack will be deprecating the **Visual Studio Team Services** application. If you haven't checked out the new apps, I highly recommend that you do so. We use it frequently for accepting pull requests, but here is an overview of what you can do using the new apps:

- Creating work items using a command or messaging action
- Approving / rejecting releases from the Slack channel
- Notifying teammates with @mention support for action
- Unfurling URLs for work items, pull requests and pipelines
- Supporting notifications for new YAML based pipelines

![](https://cdn.jasongaylord.com/images/2020/06/02/alternative-to-vsts-app-in-slack.jpg)