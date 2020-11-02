---
title: Using Hostman for Web Applications
author: Jason Gaylord
date: 2020-11-02
categories: [cloud,dev]
tags:  [cloud,dev]
post-number: 1091
image: https://cdn.jasongaylord.com/images/2020/11/02/hostman-dashboard.jpg
bitly: https://jasong.us/3jQZh1f
---

[Hostman](https://jasong.us/3jKgE3o) is a cloud service that works with Microsoft Azure, Amazon AWS, Google Cloud Platform (GCP), and Digital Ocean to balance and scale your application. They support static sites that use popular javascript frameworks such as React, Vue, Angular, Ember, Svelte, and others. They also support Python, Ruby, Node, PHP, Elixir, Go, and Docker containers. They boast that the deployment and hosting process is extremely easy. I was curious, so I decided to check it out.

To get started, visit [dashboard.hostman.com/signup](https://jasong.us/34Jdrgp). There you can register using GitHub, BitBucket, or Google. Once you have authorized your account, you are taken to a dashboard where you'll create a service. There are 4 types of services:

- **Front-end app or static website** - React, Vue.js, Angular, Ember, Svelte, Preact, and more
- **Back-end app** - Python, Ruby, NodeJS, PHP, Go, Rust, Elixir, and more
- **Docker Container** - Customize your docker service
- **Database** - PostreSQL, MySQL, or MongoDB - Starting at $6.50/mo.

For now, I'd recommend starting with a brand new repository. I created one that you can grab and use as a template at:

{% include github-generate.html bitly="jasong.us/3oHblpk" repo="jasongaylord/hostman" %}

{% include warning-notice.html %}
At the time of this post, you may need to first give access to your specific repository. However, the app may fail to load it properly, especially if it's truly a static app. So, go back to Create the resource as a generic repository and submit your URL. In my case, it's https://github.com/jasongaylord/hostman. Also note that if you are using a public repository, your site will not auto-deploy on update. That is the correct behavior. However, it will auto-deploy from a private repository.
{% include end-notice.html %}

When you attempt to choose a project, choose the appropriate project from the list:

{% include open-thumbnail.html path="2020/11/02/hostman-choose-repository.jpg" alt="Choose the Hostman project" %}

In my case, I then set the framework as a _Static website_ and choose _Deploy_ like below:

{% include open-thumbnail.html path="2020/11/02/hostman-website-configuration.jpg" alt="Hostman project configuration" %}

{% include info-notice.html %}
During my testing of Hostman, I had several minor issues. Each time their support team jumped on the issue and resolved within an hour or two.
{% include end-notice.html %}

I'm interested to hear if you are trying out this new service and what you're using it for. Let me know using the comments below.

{% include link-thumbnail.html path="2020/11/02/hostman-dashboard.jpg" alt="Hostman Dashboard" url="https://jasong.us/3jKgE3o" %}