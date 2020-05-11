---
title: Connecting Azure DevOps to Azure Active Directory
author: Jason Gaylord
cloudscribe_id: "e36d2aa3-c68c-4c45-b9cf-98053800d9b8"
cloudscribe_path: "/blog/connecting-azure-devops-to-azure-active-directory"
permalink: /blog/connecting-azure-devops-to-azure-active-directory
date: 2018-10-23
categories: [cloud,devops]
tags:  [cloud,devops]
---

A lot of groups start out by using Azure DevOps or another source control system using individual user accounts. However, as your organization continues to grow, you will likely need to connect to a directory such as Azure Active Directory to authenticate users. For Azure DevOps, this is really quite simple. To do this, log into the Azure portal as an Application Administrator or Global Administrator. Once you are logged in, click on All Services in the menu to the left and scroll until you find ‘Azure DevOps Services organizations (formerly Team Services)’. Click on the appropriate DevOps organization. If you don’t see the organization you are expecting, be sure you are at least a Project Administrator in the DevOps instance. Then, you’ll see the settings come up similar to the following:

![https://cdn.jasongaylord.com/images/2018/10/22/Azure_DevOps_AAD_Connect.png](https://cdn.jasongaylord.com/images/2018/10/22/Azure_DevOps_AAD_Connect.png)

Be sure to choose Connect AAD. This should work.

In the rare occasion that it does not, it may be due to some corrupt account info. To solve this, you should be able to submit a support ticket via Azure.