---
title: Creating a Twitter ViewComponent in ASP.NET Core – Part 1
author: Jason Gaylord
cloudscribe_id: "10b4cc5e-5910-48b0-9e98-f547e882a99b"
cloudscribe_path: "/blog/creating-a-twitter-viewcomponent-in-aspnet-core-–-part-1"
permalink: /blog/creating-a-twitter-viewcomponent-in-aspnet-core-–-part-1
date: 2018-11-06
categories: [development,dotnet]
tags:  [development,dotnet]
---

When redesigning my website, I wanted to show a list of recent tweets that I’ve made on the homepage. Rather than creating something that cannot be reused on other sites, I decided to take advantage of [view components in ASP.NET Core](https://jasong.us/2Pew99F). View components can be used similar to a partial in that it can render a chunk of the user interface, but it can also contain business logic.

There will be 2 parts in this series:

- [Part 1: Create an Interface and a Class to connect to Twitter](https://jasong.us/2Os34lz)
- [Part 2: Create a View Component to handle pre-packaged UI](https://jasong.us/2PbDOpg)

If you are looking for a feature complete, ready to use example, feel free to visit [https://github.com/jasongaylord/gaylordsolutions.TwitterWidget](https://jasong.us/2SNMBvE). 

## Using Options for Custom Configuration
Whenever I decide to create reusable functionality, I always consider how I would want to configure the component. In this case, since I’m connecting to Twitter, I would like to capture the Twitter consumer key and consumer secret. You can obtain these values by visiting the [Twitter Developer site](https://jasong.us/2qtZe1T) and creating a new app. Once the app is created, you’ll want to view the app details by clicking on the Details button. After clicking on App details, you’ll notice the three menu options under your app name: App details, Keys and tokens, and Permissions. If you click on Keys and tokens, you’ll find the consumer API key and the consumer API secret key.

You may also want to capture the Username in custom configuration to use a default username for the component when one isn’t passed in.

For the purpose of this article, we’ll start off by creating a new ASP.NET Core Class Library. We’ll update the project tomorrow to support `ViewComponents`. In ASP.NET Core, configuration is typically stored in an appsettings.json file and accessible through something called Options. I’ll talk about options a little more in a future post, but I may end up with an options file like this:

{% gist jasongaylord/eaa79905049e0a014d94f230caf05eb2 %}

## Creating the Models
As with most applications that interact with data, we’ll want to create object models to hold our data. First, we’ll be interacting with Twitter. To do so, we’ll need to first authenticate. When we pass over our consumer API key and secret key, Twitter will respond with an access token. So, let’s create a model to handle this:

{% gist jasongaylord/0c08bcab672042c2ba537181b7bb8fb1 %}

{% include info-notice.html %}
**Tip**: When using [Json.NET](https://jasong.us/2SNtyl5), you can specify the name of the attribute by using a data annotation such as: `[JsonProperty(PropertyName = 'access_token')]`. If we did not do this, we would instead be forced to name the property access_token so that the deserialization would work properly.
{% include end-notice.html %}

Once we have our token, we’ll connect to Twitter to obtain a raw response.  This response will include tweet information and information about the user that posted the tweet. So it’s easy to find both of these classes for this purpose, we’ll break the Singleton pattern and drop both in the same file:

{% gist jasongaylord/6462ef15f0db4cfae6f284ebad41cb9b %}

Finally, we will want to create a list of tweets so it’s easier to consume on the front end. We won’t use all of the raw response coming back from Twitter, so we’ll create a subset of properties to be used:

{% gist jasongaylord/5b8540154753b304207f833466066ad8 %}

## Defining the Interface
Before creating the service called `TwitterService`, we’ll need to define the interface. The interface will include a method to authenticate to Twitter and obtain an access token to be used in subsequent calls. We’ll call this method `ObtainBearerToken`. It will accept two parameters: one for the API key and one for the API secret key. The interface will also contain a method, called `RetrieveTweetsAsync`, to retrieve tweets asynchronously. This method will accept the Twitter options that we’ve defined earlier.  In the future, we may want to offer an override for an optional username rather than sticking with the name defined in the config. For now, we’ll stick with the options.

So, our interface will likely look like this:

{% gist jasongaylord/07696a5c4b5f41bd112b36e505779c41 %}

## Implementing the Service
Now that the housekeeping has been taken care of, it’s time to implement our service.  Before explaining what the service will do, let’s look at the source:

{% gist jasongaylord/583ca29496bf51b3121dd4cc43597421 %}

The first method contained within the service will authenticate the user as mentioned above.  The API key and secret key will be concatenated and passed into a request header. The request will be posted and the body will be written to obtain client credentials. When the response is received, the object will be deserialized and the access token will be passed into the Token model we defined earlier.

The second method is an asynchronous method to retrieve tweets. The first thing we’ll check is to ensure that the options being passed in are not empty. We’ll than call the `ObtainBearerToken` method. When we receive the token, we’ll create a new request to target the user timeline at the Twitter API. We’ll receive the response, deserialize into an enumeration of `TweetRaw`, and then select the properties we care about in a `List<Tweet>`. You’ll notice that we will set the Timestamp property, which we defined as a `string`, to a friendly date. In [an earlier post](https://jasong.us/2F2KFfS), I mentioned an extension method for converting `DateTime` objects to a friendly date. 

## Part 1 Wrap-up
Tomorrow we’ll dive into wiring the `ViewComponent` up to the Twitter service. We’ll do this by adding the Twitter service as middleware. Finally, we’ll create a demo web application to consume our `ViewComponent`.