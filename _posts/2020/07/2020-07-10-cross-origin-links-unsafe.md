---
title: Cross-Origin Destinations are Unsafe
author: Jason Gaylord
date: 2020-07-10
categories: [development,google,web]
tags:  [development,google,web]
post-number: 967
image: https://cdn.jasongaylord.com/images/2020/07/10/google-lighthouse-best-practices-score.jpg
bitly: https://jasong.us/3iPVh1J
---

Did you know that when you link to another page on your site and open that other page using `target="_blank"` that you can cause performance and security issues? Most folks are unaware. It's best practice to modify your links to add either `rel="noopener"` or `rel="noreferrer"` to these links to avoid these issues. 

* The called page can access your `window` object using the `window.opener` property from script which poses a potential security risk.
* The calling and called page may run within the same browser process which can cause your site to appear to have poor performance.

This may also show up in a [Google Lighthouse](https://jasong.us/3fgO608) audit. Lighthouse is an open-source, automated tool that is aimed at providing insight into your website's performance. Lighthouse currently operates in both Chrome and the new Microsoft Edge built on Chromium. As an example, when I run Lighthouse against one of my posts inside of Microsoft Edge, I can see that I have links I must update as well:

{% include open-thumbnail.html path="2020/07/10/google-lighthouse-best-practices-score.jpg" alt="Configuration Explorer in the Azure App Configuration resource" %}

I have some links I'll have to update.