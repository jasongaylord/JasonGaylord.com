---
title: Known Postback Issue with AJAX Controls
author: Jason Gaylord
date: 2008-08-11 08:00:00
aspnet-weblog-link: http://weblogs.asp.net/jgaylord/archive/2008/08/11/known-postback-issue-with-ajax-controls.aspx
msmvps_path: https://blogs.msmvps.com/jgaylord/2008/08/11/known-postback-issue-with-ajax-controls/
categories: [aspnet-weblog]
tags: [archive]
bitly: https://bit.ly/3bT3ux4
---

I came across a postback issue while using the `CascadingDropDown` AJAX control. I had a web page with 3 `DropDownList` controls. The data for these controls was populated from the `CascadingDropDown` which would bind the data at runtime. The issue with this is that when data is being bound at runtime, it cannot be validated during postback unless [each value is registered with the page](http://forums.asp.net/p/945348/1139510.aspx#1139510).  In most cases, this wouldn't make sense. So, we have to fall back to turning off `EventValidation` at an application level in the web.config (attribute is found on the pages element) or at the page level (attribute is added to the page directive). It's best to turn off the `EventValidation` at the page level. There is no way to turn this off at the control level unless you are building your own control that does not contain the `SupportsEventValidation` attribute.