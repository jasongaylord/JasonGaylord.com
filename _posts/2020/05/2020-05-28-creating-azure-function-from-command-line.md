---
title: Creating an Azure Function from the Command Line
author: Jason Gaylord
date: 2020-05-28
categories: [cloud,development,dotnet,serverless]
tags:  [cloud,development,dotnet,serverless]
image: https://cdn.jasongaylord.com/images/2020/05/28/azure-function-command-line.jpg
bitly: https://jasong.us/3eCA0Fv
---

There are several ways you can create an Azure Function. You can use Visual Studio, Visual Studio Code, or even the Command Line. For purposes of this article, we're going to use the command line. We're also going to use C# for this article, though you can follow essentially the same steps for TypeScript or JavaScript. You can also use Java, PowerShell, or Python for your Azure function. The prerequisites, command-line parameters, and code samples will be different for other languages.

## Prerequisites
We need to make sure our environment is setup properly. The assumption for this article is that you are going 

1. **Azure CLI** - You can check to see if you have the CLI by running `az --version` at the command line. Microsoft documentation states that you need to have version 2.4 or later. If you need to install the CLI, you can do so by visiting [https://docs.microsoft.com/en-us/cli/azure/install-azure-cli](https://jasong.us/2TWQTTw).

2. **Azure Account** - If you don't have an active Azure account and subscription, you can sign-up for a free account by visiting [https://azure.microsoft.com/free/](https://jasong.us/azure-free). To ensure that your account is active, you can use the **Azure CLI** that you just installed and run the following command line: `az login`.

3. **Azure Functions Core Tools** - You can check to see if you have the core tools by running `func --version` at the command line. Microsoft documentation states that you need to have version 2.7.1846 or later. If you need to install the core tools, you can do so by visiting [https://docs.microsoft.com/en-us/azure/azure-functions/functions-run-local#v2](https://jasong.us/2Awifc9).

4. {% raw %}[Optional]{% endraw %} **Git Repository** - I always like to start by creating an empty folder and initializing it with git. I've talked about this in previous posts. You can do this by starting on Github or BitBucket, but you can also create a new folder locally and run `git init` on it.

## Creating Our Function
Now that we've validated the prerequisites, it's time for us to move forward to create our local function. Within a new, empty folder, I'm going to create a new function project called `api`. In my case, I have repositories stored at `c:\repos`. So, I'm navigating to that directory and then executing the following:

```powershell
func init api --dotnet
```

If I then navigate into `c:\repos\api`, I'll find a `.vscode` folder, a `.gitignore` file, an `api.csproj` file, a `host.json` file, and a `local.settings.json` file. Since sensitive data such as passwords and other secrets can be stored in `local.settings.json`, you'll notice that this file is excluded from source control in the `.gitignore` file.

Next, we'll create a new function called `name-get`. We'll setup this function as an HTTP Trigger by passing in that template. Other templates that can be used can be found at [https://github.com/Azure/azure-functions-templates/](https://jasong.us/2AvieVW). 

```powershell
func new --name name-get --template "HTTP trigger"
```

A new file, `name_get.cs` will now be generated.

## Executing Our Function
You can run your function locally from within the `c:\repos\api` by executing the following command:

```powershell
func start
```

After libraries are restored and your project builds, you'll receive a URL similar to `http://localhost:7071/api/name_get`. 

![](https://cdn.jasongaylord.com/images/2020/05/28/azure-function-command-line.jpg)

If you execute that URL and pass a name in the query string like so:

```
http://localhost:7071/api/name_get?name=Jason
```

You'll see a response like:

```
Hello, Jason. This HTTP triggered function executed successfully.
```

You've now successfully executed a function from the command line. This function can now be deployed to Azure, or you can build upon it.

In a future post, I'll update this function and deploy it to Azure.