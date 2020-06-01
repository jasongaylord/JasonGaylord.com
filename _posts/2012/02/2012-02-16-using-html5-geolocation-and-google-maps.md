---
title: Using HTML 5 Geolocation, Google Maps to Generate Driving Distance
author: Jason Gaylord
cloudscribe_id: "232508a9-b8d5-4e65-b968-c81be429378b"
cloudscribe_path: "/blog/using-html5-geolocation-and-google-maps"
permalink: /blog/using-html5-geolocation-and-google-maps
date: 2012-02-16
categories: [archive]
tags: [archive,html,javascript]
bitly: https://jasong.us/3gJibGQ
---

HTML5 will introduce many new and exciting features including the addition of geolocation. Geolocation allows a device to determine a global position of the device (latitude and longitude), it's accuracy (horizontal accuracy and vertical accuracy), altitude, and speed. The Geolocation feature in HTML 5 is already supported by most mainstream browsers. According to research performed by [Mark Pilgrim](https://jasong.us/2WGUwxl), the following browser support Geolocation:

```html
<table border="0" cellpadding="3" cellspacing="0" width="600">
    <tbody>
        <tr>
            <td align="center" valign="top" width="86">**IE**</td>
            <td align="center" valign="top" width="85">**Firefox**</td>
            <td align="center" valign="top" width="84">**Safari**</td>
            <td align="center" valign="top" width="87">**Chrome**</td>
            <td align="center" valign="top" width="84">**Opera**</td>
            <td align="center" valign="top" width="85">**iPhone**</td>
            <td align="center" valign="top" width="87">**Android**</td>
        </tr>
        <tr>
            <td align="center" valign="top" width="85">9.0+</td>
            <td align="center" valign="top" width="85">3.5+</td>
            <td align="center" valign="top" width="84">5.0+</td>
            <td align="center" valign="top" width="88">5.0+</td>
            <td align="center" valign="top" width="85">10.6+</td>
            <td align="center" valign="top" width="85">3.0+</td>
            <td align="center" valign="top" width="88">2.0+</td>
        </tr>
    </tbody>
</table>
```

There are a few "gotchas" to keep in mind when using Geolocation:

