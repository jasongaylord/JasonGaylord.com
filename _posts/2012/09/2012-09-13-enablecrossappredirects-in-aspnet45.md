---
title: Authentication, Cross-App Redirects, and ASP.NET 4.5
author: Jason Gaylord
cloudscribe_id: "f2ffd098-6df8-4ebb-9acd-17bca758208c"
cloudscribe_path: "/blog/enablecrossappredirects-in-aspnet45"
msmvps_path: "https://blogs.msmvps.com/jgaylord/2012/09/13/authentication-cross-app-redirects-and-asp-net-4-5/"
permalink: /blog/enablecrossappredirects-in-aspnet45
date: 2012-09-13
categories: [archive]
tags: [archive,dotnet]
bitly: https://jasong.us/2MlUVAN
---

I started to test out the migration of our web applications with ASP.NET 4.5. In many cases, we have a login page that redirects from one domain to another domain or sub-domain. In those instances, we're setting the enableCrossAppRedirects property in the configuration files. You can find out more about setting this by visiting MSDN at [http://msdn.microsoft.com/en-us/library/eb0zx8fc(v=VS.100).aspx](http://jasong.us/QeHksd).

After upgrading the web server to ASP.NET 4.5, we noticed this stopped working. The users would hit the other domain and be redirected back to the authentication domain. Some digging around (and help from [Barry Dorrans](https://jasong.us/3duNMtu)) lead us to two possible solutions:

1.  We need to ensure that all web servers that are running this machines are up to date with their ASP.NET security patches.
2.  If we are forcing one of our applications to use the ASP.NET 4.5 runtime, that same application will need to have the appropriate [machineKey `CompatibilitySetting` checked off](http://jasong.us/QeHxvD). We'll look at this in greater detail below.

## Updating ASP.NET
Chances are, we may not have all of our servers running this application up to date. The updates that are the most critical are those found in [MS11-100](http://jasong.us/QeHSOM). However, be sure to check Windows Update for all ASP.NET updates. If after patching the issue persists, continue on to the next section.

## Setting the MachineKeySection.CompatibilityMode Property
If one of our applications contains `<httpRuntime targetFramework="4.5" />`, we need to make sure that this application's `machineKey` is updated with the proper setting. Be default, if our other web application is using .NET Framework 2.0 SP1 or earlier, we shouldn't have to set anything as the `CompatibilityMode` should infer the value `Framework20SP1`. Otherwise, if we are running .NET Framework 2.0 SP2 or later (but not running .NET Framework 4.5), we should use the value `Framework20SP2`. Our `machineKey` should look like the following:

```xml
<machineKey compatibilityMode="Framework20SP2" … />
```

Hopefully, one of these two solutions should solve our issue.