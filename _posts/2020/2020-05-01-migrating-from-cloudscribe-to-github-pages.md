---
title: Migrating from CloudScribe to GitHub Pages
author: Jason Gaylord
cloudscribe_id: "938caece-2dda-48ee-bd77-3e5f8a4c3a21"
cloudscribe_path: "/blog/migrating-from-cloudscribe-to-github-pages"
permalink: /blog/migrating-from-cloudscribe-to-github-pages
date: 2020-05-01
categories: [development,jekyll]
tags:  [development,jekyll]
bitly: https://jasong.us/2WuGRK3
---

I've been messing around more and more with GitHub Pages and [Jekyll](https://jasong.us/35iEvSm) as of late. Jekyll is a Ruby application that is built to run and support GitHub Pages and other static websites. The purpose of Jekyll is to provide a lightweight static content generator that operates off of Markdown pages. Since GitHub Pages is great for hosting a blog, I was curious to see what I could do with it. The first step in my process was to see if I could migrate from my existing blog provider, CloudScribe, over to GitHub Pages.

Jekyll offers a slew of importers to get your website up and running. The importers work for many of the most popular blogging platforms including Blogger, Drupal, Ghost, Movable Type, Tumblr, and even WordPress. For the full list of Jekyll importers, head over to their import site at [https://import.jekyllrb.com/](https://jasong.us/3aNMZSz). My first attempt was to fork the GitHub repo and try to add in my first ever Ruby class to the project to support CloudScribe. However, that failed with a not-so-user-friendly error message that I struggled to track down. I'm sure I'm not off by much and I'm likely missing a ruby import somewhere. If you're interested in seeing how far I got, head over to the repository here: [https://github.com/jasongaylord/jekyll-import/](https://jasong.us/2KIPf2L).

My second attempt was to fallback to a familiar codebase where I could quickly and easily test end to end my file generation. In addition, I wouldn't have to worry about Jekyll running locally for it to work properly. So, I created the obscurely named [CloudScribeToJekyll](https://jasong.us/2KHjHKS) project. This project generates a .NET Core console application. The parameters that you can configure are contained inside of the config.json file. The GitHub project has the parameters explained further. To generate your Jekyll files, all you need to do is clone the project and run:

```shell
dotnet cloudscribetojekyll.dll
```

If you're feeling lazy and just want to grab the binaries and execute, you can. I've created a zip file containing everything that you'll need. The only caveat is that you will need to ensure your machine as the .NET Core 2.2 Runtime which you can [install here](https://jasong.us/2So4yCu). The binaries are available at [https://cdn.jasongaylord.com/files/downloads/CloudScribeToJekyll.zip](https://cdn.jasongaylord.com/files/downloads/CloudScribeToJekyll.zip). Then, be sure you are running a command prompt in Administrator mode and run the command I mentioned above.

Before you know it, you'll have your CloudScribe posts converted to Jekyll format and ready for import into your Jekyll website or GitHub Pages.

![https://cdn.jasongaylord.com/images/2020/05/01/jekyll-import-final-post.jpg](https://cdn.jasongaylord.com/images/2020/05/01/jekyll-import-final-post.jpg)