---
title: Updating Your GitHub Password for Visual Studio Code on Windows
author: Jason Gaylord
date: 2020-06-09
categories: [devops,github,tip]
tags:  [devops,github,tip]
post-number: 934
image: https://cdn.jasongaylord.com/images/2020/06/09/credential-manager-vscode-github.jpg
bitly: https://jasong.us/3f44Siy
---

Over the weekend, Visual Studio Code (VS Code) was updated on my machine. After it was updated, I was prompted to log back into my GitHub account. The first thing I was prompted for was to authorize VS Code to have access to my GitHub account:

{% include open-thumbnail.html path="2020/06/09/vscode-github-authorized.jpg" alt="The screen requesting to authorize VS Code to have access to your GitHub account." %}

Next, I received the success message:

{% include open-thumbnail.html path="2020/06/09/vscode-github-token-success.jpg" alt="The success screen from GitHub with your GitHub access token." %}

Which prompts a password field to appear in VS Code. At least, that's what typically happens. In my case, VS Code did not receive the password change. So, now what? Well, VS Code creates a username and password inside of _Credential Manager_. To get into _Credential Manager_, click the _Search_ icon in your Windows taskbar and type in `Credential Manager`. Once _Credential Manager_ opens, you'll see two tabs: _Web Credentials_ and _Windows Credentials_. Click on _Windows Credentials_. Next, scroll until you find `vscode-github.login/account` like below:

{% include open-thumbnail.html path="2020/06/09/credential-manager-vscode-github.jpg" alt="The success screen from GitHub with your GitHub access token." %}

Click the down arrow and edit the password. Paste the complete token screen (blue highlighted area shown in the screenshot above) into the field. Your token is now available for VS Code and you'll be able to use the built in Source Control features.
