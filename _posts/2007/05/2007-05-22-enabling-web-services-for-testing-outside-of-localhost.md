---
title: Enabling Web Services for Testing outside of the Localhost
author: Jason Gaylord
date: 2007-05-22 15:05:00
aspnet-weblog-link: http://weblogs.asp.net/jgaylord/archive/2007/05/22/enabling-web-services-for-testing-outside-of-the-localhost.aspx
categories: [aspnet-weblog]
tags: [archive]
bitly: https://jasong.us/2zXRn4U
---

In some circumstances, you may need to test .NET web services outside of the localhost, but via the browser. By default, this is disabled in the machine.config. If you were to attempt to browse to a service from a different PC or to access a service under a host name, you'd receive a message stating: "The test form is only available for requests from the local machine." To circumvent this issue, open up the web.config and add:

```xml
<configuration>
    <system.web>
        <webServices>
            <protocols>
                <add name="HttpGet"/>
                <add name="HttpPost"/>
            </protocols>
        </webServices>
    </system.web>
</configuration>
```

Hope that helps!