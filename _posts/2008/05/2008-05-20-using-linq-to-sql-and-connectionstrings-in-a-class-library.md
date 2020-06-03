---
title: Using LINQ to SQL and ConnectionStrings in a Class Library
author: Jason Gaylord
date: 2008-05-20 14:22:00
aspnet-weblog-link: http://weblogs.asp.net/jgaylord/archive/2008/05/20/using-linq-to-sql-and-connectionstrings-in-a-class-library.aspx
msmvps_path: https://blogs.msmvps.com/jgaylord/2008/05/20/using-linq-to-sql-and-connectionstrings-in-a-class-library/
categories: [aspnet-weblog]
tags: [archive]
bitly: https://bit.ly/3bRIA1F
---

I was looking to separate my LINQ to SQL data layer from the rest of my application. So, I decided to move the files to a class library. This way, when my application builds, all of my LINQ files are found in MyApp.DL or something similar. However, I wanted the class library to use the SQL connection that I have set in my web.config. Because the class library does not have a reference to `System.Configuration`, I had to add that first. I then created a partial class for my Context object. Inside, I created a new constructor with a boolean parameter called `UseWebConfigConnectionString`. My web.config would contain a generic connection string name called `LinqSqlConnectionString`. This allows me to make changes to the LINQ files, save them, and not affect this method. So, here's what I ended up with:

__web.config__
```xml
<connectionStrings>
    <clear/>
    <add name="LinqSqlConnectionString" connectionString="{insert settings here};" providerName="System.Data.SqlClient"/>
</connectionStrings>
```

__MyApp.DL.ExtendedLinqObjects.vb__
```vb
Imports System.Configuration

Partial Public Class MyDataContext
    Public Sub New(ByVal UseWebConfigConnectionString As Boolean)
        MyBase.New(ConfigurationManager.ConnectionStrings("LinqSqlConnectionString").ConnectionString, mappingSource)
        OnCreated()
    End Sub
End Class
```

__sample.aspx.vb__
```vb
Dim db As New MyDataContext(True)
```

This seemed to be the easiest way to pull from my connection strings setting. Although, I'd highly recommend encrypting your connection string before deploying to production.