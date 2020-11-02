---
title: Build APIs with GraphQL and .NET Core - Part 1 of 2
author: Jason Gaylord
date: 2020-11-03
categories: [api,architecture,data,dev,dotnet]
tags:  [api,architecture,data,dev,dotnet]
post-number: 1092
image: https://cdn.jasongaylord.com/images/2020/11/03/hot-chocolate-graphql-banana-cake-pop.jpg
bitly: https://jasong.us/3mLdHBD
---

One of the recent projects I was involved in required our teams to build APIs that we'd consume in a customer facing web application. Those same APIs would also be exposed to third-party partners. However, both consumers of the APIs needed a slightly different approach. The internal team required APIs that were very granular so that they had complete control over the flow the customers would follow on the front end. This would also allow them to be quite nimble in changing direction without the need of an architecture redesign or heavy service lift. I like to call this level of APIs, micro-services. I view this as true micro-services as opposed to using that term as just another marketing buzz word. The external, third-party required "roll-up" services so that their application was not as chatty as ours.

In our case, most of our services use GET requests that return data back to the client. This is a perfect candidate for GraphQL. In this post, we'll cover:

* [Introduction to GraphQL](#introduction-to-graphql)
* [GraphQL Schema](#graphql-schema)
* [Getting Started in .NET Core](#getting-started-in-.net-core)
* [Adding GraphQL](#adding-graphql)
* [Test Our Graph](#test-our-graph)
* [Summary](#summary)

## Introduction to GraphQL
As explained on the [GraphQL website](https://jasong.us/3othlSi), GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data. You can construct GraphQL queries using a tool called [Graph_i_QL](https://jasong.us/2HDKqJO). Since GraphQL is not tied to any specific database or storage engine, queries can be processed and consumed by many various technologies.

After proving GraphQL in 2012, Facebook open sourced the spec in 2015. It's currently in use by Facebook, GitHub, Pinterest, Shopify, Lyft, PayPal, and others. You can dive in deeper directly on the GraphQL website at [graphql.com/learn](https://jasong.us/3jrMjGJ).

## GraphQL Schema
At the core of any GraphQL service is a schema which describes types and fields on those types. GraphQL can have a number of attributes and arguments. For instance, let's assume that we're tracking characters in episodes. We may have a type that looks like this:

```graphql
type Employee {
    name: String!
    appearsIn: [Department]!
}
```

In this example, we have an object type called `Employee`. This type contains two fields called `name` and `appearsIn`. The `name` field is a `String` type, which is built into GraphQL as a scalar type. The special character `!` means that the field is required. The `appearsIn` field contains an array of `Department` type. The `Department` type is not built-in, but rather, defined as a custom type. Again, this array is required.

In addition to types, we can add arguments. An example of adding an argument is shown below:

```graphql
type Ingredient {
    name: String!
    quantity(unit: QuantityUnit = CUP): Float
}
```

Notice, in this example, that we are specifying a new argument called `unit` and if this value is not passed, `CUP` will be used by default. We can make this argument required or leave it optional like this.

There are other ways we can expand the Schema. For a more detailed tutorial, I highly recommend reviewing the schema section on the GraphQL website at [graphql.org/learn/schema](https://jasong.us/2Tw6YiC).

## Getting Started in .NET Core
At this point, Microsoft has not released a package or framework that supports GraphQL. If you search NuGet, you'll find several packages that relate to Graph, but those target the Graph APIs that Microsoft has released. However, you should also find [GraphQL for .NET](https://jasong.us/2Ts7E8n) by [Joe McBride](https://jasong.us/324qtn9) and [HotChocolate](https://jasong.us/2Jfch41) by [ChilliCream](https://jasong.us/2HGjFos). 

For purposes of this post, I'm using Hot Chocolate. For a comprehensive workshop, visit [jasong.us/34BBOMT](https://jasong.us/34BBOMT).

The first step in this process will be to setup the .NET Core project. Create a blank directory and execute the following shell command in that directory:

```shell
dotnet new web
```

This will create a brand new ASP.NET Core project. Next, we'll create our data objects. So, we'll add in the [latest release candidate (pre-release)](https://jasong.us/2GjqGee) of the `Microsoft.EntityFrameworkCore.Sqlite` package and we'll also add in the [latest release candidate](https://jasong.us/2TMobnY) of the Entity Framework Tools for migrations:

```shell
dotnet add package Microsoft.EntityFrameworkCore.Sqlite --version 5.0.0-rc.2.20475.6
dotnet add package Microsoft.EntityFrameworkCore.Tools --version 5.0.0-rc.2.20475.6
```

Next, let's start adding in our data classes. Create a folder in the root of the project called `Data`. We'll add a class called `Manufacturer` and one called `Product`.

```csharp
using System;
using System.ComponentModel.DataAnnotations;

namespace hotchocolatedemo.Data
{
    public class Manufacturer
    {
        public int Id { get; set; }

        [Required]
        [StringLength(100)]
        public string Name { get; set; }
    }

    public class Product
    {
        public int Id { get; set; }

        [Required]
        [StringLength(100)]
        public string Name { get; set; }
        [Required]
        public float Price { get; set; }
        [Required]
        public DateTime LastUpdated { get; set; }

        [Required]
        public Manufacturer PrimaryManufacturer { get; set; }
    }
}
```

We also need to setup our `DbContext` and pull in our classes:

```csharp
using Microsoft.EntityFrameworkCore;

namespace hotchocolatedemo.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        { }

        public DbSet<Manufacturer> Manufacturers { get; set; }
        public DbSet<Product> Products { get; set; }
    }
}
```

Now we'll open up our `Startup.cs` file and register our `DbContext` using dependency injection:

```csharp
public void ConfigureServices(IServiceCollection services)
{
    services.AddDbContext<ApplicationDbContext>(options => options.UseSqlite("Data Source=storefront.db"));
}
```

We're inching closer to having our project ready to go. At this point, we just need to run our database migrations to prep our database. We'll do this by first installing the `dotnet-ef` tool.

```shell
dotnet new tool-manifest
dotnet tool install dotnet-ef --version 5.0.0-rc.2.20475.6 --local
```

And finally we'll run our migrations:

```shell
dotnet build
dotnet ef migrations add Initial
dotnet ef database update
```

## Adding GraphQL
Now that our .NET Core app is setup, we'll add the GraphQL package and begin setting up our query. First, let's add the [HotChocolate package](https://jasong.us/3jKuYco):

```shell
dotnet add package HotChocolate.AspNetCore --version 11.0.0-preview.177
```

{% include info-notice.html %}
The latest version, at the time of this post, was preview version 177 which was just released yesterday morning.
{% include end-notice.html %}

Add a new file that will query all of our products, called `Query.cs` in a new `Graph` directory:

```csharp
using HotChocolate;
using hotchocolatedemo.Data;
using System.Linq;

namespace hotchocolatedemo.Graph
{
    public class Query
    {
        public IQueryable<Product> GetProducts([Service] ApplicationDbContext context) => context.Products;
    }
}
```

And we'll update the `Startup.cs` services to inject the GraphQL server and register the `Query` class we just created:

```csharp
public void ConfigureServices(IServiceCollection services)
{
    services.AddDbContext<ApplicationDbContext>(options => options.UseSqlite("Data Source=storefront.db"));
    services.AddGraphQLServer().AddQueryType<Query>();
}
```

Also in `Startup.cs`, we'll modify the `ConfigureServices()` method to add the following endpoint:

```csharp
app.UseEndpoints(endpoints =>
{
    endpoints.MapGraphQL();
});
```

## Test Our Graph
Let's test what we've done to this point. We're going to run our project and attempt to hit our graph within Banana Cake Pop. Banana Cake Pop is a GraphQL IDE which works with Hot Chocolate and other GraphQL servers. You can download it at [chillicream.com/docs/bananacakepop#download](https://jasong.us/2JpFY2d).

```shell
dotnet run
```

Once Banana Cake Pop is downloaded, open it up and navigate to your GraphQL endpoint. You'll notice that the local port will likely be 5000 for your application. We will want to append `/graphql` as that's the default mapped endpoint for the graph. This can be changed by passing in a different value to the `MapGraphQL()` method in the `Startup.cs` file. After you enter your URL, you'll want to click on the Schema icon on the left to browse the schema. It will look similar to this:

{% include open-thumbnail.html path="2020/11/03/hot-chocolate-graphql-banana-cake-pop.jpg" alt="Testing our GraphQL Endpoint in Banana Cake Pop" %}

## Summary
Today we learned how to get started with GraphQL by creating an empty ASP.NET application, installing SQLite, GraphQL, and Entity Framework Core, and testing our application using Banana Cake Pop. Tomorrow we'll add data and test out our application some more.