---
title: "Tip: Emergency Editing using App Service Editor"
author: Jason Gaylord
cloudscribe_id: "4ff4e6fc-9f8e-44a6-a7b1-4b2d3f0d291b"
cloudscribe_path: "/blog/tip-emergency-editing-using-app-service-editor"
permalink: /blog/tip-emergency-editing-using-app-service-editor
date: 2018-10-24
categories: [cloud,development,tip]
tags:  [cloud,development,tip]
---

Imagine that you’ve published a web app to an app service in Azure. You’ve tested the app and then head out to dinner with family and friends. You decide to showcase your website over dinner and see an error. Now what?

You may not be aware, but Azure App Services have an option under the Development Tools menu called the App Service Editor.  It’s currently in Preview mode but I would anticipate this graduating in the next few months. 

![https://cdn.jasongaylord.com/images/2018/10/23/Azure_App_Service_Editor.png](https://cdn.jasongaylord.com/images/2018/10/23/Azure_App_Service_Editor.png)

This tool allows real time code updates to your application. Not only does it provide upload and download functionality, but you’ll have an online editor for text based files such as razor files or JavaScript. Simply open a file, make the change, and your change will automatically save. With this great power comes great responsibility. Whichever application you edit will be changed live. If you do edit production, whatever change (even partial change) you make will be live.

{% include warning-notice.html %}
<strong>Caution:</strong> It is not recommended to update a production application unless you understand the full ramifications of what you are changing.
{% include end-notice.html %}

In addition to the notice above, if your application uses a CI/CD process, the next time your application is automatically deployed, your changes will be destroyed. So, I’d highly recommend using this only in an emergency situation and to copy any changes back to your real source code.

{% include info-notice.html %}
<strong>Bonus Tip:</strong> Azure App Services can also have an application or virtual directory defined within the app service. Today, there’s no obvious way to use the App Service Editor on the application. However, you can do so by using the URL structure similar to this: <code>https://{AppServiceName}.scm.azurewebsites.net/dev/{AppName}/wwwroot/</code>. Be sure to replace <code>{AppServiceName}</code> with the application name and <code>{AppName}</code> with the application or virtual directory name.
{% include end-notice.html %}