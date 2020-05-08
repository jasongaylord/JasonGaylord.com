---
title: Converting a .NET DateTime object to a JavaScript Date object
author: Jason Gaylord
cloudscribe_id: "71171144-0ef3-41ca-a8ca-678970854f23"
cloudscribe_path: "/Blog/converting-a-.net-datetime-object-to-a-javascript-date-object"
permalink: /Blog/converting-a-.net-datetime-object-to-a-javascript-date-object
date: 2011-06-30
categories: [archive]
tags:  [archive,dotnet,javascript]
---

When using a WCF or ASMX web service in ASP.NET, you might find the need to pass back a DateTime object via JSON. However, what you might not realize is that by passing a .NET DateTime object back to JavaScript, you'd receive an “Invalid date” script exception. The data being passed back to JavaScript may resemble the following:

```javascript
/Date(1315938182867-0400)/
```

The reason that the date is formatted in this way is that JavaScript uses Unix Epoch as the base date and time. This value is 1/1/1970 at 12:00:00 AM. JavaScript tracks dates as the number of milliseconds from the Unix Epoch value to the date submitted.

To assist in the JavaScript date conversion, I have added an extension method for the DateTime object that resembles the following:

```javascript
private static readonly long UnixEpochTicks = (new DateTime(1970, 1, 1, 0, 0, 0, DateTimeKind.Utc)).Ticks; 
        
public static long? ToJsonTicks(this DateTime? value)
{
    return value == null ? (long?)null : (value.Value.ToUniversalTime().Ticks - UnixEpochTicks) / 10000;
}

public static long ToJsonTicks(this DateTime value)
{
    return (value.ToUniversalTime().Ticks - UnixEpochTicks) / 10000;
}
```

In JavaScript, I can now pass this value into a Date() object and get the correct DateTime value for my locale.

Feel free to use this method in your applications. I offer no warranties or guarantees with the code above.