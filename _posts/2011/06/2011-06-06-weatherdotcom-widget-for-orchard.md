---
title: The WeatherDotCom Widget for Orchard CMS
author: Jason Gaylord
cloudscribe_id: "5d52916d-5429-4624-9c8d-aea02cffb2fc"
cloudscribe_path: "/blog/weatherdotcom-widget-for-orchard"
msmvps_path: "https://blogs.msmvps.com/jgaylord/2011/06/06/the-weatherdotcom-widget-for-orchard-cms/"
permalink: /blog/weatherdotcom-widget-for-orchard
date: 2011-06-06
categories: [archive]
tags: [archive,orchard,weather]
bitly: https://jasong.us/2XMNXtO
---

If you've checked out my new website recently, you may have noticed that I have included the weather on the site. Mouse over on the right-hand side and you'll notice a "bing-like" box that will appear. I'll talk about this a bit more in a bit, but you'll notice that the weather pulls for my local zip code. These are the results from the [Weather Channel's weather.com](https://jasong.us/2LcSmAl).

To take advantage of this service, you must first register on their website at [http://www.weather.com/services/xmloap.html](http://jasong.us/lTxDfY). During this process, you'll be provided with a Partner ID and a License Key. Be sure to take note of these as you'll need them at a later point.

> ***<span color="#666666" style="color: rgb(102, 102, 102);">Note: If you are not a programmer or web developer, you may want to skip past the next two sections and go to Adding the Widget to Orchard.</span>***

## Weather Data from the Web Service
I wanted to take advantage of all of the data being returned from the Weather Channel's current conditions web service. So, I converted the result into two strongly-typed class objects. The first class object is called LocationInfo and is defined as:

```csharp
public class LocationInfo
{
    public string LocationName { get; set; }
    public string Latitude { get; set; }
    public string Longitude { get; set; }
    public string Sunrise { get; set; }
    public string Sunset { get; set; }
    public string TimeZone { get; set; }
}
```

The second class object is called CurrentConditions and is defined as:

```csharp
public class CurrentConditions
{
    public string Temperature { get; set; }
    public string FeelsLike { get; set; }
    public string Description { get; set; }
    public string DescriptionIconNumber { get; set; }
    public string BarometricPressure { get; set; }
    public string BarometricPressureDirection { get; set; }
    public string WindSpeed { get; set; }
    public string WindDirection { get; set; }
    public string WindGust { get; set; }
    public string Humidity { get; set; }
    public string Visibility { get; set; }
    public string UvIndex { get; set; }
    public string UvDescription { get; set; }
    public string Dewpoint { get; set; }
    public string MoonIconNumber { get; set; }
    public string MoonType { get; set; }
}
```

In both of these instances, these are the properties that will be exposed to any custom views being rendered. I've included both of these class objects in another class object that is returned when the call is made to obtain the current weather. This class object is called Weather and is defined as:

```csharp
public class Weather
{        
    public LocationInfo LocationInfo { get; set; }
    public CurrentConditions CurrentConditions { get; set; }
    public DateTime TimeCached { get; set; }
    public String ApiStatus { get; set; }
}
```

## Customizing the Weather View
In my particular instance, I wanted to be able to cache the weather every 15 minutes. I also wanted to show a current weather image in the background and hide the text details for the weather. Then, I would show the text details in a div. To get this to work, I decided to add some custom JavaScript.

The first step in this task was to randomly generate where my first "bing-like" box would appear hinting that a mouseover was needed. To do this, I randomly calculated the location from the top and left and subtracted the size of the details box. This helped me to better place the boxes while staying within the background image location.

```javascript
$(document).ready(function () {
    /* Randomize Divs */
    var ranHeight = Math.ceil(Math.random() * 115) + 5; /* Always 85 less than height */
    var ranIndent = Math.ceil(Math.random() * 120) + 5; /* Always 180 less than height */

    /* Get the Divs */
    var spot = $('#weatherSpot');
    var details = $('#weatherDetails');

    /* Add the new positions */
    spot.css("top", ranHeight + "px");
    details.css("top", ranHeight + "px");
    spot.css("right", ranIndent + 155 + "px");
    details.css("right", ranIndent + "px");
});
```

The next step in the process was to use jQuery to fade in and out the boxes.

```javascript
$('#weatherBlock').mouseenter(function () {
    $('#weatherSpot').fadeIn('slow', function () {
        // Nothing happens when animation completes
    });
}).mouseleave(function () {
    $('#weatherSpot').fadeOut('slow', function () {
        // Nothing happens when animation completes
    });
});

$('#weatherSpot').mouseenter(function () {
    $('#weatherDetails').fadeIn('slow', function () {
        // Nothing happens when animation completes
    });
}).mouseleave(function () {
    $('#weatherDetails').fadeOut('slow', function () {
        // Nothing happens when animation completes
    });
});
```

Finally, I needed to layout my view. Since it's a custom view, I had complete control over the rendering and decision of the data. I choose to use many of the default fields.

```csharp
@using System.Web.Hosting
@{
    Script.Include("weatherDotCom.js");

    var imgPath = "~/Themes/MyTheme/Content/weathericons/";
    var weathericon = "";

    weathericon = Url.Content(imgPath + Model.WeatherResults.CurrentConditions.DescriptionIconNumber + ".png");
}

<div id="weatherBlock" class="weatherBlock" style="background: url('@weathericon') no-repeat;">
    <div id="weatherSpot" class="weatherSpot">
    </div>
    <div id="weatherDetails" class="weatherDetails">
        <span class="weatherTemp">@Model.WeatherResults.CurrentConditions.Temperature&deg;F</span><br />
        @Model.WeatherResults.CurrentConditions.Description<br />
        Feels Like: @Model.WeatherResults.CurrentConditions.FeelsLike&deg;<br />
        Wind: From @Model.WeatherResults.CurrentConditions.WindDirection at @Model.WeatherResults.CurrentConditions.WindSpeed mph
    </div>
</div>
```

I created custom weather icons for each of the potential weather patterns. The Weather Channel includes default images with your connection to their service.

You may customize the widget as I have shown above or use the default view which is provided.

## Adding the Widget to Orchard
To install the widget, you can log into your Orchard CMS version 1.1 dashboard and go to Modules (If you are running Orchard version 1.0, I'd strongly urge you to upgrade your instance as this instance is much more stable and more user friendly). In the Modules section, choose Gallery and type in Weather in the search box. Choose the WeatherDotCom widget and click Install. After its finished installing, you'll be prompted to enable this feature.

If you'd like to install the widget offline, you can [download it directly from the Orchard Gallery website](http://jasong.us/kVwwY7).

Once it's enabled, it's now a new part that can be added to a page, a blog post, or as a widget. In most cases, you'll want to add it as a widget. To add it as a Widget, choose Widgets in the dashboard. In the appropriate zone click the Add button. I'd recommend using it in AsideFirst, AsideSecond, or one of the zones found AfterMain. On the next screen, choose Web Part Record.

When it's added, you'll have a property window screen that allows you to specify the properties for the widget.

## Conclusion
The source code and the widget can be downloaded by using the links below. If you find any bugs or have any suggestions, be sure to enter them on the CodePlex site, not the Orchard Gallery website, by using the [Issue page](http://jasong.us/jSK0CU) or [Discussion page](http://jasong.us/j2PCWf) respectively.

[![](http://jasong.us/jrk74Q) Module Package for Orchard CMS](http://jasong.us/iVgLrU "http://jasong.us/iVgLrU")

[![](http://jasong.us/jrk74Q) Full Source Code](http://jasong.us/mhsING "http://jasong.us/mhsING")