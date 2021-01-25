---
title: Federate Azure Active Directory with Google Cloud Identity
author: Jason Gaylord
date: 2021-01-26
categories: [azure,cloud,google,microsoft,security,tip]
tags: [azure,cloud,google,microsoft,security,tip]
post-number: 1129
image: https://cdn.jasongaylord.com/images/2021/01/26/sync-success.jpg
bitly: https://jasong.us/2MlZIW3
---

I predominately use Azure and Azure resources. There are times where Azure simply does not provide the best tool for the job. One of those examples is with Google Maps. In many cases, you may be perfectly happy with using a consumer account on the Google side to manage who has access to what resources on the Google side. However, many enterprises would frown upon this and require the accounts to either be managed in each cloud solution or from a central location. That's where it becomes difficult to know where to start.

In my scenario, I had a full Azure Active Directory setup and was using a consumer account to manage Google Cloud Identity. You always want to have a Google consumer account that can access Google Cloud Identity in the event the Azure Active Directory sync fails. So, what I recommend is creating an account such as google@_mydomain.com_. This account won't be used by anything on your network and you wouldn't create an account on your network with these credentials. The next step would be to [Sign Up for Cloud Identity](http://jasong.us/3qTqZOO). 

From there, you can mostly follow the article on Google at [http://jasong.us/2MjKrVM](http://jasong.us/2MjKrVM). Be sure you pay attention to the details as you'll be adding the Azure Active Directory enterprise application twice. There are two items to call out that are not correct from this article:

1. First, under the _Configuring Azure AD provisioning_ section, Google suggests to find the _Google Cloud/G Suite Connector by Microsoft_ in the Microsoft Azure marketplace. That is not entirely correct. Rather you'll find it within the Azure Active Directory Enterprise Applications marketplace by selecting **Azure Active Directory > Enterprise applications > New application** and searching for **Google Cloud**.
2. Second, under the _Configure SAML settings_ section, instead of using the Identifier `google.com`, you should use `https://google.com/a/mydomain.com`, substituting `mydomain.com` for your domain.

Microsoft also has an article to walk through these steps, which can be found at [http://jasong.us/2KPXCNS](http://jasong.us/2KPXCNS), however I found that it was not as intuitive to follow as Google's tutorial. You will find other Single sign-on tutorials with Azure AD on the Microsoft site.

If all was successful, you'll see your users are added to Google and you'll see a successful sync in Azure AD like the one below:

{% include link-thumbnail.html path="2021/01/26/sync-success.jpg" alt="A successful sync of two users to Google Cloud Identity" %}