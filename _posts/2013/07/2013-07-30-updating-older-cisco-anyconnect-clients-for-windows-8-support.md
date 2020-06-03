---
title: Updating Older Cisco AnyConnect Clients for Windows 8 Support
author: Jason Gaylord
msmvps_path: "https://blogs.msmvps.com/jgaylord/2013/07/30/updating-older-cisco-anyconnect-clients-for-windows-8-support/"
date: 2013-07-30
categories: [archive]
tags: [archive]
bitly: https://jasong.us/2XUdrFA
---

A former coworker of mine had blogged awhile back about solving an issue with older Cisco AnyConnect clients on Windows 8. When installing AnyConnect on a Windows 8 machine, the display name key in the Windows registry for the Cisco AnyConnect VPN Virtual Miniport Adapter has some extra data.

The correct value for the **DisplayName** key should be "**Cisco AnyConnect VPN Virtual Miniport Adapter for Windows x64**".

This key can be found in the registry:

> Windows 7: **\[HKEY\_LOCAL\_MACHINE\\SYSTEM\\ControlSet001\\Services\\vpnva\]**
> Windows 8: **\[HKEY\_LOCAL\_MACHINE\\SYSTEM\\CurrentControlSet\\Services\\vpnva\]**

Thanks for the post [Jeff](http://jasong.us/xZRW5C) (and [](http://blog.lyncgeek.com/2012/03/windows-8-cisco-anyconnect-vpn-client.html)[Daniel](http://jasong.us/1cl3bbO))!