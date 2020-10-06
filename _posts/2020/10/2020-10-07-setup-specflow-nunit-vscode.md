---
title: Use SpecFlow, nUnit and .NET Core in Visual Studio Code
author: Jason Gaylord
date: 2020-10-07
categories: [dev,dotnet,visual-studio]
tags:  [dev,dotnet,visual-studio]
post-number: 1062
image: https://cdn.jasongaylord.com/images/2020/10/07/dotnet-test-results.jpg
bitly: https://jasong.us/36zzHe3
---

In this tutorial, we're going to create a project that supports SpecFlow, nUnit, and .NET Core. To get started, we'll create a new .NET Core project with nUnit support. To do this, create a folder where the project should be created and run the following .NET CLI command:

```shell
dotnet new nunit
```

Next, we need to add support for SpecFlow:

```shell
dotnet add package "SpecFlow.NUnit"
dotnet add package "SpecFlow.Plus.LivingDocPlugin"
```

Now, we'll want to create the base folders that will be used by SpecFlow. We'll do this by running the following commands in Windows:

```shell
md Drivers
md Features
md Hooks
md Steps
del UnitTest1.cs
```

This will also remove the unit test file that accompanies the nUnit project.

## Creating a Basic Test

Next let's open the project in Visual Studio Code. We'll start by creating a file under the `Steps` folder called `AdditionStepDefinition.cs`. The contents of this file will look like:

```csharp
using NUnit.Framework;
using TechTalk.SpecFlow;

namespace SpecFlowDemo.Steps
{
    [Binding]
    public sealed class AdditionStepDefinitions
    {
        private readonly ScenarioContext _scenarioContext;
        private int num1 { get; set; }
        private int num2 { get; set; }

        public AdditionStepDefinitions(ScenarioContext scenarioContext)
        {
            _scenarioContext = scenarioContext;
        }

        [When("i add (.*) and (.*)")]
        public void WhenTheTwoNumbersAreAdded(int number1, int number2)
        {
            num1 = number1;
            num2 = number2;
            _scenarioContext.Pending();
        }

        [Then("the result should be (.*)")]
        public void ThenTheResultShouldBe(int result)
        {
            Assert.AreEqual((num1 + num2), result);
        }
    }
}
```

You'll see that from this step definition, we are going to take two numbers, add them together, and ensure the result is correct. Next, we'll add a new feature called `Add.feature` with the contents:

```csharp
Feature: Add

Scenario: Add two numbers
	When i add 2 and 3
	Then the result should be 5
```

And head back to our command line. Now, when we run the command `dotnet test`, we should see a new file in our project, `Add.feature.cs` added. We should also notice that our test was successfully executed:

{% include open-thumbnail.html path="2020/10/07/dotnet-test-results.jpg" alt="Successful SpecFlow Execution" %}