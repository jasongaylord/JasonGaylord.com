---
title: Scheduling GitHub Pages Posts for Future Dates - Part 2
author: Jason Gaylord
date: 2020-05-18 08:00:00 -4
categories: [devops,development,jekyll,tip]
tags:  [devops,development,jekyll,tip]
bitly: https://jasong.us/3cBlugH
---

[Last week](https://jasong.us/2Aqnx9h) I had shared how to use future dates and Travis-CI to schedule posts for a date in the future. You can read that post by visiting [https://jasong.us/2Aqnx9h](https://jasong.us/2Aqnx9h). One thing I did not cover in that post is that you can schedule posts for a specific time (and timezone). 

When writing posts, I can simply add a small adjustment to the `date` part in my frontmatter. On this specific post, I have set the `date` to the following:

```yaml
date: 2020-05-18 08:00:00 -4
```

By doing this, I'm setting the time to 8am ET. GitHub Pages and Travis-CI operate from UTC time. Currently, Eastern Time is `-4`. So, when using Travis-CI, this post will be "skipped" if built anytime before 8am ET on 5/18/2020. 

![](https://cdn.jasongaylord.com/images/2020/05/18/travis-ci-skipping-posts.jpg)

In addition, I like to see the time appropriately on the server in my Travis-CI logs just to be sure it matches with what I'd expect when I look at a build. So, I've included the following in my `.travis.yml` file:

```yaml
before_install:
- export TZ=America/New_York
- date
```

This sets the build server timezone to Eastern Time and then outputs the date in the log and allows me to see the specific time the build kicked off.

![](https://cdn.jasongaylord.com/images/2020/05/18/travis-ci-date.jpg)