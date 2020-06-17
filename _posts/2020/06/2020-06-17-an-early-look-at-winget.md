---
title: An Early Look at Winget
author: Jason Gaylord
date: 2020-06-17
categories: [microsoft,shell,windows]
tags:  [microsoft,shell,windows]
post-number: 942
image: https://cdn.jasongaylord.com/2020/06/17/winget-install-node.png
bitly: https://jasong.us/2UQW0Fl
---

During Build 2020, Microsoft released a [preview of Winget](https://jasong.us/3coOiIy). At that same time, AppGet, which I was using along with Chocolatey, [announced it was shutting down](https://jasong.us/303HEEO) as a result. I haven't spent much time looking at Winget, but since I have to transition off of AppGet and I needed to setup a new machine, I started looking at it more.

As of now, Winget can be installed one of three ways:

1. Joining the [Windows Package Manager Insiders Program](https://jasong.us/3ekdMZ6), getting approved, then installing the preview version of the [App Installer](https://jasong.us/30Mf2jQ) app
2. Join the [Windows Insider](https://jasong.us/30N902w) preview program
3. Grab the latest [release from the GitHub repository](https://jasong.us/2YFwDr7)

We'll proceed with the last option. When installing, use the *.appxbundle file. You'll notice that a dialogue box will appear like the box below. Just dismiss the box.

{% include open-thumbnail.html path="2020/06/17/winget-proper-functioning-dialogue.png" alt="Dialogue box stating 'For proper functioning of the app, try to launch a Windows app package.'" %}

In PowerShell or another command line tool, we can use `winget` plus an action such as `install` to install a package or `show` to show package information. For a complete list of commands, use the command `winget --help`. 

If we wanted to install node and typed `winget install node`, Winget cannot simply install node. Rather, you'll get a listing of 4 different packages like so:

```shell
PS C:\> winget install node
Multiple apps found matching input criteria. Please refine the input.
Name         Id                Version Matched
----------------------------------------------------
Node.js      OpenJS.Nodejs     14.4.0  Moniker: node
Renode       Renode.Renode     1.9.0
Nodist       Nodist.Nodist     0.9.1   Tag: node.js
CodeLite IDE CodeLite.CodeLite 14.0.0  Tag: NodeJS
```

If I tried refining using `winget install --moniker node`, I'll still get the Node.js and Renode package. Generally speaking, the acceptable way to filter the package is to use the Id like so `winget install --id OpenJS.Nodejs`. This is not the ideal pattern, but it's a step in the right direction.

Below is a screenshot representing what I've depicted above:

{% include open-thumbnail.html path="2020/06/17/winget-install-node.png" alt="Installing Node.js using Winget" %}