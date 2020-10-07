---
title: Export Bitly Links to JSON using the Bitly API
author: Jason Gaylord
date: 2020-10-08
categories: [api,data,dev,productivity,web]
tags:  [api,data,dev,productivity,web]
post-number: 1063
image: https://cdn.jasongaylord.com/images/2020/10/08/bitly-api-calls-postman.jpg
bitly: https://jasong.us/2GCVgQ6
---

I've been using Bitly as my URL shortener for years and I'll likely never switch. The service works great and I love the metrics that are produced. However, there's no great way to have a backup of your links unless you pay for a higher version. 

The first step is to create an access token. You can do this by visiting [bitly.is/accesstoken](https://bitly.is/accesstoken). Next, you'll need to capture the Group ID you are looking to target. To get this, navigate to the group you are looking to target. If you are using a free account, you are likely unfamiliar with groups as there is a default group that you cannot change. In this case, you can get the Group ID from the URL:

{% include open-thumbnail.html path="2020/10/08/bitly-group-id.jpg" alt="Bitly Group ID" %}

If you are not sure what groups are present, you can also perform a GET on the url `https://api-ssl.bitly.com/v4/groups` to list the groups. If you have more than one organization, you can pass over the organization GUID with a parameter `organization_guid` and supplying the GUID.

With that, we can now authenticate and pull our Bitly links. We'll do this by hitting their API and passing over the bearer token already generated in the header. So the header will look like `Authorization: Bearer {access_token}` where the `{access_token}` is the value you obtained above. Next, you'll want to perform a GET on the url `https://api-ssl.bitly.com/v4/groups/{group_id}/bitlinks` where `{group_id}` is the ID we captured above. If you pass over no other parameters, you'll get the first page of up to 50 bitlinks per page. You can see the total number of bitlinks and also the API call for the next page. Keep in mind that the bitlinks are sorted in datetime descending order.

I'd recommend getting started by using the Bitly API documentation and Postman.

{% include open-thumbnail.html path="2020/10/08/bitly-api-calls-postman.jpg" alt="Connect to Bitly API from Postman" %}