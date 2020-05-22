---
title: "Best Practice? - Google Redirects 404s"
author: Jason Gaylord
date: 2008-02-12 12:56:00
aspnet-weblog-link: http://weblogs.asp.net/jgaylord/archive/2008/02/12/best-practice-google-redirects-404s.aspx
categories: [aspnet-weblog]
tags: [archive]
bitly: https://bit.ly/2ZmGTGQ
---

I just [read a post](http://seoker.com/2008/02/11/google-hijacking-404-error-pages/) a little while ago about the Google Toolbar (beta) redirecting web visitors away from [your custom 404 and to a Google 404 page](http://seoker.com/2008/02/11/google-hijacking-404-error-pages/). Besides the issues mentioned on Seoker.com, I'd have a problem as a business owner. This would mean that my visitors and users would be redirected away from my site and could land on a competitors page if they use the Google search bar. So, as a small business owner, I may need to have a bottomless checkbook to ensure this doesn't happen. As a developer, I'd be upset that Google would do this because I may purposely redirect the user to a correct page. For instance, I have an application right now that sends all 404s to a common `HttpHandler`. If the handler finds the page in a SQL table, it will redirect the user to the correct URL (ie: mysite.com/special might redirect to mysite.com/products/producta.aspx). I just feel that Google, who complains often that Microsoft forces users to use the Microsoft way, is contradicting itself.

What do you think? Am I wrong in saying that Google has no right to redirect visitors?