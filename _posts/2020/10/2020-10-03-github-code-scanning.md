---
title: Using Code Scanning in GitHub
author: Jason Gaylord
date: 2020-10-03
categories: [dev,devops,github,security]
tags:  [dev,devops,github,security]
post-number: 1058
image: https://cdn.jasongaylord.com/images/2020/10/03/github-code-analysis-running.jpg
bitly: https://jasong.us/3nf0oKI
---

Earlier this week, GitHub has officially released _Code scanning alerts_. To get started, visit the repository that you'd like to enable alerts on. In my case, I'm going to get started with the repository I created in [yesterday's post](https://jasong.us/30tEgTo).

Visit the repository's Security tab and choose _Set up code scanning_ from the Overview page.

{% include open-thumbnail.html path="2020/10/03/github-code-scanning-alerts.jpg" alt="Enable GitHub Code Scanning Alerts" %}

Next, you'll have the option to choose the GitHub CodeQL Analysis or to use an analysis tool from the GitHub Marketplace.

{% include open-thumbnail.html path="2020/10/03/github-choose-code-scanning-tool.jpg" alt="Choose GitHub Code Scanning Alerts Tool" %}

By choosing a tool, this will add a GitHub Action to your project:

{% include open-thumbnail.html path="2020/10/03/github-action-code-analysis-tool.jpg" alt="Adding the CodeQL Analysis Tool to your Repository" %}

As the analysis is executed, which it will be as soon as you add it, the action will be executed:

{% include open-thumbnail.html path="2020/10/03/github-code-analysis-running.jpg" alt="Executing CodeQL" %}

Finally, after it is executed, you'll be able to revisit the Security tab to see any appropriate security alerts.

{% include open-thumbnail.html path="2020/10/03/github-code-analysis-scanning-alerts.jpg" alt="GitHub Code Analysis Scanning Alerts" %}