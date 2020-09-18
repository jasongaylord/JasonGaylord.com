---
title: GitHub CLI is now Available
author: Jason Gaylord
date: 2020-09-19
categories: [dev,devops,github,shell]
tags:  [dev,devops,github,shell]
post-number: 1044
image: https://cdn.jasongaylord.com/images/2020/09/19/github-cli-issue-list.jpg
bitly: https://jasong.us/2HhGC0Z
---

The GitHub Command Line Interface is now generally available and out of beta. To get started, visit [cli.github.com](https://jasong.us/3cdCkD4). 

After download and install, the first step you'll want to take is to authenticate with GitHub. Do this by running the command `gh auth login`. You'll then be prompted to log into GitHub.com or GitHub Enterprise Server. The final question before authenticating will ask you to login with a web browser or paste an authentication token. After you authenticate, you'll need to choose your default git protocol and then you are set.

You can now use any of the commands available to the CLI including, but not limited to:

* `gh gist`
* `gh issue`
* `gh pr`
* `gh release`
* `gh repo`

As well as many others. At any type you can use `gh help` to get more information on any command. For instance, to see a list of issues for my website, simply run:

```shell
gh issue list -R jasongaylord/jasongaylord.com
```

Try it for yourself!

{% include link-thumbnail.html path="2020/09/19/github-cli-issue-list.jpg" alt="Download the GitHub CLI" url="https://jasong.us/3cdCkD4" %}