---
title: Filtering Artifacts in Azure DevOps
author: Jason Gaylord
cloudscribe_id: "e51109e3-12a8-4955-9c4c-f6733071cfe7"
cloudscribe_path: "/blog/filtering-artifacts-in-azure-devops"
permalink: /blog/filtering-artifacts-in-azure-devops
date: 2018-10-26
categories: [devops]
tags:  [devops]
bitly: https://jasong.us/2z3Z2dH
---

Azure DevOps is currently undergoing a facelift. If you are using the new design and you leverage the Package Management (Artifacts) option in Azure DevOps:

![https://cdn.jasongaylord.com/images/2018/10/26/Artifacts_Menu_Option.png](https://cdn.jasongaylord.com/images/2018/10/26/Artifacts_Menu_Option.png)

If you're using NPM, you may notice that the default view is to show all packages in the list including those found at npmjs. 

![https://cdn.jasongaylord.com/images/2018/10/26/Artifacts_Default_View.png](https://cdn.jasongaylord.com/images/2018/10/26/Artifacts_Default_View.png)

However, if you choose the Source dropdown menu, you can choose 'This Feed' to see only your packages that you've uploaded.

![https://cdn.jasongaylord.com/images/2018/10/26/Artifacts_This_Feed.png](https://cdn.jasongaylord.com/images/2018/10/26/Artifacts_This_Feed.png)

Early this year, [I blogged](https://jasong.us/2PteeLu) about automatically pushing versioned NuGet packages to the Azure DevOps Artifacts (Package Management) feed using the Azure DevOps build process. If this is of interest, I'd highly recommend reading [that post](https://jasong.us/2PteeLu). It's available at [https://www.jasongaylord.com/blog/automatically-push-versioned-nuget-packages-using-vsts-build-process](https://jasong.us/2PteeLu).