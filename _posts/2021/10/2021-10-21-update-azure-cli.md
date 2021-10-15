---
title: Updating the Azure CLI
author: Jason Gaylord
date: 2021-10-21
categories: [azure,cloud,dev,microsoft]
tags:  [azure,cloud,dev,microsoft]
post-number: 1196
image: https://cdn.jasongaylord.com/images/2021/10/21/install-azure-cli.jpg
bitly: https://jasong.us/3AJIKVe
---

If you interact with Azure through the command line, you'll want to ensure that you're using the latest version of the CLI. The Azure CLI is updated frequently with features that are available within Azure.

To upgrade, there are really several different options depending on your operating system and current version.

### Windows via PowerShell (Preferred Method on Windows)
If you run the command `az --version` and the version is greater than `2.11.0`, you can simply update the Azure CLI by executing `az upgrade`. Below is a sample result by running `az --version`:

{% include open-thumbnail.html path="2021/10/21/az-version-results.jpg" alt="Azure CLI Version Echoed" %}

If you have a version older than `2.11.0` as indicated above, you can install using PowerShell as an Administrator:

```powershell
$ProgressPreference = 'SilentlyContinue'; Invoke-WebRequest -Uri https://aka.ms/installazurecliwindows -OutFile .\AzureCLI.msi; Start-Process msiexec.exe -Wait -ArgumentList '/I AzureCLI.msi /quiet'; rm .\AzureCLI.msi
```

### Windows via MSI
You can always install the latest edition using an MSI package. For the latest version, [install from here](https://jasong.us/2YWfYDK).

{% include open-thumbnail.html path="2021/10/21/install-azure-cli.jpg" alt="Azure CLI Installation from MSI" %}

### macOS
On macOS, the latest version of the Azure CLI should be installed using Homebrew. If you do not have Homebrew installed, you can [follow the steps here](https://jasong.us/3AMyyLm). The Azure CLI requires the Homebrew `python3` package and will install it. When you are ready to install the latest Azure CLI, run the following Bash command:

```Bash
brew update && brew install azure-cli
```

### Linux
Depending on your flavor of Linux, there are different methods of installing the Azure CLI. Microsoft strongly recommends installing the CLI with a package manager. The CLI requires [Python 3.6.x or greater](https://jasong.us/3j6FDR2), [libffi](https://jasong.us/3mWY77F), and [OpenSSL 1.0.2](https://jasong.us/3lHk8bk). To install on any of the platforms, run the following curl command:

```Bash
curl -L https://aka.ms/InstallAzureCli | bash
```

For a complete list of Linux installation options and for installing the Azure CLI in other ways, visit [jasong.us/3FL1XcR](https://jasong.us/3FL1XcR).