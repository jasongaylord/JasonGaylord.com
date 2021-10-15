---
title: "Solving 'Subscription is not registered to use namespace' in Azure"
author: Jason Gaylord
date: 2021-10-19
categories: [dev,dotnet,visual-studio]
tags:  [dev,dotnet,visual-studio]
post-number: 1193
image: https://cdn.jasongaylord.com/images/2021/10/19/build-and-deploy-error.jpg
bitly: https://jasong.us/3FO2Gdh
---

There are several ways that you can implement infrastructure as code with Azure. You can use JSON ARM templates, terraform, or Microsoft Bicep. In some cases, when executed you may receive an error message that looks similar to this:

{% include open-thumbnail.html path="2021/10/19/build-and-deploy-error.jpg" alt="Infrastructure as code deploy error" %}

The error we want to pay most attention to is `The subscription is not registered to use namespace 'Microsoft.DocumentDB'.` After doing some digging online, I came across [this article for Azure Resource Manager](https://jasong.us/3FSX15y).

As the article explains, there are three ways to solve this. I'm going to focus on the third option, which is to use the Azure Portal. By visiting the portal and following the steps, I can see that sure enough, the namespace is not registered.

{% include open-thumbnail.html path="2021/10/19/resource-provider-notregistered.jpg" alt="Resource Provider Namespace Not Registered" %}

If I click and then click the button to `Register`, the provider registers in the subscription. It will take up to 3 minutes to register. Once all of the appropriate services are registered, you should see a success. Here is my success message from my GitHub Action deploying Bicep:

{% include open-thumbnail.html path="2021/10/19/successful-deployment.jpg" alt="Successful GitHub Action Deployment" %}