---
title: Using ConnectionStrings Section in ASP.NET 2.0
author: Jason Gaylord
date: 2005-05-12 14:14:00
aspnet-weblog-link: http://weblogs.asp.net/jgaylord/archive/2005/05/12/406639.aspx
categories: [aspnet-weblog]
tags:  [archive]
bitly: https://jasong.us/2WVAaki
---

ASP.NET 2.0 introduces a new section to the web.config file called `ConnectionStrings`. Some previous projects in ASP.NET 1.1 created this section so you may be familiar with it. This section allows users to add connection strings in their web.config for different data sources. An example of one using SqlExpress 2005 is shown below:

```xml
<connectionStrings>
    <add name="MainConnectionString"
        connectionString="Data Source=.\SQLEXPRESS;AttachDbFilename=|DataDirectory|\YourDB.mdf;Integrated Security=True;User Instance=True"
        providerName="System.Data.SqlClient" />
</connectionStrings>
```

When referencing this connection string in a built-in `DataSource` control, you can choose the connection from within the control's wizard or manually modify the `ConnectionString` and `ProviderName` properties of the `DataSource` control. An example is shown below:

```vb
<asp:SqlDataSource ID="SqlDataSource1" runat="server"
    SelectCommand="select * from [Users]"
    ConnectionString="<%$ ConnectionStrings:MainConnectionString %>"
    ProviderName="<%$ ConnectionStrings:MainConnectionString.ProviderName %>">
</asp:SqlDataSource>
```

You can also access the connection string in a code file in the `App_Code` folder by using the `ConfigurationManager` class like this:

```vb
Dim conn as SqlConnection
conn = New SqlConnection(ConfigurationManager.ConnectionStrings("MainConnectionString").ConnectionString)
```

This makes accessing your connection strings and managing them much easier.