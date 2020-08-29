---
title: GitHub Pages Dependencies and Versions
author: Jason Gaylord
cloudscribe_id: "0c7e8bcd-c07d-4c81-8201-5ab67d33f58f"
cloudscribe_path: "/blog/github-pages-dependencies-and-versions"
permalink: /blog/github-pages-dependencies-and-versions
date: 2020-05-09
categories: [dev,github,jekyll]
tags:  [dev,github,jekyll]
bitly: https://jasong.us/3bk9UoR
---

[Jekyll](https://jasong.us/35iEvSm) 4.0 was released on August 20, 2019. However, GitHub pages does not natively [support 4.0 today](https://jasong.us/2SL5qB2). They currently support only version 3.8.5 today. There are ways to pre-compile you application using Jekyll 4 and deploy the contents to the gh-pages branch of your GitHub pages application. One way you can accomplish this is by using a GitHub action such as the [one built by Bryan Schuetz](https://jasong.us/35JF4F9). GitHub also limits the dependencies they support out of the box. So, if you'd like to use [jekyll-admin](https://jasong.us/3dtQOxU), for example, you'll have to pre-compile. I recommend that before starting to use GitHub Pages with Jekyll, you are certain you are aligning your dependencies with those found on GitHub Pages. The site [https://pages.github.com/versions/](https://jasong.us/3fw3k1R) will help you with this.

![https://cdn.jasongaylord.com/images/2020/05/09/github-pages-dependency-versions.jpg](https://cdn.jasongaylord.com/images/2020/05/09/github-pages-dependency-versions.jpg)