---
title: Preventing Web Applications from Inheriting Parent Dependencies (bin)
author: Jason Gaylord
cloudscribe_id: "79ead780-ae25-4140-b366-8f5817c4c61c"
cloudscribe_path: "/Blog/prevent-child-apps-from-inheriting-dependencies"
permalink: /blog/prevent-child-apps-from-inheriting-dependencies
date: 2012-03-12
categories: [archive]
tags:  [archive,dotnet]
---

Have you ever created a web application for something specific such as a standalone web app (forum, photo gallery, web service, etc.) while using ASP.NET and received this:

[![server error](https://cdn.jasongaylord.com/images/2012/03/12/servererror.png "server error")](https://cdn.jasongaylord.com/images/2012/03/12/servererror.png){:target="_blank"}

If you have, you probably became frustrated. I know I have. The reason  this occurs is that sub-applications under the main web application inherit the uplevel web.config settings. This means that the machine.config and other system config files filter into the main web's web.config file as well.

You can prevent this from occurring as details quite well at [http://jasong.us/yXCV8P](http://jasong.us/yXCV8P){:target="_blank"}.

To do this, you'll need to pull your dependencies and wrap them in a location element and add a attribute as shown below:

This will now load only the dependencies within the application.

```xml
<location path="." inheritInChildApplications="false">
    <system.web>
        <!-- Compilation section with assemblies -->
    </system.web>
</location>
```

You can also circumvent this issue by using sub-domain or another domain altogether.