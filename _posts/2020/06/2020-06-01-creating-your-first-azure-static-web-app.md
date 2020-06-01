---
title: Creating Your First Azure Static Web App
author: Jason Gaylord
date: 2020-06-01
categories: [cloud,development,dotnet,serverless]
tags:  [cloud,development,dotnet,serverless]
image: https://cdn.jasongaylord.com/images/2020/06/01/azure-static-web-apps-in-search.jpg
bitly: https://bit.ly/2ZOttDB
---

Last week, I [blogged](https://bit.ly/2AisxfS) about creating an Azure Function from a command line. We didn't change the function at all as the post was just to show how easy it is to create and serve an Azure function locally. In this article, we're going to use that basic function, add a static file, and post both to an Azure Static Web App.

## Prerequisites
At this point, I'm assuming you've followed my previous post. We'll need to push our new app structure to GitHub so that it looks similar to the following:

<a href="https://cdn.jasongaylord.com/images/2020/06/01/azure-function-in-github.jpg"><img src="https://cdn.jasongaylord.com/images/2020/06/01/azure-function-in-github.jpg" alt="An Azure Function pushed to GitHub" style="width: 400px;" /></a>

## Creating Static Content
Azure Static Web Apps allow us to use any static content or anything that can generate static content. This can be a static content generator such as Gatsby, Jekyll, or DocFX. It can also be Angular, Vue, or React. It can even be a combination of both. In our case, we're going to create a single, HTML file with some inline JavaScript. Our goal is just to prove that we can get something deployed to the Azure Static Web App resource.

So, we'll start with creating a `web` folder at the same root of the `api` folder we created for the Azure Function at [https://bit.ly/2AisxfS](https://bit.ly/2AisxfS). So, in my case, it's at `c:\repos\web`. 

{% include info-notice.html %}
Currently, there's an issue with Static Web Apps using C# Azure Functions. So, I created a new function app by running `func init` choosing `node` and `javascript` and then creating a new function by running `func new` setting the template to `HttpTrigger` and naming it `welcome`.
{% include end-notice.html %}

Next, we'll add a basic HTML document with a small script:

**index.htm**
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>My First Azure Static Web App</title>
  <meta name="description" content="A sample Azure Static Web App">
  <meta name="author" content="Jason Gaylord">
  <style>
      body { font-family: Arial, Helvetica, sans-serif; }
      h2 { color: navy; }
      div { padding: 5px; border: 1px solid #222; background-color: #ccc; }
  </style>
</head>
<body>
  <h2>Welcome</h2>
  <div id="HelloMessage"></div>
  <script>
    var query = new URLSearchParams;
    query.append("name", "Jason");
    var url = "/api/welcome?" + query.toString() ;
    
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    
    xhr.onload = function(){
      console.log("Done");
      document.getElementById("HelloMessage").innerHTML = this.response;
    };
    
    xhr.send();
  </script>
</body>
</html>
```

Commit your changes and push to GitHub. Your GitHub repository should now look like so:

<a href="https://cdn.jasongaylord.com/images/2020/06/01/web-folder-in-github.jpg"><img src="https://cdn.jasongaylord.com/images/2020/06/01/web-folder-in-github.jpg" alt="The web folder in GitHub" style="width: 400px;" /></a>

## Create the Azure Static Web App
Log into the Azure Portal. In the search bar at the top, start searching for `Static Web Apps`:

<a href="https://cdn.jasongaylord.com/images/2020/06/01/azure-static-web-apps-in-search.jpg"><img src="https://cdn.jasongaylord.com/images/2020/06/01/azure-static-web-apps-in-search.jpg" alt="Search for Azure Static Web Apps in the Azure Portal" style="width: 400px;" /></a>

Choose `Static Web Apps`. You'll be taken to a list of static web apps. You'll see a `Create static web app` button in the middle of the page. Click that button. 

Under the `Basics` configuration tab, you'll choose a Subscription, a resource group (I recommend a new one), a name for your app, a region, and will sign into GitHub. Here is what my values look like:

<a href="https://cdn.jasongaylord.com/images/2020/06/01/static-web-app-basic-settings.jpg"><img src="https://cdn.jasongaylord.com/images/2020/06/01/static-web-app-basic-settings.jpg" alt="Basic Settings blade of New Static Web App Wizard" style="width: 400px;" /></a>

Next, on the `Build` configuration tab, we'll want to serve up the contents at the root and set the API location and App artifact location accordingly. Here is what my values look like:

<a href="https://cdn.jasongaylord.com/images/2020/06/01/static-web-app-build-settings.jpg"><img src="https://cdn.jasongaylord.com/images/2020/06/01/static-web-app-build-settings.jpg" alt="Basic Settings blade of New Static Web App Wizard" style="width: 400px;" /></a>

Notice how this corresponds with the values of the folders we've created.

Continue through the `Tags` configuration tab, unless you need to tag these resources, and onto the `Review + create` configuration tab. Choose `Create` at the bottom.

Once your resource is created, you should be able to navigate to your resource.

{% include info-notice.html %}
You may receive a notice like the following:
<img src="https://cdn.jasongaylord.com/images/2020/06/01/azure-static-app-no-content.jpg" alt="Messages stating: We have not received any content for your site yet. Click here to check the status of your GitHub Action runs." />
This means that the GitHub Action failed to execute. Head over to your repository and click on the actions tab for more details.
{% include end-notice.html %}

## Running the Application
The API will be deployed to a `/api` folder regardless of the source folder. That seems to be a default for now and as far as I can tell, there's no way to override that. Your content will be placed in the root folder. So, if you browse `https://[YOUR_URL].azurestaticapps.net/api/welcome?name=Jason`, you should see a response in the browser that says `Hello Jason`. Running the main application, you'll end up with a response like the following:

<a href="https://cdn.jasongaylord.com/images/2020/06/01/azure-static-app-running.jpg"><img src="https://cdn.jasongaylord.com/images/2020/06/01/azure-static-app-running.jpg" alt="Our first Azure Static Web App running in the browser." style="width: 400px;" /></a>

## Summary
At this point we've build our first Azure Static Web App. I'm interested in hearing what apps you create.

If you'd like, you can skip past the coding and simply copy my repository by clicking below:
{% include github-generate.html bitly="bit.ly/2XCiydy" repo="jasongaylord/MyFirstAzureStaticApp" %}