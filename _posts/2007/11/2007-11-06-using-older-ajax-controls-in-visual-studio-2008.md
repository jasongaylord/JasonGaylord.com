---
title: Using Older AJAX Controls in Visual Studio 2008
author: Jason Gaylord
date: 2007-11-06 15:47:00
aspnet-weblog-link: http://weblogs.asp.net/jgaylord/archive/2007/11/06/using-older-ajax-controls-in-visual-studio-2008.aspx
msmvps_path: https://blogs.msmvps.com/jgaylord/2007/11/06/using-older-ajax-controls-in-visual-studio-2008/
categories: [aspnet-weblog]
tags: [archive]
bitly: https://bit.ly/2zTOKkw
---

I've been testing the DotNetSlackers' AJAX Data Controls for a little bit and they're definitely cool. I ran into an issue, however, when trying to build an app with one of the controls in Visual Studio 2008 (.NET Framework 3.5). The assembly was compiled against version 1 of the AJAX Library. I continually received an error message stating `The control with ID 'TestGrid' requires a ScriptManager on the page. The ScriptManager must appear before any controls that need it.` However, it did have a `ScriptManager` before the `TestGrid` control. I bounced it off the Microsoft ASP.NET team and, like always, they provided me with an answer. Mike Harder said that if the assembly was compiled against the earlier version, I needed to redirect the binding at runtime using this:

```xml
<runtime\>
    <assemblyBinding  xmlns\="urn:schemas-microsoft-com:asm.v1"\>  
        <dependentAssembly\>  
            <assemblyIdentity  name\="System.Web.Extensions"  publicKeyToken\="31bf3856ad364e35"/>  
            <bindingRedirect  oldVersion\="1.0.0.0-1.1.0.0"  newVersion\="3.5.0.0"/>
        </dependentAssembly\>  
        <dependentAssembly\>
            <assemblyIdentity  name\="System.Web.Extensions.Design"  publicKeyToken\="31bf3856ad364e35"/>  
            <bindingRedirect  oldVersion\="1.0.0.0-1.1.0.0"  newVersion\="3.5.0.0"/>
        </dependentAssembly\>  
    </assemblyBinding\>  
</runtime\>
```

This new section in the web.config is provided by default on all new 3.5 projects in Visual Studio 2008. Thanks Mike for your help!

By the way, the DotNetSlackers FREE AJAX Data Controls can be downloaded at [http://dotnetslackers.com/projects/AjaxDataControls/](http://dotnetslackers.com/projects/AjaxDataControls/). They're also holding a contest each month to give away free swag. The details can be found at [http://dotnetslackers.com/contest/peers/](http://dotnetslackers.com/contest/peers/).