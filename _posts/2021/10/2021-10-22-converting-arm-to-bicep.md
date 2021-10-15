---
title: Converting ARM JSON to Bicep for Infrastructure as Code
author: Jason Gaylord
date: 2021-10-22
categories: [azure,cloud,dev,microsoft]
tags:  [azure,cloud,dev,microsoft]
post-number: 1197
image: https://cdn.jasongaylord.com/images/2021/10/22/
bitly: https://jasong.us/3mZHHM0
---

Last fall, I [posted about Project Bicep](https://jasong.us/35G3O39). At the time it was a very early concept to replace standard ARM templates using JSON. Since the syntax is not JSON, the syntax is much easier to validate with Intellisense and simplifies the syntax.

### Exporting Resources in Azure
You may not be sure where to get started with Bicep. You may have visited the Azure Portal, clicked on a resource, and then on `Export template` in the Automation section. However, the template is in the original JSON format and not Bicep. That's ok. Let's download one of our resources to get started using Bicep for Infrastructure as Code. By default, parameters will be included. We'll be using the `template.json` file in the download.

{% include open-thumbnail.html path="2021/10/22/export-template.jpg" alt="Azure Portal Export Template as ARM JSON" %}

Copy the `template.json` file to a folder that you can easily navigate to in Powershell.

### Installing Bicep
To install Bicep, first make sure you have the latest version of the Azure CLI installed. As of this post, the latest version was **2.29.0**. You can update the Azure CLI by [following the instructions available here](https://jasong.us/3AJIKVe). Next, install Bicep using the Azure CLI command `az bicep install` which is available in version 2.20.0 of the CLI and later:

```powershell
az bicep install
```
Once it's successfully installed, you should receive the appropriate message:

{% include open-thumbnail.html path="2021/10/22/az-bicep-install.jpg" alt="Installing Azure Bicep" %}

It's also good practice to upgrade bicep, which is updated out of band. You can do this by running:

```powershell
az bicep upgrade
```
### Convert the ARM JSON to Bicep
The final step is to decompile the ARM JSON to Bicep. Luckily, the bicep CLI has a tool that, as advertised, is a "best-effort process" to decompile. To run this process, run the following command:

```powershell
az bicep decompile --file template.json
```

After you execute, as long as the ARM JSON was properly formatted, you should have a new file with the same root name as the ARM JSON file, but with a `.bicep` extension. As mentioned in my [previous post about Bicep](https://jasong.us/35G3O39), one of the benefits is a simplified representation of the infrastructure as code. In my case, I was able to condense the file from 7.86 KB to 4.42 KB. 

You can now use the new Bicep file to deploy your infrastructure. Be sure to follow [@BicepLang](https://jasong.us/3imE8Mr) and [#BicepLang](https://jasong.us/3hrx0Nb) on Twitter.