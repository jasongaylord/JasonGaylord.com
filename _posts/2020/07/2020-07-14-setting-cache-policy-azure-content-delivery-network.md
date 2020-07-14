---
title: Improve Google Lighthouse Score by Setting Efficient Cache Policy in Azure CDN
author: Jason Gaylord
date: 2020-07-14
categories: [cloud,google,microsoft,web]
tags:  [cloud,google,microsoft,web]
post-number: 971
image: https://cdn.jasongaylord.com/images/2020/07/14/azure-cdn-endpoint-add-actions.jpg
bitly: https://jasong.us/2ZmTdpY
---

Azure Content Delivery Network (CDN) is a Microsoft Azure solution to provide a content delivery network that can be distributed across various Azure regions. Microsoft also offers both the Akamai and Verizon CDN services through the Azure marketplace. For purposes of this post, we'll focus on Microsoft's own Azure CDN. This post will assume that you are familiar with [Google Lighthouse](https://jasong.us/3fgO608) and Azure CDN. If you are unfamiliar with Azure CDN, read my earlier post titled [_Setting up a CDN using Azure Storage_](https://jasong.us/2TOn30v).

I recently looked at my Lighthouse score and found the following:

{% include open-thumbnail.html path="2020/07/14/google-lighthouse-static-assets-cache-policy.jpg" alt="Serve static assets with an efficient cache policy from Google Lighthouse" %}

While I have no control over 3rd-party resources, other than not using them, I do have control over my own resources. My site is hosted using GitHub Pages so the first task I'll have is to move any assets loading within the application over to the Azure CDN, if they make sense (i.e. Jekyll is dynamically compiling my SASS, so I'll leave it in my main application). 

Within the Azure Portal, navigate to your CDN and click on your endpoint. In the _Settings_ menu on the left, choose _Rules Engine_.

{% include open-thumbnail.html path="2020/07/14/azure-cdn-endpoint-settings-menu.jpg" alt="Azure CDN Endpoint Settings Menu Option" %}

Next, we'll click on _Add rule_. For each endpoint, we are allowed up to 25 rules at $1/rule/month*. There's also a transactional cost that can be viewed at [https://jasong.us/2ZpVEID](https://jasong.us/2ZpVEID). We'll add a name for our rule. In my case, I'm calling my rule `Images` because I'm going to specify a different cache profile for images as opposed to JavaScript or CSS.

{% include open-thumbnail.html path="2020/07/14/azure-cdn-endpoint-add-rule.jpg" alt="Azure CDN Endpoint Add a Rule Screen" %}

Next, we'll add a condition. I'll choose the _URL Path_ option because I'm going to search for the path that starts with `/images/` as all of my images live in that folder.

{% include open-thumbnail.html path="2020/07/14/azure-cdn-endpoint-add-condition.jpg" alt="Azure CDN Endpoint Add a Rule Screen" %}

Next, we'll add an action, as indicated in the screenshot above. First, I'm going to set the _Cache key query string_. In my case, I may pass a query string to the image to "cache bust" the cache on the client. So, I'll change the behavior to _Cache every unique URL_. Second, I'm going to set the _Cache Expiration_. I'm going to set the behavior to _Set if missing_ and then set the days to _365_. Google Lighthouse always recommends that you cache images for 1 year. Typically I'm not a fan of this, but if I need to update an image, I'll change the path and/or filename to cache bust the client. I can always clear the CDN cache using the Azure portal. 

{% include open-thumbnail.html path="2020/07/14/azure-cdn-endpoint-add-actions.jpg" alt="Azure CDN Endpoint Add an Action Screen" %}

Finally, hit save. It will take up to 10 minutes for your new cache rule to take effect.