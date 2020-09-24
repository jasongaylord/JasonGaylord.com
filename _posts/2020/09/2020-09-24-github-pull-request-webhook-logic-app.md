---
title: Analyze Pull Request Information using a GitHub Webhook and Azure Logic App
author: Jason Gaylord
date: 2020-09-24
categories: [azure,cloud,dev,devops,github,microsoft]
tags:  [azure,cloud,dev,devops,github,microsoft]
post-number: 1049
image: https://cdn.jasongaylord.com/images/2020/09/24/github-add-webhook.jpg
bitly: https://jasong.us/3kH9YEb
---

I had a need the other day to trigger an Azure Logic App from a GitHub pull request that was merged and completed. Unfortunately, Logic Apps continue to have only a handful of pre-defined connectors for GitHub:

{% include open-thumbnail.html path="2020/09/24/github-triggers.jpg" alt="GitHub Triggers in Logic App Designer" %}

I went to Twitter where I was inspired by a response from [Javier Lozano](https://jasong.us/32UDsbx) to simply get started with a web hook. I didn't want to at first as I was simply trying to build a proof of concept. However, I was intrigued to see what data I could get from the web hook. 

I navigated to the repository in GitHub to get started and then clicked on **Settings > Webhooks**. There, I choose to `Add webhook` and was presented with the create a new webhook screen:

{% include open-thumbnail.html path="2020/09/24/github-add-webhook.jpg" alt="Adding a Webhook in GitHub" %}

Notice how I already have the URL filled in. As soon as I opened the tab, I also signed into the Azure Portal, created a new Logic App, and kicked off the designer by choosing the *When a HTTP request is received* common trigger as shown below:

{% include open-thumbnail.html path="2020/09/24/logic-app-common-triggers.jpg" alt="Choosing a common trigger for a Logic App" %}

I then hit **Save** right away so I could copy the *HTTP POST URL* as shown:

{% include open-thumbnail.html path="2020/09/24/logic-app-http-post-url.jpg" alt="Copying the HTTP POST URL from the Logic App" %}

Heading back to the GitHub Webhook tab, I then pasted the URL, choose the *Let me select individual events* radio button, and choose *Pull Request* from the option of events I could trigger:

{% include open-thumbnail.html path="2020/09/24/github-trigger-events.jpg" alt="Choose Pull Request from the GitHub Webhook Trigger Events" %}

And then, of course, clicked *Add webhook* at the bottom of the page. Back in the Logic App tab, I needed to then describe the JSON schema. To make life a little bit easier, you can copy the schema from the following GitHub Gist:

<script src="https://gist.github.com/jasongaylord/9835da3f1a54663de3e89bf93049ef83.js"></script>

I then added a *Condition* as I only want to act on pull requests that have been merged and closed. I did this by creating a complex condition like:

{% include open-thumbnail.html path="2020/09/24/logic-app-conditional-pull-request.jpg" alt="Condition for Closed Pull Requests" %}

From here, I can now access any of the properties of the pull request in the *True* path. I was hoping that I'd have access to the fully merged file result and the list of files changed in the pull request, but unfortunately this did not help me. However, you may need to act on a pull request including sending notification to folks or saving comments of the PR off into blob storage.