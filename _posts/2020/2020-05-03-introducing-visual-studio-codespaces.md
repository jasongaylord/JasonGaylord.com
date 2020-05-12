---
title: Introducing Visual Studio Codespaces
author: Jason Gaylord
cloudscribe_id: "82b9acb8-dbe1-412d-84a6-77b1e605c666"
cloudscribe_path: "/blog/introducing-visual-studio-codespaces"
permalink: /blog/introducing-visual-studio-codespaces
date: 2020-05-03
categories: [cloud,development,devops]
tags: [cloud,development,devops]
---

Technically, Visual Studio Codespaces has been around for several months. Back in November 2019, Visual Studio Online was announced. However, the name "Visual Studio Online" has lost its place in the Microsoft marketing repertoire for a second time. Visual Studio Online has recently been renamed to Visual Studio Codespaces. 

![https://cdn.jasongaylord.com/images/2020/05/03/vscodespaces.png](https://cdn.jasongaylord.com/images/2020/05/03/vscodespaces.png)

Visual Studio Codespaces allows fully-managed on-demand development environments in Azure. Since the environments are fast to create and are easily disposable, adding environments for onboarding new team members or to bring on remote workers for projects has become a cinch. You can access the Codespaces using [Visual Studio Code](https://jasong.us/code), Visual Studio, or the Web editor.

Changing the name is not the only thing that Microsoft announced. In addition, they announced two other things:

1. There's a [new, basic instance](https://jasong.us/3bVNKKP) type at a cost point of just $0.08 US/hr. That means you'll get two virtual cores, 4GB RAM, and 64GB SSD for your development machine. Along with this instance, they are dropping the prices of Standard (4 cores, 8GB RAM) and Premium (8 cores, 16GB RAM) to $0.17 US/hr and $0.34 US/hr respectively.
2. You can now [bring your own machine](https://jasong.us/3d7Wnlo) to Codespaces. That's right, you can configure your own Dockerfile or image and deploy it to Visual Studio Codespaces for usage.

Go ahead and try it for yourself. Visit [https://aka.ms/vso-login](https://jasong.us/2SrObEK) to sign in and get started.