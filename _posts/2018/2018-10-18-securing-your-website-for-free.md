---
title: Securing Your Website for Free
author: Jason Gaylord
cloudscribe_id: "781987fe-fedb-4fe8-839e-a332e918b420"
cloudscribe_path: "/blog/securing-your-website-for-free"
permalink: /blog/securing-your-website-for-free
date: 2018-10-18
categories: [development,security]
tags:  [development,security]
---

If you concern yourself with security, you probably have heard of [Troy Hunt](https://jasong.us/2J3Xm8F). Over the years, Troy has blogged about numerous free SSL services including [Let’s Encrypt](https://jasong.us/2pX9nUA) and [Cloudflare](https://jasong.us/2NKkY2Q). He’s also blogged a lot about why [static](https://jasong.us/2J30eCv) [websites](https://jasong.us/2CQmsHH) need [HTTPS](https://jasong.us/2EwnXwx). I’ve long been a fan of Let’s Encrypt and use Azure WebApps for many of my projects, especially those that are supporting non-profit organizations, such as [TechBash](https://jasong.us/techbash), or those for personal use such as [my own blog](https://jasong.us/blog). So, while this post will specifically target those using Azure, you can and should use Let’s Encrypt or Cloudflare regardless of your hosting provider. 

For purposes of this post, I’m going to use:

- Azure Active Directory and Service Principal Accounts*
- Azure Function app
- Azure Web app
- Let’s Encrypt

{% include info.html notice="*Note: It is recommended that to be a global administrator in Azure or other role with elevated privileges to properly create the service principal account and role." %}

In addition, you do not have to be a developer to complete this. The average Azure user will most likely complete these tasks in 20 minutes.

## Step 1: Create a Service Principal Account in Azure
Rather than providing screen shots that will become outdated, I recommend following the procedure documented on the [Docs.Microsoft.com website here](https://jasong.us/2NOFBuy). 

When going through the process, I’d recommend choosing a display name should be something that’s easy to understand. I tend to use the name of the application along with letsencrypt so I can easily identify this service account. Also, the login/home page value doesn’t really matter for this purpose as this will only be used for the function. However, the important thing to note is that this URL will allow users to login against Azure AD. So, I typically use an endpoint that is still valid, but is not publicly accessible.

## Step 2: Install and Auto-Renew Certificates
Simon J.K. Pederson is the primary author of an Azure site extension called the “[Let’s Encrypt Site Extension](https://jasong.us/2PEpul6).” Last year, he wrote a blog post explaining how to use an Azure function to [create, install, and auto-renew](https://jasong.us/2P4BY8O) your Let’s Encrypt certificate. While the post gets you 90% of the way there, I had discovered that some of the named parameters do not match the parameter in Azure very well. So, I’ve created a quick GitHub repository that contains the Azure function (run.csx file) available at [https://github.com/jasongaylord/LetsEncryptFunctionDemo](https://jasong.us/2NLm9il "https://github.com/jasongaylord/LetsEncryptFunctionDemo"). I highly recommend copying the code in this file as opposed to what Simon has posted as this replaces the soon to be deprecated TraceWriter class. In addition, I’ve provided hints for 13 variables that are defined [within the README.md file](https://jasong.us/2OuncbM).