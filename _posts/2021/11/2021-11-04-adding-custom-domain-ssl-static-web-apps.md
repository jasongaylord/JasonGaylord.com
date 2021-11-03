---
title: Adding a Custom Domain and SSL to Static Web Apps
author: Jason Gaylord
date: 2021-11-04
categories: [azure,cloud,dev,dotnet,serverless]
tags:  [azure,cloud,dev,dotnet,serverless]
post-number: 1203
image: https://cdn.jasongaylord.com/images/2021/11/04/azure-static-web-app-hosting-plans.jpg
bitly: https://jasong.us/3EH52t8
---

Azure Static Web Apps are a great way to get started with an application. For most static web apps, the cost is FREE so it's quite appealing. In fact, adding a custom domain and SSL to your static web app is available in the free tier. Learn more about [Creating Your First Azure Static Web App](https://jasong.us/2XmCKRL) by [clicking here](https://jasong.us/2XmCKRL).

{% include open-thumbnail.html path="2021/11/04/azure-static-web-app-hosting-plans.jpg" alt="Azure Static Web App Hosting Plan Features" %}

To add a custom domain, head into your Static Web App and choose the _Custom domains_ menu option. When the _Custom domains_ pane opens, first, copy the name of the auto-generated domain:

{% include open-thumbnail.html path="2021/11/04/azure-static-web-app-auto-generated-domain.jpg" alt="Copy the Azure Static Web App Auto Generated Name" %}

## Mapping Custom Domains
Click the _Add_ button in the pane to add a custom domain. Put in your custom domain name and click next. Before continuing in the wizard, I usually add in my _CNAME_ value into DNS with the copied value from the auto-generated domain. This will allow my application to begin working as soon as the domain has been verified. If you do not plan on using a subdomain, such as `www`, you can simply continue in the wizard (see below). If you are using a subdomain, update your DNS by adding a CNAME record set with a name of your choosing and paste the value of the auto-generated domain in the value field. Once you are done and the record set is saved, you can continue in the wizard to the next step: the Validate + Configure step.

{% include open-thumbnail.html path="2021/11/04/validate-and-configure-screen.jpg" alt="Validate + Configure step" %}

Click to _Generate code_ if choosing to validate using the _TXT_ method. I tend to use _TXT_ if I'm using the root domain and the _CNAME_ method if using a subdomain, such as `www`. If I am using a subdomain, my custom domain should be validated rather quickly.

{% include warning-notice.html %}
Most DNS services, such as GoDaddy, do not offer A-Alias records in their custom DNS. By using `@` as the name and a non-IP as the value, you are effectively creating an A-Alias. If you cannot do this within your DNS and want to use a root domain, I recommend using Azure's DNS services instead.
{% include end-notice.html %}

## Using Azure DNS
I prefer using Azure DNS for a few reasons. First, if I need to make changes to Azure resources, I have near instantaneous DNS replication between name servers. Second, there are features Azure has added to their DNS that are not available in other DNS. We'll see that in the second step below. For example, when adding the root domain and pointing to our static web app, we can choose the `A` type and state that it is an _Alias record set_. This allows us to specify a subscription and an Azure resource. 

{% include open-thumbnail.html path="2021/11/04/dns-add-record-set.jpg" alt="Adding the root domain using Azure DNS and Alias A records" %}

This will create the necessary mapping of your domain back to the Azure static web app.

## Static Web App SSL
Any custom domain for static web apps automatically is provided with an SSL certificate. So, there are no other changes needed for your application.