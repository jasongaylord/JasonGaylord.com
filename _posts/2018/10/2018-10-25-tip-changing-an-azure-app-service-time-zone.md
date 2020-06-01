---
title: "Tip: Changing an Azure App Service Time Zone"
author: Jason Gaylord
cloudscribe_id: "44cee5b1-213f-46f1-8cbd-ae46e7584022"
cloudscribe_path: "/blog/tip-changing-an-azure-app-service-time-zone"
permalink: /blog/tip-changing-an-azure-app-service-time-zone
date: 2018-10-25
categories: [cloud,development,tip]
tags: [cloud,development,tip]
bitly: https://jasong.us/2SgpaLb
---

It's possible that you need your application to handle the datetime values being sent to your app service. One reason for this is that date and time values being passed in may not include the proper time zone designation. By default, Azure Web Apps use UTC settings. To change this value, visit your Azure App Service. In the App Service menu, scroll to Application settings. Add a new setting under Application Settings called `WEBSITE_TIME_ZONE`. 

![https://cdn.jasongaylord.com/images/2018/10/25/Auzre_Application_Settings.png](https://cdn.jasongaylord.com/images/2018/10/25/Auzre_Application_Settings.png)

Acceptable values for this setting can be any of the acceptable values defined in the Windows Registry under the key `HKLM\Software\Microsoft\Windows Nt\CurrentVersion\Time Zones\`. As an example, I live in the state of Pennsylvania in the United States. Since the US has slightly modified time zone rules, I would tend to use the value "US Eastern Standard Time" for (UTC –05:00) Indiana (East).

You can check the "local" time of your app service by navigating to the Console option in the App Service menu. After the console loads, you can check the time like so:

![https://cdn.jasongaylord.com/images/2018/10/25/Azure_Console.png](https://cdn.jasongaylord.com/images/2018/10/25/Azure_Console.png)