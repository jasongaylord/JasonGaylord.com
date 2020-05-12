---
title: Scoping a Private NPM Registry
author: Jason Gaylord
cloudscribe_id: "fbecda99-60d8-4822-ad30-a1d0dfbb5a37"
cloudscribe_path: "/blog/scoping-a-private-npm-registry"
permalink: /blog/scoping-a-private-npm-registry
date: 2018-10-31
categories: [development,devops]
tags:  [development,devops]
---

If you’re using a custom package manage, such as JFrog, Verdaccio, or Azure Artifacts, you’ll notice that each includes an upstream feed allowing you to cache publicly available npmjs.org packages. However, you may prefer to use the public feed for public packages assuring that you have the latest versions. In this case, you’ll want to scope your NPM repository. In a lot of cases, you’ll have a username and password accompanying the custom NPM feed. So, I recommend referencing the repository in an .npmrc within the project and storing your credentials in an .npmrc file in your default user bin (in Windows, this is usually `%userprofile%`) 

The .npmrc file in the project, may look like this:

```csharp
@foo:registry=https://foo.pkgs.visualstudio.com/_packaging/bar/npm/registry/
@foo:always-auth=true
```

{% include info-notice.html %}
<strong>Tip:</strong> If you do not scope that you are always authenticating, you will receive an error that <code>'This request requires auth credentials. Run 'npm login' and repeat the request.'</code> This is due to the login being globally set instead of set to the appropriate repository.
{% include end-notice.html %}

The .npmrc file in your user profile, may look like this:

```csharp
//foo.pkgs.visualstudio.com/_packaging/bar/npm/registry/:_authToken={AUTH_TOKEN}
//foo.pkgs.visualstudio.com/_packaging/bar/npm/:_authToken={AUTH_TOKEN}
```