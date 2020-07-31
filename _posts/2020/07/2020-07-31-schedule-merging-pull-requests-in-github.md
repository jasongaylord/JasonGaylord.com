---
title: Schedule Pull Request Merges in GitHub using a GitHub Action
author: Jason Gaylord
date: 2020-07-31
categories: [devops,github]
tags:  [devops,github]
post-number: 990
image: https://cdn.jasongaylord.com/images/2020/07/31/github-action-merge-schedule.jpg
bitly: https://jasong.us/334qCIo
---

I'm currently using GitHub Pages and Jekyll to serve up my website. I frequently write blog posts days if not weeks ahead of time. In fact, at the time of this post, if you checked my repository, you'll probably see several pull requests that will be merged in at some point in the next week. Last weekend, I went camping and had to find an Internet connection every time I wanted to merge a pull request. All that did was keep me from enjoying the lack of connectivity. Finally, I don't have to pause what I'm doing to merge in each day.

While GitHub has no native solution to schedule a pull-request, like most git solutions do not, I can use a [GitHub Action](https://jasong.us/3ffgaQG) built by [Gregor Martynus](https://jasong.us/39Cc7ww) to do the job. You can get the GitHub Action by visiting [github.com/marketplace/actions/merge-schedule](https://jasong.us/3fcVYz1). It's pretty simple to setup this GitHub Action.

## Step 1: Add a new workflow YAML file
First, create the folder structure, if it doesn't exist, in your project for workflows as: `.github\workflows`. Next, create a YAML file like the following:

```yml
name: Merge Schedule
on:
  pull_request:
    types:
      - opened
      - edited
  schedule:
    - cron: 0 8 * * *
jobs:
  merge_schedule:
    runs-on: ubuntu-latest
    steps:
      - uses: gr2m/merge-schedule-action@v1.x
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

In my YAML file, you'll see the cron job schedule I'm using is at 8am UTC each day. If you are interested in creating your own schedule, be sure to check out [crontab.guru](https://jasong.us/2P8hla4).

That's it for the project changes. Just publish these changes to your project.

## Step 2: Schedule the pull request
This step is super simple. When you create your pull request, add the date to the end of your notes in the conversation block of your pull request:

```md
/schedule 2020-08-01
```

This will now schedule the pull request merge to complete at 8am UTC on August 1, 2020.

## Summary
In this post we've added a GitHub Action to our project and scheduled a pull request. To learn more about how the action works, head over to Gregor's blog post at [jasong.us/3jRrDcC](https://jasong.us/3jRrDcC). Upon success, you should see that the github-actions `bot` merged the commit:

{% include open-thumbnail.html path="2020/07/31/github-action-merge-schedule.jpg" alt="GitHub Action Merged 7/29 Post" %}