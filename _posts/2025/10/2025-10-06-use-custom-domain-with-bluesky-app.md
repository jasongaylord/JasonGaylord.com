---
title: How to Use a Custom Domain with the Bluesky App
author: Jason Gaylord
date: 2025-10-06
categories: [social-media,tech,tip]
tags: [social-media,tech,tip]
post-number: 1302
image: https://cdn.jasongaylord.com/images/2025/10/06/bluesky-account-handle.jpg
bitly: https://jasong.us/3Wl0of3
---

Almost a year ago, the social media landscape saw an exodus from social media platform X, formerly called Twitter, and and influx of users on Bluesky app. If you're unfamiliar with Bluesky, the social media application was started by Jack Dorsey when he was CEO of Twitter back in 2019. You can find out more about how Bluesky stared on the [https://jasong.us/4pUbEg2](Bluesky Zendesk site).

One unfortunate side effect of this application growing so rapidly is the lack of documentation around certain features. For example, the main Bluesky Zendesk page has a call out and link to using a [https://jasong.us/3IVLCs7](Custom Domain). But, the page lacks content. In this post, I'm hoping to fill in the blanks for you.

{% include open-thumbnail.html path="2025/10/06/bluesky-zendesk-custom-domain.jpg" alt="Bluesky App Zendesk - Custom Domain article" %}

## Why would we want a Custom Domain?
That's a great question. Anyone can have a Bluesky address. Mine started as `jgaylord.bsky.social`. But, there's nothing there to indicate that I'm who I say I am. Anyone can create a new Bluesky account and say they're me. That is, unless I go with the free* custom domain option. I say free, with an asterisk, because I either (a) already need to have a domain or (b) be willing to purchase a domain from Bluesky. In my case, I already owned JasonGaylord.com, so I plan on just using that.

## Setting up your Custom Domain
In short, to setup your custom domain, there's really only a few steps:

1. Start the handle update from within Bluesky
2. Update your DNS to include a `TXT` record that points to Bluesky
3. Validate within Bluesky that the DNS is updated

So, let's first open up either the Bluesky app on our mobile device or navigate to the [https://jasong.us/46DpagE](Bluesky app site). Once there, go to Settings > Account > Handle. 

{% include open-thumbnail.html path="2025/10/06/bluesky-account-handle.jpg" alt="Handle screen under Bluesky Settings Account option" %}

From there, choose the option **I have my own domain**. Enter the domain you want to use. Since Bluesky uses the AT protocol, Bluesky will want you to add a `TXT` record for the host `_atproto`. An example is shown below:

{% include open-thumbnail.html path="2025/10/06/bluesky-domain-record.jpg" alt="Bluesky custom domain handle" %}

Once you get those values, you'll need to update your DNS for your custom domain. This can be done using the portal you use to manage your domain. For example, if you have your domain registered with GoDaddy and use their services for web hosting, you would need to modify the DNS at GoDaddy. In my case, I use Microsoft Azure so I navigated to my DNS and choose to add a new record like so:

{% include open-thumbnail.html path="2025/10/06/azure-dns-atproto.jpg" alt="Adding the TXT record for _atproto to Azure DNS" %}

Finally, you can go back to Bluesky and verify that the DNS changes were made. Typically the changes are instantly available. In some cases, it may take several minutes to hours for the changes to replicate. 

When the domain is verified, you'll notice your new handle will be your domain name. So, my [https://jasong.us/bsky](Bluesky account is @jasongaylord.com).