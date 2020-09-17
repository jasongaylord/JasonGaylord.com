---
title: REST API Versioning Using ASP.NET Core
author: Jason Gaylord
date: 2020-09-18
categories: [api,architecture,dev,dotnet]
tags:  [api,architecture,dev,dotnet]
post-number: 1043
image: https://cdn.jasongaylord.com/images/2020/09/18/postman-api-supported-versions.jpg
bitly: https://jasong.us/3hDX3Ba
---

In recent years, the REST architecture style has been used heavily with web services. Providers of REST web services may need to allow for multiple versions as they may have customers who cannot support a new version or may be testing a new feature. There are plenty of folks that feel passionate about whether or not versioning should take place using REST. Since 2016, there have been many enhancements to a GitHub project called [`aspnet-api-versioning`](https://jasong.us/2E5sHcS). In this post, I'll cover some of the latest enhancements and how to use the package for .NET Core.

To get started, you can either grab my starter project by using the GitHub link below or create a new WebAPI project by running the command `dotnet new webapi`. 

{% include github-generate.html bitly="jasong.us/2FJX2y2" repo="jasongaylord/apiversioningdemo" %}

At this point, I would assume you are familiar with loading this project in Visual Studio Code (or Visual Studio), building, and running the project. In Visual Studio Code, you can accomplish this by going into the Terminal and executing `dotnet run`. You'll need to take note of the URL that `Microsoft.Hosting.Lifetime` is listening on. Typically it is `https://localhost:5001`. Since we're using the project template, we can visit `https://localhost:5001/weatherforecast` to get a JSON response.

## Adding Versioning Capabilities
We'll need to include the `aspnet-api-versioning` project as mentioned above. As of this post, they are currently on version 4.1.0. To do this, it's easiest to navigate to your project path inside a command line and run the command `dotnet add package Microsoft.AspNetCore.Mvc.Versioning`.

Now that the NuGet package is added, we can modify our `Startup` class so that the API versioning is configured on startup like so:

```csharp
public void ConfigureServices(IServiceCollection services)
{
    services.AddControllers();
    services.AddApiVersioning();
}
```

If we go back and run the application, we'll receive an error like so:

```json
{"error":{"code":"ApiVersionUnspecified","message":"An API version is required, but was not specified.","innerError":null}}
```

The reason we get this error is that the router is not sure which version to use. However, we can assume a default version by specifying an option like so:


```csharp
public void ConfigureServices(IServiceCollection services)
{
    services.AddControllers();
    services.AddApiVersioning(options => { options.AssumeDefaultVersionWhenUnspecified = true; });
}
```

Now when we execute, we'll get our JSON response like we did above. There are other options available to be set including, but not limited to, `ReportApiVersions`:

{% include open-thumbnail.html path="2020/09/18/api-versioning-options.jpg" alt="API Versioning Options" %}

We'll also set the `ReportApiVersions` value to `true` so we can see the value we should be using when browsing:

{% include open-thumbnail.html path="2020/09/18/postman-api-supported-versions.jpg" alt="API Version in Postman" %}

The above is a screenshot from viewing the application in Postman.

## Add Version Info to Controllers and Methods
Now that we have version 1.0, that only helps us until, well, we need another version. So, let's dive into our options here. For versioning, we'll first start by setting the `ApiVersion` attribute and updating the `Route` attribute on our controller. Since we're using the starter API, we have the `WeatherForecastController` that we'll modify. The current attributes on this controller are:

```csharp
[ApiController]
[Route("[controller]")]
public class WeatherForecastController : ControllerBase
```

This will now change to something similar to this:

```csharp
[ApiController]
[ApiVersion("1.0")]
[Route("v{v:apiVersion}/[controller]")]
public class WeatherForecastController : ControllerBase
```

Now that we've updated the route, remember that we cannot simply browse to a URL similar to `https://localhost:5001/weatherforecast`. Instead, we'll need to include the version such as `https://localhost:5001/v1.0/weatherforecast`. We'll also notice a JSON response if we try to insert version 2.0 instead:

```json
{"error":{"code":"UnsupportedApiVersion","message":"The HTTP resource that matches the request URI 'https://localhost:5001/v2.0/weatherforecast' does not support the API version '2.0'.","innerError":null}}
```

We can, however, add support to our controller for multiple versions. We'd do this by stacking ApiVersion values like so:

```csharp
[ApiVersion("1.0"), ApiVersion("2.0")]
```

If our controller needs to support all versions of the API, we can simply remove the `ApiVersion` attribute(s) and instead add the `ApiVersionNeutral()` attribute.

That's great if we are versioning each one of our controllers. But, what happens if we need to override a method for a different version? Well, we can do this by using the `MapToApiVersion` attribute like so:

```csharp
[HttpGet, MapToApiVersion("3.0")]
public IEnumerable<WeatherForecast> GetV3()
```

In this case, we don't need to specify the supported API Version of 3.0 as a controller attribute. Instead, we'll specify it just for this method value. It is good practice to include it on the controller as it will be reported as a support API Version to the client.

## Supporting Versioning Without Routing
There may be times that you need to allow version to be specified in other ways such as in a query string or HTTP header. Let's start with query string. Let's assume that we are working with a client that already has our URL structure baked into their software, but they have the ability to modify the query string and hit our API like `https://localhost:5001/weatherforecast?version=2.0`. We can enable this by going back into the startup settings and adding an `ApiVersionReader` like so:

```csharp
services.AddApiVersioning(options => { 
    options.AssumeDefaultVersionWhenUnspecified = true; 
    options.ReportApiVersions = true;
    options.ApiVersionReader = new QueryStringApiVersionReader("version");
}); 
```

{% include warning-notice.html %}
If your URL is not working properly, make sure that your controller route is back to the original state or that you support multiple routes.
{% include end-notice.html %}

We can do something similar by passing over the version in the HTTP header information by using an `ApiVersionReader`:

```csharp
services.AddApiVersioning(options => { 
    options.AssumeDefaultVersionWhenUnspecified = true; 
    options.ReportApiVersions = true;
    options.ApiVersionReader = new HeaderApiVersionReader("version");
});
```

Ok. So, what do we do if we want to include both? We can do this:

```csharp
options.ApiVersionReader = ApiVersionReader.Combine(new QueryStringApiVersionReader("version"), new HeaderApiVersionReader("version"));
```

Finally, there's even a `MediaTypeApiVersionReader` class. This allows us to specify the media type and pass over a version. So, if we specified the `ApiVersionReader` like so:

```csharp
options.ApiVersionReader = new MediaTypeApiVersionReader("v");
```

We'd pass the `Accept` header with a value of `application/json,v=2.0` to obtain the 2.0 version of our API.

## Deprecating Versions of our API
To notify of an upcoming version of the API that will be deprecated, you'd add the `Deprecated = true` value to the `ApiVersion` like so:

```csharp
[ApiVersion("1.0", Deprecated = true), ApiVersion("1.1"), ApiVersion("2.0")]
```

By doing this, you'll see it represented as a header value in Postman like so:

{% include open-thumbnail.html path="2020/09/18/postman-api-deprecated-versions.jpg" alt="Deprecated API Versions in Postman" %}

{% include info-notice.html %}
The deprecated property only notifies that an API is going to be deprecated through headers. This property does not actually deprecate. To remove the version simply remove it. I typically map methods to specific versions and remove the version when it no longer applies but continue to report the deprecated value.
{% include end-notice.html %}

## Conclusion
In this post we reviewed how to create API versioning a few different ways, We covered how to using routing, HTTP headers, and query strings to choose a version. We also covered how to announce an upcoming API will be deprecated. You can also clone my project and look to see how I structured the code mentioned above:

{% include github-clone.html bitly="jasong.us/2ZOq8DH" repo="jasongaylord/apiversioningdemo" branch="final" %}