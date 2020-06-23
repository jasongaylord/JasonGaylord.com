---
title: Pending Fix in the Client Side Azure App Configuration Library
author: Jason Gaylord
date: 2020-06-23
categories: [cloud,development,microsoft]
tags:  [cloud,development,microsoft]
post-number: 948
image: https://cdn.jasongaylord.com/images/2020/06/08/add-feature-showaboutme.jpg
bitly: https://jasong.us/3ev93nQ
---

In an earlier post titled [Adding Azure Feature Flags to Your ASP.NET Razor Pages Application](https://jasong.us/2AL2pdP), I demonstrated how to use the Azure App Configuration resource type to create feature flag capabilities for a .NET Core server side application. For an upcoming installment, I was hoping to demonstrate that same capability using client side in an Angular application. When using the `@azure/app-configuration` 1.0.1 package, I noticed that the package was using the `crypto` package for signing the authentication request. In fact, I was receiving the following error:


```shell
core.js:6228 ERROR Error: Uncaught (in promise): TypeError: Object(...) is not a function
TypeError: Object(...) is not a function
    at AppConfigCredential.signRequest (appConfigCredential.js:23)
    at SigningPolicy.push../node_modules/@azure/core-http/es/src/policies/signingPolicy.js.SigningPolicy.signRequest (signingPolicy.js:20)
    at SigningPolicy.push../node_modules/@azure/core-http/es/src/policies/signingPolicy.js.SigningPolicy.sendRequest (signingPolicy.js:24)
    at GenerateClientRequestIdPolicy.push../node_modules/@azure/core-http/es/src/policies/generateClientRequestIdPolicy.js.GenerateClientRequestIdPolicy.sendRequest (generateClientRequestIdPolicy.js:24)
```

After some digging, I [submitted an issue](https://jasong.us/3hU4y8s) to the team via GitHub and they have confirmed that it is an issue that they'll be [fixing soon](https://jasong.us/2Z0dvUV). Until then, this is something that will likely cause an issue in some, if not all, browsers.

You can always visit my [earlier post](https://jasong.us/2AL2pdP) and use server side feature flags until this is resolved.

{% include link-thumbnail.html path="2020/06/08/add-feature-showaboutme.jpg" alt="Azure App Configuration and Feature Flagging" url="https://jasong.us/2AL2pdP" %}