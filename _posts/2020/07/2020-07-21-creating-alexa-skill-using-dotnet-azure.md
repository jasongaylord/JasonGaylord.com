---
title: Creating an Amazon Alexa Skill using .NET Core and Microsoft Azure
author: Jason Gaylord
date: 2020-07-21
categories: [amazon,azure,cloud,dev,devops,dotnet,microsoft]
tags:  [amazon,azure,cloud,dev,devops,dotnet,microsoft]
post-number: 979
image: https://cdn.jasongaylord.com/images/2020/07/21/alexa-skill-success.jpg
bitly: https://jasong.us/2CDXSv0
---

You've had an Amazon Echo for years and have become accustomed to saying "Alexa, what's my daily briefing" or "Alexa, what's the weather for this weekend." But, chances are if you are reading this post, you are a developer that would like to do more with Amazon Alexa. Maybe you're not a Node.js or Python developer but a .NET developer. Maybe you have never used Amazon AWS but rather use Microsoft Azure. Well, this post will walk through creating an Alexa skill to check with GitHub to find out if we have any pending pull requests. Sure, this is a simple ask, but we'll host this skill in Azure and wire up to the Alexa console.

Before we begin, you'll need to have the following:
* An [Azure account](https://jasong.us/2OtEseN)
* A GitHub [personal access token](https://jasong.us/32inNDf) that can read pull requests within a project (recommend checking just the `repo` scope for the token)
* An [Amazon developer account](https://jasong.us/32gTtZr)

## Creating Skills Using Alexa Developer Console
After you have created your Amazon developer account, head back to the [Amazon developer console](https://jasong.us/32gTtZr) by clicking on create skills in the Amazon Alexa developer account screen.

{% include open-thumbnail.html path="2020/07/21/create-alexa-skills.jpg" alt="Create Alexa Skills option from the Amazon Alexa developer account screen" %}

Next, click the _Console_ button in the menu of the _Create Alexa Skills_ screen.

{% include open-thumbnail.html path="2020/07/21/console-menu-option.jpg" alt="Console button in the Create Alexa Skills screen" %}

Then, click the _Create Skill_ button in the center of the skills list or in the top, right-hand of the screen. You may not have this button in the center of the skills list, as depicted below, if you currently have skills created and configured.

{% include open-thumbnail.html path="2020/07/21/alexa-skills-create-skill.jpg" alt="Create Skill button" %}

You'll now be placed into the _Create Skill_ wizard for Amazon Alexa. The first step in the wizard will prompt you for a skill name, default skill language, skill model, and a method of hosting. There are several pre-built models for an Amazon skill including _Flash briefing_, _Smart Home_, _Music_, _Video_, _Meetings_, and _Education_. For purposes of this tutorial, we'll choose the _Custom_ model option. There are also three different methods for hosting our Alexa skill. We can use a Node.js lambda in AWS, Python lambda in AWS, or provision our own. If we choose either of the AWS options, the hosting region can be modified using the drop-down in the upper, right-hand corner of the screen. Since we want to create our skill using .NET, we'll choose to _Provision your own_. 

{% include open-thumbnail.html path="2020/07/21/create-a-skill-window.jpg" alt="Create a Skill Screen" %}

Upon continuing, you'll be prompted to _Choose a template to add to your skill_. You can choose from _Hello World Skill_, _Fact Skill_, _Quiz Game Skill_, _High-Low Game Skill_, or _Sauce Boss Skill_. Again, we'll leave the default _Hello World Skill_ as this will help us get started. 

{% include open-thumbnail.html path="2020/07/21/choose-alexa-skill-template.jpg" alt="Choose an Alexa Skill Template" %}

The Amazon console will now take a few seconds to generate your template and add it to the skill. After this process is completed, you'll be taken to the Alexa Developer Console screen for your skill. In addition, a full build for your skill will start. A minute or less later, you'll notice a new toast notification to the lower, right-hand corner of the console screen. This will inform you that the skill has been successfully built. It does not have any functionality and will need to be modified further, but we've completed the skill creation process.

{% include open-thumbnail.html path="2020/07/21/alexa-console-toast-notifications.jpg" alt="Alexa Developer Console Toast Notifications" %}

## Understanding Invocation, Intents, Utterances, and Slots
Alexa skills use terms that you may not be familiar with. To better explain each, please see their definition below along with the appropriate example of each:

- **Invocation** - This is a phrase that kicks off the skill such as "_Alexa, ask GitHub if I have any pull requests_". Since we're using a custom skill, this is needed.
- **Intents** - An intent is what the user, who is interacting with your skill, is intending to accomplish. This allows your skill to have different "paths" to follow. For our case, we'll use a single intent we'll name **GitHubPullRequest**.
- **Utterances** - These are phrases that users will use when making the request to your skill such as "_how many pull requests do I have?_" or "_do I have any PRs?_". As time passes, you may need to add more utterances to direct your user accordingly.
- **Slots** - Slots are variables that specifically direct the skill down a certain path and usually help to direct which data set to use. When using built-in skills, there are predefined slots you can use. However, as a developer, you may choose to have a slot for **GitHub** and one for **Azure DevOps** as the implementation may be two separate functions and data sets.

These are typically combined in a manner where if you ask "_Alexa, open DevOps_", Alexa knows that _DevOps_ is the **Invocation**. If this is followed with "_PullRequest count for GitHub_", _PullRequest_ is the **intent**, _count for_ is the **utterance**, and _GitHub_ is the **slot**.

You may need to reference this glossary of terms as you proceed with this post. 

## Creating the ASP.NET Core API
To get started on the .NET API, we'll kick things off by creating a brand new .NET Core API. We'll do this by creating a project from the command line like so:

```shell
dotnet new webapi -n AlexaGitHubDemo
```

This will create an ASP.NET Core Web API project with a default controller called the `WeatherForecastController`. However, before we continue with modifying the app, let's load the [Alexa.NET Nuget package](https://jasong.us/3j6W3r1). We can install this package by executing the following:

```shell
dotnet add package Alexa.NET
```

Also, because we want to integrate with GitHub, we're going to leverage a package available by the GitHub team called [`Octokit`](https://jasong.us/2B1V3U1). I [posted recently](https://jasong.us/3exuRyl) about using this package and a companion package called `Octokit.Reactive`. We can install the `Octokit` package by executing the following:

```shell
dotnet add package Octokit
```

I like to use Visual Studio Code for everything as opposed to Visual Studio, so we'll use VS Code as our editor. Let's come back to the project and we'll remove the `Controllers\WeatherForecastController.cs` file from the application. We'll create a new controller in the `Controllers` folder called `AlexaController`. I'm 

```csharp
using Alexa.NET;
using Alexa.NET.Request;
using Alexa.NET.Request.Type;
using Alexa.NET.Response;
using Microsoft.AspNetCore.Mvc;
using System.Linq;
using Octokit;
using Octokit.Internal;

namespace AlexaGitHubDemo.Controllers
{
    [Route("api/[controller]")]
    public class AlexaController : Controller
    {
        public const string owner = "jasongaylord";
        public const string repo = "JasonGaylord.com";
        public const string product_name = "AlexaGitHubDemo";
        public const string token = "<INSERT_PERSONAL_ACCESS_TOKEN_HERE>";

        /// <summary>
        /// This is the entry point for the Alexa skill
        /// </summary>
        /// <param name="input"></param>
        /// <returns></returns>
        [HttpPost]
        public SkillResponse HandleResponse([FromBody]SkillRequest input)
        {
            var requestType = input.GetRequestType();
    
            // return a welcome message
            if(requestType == typeof(LaunchRequest))
            {
                return ResponseBuilder.Ask("Welcome to the GitHub pull request count skill.", null);
            }
    
            // return information from an intent
            else if (requestType == typeof(IntentRequest))
            {
                // do some intent-based stuff
                var intentRequest = input.Request as IntentRequest;
    
                // check the name to determine what you should do
                if (intentRequest.Intent.Name.Equals("GitHubPullRequest"))
                {
                    // get the pull requests
                    var pullrequests = CountPullRequests();

                    if (pullrequests == 0)
                        return ResponseBuilder.Tell("You have no pull requests at this time.");

                    return ResponseBuilder.Tell("There are " + pullrequests.ToString() + " pull requests waiting for you at GitHub.com.");
                }
            }
    
            return ResponseBuilder.Ask("I don't understand. Can you please try again?", null);
        }

        [HttpGet]
        public int CountPullRequests()
        {
            var creds = new InMemoryCredentialStore(new Credentials(token));
            var client = new GitHubClient(new ProductHeaderValue(product_name), creds);
            var pullrequests = client.PullRequest.GetAllForRepository(owner, repo).Result;
            return pullrequests.Count();
        }
    }
}
```

I like to keep the `CountPullRequests()` function around so I can ensure that my service is working outside of Alexa. Hitting the endpoint by running `dotnet build` and subsequently `dotnet run`, I'll see that my service should work:

{% include open-thumbnail.html path="2020/07/21/github-pull-requests-using-api-getter.jpg" alt="GitHub Pull Request count returned using the /api/Alexa GET endpoint" %}

You'll notice in the code above that our Alexa skill will return a type of `SkillResponse` and that we'll evaluate how to handle the response based on the `SkillRequest`. If the type of the request is an `IntentRequest`, we'll check which intent is being requested and process accordingly. For now, we only have the `GitHubPullRequest` intent but you can see we can easy expand this service to include other GitHub values, such as issues, or even other services, such as Azure DevOps.

{% include warning-notice.html %}
<strong>Note:</strong> .NET Core 3.1 has known issues with deserialization. It is recommended that you update your services to include <em>Newtonsoft.Json</em>. You can find out more about this by visiting my previous post at <a href="https://jasong.us/2ZBGyiY">https://jasong.us/2ZBGyiY</a>.
{% include end-notice.html %}

## Publishing the .NET Core API
Since we are using VS Code to modify our project, we'll also use VS Code to add our app service. For this, we'll use the [Azure Tools extension](https://jasong.us/30g3NhT). We'll click the Azure Tools icon and under app services, choose to **Create a new Web App...**.

{% include open-thumbnail.html path="2020/07/21/vscode-create-app-service.jpg" alt="Visual Studio Code Azure Tools Create App Service" %}

Next, we'll hit the icon to deploy to the new app service we've created. Choose the appropriate app service in VS Code. You may get an error that the _Required configuration to deploy is missing from 'YOUR APP NAME'_. 

{% include open-thumbnail.html path="2020/07/21/app-service-deploy-config-missing.jpg" alt="Visual Studio Code Azure Tools Create App Service" %}

If you receive that error, click the _Add Config_ button and restart the upload process. You'll receive another message that anything within that application will be overwritten. Since we just created that app, we don't care as nothing is in the app. So, click the _Deploy_ button.

{% include warning-notice.html %}
<strong>Note:</strong> At the time of this post, .NET Core 5.0 is not a valid target framework for Azure. Be sure you are deploying your app as a .NET Core 3.1 application or deploying your app as a <a href="https://jasong.us/3eCibGr">self-contained app</a>. For more information about this, read my previous post at <a href="https://jasong.us/2Zy9sRi">https://jasong.us/2Zy9sRi</a>
{% include end-notice.html %}

## Register Endpoint with Alexa Skill
The next thing we'll need to do is update our Alexa endpoint. Hop back into the Alexa Developer Console and navigate to **Custom > Endpoint**. We'll enter our endpoint, replacing the `<tokens>` appropriately with `https://<app_service_name>.azurewebsites.net/api/<controller>/<method_name>` and selecting _My development endpoint is a sub-domain of a domain that has a wildcard certificate from a certificate authority_. This is because we're using the Azure websites URL as opposed to a custom URL.

{% include open-thumbnail.html path="2020/07/21/add-service-endpoint-to-alexa-skill.jpg" alt="Add Service Endpoint from Azure App Service to Alexa Skill" %}

We can now save, build, and test our skill.

## Testing Your Alexa Skill
You can now click on the **Test** menu option in the Alexa Developer Console. Be sure that you have built your Alexa skill first. If everything works correct, you should have a successful interaction with the Alexa Simulator:

{% include open-thumbnail.html path="2020/07/21/alexa-skill-success.jpg" alt="Valid Responses From Your Custom Alexa Skill" %}

{% include info-notice.html %}
<strong>Tip:</strong> If you run into 500 issues with your service, I recommend using Postman to connect and debug your service. You can use the JSON in the Amazon Alexa Developer Console as the body of the request being sent to your application.
{% include end-notice.html %}

## Summary
We started creating an Alexa skill. We then created a .NET Core Web API to handle the skill and utilize the Alexa.net and Octokit packages. We published our .NET Core Web API and finally tested our API with our Alexa skill. If you're interested in the code I used for this project, you can grab it from:

{% include github-clone.html bitly="jasong.us/3fzVUu0" repo="jasongaylord/AlexaGitHubDemo" branch="master" %}
