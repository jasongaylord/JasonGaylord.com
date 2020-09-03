---
title: gRPC Best Practices
author: Jason Gaylord
date: 2020-09-08
categories: [api,architecture,dev,dotnet,microsoft]
tags:  [api,architecture,dev,dotnet,microsoft]
post-number: 1031
image: https://cdn.jasongaylord.com/images/2020/09/08/grpc.png
bitly: https://jasong.us/32Tu1Im
---

[James Newton-King](https://jasong.us/3hXQSsm), who is most known for [Json.NET](https://jasong.us/3bnwsXi), has published [gRPC Best Practices](https://jasong.us/3i9X40R) on the Microsoft Docs site. He covers how to get the best performance possible from gRPC. Some of the topics he'll cover include:

- Reusing gRPC Channels
- Connection concurrency
- Load balancing
- Keep alive pings
- Streaming

If you're unfamiliar with gRPC, I'd suggest you start on the Docs site by visiting [Introduction to gRPC services](https://jasong.us/2QTsFYk). 

{% include warning-notice.html %}
<strong>Warning:</strong> <a href="https://jasong.us/2QTsFYk" title="ASP.NET Core gRPC" aria-label="ASP.NET Core gRPC">ASP.NET Core gRPC</a> is not currently supported on Azure App Service or IIS. The HTTP/2 implementation of Http.Sys does not support HTTP response trailing headers which gRPC relies on. For more information, see <a href="https://jasong.us/2ELQL57" title="" aria-label="">this GitHub issue</a>.
{% include end-notice.html %}

{% include link-thumbnail.html path="2020/09/08/grpc.png" alt="gRPC" url="https://jasong.us/2QTsFYk" %}