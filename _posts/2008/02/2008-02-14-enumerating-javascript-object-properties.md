---
title: Enumerating JavaScript Object Properties
author: Jason Gaylord
date: 2008-02-14 11:29:00
aspnet-weblog-link: http://weblogs.asp.net/jgaylord/archive/2008/02/14/enumerating-javascript-object-properties.aspx
msmvps_path: https://blogs.msmvps.com/jgaylord/2008/02/14/enumerating-javascript-object-properties/
categories: [aspnet-weblog]
tags: [archive,javascript]
bitly: https://jasong.us/30W591v
---

I am building a few controls that use client-side script for reuse in the one web app I'm working on. I needed a way to enumerate the property names and values of an object in JavaScript so I knew which properties I had access to. Here's a JavaScript method I put together to enumerate the properties of a `CustomValidator` object. I have the function name as the value of the `ClientValidationFunction`:

```js
function myValidator(source, args) 
{
    var property, propCollection = "";

    for(property in source.parentElement)
    {
        propCollection += (property + ": " + source\[property\] + "\\n");
    }
    
    alert(propCollection);

    // For now, show the entry as invalid
    args.IsValid = false;
}
```