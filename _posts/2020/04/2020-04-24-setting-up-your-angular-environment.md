---
title: Setting up Your Angular Environment
author: Jason Gaylord
cloudscribe_id: "2121ad24-b93c-44fe-83de-1853435d6ed9"
cloudscribe_path: "/blog/setting-up-your-angular-environment"
permalink: /blog/setting-up-your-angular-environment
date: 2020-04-24
categories: [angular,development,javascript]
tags:  [angular,development,javascript]
bitly: https://jasong.us/351w65D
---

![https://cdn.jasongaylord.com/images/2020/04/24/angular.jpg](https://cdn.jasongaylord.com/images/2020/04/24/angular.jpg)

Before we can start building Angular applications, we'll need to setup our development environment. There are many ways in which we can do this and there are some steps that are common for all. As we go through the setup process for our environment, we have two options:

1. We can install each application manually
2. We can install some of the applications using Chocolatey

If we'd like to install using Chocolatey, we need to first install Chocolatey. If you are unfamiliar with Chocolatey, it is a package manager for Windows. It uses a repository to allow your system to install packages and to keep up to date. Some packages are installed using the Microsoft Store. However, not all packages are available especially if they are developer add-ins. Chocolatey can be installed by visiting [https://chocolatey.org/install](https://jasong.us/2K7k5C6). If you install Chocolatey, for each application below, check for the appropriate instructions.

## Installing NodeJS and NPM
If we currently are missing NodeJS, we must go to [https://nodejs.org/](https://jasong.us/2xroU6F) to install it. If you're not sure if it's installed, you can go to a command prompt and run the following command:

```shell
node -v
```

If a version number is returned, NodeJS is installed.

If you are using Chocolatey, you can run the following command:

```shell
choco install nodejs
```

Installing NodeJS also installs NPM. 

## Updating NPM
If you already have NodeJS installed but need to update NPM, you can do so a couple of different ways.  The most preferred method is by installing an NPM module to keep NPM up to date. To do this, we must follow these steps:

1. Run PowerShell as Administrator. We can do this by clicking Start, searching for PowerShell, right-clicking the PowerShell icon and selecting 'Run as Administrator'.
2. We then need to allow external scripts to run. I tend to prefer to run the following: `Set-ExecutionPolicy RemoteSigned -Scope CurrentUser -Force`. However, some find replacing `RemoteSigned` with `Unrestricted` allows other unsigned scripts to run.
3. Then, install the upgrader tool by running `npm install -g --production npm-windows-upgrade`.
4. Finally, run the upgrader tool by running `npm-windows-upgrade`.

If you are using Chocolatey, you can install the latest NodeJS by running this:

```shell
choco upgrade nodejs
```

Advanced developers may not like this approach as this will remove any custom NPM configuration that was made. So, if you had installed using Chocolatey, you'll want to first check to see if npm is removed from the choco\bin directory by running `where.exe npm`. If its still there, first install the npm-windows-upgrade using Step 3 above. Then, you'll need to delete the files from that bin directory or run `choco uninstall npm`. Finally, run Step 4 above. This will help to clear out any custom configuration.

## Installing Angular CLI

Now onto Angular CLI. The Angular CLI will allow you to create new, build, and run projects. To setup the Angular CLI, simply run the following NPM command:

```shell
npm install -g @angular/cli
```

There is no Chocolatey setup for the Angular CLI.

You can learn more about the Angular CLI commands by visiting [https://cli.angular.io/](https://jasong.us/3bsD1Hr).

## Summary
You're now on your to creating your next Angular application.