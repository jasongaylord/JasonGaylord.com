---
title: Moving JasonGaylord.com to GitHub Pages
author: Jason Gaylord
date: 2020-05-13
categories: [jekyll,personal,web]
tags:  [jekyll,personal,web]
---

Over the past several weeks I've hinted that I may move my website, JasonGaylord.com, over to GitHub Pages. I wanted to do this for a few reasons. The biggest reason was to focus more on delivering content and posts and less on the way something looked and how it worked. [CloudScribe](https://jasong.us/3bogZVs) is a great .NET Core CMS that offers a lot of flexibility in a full featured website. However, that's not the needs of my personal site. 

GitHub Pages uses a static code generator called Jekyll. Jekyll is written using Ruby and follows the open-source Liquid template language. 

Two weeks ago, I [posted about](https://jasong.us/2WuGRK3) migrating posts from CloudScribe to Jekyll. It's really more than that. While I'm using the code I published for Jekyll, this process allows you to export posts out of CloudScribe and into Markdown. It may not be a bad idea to periodically do this anyway as a backup mechanism. It's a pretty dirty and basic export process for now, but with the right care, can be updated to support more functionality.

Next, I spoke about creating a [Jekyll theme from a Windows machine](https://jasong.us/35luIer). There are a few minor differences creating themes from Windows as opposed to using a Linux box or Mac. Earlier this week I posted a theme that I created and is the basis for this site. The theme is called [SpaacedOut](https://jasong.us/3fBMNtn) and is available as a Ruby gem or a remote theme.

One of my biggest concerns was coming up with a very basic way to schedule posts. I don't need anything super elaborate, but I tend to write 3-4 posts at a time. So, I wanted the ability to schedule posts. Yesterday I blogged about using [Travis-CI](https://jasong.us/2Aqnx9h) and tying that back to my GitHub repo to perform a build daily. I have setup a Travis-CI CRON job to run at 9am ET each day.

While I'll be tweaking the site going forward, I hope you find the site to be more responsive and that it's easier to find content. Please feel free to provide feedback.

![https://cdn.jasongaylord.com/images/2020/05/14/jasongaylord-dot-com.jpg](https://cdn.jasongaylord.com/images/2020/05/14/jasongaylord-dot-com.jpg)