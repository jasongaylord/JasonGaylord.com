---
title: Letting ASP.NET Handle Image File Extensions in IIS 6
author: Jason Gaylord
date: 2009-05-04 11:41:00
aspnet-weblog-link: http://weblogs.asp.net/jgaylord/archive/2009/05/04/letting-asp-net-handle-image-file-extensions-in-iis-6.aspx
categories: [aspnet-weblog]
tags: [archive]
bitly: https://bit.ly/2WUepmc
---

One of the best features of [ASP.NET](http://asp.net/) (either webforms or MVC) is it's extensibility. One way you can extend ASP.NET is by using HttpHandlers or HttpModules. IIS 6 and IIS 7+ evaluate HttpHandlers and HttpModules slightly different. [Dave Donaldson](http://arcware.net/), an employee at Telligent, posted about the [differences on his blog back in April of 2008](http://arcware.net/use-a-single-web-config-for-iis6-and-iis7/).

I was recently working on a project that needed to serve up images using the actual image file extension (ie: .jpg, .gif, .png, etc) to allow for the images and URLs to be search engine optimized (SEO). Some of the images in the site were stored dynamically and some weren't. For instance, the logo and background images were static for the web application. However, one of the application features included some basic CMS functionality to add, update, and remove employee photos. I choose an HttpModule so that I can look at each request that is being processed to determine how it should be handled (note: I've used the same module to handle other functionality besides just images). Here's an example of what the HttpModule looks like:

```csharp
public class ImageProcessingModule : IHttpModule {
    public void Init(HttpApplication context)
    {
        context.BeginRequest += this.app\_BeginRequest;
    }

    public void Dispose() { }

    public void app\_BeginRequest(object s, EventArgs e)
    {
        HttpApplication application = (HttpApplication)s;
        HttpContext context = application.Context;
        string filePath = context.Request.FilePath;
        string urlPath = context.Request.Path;

        if (context.Request.ApplicationPath != "/")
        {
            urlPath = urlPath.Replace(context.Request.ApplicationPath, "");
        }

        string fileExt = VirtualPathUtility.GetExtension(filePath).Replace(".", "");

        // Let's check to see if the path ends with an image extension and is 
        // "dynamic". If the image is contained in one of our themes, then it should
        // be treated as a static image. if (IsImage(urlPath) && !urlPath.Contains("/App\_Themes/"))
        {
            // TODO: Rewrite the path to handle the image properly. context.RewritePath("NEW PATH", false);
        }
    }

    private Boolean IsImage(String path)
    {
        if (path.EndsWith(".jpg") | path.EndsWith("gif"))
            return true;

        return false;
    }
}
```

Now the module rewrites the path for any file that contains a .jpg or .gif extension. However, we still need to look to handle the static files properly. At this point, IIS6, which handles web requests differently, does not know how to process .jpg or .gif images. So, by changing the conditional statement like so:

```csharp
// Let's check to see if the path ends with an image extension and is 
// "dynamic". If the image is contained in one of our themes, then it should
// be treated as a static image. if (IsImage(urlPath) && !urlPath.Contains("/App\_Themes/"))
{
    // TODO: Rewrite the path to handle the image properly. context.RewritePath("NEW PATH", false);
}
else if (IsImage(urlPath))
{
    context.Response.TransmitFile(filePath);
}
```

We can now let IIS6 handle our image files.