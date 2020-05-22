---
title: Click-Once Frustrations
author: Jason Gaylord
date: 2006-08-21 11:04:00
aspnet-weblog-link: http://weblogs.asp.net/jgaylord/archive/2006/08/21/Click_2D00_Once-Frustrations.aspx
categories: [aspnet-weblog]
tags: [archive]
bitly: https://jasong.us/36ovE2d
---

Wow! I'm severely disappointed with click-once. I went to use it for a small app I released last week and I find it extremely disturbing that third-party dependencies aren't included in the package as either a dependency or an installable DLL. Instead, you have to use the manifest tools to remove the DLL from the manifest and then add it again. Also, there is no way to specify file types. Finally, I'm disappointed in the amount of information sent to and from the web server during each load. I would have thought that a thinner client would be used to check versions, etc. I have since decided to use a traditional Windows installation package.