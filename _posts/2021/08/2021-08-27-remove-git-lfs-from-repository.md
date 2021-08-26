---
title: Remove git-lfs from Repository
author: Jason Gaylord
date: 2021-08-27
categories: [events]
tags: [events]
post-number: 1164
image: https://cdn.jasongaylord.com/images/2021/08/27/git-lfs-env.jpg
bitly: https://jasong.us/3yq92uA
---

Earlier this year, [I wrote](https://jasong.us/344NTZR) about adding `git-lfs` to a project. If you are pushing code to a third party such as GitHub, they may have storage limitations and you may incur unexpected costs.

As a result, you may want to remove `git-lfs` and the lfs files from your project. The difficulty with this is that you'll need to rewrite history to properly remove the hooks from past commits. Luckily, you can do this by using the `filter-remote` command. First, we'll want to start by removing LFS from the repository by running `git lfs uninstall` in the root folder of the repository. Next, we'll want to run a command to rewrite the history. I've included a sample command below. In this case, I'm removing any Adobe PhotoShop file with the past 18 commits. In addition, to make this re-runable, I'm using the `-f` switch to force an overwrite of the backup file.

```shell
git filter-branch -f --index-filter 'git rm --cached --ignore-unmatch *.psd' HEAD~18..HEAD
```

After this runs, you'll want to first `pull` from the remote so the changes can be merged and then `push` the newly merged changed back up to the remote. This will simply remove the hooks and will not necessarily remove the files from storage as it essentially "archives" the files. If you are using GitHub, you'll need to contact their support and mention that you've removed `git-lfs` and need certain LFS files removed. In most cases, you'll want all LFS files removed. In addition, you'll want the provider to downgrade your plan for storage.

{% include open-thumbnail.html path="2021/08/27/git-lfs-env.jpg" alt="git lfs env" %}