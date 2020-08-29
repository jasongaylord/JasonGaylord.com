---
title: "RESOLVED: Pending Fix in the Client Side Azure App Configuration Library"
author: Jason Gaylord
date: 2020-06-29
categories: [azure,cloud,dev,microsoft]
tags:  [azure,cloud,dev,microsoft]
post-number: 954
image: https://cdn.jasongaylord.com/images/2020/06/08/add-feature-showaboutme.jpg
bitly: https://jasong.us/38bjkD0
---

{% include info-notice.html %}
<strong>UPDATE:</strong> This issue has been resolved. Visit <a href="https://jasong.us/38EOoLZ">https://jasong.us/38EOoLZ</a> for more details.
{% include end-notice.html %}

Earlier this month, I [posted about a pending fix in the client side Azure App Configuration library](https://jasong.us/3ev93nQ). In the post, I mentioned a `crypto` exception. The exception would occur during the `signRequest` function in the `@azure/app-configuration` 1.0.1 package. An example message is below:

```shell
core.js:6228 ERROR Error: Uncaught (in promise): TypeError: Object(...) is not a function
TypeError: Object(...) is not a function
    at AppConfigCredential.signRequest (appConfigCredential.js:23)
    at SigningPolicy.push../node_modules/@azure/core-http/es/src/policies/signingPolicy.js.SigningPolicy.signRequest (signingPolicy.js:20)
    at SigningPolicy.push../node_modules/@azure/core-http/es/src/policies/signingPolicy.js.SigningPolicy.sendRequest (signingPolicy.js:24)
    at GenerateClientRequestIdPolicy.push../node_modules/@azure/core-http/es/src/policies/generateClientRequestIdPolicy.js.GenerateClientRequestIdPolicy.sendRequest (generateClientRequestIdPolicy.js:24)
```

On Friday, the Microsoft team confirmed that the issue has been solved and merged in the appropriate pull request. The fix will be pushed into their production release during the first week of July. However, if you're like me and would like to try it out in advance, you can visit [https://www.npmjs.com/package/@azure/app-configuration/v/1.1.0-dev.20200625.2](https://jasong.us/3ePqhMU). Thanks to Richard and everyone else that helped to solve this!

You can always visit my [earlier post](https://jasong.us/2AL2pdP) and use server side feature flags until this is released into the production/stable NPM feed.

{% include link-thumbnail.html path="2020/06/08/add-feature-showaboutme.jpg" alt="Azure App Configuration and Feature Flagging" url="https://jasong.us/2AL2pdP" %}