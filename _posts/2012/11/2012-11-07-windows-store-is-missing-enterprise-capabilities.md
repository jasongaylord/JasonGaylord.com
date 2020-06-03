---
title: Windows Store is Missing Enterprise Capabilities
author: Jason Gaylord
msmvps_path: "https://blogs.msmvps.com/jgaylord/2012/11/07/windows-store-is-missing-enterprise-capabilities/"
date: 2012-11-07
categories: [archive]
tags: [archive]
bitly: https://jasong.us/3gIohHk
---

The Windows Store is great. Seriously, it is. There are some minor issues with it that I'd like to see such as a way to track "recommended apps" by either your friends or by Microsoft and a way to sort Games by "Xbox" titles. However, the biggest thing the Windows Store is missing is a way for businesses to handle it.

IT professionals have never had to deal with this in the way they do now. Windows design style applications are coming out to accomplish so much and a lot of business functionality is moving to these types of applications. Although, iPads and the rest of the "iParade" could have connected to the network, the Apple world has generally been considered a "separate" network from the traditional machines. The question is, how would an enterprise level store work? Well, I have some recommendations:

- The most obvious is the Group Policy update for enabling and disabling the Windows Store. However, when SalesForce or Microsoft CRM comes out with an app for the Start menu, we cannot disallow the Sales staff from installing it. That's one of the reasons they like to use iPads now.
- Allow corporate sponsored applications to be deployed to Windows 8 devices. All Windows 8 devices. See, I'm a developer. And I know we'll have WindowsRT devices in our organization. And I know I compile apps for x86 and x64. But, there has to be a way that Microsoft can decompile my .NET apps back into IL and allow for deployment to WindowsRT devices. I'm not that well versed in the deep inner-workings of the CLR, but I'm sure that there can be some magic there.
- Allow businesses to add apps to a custom store feed per OU or User. I'm sure this would cause a lot of work to be done and Microsoft would want to charge for it so it sounds like a great addition to System Center. I mean, how cool would it be to open up all games for the IT staff but leave only the Skype app for all other users? Keeping it real, there's no reason why different departments can't have different available apps through their store and can install the apps on demand.

Hopefully we'll see something official from Microsoft in the next 12 months if not sooner. Some of us like the idea of early adoption, but an all or nothing store doesn't help us out.

What are your thoughts?