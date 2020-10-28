---
title: Including Your GitHub Statistics in Your GitHub ReadMe.md File
author: Jason Gaylord
date: 2020-10-28
categories: [devops,github]
tags:  [devops,github]
post-number: 1085
image: https://cdn.jasongaylord.com/images/2020/10/29/github-stats-for-jasongaylord.jpg
bitly: https://jasong.us/3mpkCjV
---

[Last month](https://jasong.us/2FP7lky), I shared how to create a `Readme.md` file for your GitHub profile. This little hack allows you to add more content to your GitHub profile. If you're struggling to find additional content to place in your readme, consider adding additional GitHub statistics to your ReadMe. You can do that by using a pre-built statistic generator.

## Using GitHub Readme Stats
This may be the first project to generate statistics for the ReadMe file. This project allows you to hit a URL to generate an image. You can show basic stats, weekly stats, or even the most common languages used within the repositories. You can also customize the look and feel using themes. I'm currently using this within my ReadMe file. 

{% include github-browse.html bitly="jasong.us/2JbLsh8" repo="anuraghazra/github-readme-stats" branch="master" %}

For my profile, it was as simple as adding this into my file:

```markdown
[![My GitHub Stats](https://github-readme-stats.vercel.app/api/?username=jasongaylord&count_private=true&theme=tokyonight&showicons=true)]()
[![My GitHub Language Stats](https://github-readme-stats.vercel.app/api/top-langs/?username=jasongaylord&langs_count=5&theme=tokyonight)]()
```

Of course you'll want to replace the `username` property with your own username. Here is what it looks like on my profile:

{% include link-thumbnail.html path="2020/10/28/github-readme-stats-jasongaylord.jpg" alt="Jason Gaylord's GitHub ReadMe Stats" url="https://jasong.us/3kou1Yt" %}

## Using GitHub Stats
[GitHub Stats](https://jasong.us/34yM4Wb) is another repository that allows you to visualize statistics. This repository relies on GitHub Actions to do the work for you. In addition, this project shows the languages used by file size, the number of lines of code changed, and the repository views in the past two weeks. If you want to use this project, I recommend checking out the repo:

{% include github-browse.html bitly="jasong.us/34yM4Wb" repo="jstrieb/github-stats" branch="master" %}

I've forked the repository myself and executed the GitHub action to calculate accordingly. You can check out [my fork here](https://jasong.us/2G2deLE). Here is what was generated:

{% include link-thumbnail.html path="2020/10/28/github-stats-jasongaylord.jpg" alt="Jason Gaylord's GitHub Stats and Repository" url="https://jasong.us/2G2deLE" %}