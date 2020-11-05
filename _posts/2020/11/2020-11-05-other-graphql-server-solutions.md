---
title: Other GraphQL Server Solutions Besides Hot Chocolate
author: Jason Gaylord
date: 2020-11-05
categories: [api,architecture,cms,data,dev,dotnet]
tags:  [api,architecture,cms,data,dev,dotnet]
post-number: 1094
image: https://cdn.jasongaylord.com/images/2020/11/05/graphcms-demo.jpg
bitly: https://jasong.us/3kYujFu
---

Over the past two days, I have posted about building APIs using GraphQL and .NET Core using the Hot Chocolate NuGet package. In the [first part of the tutorial](https://jasong.us/3mLdHBD), we covered how a GraphQL schema is constructed, getting started using .NET Core and Hot Chocolate, and building our first GraphQL query object using Banana Cake Pop. In the [second part of the tutorial](https://jasong.us/3oRfFlT), we covered how to add data to our data source using GraphQL mutations and tested GraphQL end to end using Banana Cake Pop. However, Hot Chocolate is not the only way to interact with GraphQL in .NET.

## Using GraphQL
Creatively named, GraphQL is a [GraphQL library](https://jasong.us/2Ts7E8n) shared using NuGet. It's a library primarily maintained by [Joe McBride](https://jasong.us/3oTb9Dk) but at this point has dozens of contributors. As with Hot Chocolate, it supports all of the popular IDEs for managing GraphQL requests such as Firecamp, GraphQL Playground, Voyager, and yes, even Banana Cake Pop. If you are interested in the docs site and to see examples, I highly recommend checking out the [official docs site here](https://jasong.us/3jWc6Hi). 

If you are looking to use GraphQL in an Azure Function, check out [this article](https://jasong.us/34RtfOi) posted by [Tomasz Pęczek](https://jasong.us/3jVZd06).

## Using GraphCMS
GraphCMS is a headless CMS for GraphQL data. The system allows you to build data structures in their Schema builder, view the Content online, upload Assets (such as images and other documents), and contains a method for querying data. Of course, since this is a hosted solution, pricing starts at free and can get more expensive from there. The free pricing tier allows 2500 entries. The $29/mo tier allows 5000 entries. To see the complete pricing and feature structure, visit [graphcms.com/pricing](https://jasong.us/2TQvFGy).

I was curious how easy the IDE was to query. So, I created an account and setup a table to track products as well as a description that returned a rich text description as markdown, HTML, or raw format. The query I executed was this:

```graphql
{
  products {
    name
    description {
      markdown
    }
  }
}
```

As you can see, it's pretty easy to use:

{% include open-thumbnail.html path="2020/11/05/graphcms-demo.jpg" alt="A demo of the GraphCMS API Playground" %}