---
title: Create a Website Scraper for Azure Functions
author: Jason Gaylord
date: 2020-10-02
categories: [azure,cloud,dev,dotnet,web]
tags:  [azure,cloud,dev,dotnet,web]
post-number: 1057
image: https://cdn.jasongaylord.com/images/2020/10/02/web-scraper-function.jpg
bitly: https://jasong.us/30tEgTo
---

There are many reasons you may need a website scraper. One of the biggest reasons I use website scrapers is to prevent me from visiting a site to look for something on a regular basis and losing the time spent on that site. For instance, when COVID-19 first hit, I visited the stats page on the Pennsylvania Department of Health each day. Another instance may be to watch for a sale item during [Amazon's Prime Day](https://jasong.us/30cpwb5). 

## Getting Started
To get started, we'll want to create an Azure Function. We can do that a few different ways:

- [Use an extension for Visual Studio Code](https://jasong.us/2V6B7WH)
- Use the Azure extension for Visual Studio
- [Use the command line](https://jasong.us/3eCA0Fv)
- Use the Azure Portal

At this point, use the method that you feel most comfortable with. I tend to use the command line or the Azure extension for Visual Studio Code as they tend to leave the codebase very clean. I'm making this function with C# so I can use some 3rd party libraries.

In my case, I've called my `HttpTrigger` function `ScrapeSite`.

## Modifying the Function
Once the function is created, it should look like this:

```csharp
public static class ScrapeSite
{
    [FunctionName("ScrapeSite")]
    public static async Task<IActionResult> Run(
        [HttpTrigger(AuthorizationLevel.Function, "get", "post", Route = null)] HttpRequest req,
        ILogger log)
    {
        log.LogInformation("C# HTTP trigger function processed a request.");

        string name = req.Query["name"];

        string requestBody = await new StreamReader(req.Body).ReadToEndAsync();
        dynamic data = JsonConvert.DeserializeObject(requestBody);
        name = name ?? data?.name;

        string responseMessage = string.IsNullOrEmpty(name)
            ? "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response."
            : $"Hello, {name}. This HTTP triggered function executed successfully.";

        return new OkObjectResult(responseMessage);
    }
}
```

We'll bring in the NuGet package for `HtmlAgilityPack` so we can grab the appropriate area of our page. To do this, we'll use a command line, navigate to our project and run:

```shell
dotnet add package HtmlAgilityPack
```

In my case, I'm going to connect to Walmart and look at several Xbox products. I'll be querying the buttons on the page to look at the `InnerHtml` of the button and ensure that it does not read "_Get in-stock alert_". If it does, that means that the product is out of stock.

Our first step is to connect to the URL and read the page content. I'll do this by creating a sealed class that can be used to help deliver the properties back to the function:

```csharp
public sealed class ProductAvailability
{
    public bool IsAvailable { get; set; }
    public string Url { get; set; }
}
```

In this case, I'll be returning a boolean value as well as the URL that I'm attempting to scrape from. This will allow me to redirect the user to that location when necessary.

{% include warning-notice.html %}
While it is not illegal to screen scrape websites, you should make sure that you have the appropriate permission before scraping the site. In addition, if you scrape too often, the site may deem you as a bot and may block your IP address.
{% include end-notice.html %}

Next, I'm going to add a static class called `Scraper`. This will actually handle the majority of the scraping process. The class will take advantage of the `HtmlWeb.LoadFromWebAsync()` method in the `HtmlAgilityPack` package. The reason for this is that the built-in `HttpClient()` lacks the necessary headers to properly call most sites. If we use this library instead, most websites will record us as a bot.

After we connect to the URL, we'll use a selector to grab all buttons and then use a LINQ query to count how many buttons contain the text "_Get in-stock alert_". We'll update the `ProductAvailability` object and return it back.

```csharp
public static class Scraper
{
    public static async Task<ProductAvailability> GetProductAvailability(string uri)
    {
        var productAvailability = new ProductAvailability(){ Url = uri };

        var web = new HtmlWeb();
        var html = await web.LoadFromWebAsync(productAvailability.Url);
        var htmlString = html.DocumentNode;
        var buttons = htmlString.SelectNodes("//button").ToList();

        var outOfStock = buttons.Count(c => c.InnerHtml.Contains("Get in-stock alert"));
        productAvailability.IsAvailable = outOfStock == 0;

        return productAvailability;
    }
}
```

Finally, we'll update our function to call the `GetProductAvailability` method multiple times:

```csharp
public static class ScrapeSite
{
    [FunctionName("ScrapeSite")]
    public static async Task<IActionResult> Run(
        [HttpTrigger(AuthorizationLevel.Function, "get", "post", Route = null)] HttpRequest req,
        ILogger log)
    {
        log.LogInformation("C# HTTP trigger function processed a request.");

        var products = new List<ProductAvailability>();
        products.Add(await Scraper.GetProductAvailability("https://www.walmart.com/ip/Xbox-Series-X/443574645"));
        products.Add(await Scraper.GetProductAvailability("https://www.walmart.com/ip/Microsoft-Xbox-One-S-1TB-All-Digital-Edition-Console-Disc-free-Gaming-White-NJP-00024/560014078"));

        return new OkObjectResult(products);
    }
}
```

## Results
Now, we can run our function from within Visual Studio Code. To do this, hit the `F5` key. This will require that you have the [Azure Functions Core Tools](https://jasong.us/30HGuPd) installed. If you do not, you'll be prompted to install it. After it's installed and you press `F5`, you'll be prompted to visit your local URL for your function. If successful, you should see the following results (as of this post) for the above two products:

```json
[{"isAvailable":false,"url":"https://www.walmart.com/ip/Xbox-Series-X/443574645"},{"isAvailable":true,"url":"https://www.walmart.com/ip/Microsoft-Xbox-One-S-1TB-All-Digital-Edition-Console-Disc-free-Gaming-White-NJP-00024/560014078"}]
```