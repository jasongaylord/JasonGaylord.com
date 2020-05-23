---
title: Error Adding Users in SharePoint 2003 - Resolved
author: Jason Gaylord
date: 2006-12-27 10:29:00
windowsadvice-link: http://windowsadvice.com/blogs/jason_n_gaylord/archive/2006/12/27/Error-Adding-Users-in-SharePoint-2003-_2D00_-Resolved.aspx
categories: [windowsadvice-blog]
tags: [archive]
bitly: https://bit.ly/2zqrElB
---

Have you ever received the error message "Can not add the user because a user with that name already exists" when trying to add a user in SharePoint 2003? Well, there's a fix. Most people overlook the SharePoint users collection because it is nested in a different web than the admin web. So, to see a list of users, visit [http://ServerName/\_layouts/1033/Siteusrs.aspx](http://servername/_layouts/1033/Siteusrs.aspx) where the _ServerName_ is the name of your web. For more information, visit the [Microsoft KB](http://support.microsoft.com/kb/893696) and look up 893696.