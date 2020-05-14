---
title: Scheduling GitHub Pages Posts for Future Dates
author: Jason Gaylord
cloudscribe_id: "4242a159-08c1-4354-a635-c3b9354f9206"
cloudscribe_path: "/blog/scheduling-github-pages-posts-for-future-dates"
permalink: /blog/scheduling-github-pages-posts-for-future-dates
date: 2020-05-13
categories: [devops,development,jekyll,tip]
tags:  [devops,development,jekyll,tip]
bitly: https://jasong.us/2Aqnx9h
---

I've been searching all over the web trying to find a way that I could schedule posts for future dates on GitHub pages. I have a tendency of writing content well in advance and scheduling the content to be released for future dates. I was struggling to find a sound solution for this. Searching online directed me to:

- Using [AWS](https://jasong.us/2SVGuHh) or [Azure](https://jasong.us/35RuVpR) to schedule posts which can cost you [pending how often you](https://jasong.us/2xT0a7j) execute
- Using [Zapier](https://jasong.us/2SX57Dp), IFTTT, or Power Automate to push content from one location into your repository
- Running [Cron](https://jasong.us/35RpRBR) jobs locally on a schedule or scheduling via [GitHub Actions](https://jasong.us/3dBixgh) to a different service

However, there's actually a very simple process to schedule your posts.

## Using Travis-CI with GitHub Pages
GitHub pages uses the continuous integrations services of [Travis-CI](https://jasong.us/2WnEk5y) to build GitHub pages. You can sign-up for a free account using your GitHub account. Then, you can specify a repository to automatically build during the commit process. Travis-CI operates off of a basic YAML file. A sample `.travis.yml` file, that can be placed in the root of your GitHub pages site, is included below:

```yaml
language: ruby
rvm:
  - 2.5.3
script: "bundle exec jekyll build"
```

After placing this file in your GitHub pages repo, Travis-CI should be able to understand it, build your site for you based on the configuration, and deploy it to GitHub pages. Once Travis-CI can build your site, you can update the *Settings* for your site and setup a Cron job to run within Travis-CI. You'll do this using their interface. Click the *More options* link in the upper-right hand side of your repository in Travis-CI. Click on the *Settings* option. In there, you'll find an option to configure the Cron job. 

![https://cdn.jasongaylord.com/images/2020/05/13/travis-ci-cron-jobs.jpg](https://cdn.jasongaylord.com/images/2020/05/13/travis-ci-cron-jobs.jpg)

As you can see from the above image, I've chosen to pull the master branch and run the build daily. I've also set the option to Always Run as opposed to only running if the site was built in the past 24 hours.

Next, in your `_config.yml` file of your GitHub pages site, add the following:

```yaml
future: false
```

This will prevent your site from including the future dated GitHub pages.

Now, add a new post with a future date. The date can be specified as just a date or you can also include the time in UTC format. The frontmatter of your post should look similar to this:

```yaml
---
layout: post
title: "Welcome from the Future!"
date: 2025-05-13 08:00:00
---
```

When publishing to GitHub, your post will not appear until after May, 13, 2025 at 8am UTC. The specific time depends on when your CRON job executes.