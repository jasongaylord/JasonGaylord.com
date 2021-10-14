---
title: Committing Large File Changes Using GIT-LFS
author: Jason Gaylord
date: 2021-05-24
categories: [dev,devops,github,tip]
tags: [dev,devops,github,tip]
post-number: 1150
image: https://cdn.jasongaylord.com/images/2021/05/24/git-lfs-error.jpg
bitly: https://jasong.us/344NTZR
---

Git has a large file storage system that allows you to store large files, such as Adobe PhotoShop files, within Git. By default, GitHub only allows you to store files up to 100 MB in size. Git LFS allows storing of files up to a couple of GB. Git LFS is an open source project originally developed by GitHub. You can download the latest version by visiting [https://jasong.us/3faVcpf](git-lfs.github.com). 

Once you've downloaded and installed Git LFS, it's quite easy to get started. First, go to a command prompt and execute `git lfs install`. You only need to run this once per user account and not per repository. Next, in each repository with large files, you'll want to track the files that are over the size limit. As an example, if I have a file called logo.psd in a marketing folder, I'll use the command `git lfs track "marketing\logo.psd"`. However, this can become cumbersome as you add more PhotoShop files. So instead, you can use wildcards to track all `.psd` files. To do that, just use `git lfs track "*.psd"`. Finally, you'll want to be sure the changes that Git LFS made to the `.gitattributes` file are checked in. So, use `git add .gitattributes`. Remember, just because you're tracking the file(s) with Git LFS does not mean they are added to your change list. This means you'll still need to use the command `git add marketing\logo.psd` to add the `logo.psd` file to your commit changes. 

The above is assuming you've thought about using Git LFS before attempting to commit changes. But, what if you forgot to track files in a repository? Or even forgot to install Git LFS on a new machine? If you do, you still may receive an error like the one below:

{% include open-thumbnail.html path="2021/05/24/git-lfs-error.jpg" alt="Git LFS Error" %}

This is because the commit history is already written. So, if you install or enable after the fact, you'll need to do one more thing. [https://jasong.us/3yyASWL](Since version 2.2.0), you can use the `git lfs migrate` command to update the large object pointers to Git LFS. Using the example above, I can change all PhotoShop files by running `git lfs migrate import --include="*.psd"`.