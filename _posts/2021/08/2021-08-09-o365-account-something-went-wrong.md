---
title: "'Something Went Wrong' When Adding O365 Account to Outlook 2019"
author: Jason Gaylord
date: 2021-08-09
categories: [cloud,microsoft,msoffice]
tags:  [cloud,microsoft,msoffice]
post-number: 1155
image: https://cdn.jasongaylord.com/images/2021/08/09/something-went-wrong.png
bitly: https://jasong.us/3joIS5M
---

If you try adding your Office 365 or Microsoft 365 account to Outlook 2019, you may receive an error that reads `Something went wrong`. An example of this message is below:

{% include open-thumbnail.html path="2021/08/09/something-went-wrong.png" alt="Something Went Wrong when Adding O365 Account to Outlook" %}

To solve this, you should check to see if Modern Authentication is enabled in your Office 365 Tenant. To do this, visit the O365 [Admin Portal Settings](https://jasong.us/3it44YW) and check the box to enable Modern Authentication.