1.  The browser may not support the HTML 5 geolocation API. Many older browsers relied on custom built APIs for relaying geolocation information to applications. [Google Gears](https://jasong.us/2AeMMLP), now deprecated, is an example of an API that some browsers have implemented.

2.  The user must opt-in to the HTML 5 geolocation call for each website they visit. In Internet Explorer, the notification bar appears like:  

    [![image_4](https://cdn.jasongaylord.com/images/2012/02/16/allowlocation.png "image_4")](https://cdn.jasongaylord.com/images/2012/02/16/allowlocation.png)

3.  The geolocation call may timeout. This is usually caused by a poor Internet connection or that the current area is not reporting (due to a lack of information) the geolocation yet. For more information on how HTML5 Geolocation works, [click here to view the top response to the thread on  StackOverflow.com](https://jasong.us/3bf6DHr).

Now that we've covered some of the information, let's focus on the goal for this post. Our goal is to generate the driving distance between two locations. I've used this method to let potential [TechBash](http://jasong.us/tb) (see image below as an example) attendees know how far away they are from the conference center. Storefronts may want to implement something similar if they'd like to offer a special offering to local shoppers or from shoppers traveling further away.

> [![image_4](https://cdn.jasongaylord.com/images/2012/02/16/googlemapmiles.png "image_4")](https://cdn.jasongaylord.com/images/2012/02/16/googlemapmiles.png)
> 
> <small>*Above: Small UI update to show current distance from the TECHbash conference.*</small>

Let's start by focusing on obtaining our current geolocation position.

## Implementing HTML5 Geolocation
When using the HTML5 geolocation API, we must write some JavaScript. We can use the API in conjunction with JavaScript libraries such as jQuery. The geolocation API call is pretty simplistic. It accepts a callback method, an exception method (optional), and additional options (optional). While it is not required to pass in a callback method to handle errors, it is highly recommended.

```javascript
navigator.geolocation.getCurrentPosition(*callback*,*error*,*options*);
```

The callback method, which will return a [Position object](https://jasong.us/35HBds0), will contain a timestamp and coordinate information including the latitude, longitude, altitude, accuracy (horizontal accuracy), altitudeAccuracy (vertical accuracy), heading (direction degrees), and speed (meters per second). Only the latitude, longitude, and accuracy properties are guaranteed to have values.

The error callback method, which will return a [PositionError object](https://jasong.us/3bf7qYV), will contain a code and a message. The code can be a value of 1 (permission denied), value of 2 (position unavailable), value of 3 (timeout), or value of 0 (unknown error). A message will be supplied from the browser regarding the error.

The additional options object is an object with defined properties. At the time that this was published, the options object, [PositionOptions object](https://jasong.us/3bhNcxJ), has three properties. They are enableHighAccuracy, timeout, and maximumAge.

The final piece of our HTML5 Geolocation implementation is to use an open source JavaScript library called [Modernizr](http://jasong.us/qQX7V7). Modernizr is a library that allows developers to take advantage of new HTML5 and CSS3 features while still [supporting older browsers such as IE6, Firefox 3.5, and others](https://jasong.us/35JX7en). We'll use a function in Modernizr to check for HTML5 Geolocation support.

Now that we've covered that, let's see what we have in place so far:

```javascript
function getCurrentPosition() {
    if (Modernizr.geolocation) {
        navigator.geolocation.getCurrentPosition(locationSuccess,locationError);
    } else {
        // TODO: Decide what to do when the browser doesn't support Geolocation
    }
}

function locationSuccess(position)
{
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    // TODO: We have to finish this method
}

function locationError(err)
{
    // TODO: We need to complete our error handling
    if (err.code == 1) { // user won't grant permission }
    if (err.code == 2) { // position is currently unavailable }
    if (err.code == 3) { // a timeout has occurred }
}
```

Before we tweak this anymore, let's move onto the Google Maps API.

## Implementing the Google Maps API
Much like every other JavaScript library or API, the Google Maps library is constantly changing. At the time of this post, the current Google Maps API was version 3.5. You can add the library to your page by including the script like so:

```html
<script src="http://maps.googleapis.com/maps/api/js?sensor=false" type="text/javascript"></script>
```

The sensor parameter is required. If you will be using a GPS to provide the sensor information to the Google Maps, then set this value to true. We will not in our case so we'll set it to false.

The portion of the API that we are most concerned with for our implementation is the DirectionsService. We'll create a [DirectionsRequest](https://jasong.us/2WBCLzL) to send over to Google with a series of parameters. The two major parameters are our two endpoints. We can send these endpoints as a string or as a LatLng object. The other required parameter is the travelMode. Since most attendees will be driving, we'll using the travelMode for driving. Our request will look like so:

```javascript
// TODO: Pass actual values into the lat and lon variables below
var start = new google.maps.LatLng(lat, lon);
var end = "1333 S Prospect St, Nanticoke, PA 18634";
var request = {origin:start, 
            destination:end, 
            travelMode:google.maps.DirectionsTravelMode.DRIVING};
```

Next, we need to handle the response from Google. To do this, we'll call the route function of DirectionsService and obtain the response. If the response's status code is OK, we'll be able to process the response as expected. This is shown below.

```javascript
directionsService.route(request, function(response, status) {
    if (status == google.maps.DirectionsStatus.OK) {
        distance  = response.routes[0].legs[0].distance.value;
    } else {
        // TODO: Handle the Google Maps exception
    }
});
```

Finally, let's tie in the rest of the Google Maps API stuff.

```javascript
var directionsService = new google.maps.DirectionsService();

function calculateRoute(lat, lon) {
    var distance = 0;
    var start = new google.maps.LatLng(lat, lon);
    var end = new google.maps.LatLng(41.195647, -75.992499);
    var request = {origin:start, destination:end, travelMode: google.maps.DirectionsTravelMode.DRIVING};

    directionsService.route(request, function(response, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            distance  = response.routes[0].legs[0].distance.value;
        } else {
            // TODO: Handle the Google Maps exception
        }
    });

    return distance;
}
```

Now that we've tied in the Google Maps API, let's integrate this call into our HTML5 Geolocation script.

## Putting it all Together

In our original locationRequest function, we grabbed the latitude and longitude values from the current position of the machine. So let's add our call to the Google calculateRoute and combine that with a basic HTML5 page. Here is the final result:

```html
<!DOCTYPE html>
<html>

<head>
<meta content="text/html; charset=utf-8" http-equiv="Content-Type">
<title>The total distance between here</title>
</head>

<body>
    <div>
        The total distance between here and <a href="http://techbash.com">TECHbash 2012</a> is: 
        <span id="distance"></span> miles.
    </div>

    <script src="http://ajax.aspnetcdn.com/ajax/jQuery/jquery-1.7.1.min.js" 
        type="text/javascript"></script>
    <script src="http://ajax.aspnetcdn.com/ajax/modernizr/modernizr-2.0.6-development-only.js" 
        type="text/javascript"></script>
    <script src="http://maps.googleapis.com/maps/api/js?sensor=false" 
        type="text/javascript"></script>
    <script type="text/javascript">
        function getCurrentPosition() {
            if (Modernizr.geolocation) {
                navigator.geolocation.getCurrentPosition(locationSuccess,locationError);
            } else {
                // TODO: Decide what to do when the browser doesn't support Geolocation
            }
        }

        function locationSuccess(position)
        {
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;

            calculateRoute(latitude, longitude);
        }

        function locationError(err)
        {
            // TODO: We need to complete our error handling
            if (err.code == 1) { 
                // user won't grant permission 
            }
            if (err.code == 2) { 
                // position is currently unavailable 
            }
            if (err.code == 3) { 
                // a timeout has occurred 
            }
        }

        var directionsService = new google.maps.DirectionsService();

        function calculateRoute(lat, lon) {
            var distance = 0;
            var start = new google.maps.LatLng(lat, lon);
            var end = new google.maps.LatLng(41.195647, -75.992499);
            var request = {origin:start, destination:end, 
                travelMode: google.maps.DirectionsTravelMode.DRIVING};

            directionsService.route(request, function(response, status) {
                if (status == google.maps.DirectionsStatus.OK) {
                    distance  = response.routes[0].legs[0].distance.value;
                    duration = response.routes[0].legs[0].duration.value;
                    $("#distance").html(Math.round(distance / 1609.344));
                } else {
                    // TODO: Handle the Google Maps exception
                }
            });

            return distance;
        }

        $(document).ready(function() { getCurrentPosition(); });
    </script>
</body>

</html>
```

### Conclusion
You can learn more about the HTML5 Geolocation by using one of the resources below:

- [W3C HTML5 Geolocation Spec](https://jasong.us/2LbtNUD)
- [Wikipedia W3C Geolocation Spec](https://jasong.us/2YKtS9z)
- [Mark Pilgrim's Dive into HTML5](https://jasong.us/2Wg7VO4)

You can learn more about Google's Maps API by visiting the [Google Maps API docs](https://jasong.us/2yI28YH).