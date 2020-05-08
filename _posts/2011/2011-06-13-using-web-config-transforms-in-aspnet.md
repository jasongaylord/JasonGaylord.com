---
title: Using Web.config Transforms in ASP.NET
author: Jason Gaylord
cloudscribe_id: "bac41c50-98a8-4ffc-929c-690a934a30e3"
cloudscribe_path: "/Blog/using-web-config-transforms-in-aspnet"
permalink: /Blog/using-web-config-transforms-in-aspnet
date: 2011-06-13
categories: [archive]
tags:  [archive,dotnet]
---

One of my team members was working on an issue today within an application. The application is setup to use web.config transformations. Web.config transforms are a great way to create multiple build configurations (including, but not limited to, the debug and release build configuration that are built-in) and allow different configuration settings based on the build. For instance, you may have a database connection set to your localhost when you are debugging locally. However, you can use web.config transforms to change the server name when you publish the application using the release build configuration. This can also be used to ensure that every time you publish an application as a release, debug and trace are disabled for your application.

Our application is setup so that we use transforms to set the connectionString attribute of each SQL connection in the configuration. We have multiple connection strings in this area.. We had multiple connection strings such as:

```xml
<connectionStrings>
    <clear/>
    <add name="DefaultSqlServer" connectionString="metadata=res://*/Data.Sql.SqlEntities.csdl|res://*/Data.Sql.SqlEntities.ssdl|res://*/Data.Sql.SqlEntities.msl;provider=System.Data.SqlClient;provider connection string=&quot;Data Source=localhost;Initial Catalog=Test;User ID=sa;Password=password;MultipleActiveResultSets=True&quot;" providerName="System.Data.EntityClient"/>
    <add name="DefaultProviderConnectionString" connectionString="Data Source=localhost;Initial Catalog=Test;User ID=sa;Password=password;" providerName="System.Data.SqlClient"/>
</connectionStrings>
```

In other words, one connection is used for connecting to the SQL database using Entity Framework while the other is used to connect to the database using the built-in providers. When we published the application using the release build configuration, both connectionString values were set to the same. After digging around for some time we forgot a simple part of the transform.

When performing web.config transforms on a Key/Value dictionary pair in the web.config file, make sure that use also include an xdt:Locator attribute that contains the method Match. This allows you to pair up the specific value to a particular key.

So, your connection strings should resemble something like the following in your web.release.config file:

```xml
<add name="DefaultSqlServer" connectionString="..." xdt:Transform="SetAttributes(connectionString)" xdt:Locator="Match(name)" />
```

In my case, I’m replacing the DefaultSqlServer value with the value defined in the connectionString above. I can replace other attributes by separating the attribute names in the SetAttributes method with a comma.

For additional config transform options, be sure to visit the MSDN page at [http://jasong.us/mhgvPh](http://jasong.us/mhgvPh "http://jasong.us/mhgvPh").
