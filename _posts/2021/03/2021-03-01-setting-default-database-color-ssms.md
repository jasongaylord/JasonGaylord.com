---
title: "Tip: How to set the default connected database and color in SSMS"
author: Jason Gaylord
date: 2021-03-01
categories: [data,tip]
tags: [data,tip]
post-number: 1140
image: https://cdn.jasongaylord.com/images/2021/03/01/sql-connection-options.jpg
bitly: https://jasong.us/3r4gQyU
---

This is one of those tips that many developers forget about. If you use Microsoft SQL Server Management Studio, you can set the default database that is selected on login. You can also set the color of the tabs in SSMS for that connection. Any changes you make will be saved for future connections to the server. To do this, choose the `Options >>` button on the login screen:

{% include open-thumbnail.html path="2021/03/01/sql-connection-screen.jpg" alt="Connect to Server Dialogue in SQL Server Management Studio" %}

From there, you'll see additional connection properties and other tabs that will allow you to customize the login experience. On the _Connection Properties_ tab, choose the database (or type in the database name) if you'd like to specify a default database to connect to. By doing this, you will not have to choose the database from the drop down after logging in or use the command to switch database such as `use MYDATABASE`. In addition, you can check the box at the bottom under the _Connection_ section to _Use custom color_. This will set the background color of the tabs to a color defined. There are cases where I have elevated privileges in a production environment. In those cases, I set the tab color to red so it's more obvious that I need to be careful in that environment.

{% include open-thumbnail.html path="2021/03/01/sql-connection-options.jpg" alt="Connection Properties Dialogue in SQL Server Management Studio" %}