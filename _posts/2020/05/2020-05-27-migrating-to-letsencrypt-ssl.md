---
title: Free Azure SSL Using Let's Encrypt and ACMEv2
author: Jason Gaylord
permalink: /blog/azure-devops-change-may-break-application
date: 2020-05-27
categories: [cloud,devops,development,security]
tags:  [cloud,devops,development,security]
bitly: https://bit.ly/3dgQLWR
---

I've been using the free SSL service with [Let's Encrypt](https://jasong.us/2pX9nUA) for several years now. It's nice to be able to offer SSL on sites without the cost. We also use Let's Encrypt to issue SSL certificates for [TechBash.com](https://jasong.us/tb). In late 2018, I blogged about using Azure functions and [add a site extension](https://bit.ly/2ZBHggD) to your account. Then in February of 2019, I blogged about a new Azure DevOps [change that caused a failure](https://bit.ly/2X1IJLt). Recently, I have been receiving a notice from Let's Encrypt that my software client was using ACMEv1:

> According to our records, the software client you're using to get Let's Encrypt TLS/SSL certificates issued or renewed at least one HTTPS certificate in the past two weeks using the ACMEv1 protocol. Here are the details of one recent ACMEv1 request from each of your account(s)...

<a href="https://cdn.jasongaylord.com/images/2020/05/27/lets-encrypt.jpg"><img src="https://cdn.jasongaylord.com/images/2020/05/27/lets-encrypt.jpg" alt="Let's Encrypt" style="width:400px;" /></a>

As I read some of the open issues for my existing extension, I noticed several having issues connecting using ACMEv2 with it. So, I started looking at alternatives and found two.

{% include warning-notice.html %}
<strong>Warning:</strong> Your custom domain DNS must be managed by an Azure DNS Zone for the following to work. If it is not, please visit <a href="https://bit.ly/3d7zrU6">https://bit.ly/3d7zrU6</a> for other options.
{% include end-notice.html %}

## Option 1: Using AzureWebAppSSLManager
This service will capture new certificates from Let's Encrypt, validate the certs against a TXT record in Azure DNS, download the certs to blog storage, and install the certs to any app service or function you desire within a single Azure subscription.

#### Azure Configuration
Before we begin, we'll need to setup several resources. 

1. Setup a blob storage account (or use an existing account). The account can be any version of storage. You'll need to capture the storage connection string. You can accomplish this by navigating to the storage account, then under Settings and Access keys, copy one of the two connection strings.
2. Setup a service principal. You'll need to capture the principal client ID, client secret, and tenant ID. You can setup the service principal by following the documentation on the [docs.microsoft.com website](https://jasong.us/2NOFBuy) or by navigation to the Azure CLI and entering:

> ```
> az ad sp create-for-rbac
> ```

{% include info-notice.html %}
<strong>Note:</strong> It's a good idea for you to capture the appId, password, and tenant. It's especially important to capture the password as you won't be able to obtain this again after leaving the screen or terminating the CLI window.
{% include end-notice.html %}

3. Setup SendGrid and obtain a SendGrid API key. SendGrid is free for up to 100 emails a day. 
4. You'll need to capture your Azure Subscription ID as well.

#### Other Information Needed
There will be a few other pieces of information you'll need.

1. A certificate owner email address and password. This will be used with Let's Encrypt
2. The email sender you'll be using to send the messages out.

These settings can be created in the Azure Web App configuration section when the application is deployed.

#### Deploying
This option can be deployed by [clicking here](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2Fn3wt0n%2FAzureWebAppSSLManager%2Fmaster%2FARM%2520Template%2Ftemplate.json). 

## Option 2: Using Acmebot
This option is a little bit more straight forward especially if you lack experience with app configuration and/or Azure configuration. To get started, you can [click here](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2Fshibayan%2Fappservice-acmebot%2Fmaster%2Fazuredeploy.json). This service also allows you to not only use Let's Encrypt, but also BuyPass. 

{% include info-notice.html %}
<strong>Note:</strong> I always recommend setting up a separate resource group for these resources. Typically, I use a group called 'myapp-letsencrypt' or something similar.
{% include end-notice.html %}

After the template is deployed, you'll have a new storage account, app service plan, app service (with a function), and an application insights account. 

#### Configuring the App Service
The first step to using this option is to navigate to the `Authentication/Authorization` menu in the newly created app service. In there, you'll want to change the action to `Log in with Azure Active Directory`. Next, choose `Azure Active Directory` under the Authentication Providers and configure using the `Express` mode. Finally, click Ok and then Save your actions on the previous pane. 

The next step is to visit the `Access control (IAM)` on the resource group that contains the app service and app that you would like to secure. Based on my suggestion above, this will likely be another resource group (i.e. `myapp-prod` or something similar). You'll want to first add a new role assignment for `Website Contributor`. Be sure to change the value of `Assign access to` to the value `Function`. You'll see your new function appear. Next, you'll add a new role assignment for `Web Plan Contributor`. 

#### Issuing Your First Certificate
You'll need to issue your initial certificate to each app service so that it will initiate the timer process. To do that, you'll access `https://YOURFUNCTION.azurewebsites.net/add-certificate` and fill out the online form. Within a minute, you're app will have a new certificate. Every few days, the function will check for expiring certificates and renew them automatically. In addition, this extension will keep itself up to date.