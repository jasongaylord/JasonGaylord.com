---
title: Establishing a VPN on Windows Mobile 5
author: Jason Gaylord
date: 2008-06-06 17:03:00
aspnet-weblog-link: http://weblogs.asp.net/jgaylord/archive/2008/06/06/establishing-a-vpn-on-windows-mobile-5.aspx
msmvps_path: https://blogs.msmvps.com/jgaylord/2008/06/06/establishing-a-vpn-on-windows-mobile-5/
categories: [aspnet-weblog]
tags: [archive]
bitly: https://jasong.us/30Wca2l
---

Many have found it difficult to establish a VPN connection on Windows Mobile 5. There are quite a few blog posts out there with instructions, but none are really that complete. Before you can establish a connection from your mobile device, you need to establish a VPN server. For my purposes, I've setup Routing and Remoting Access on a Windows Server 2003 box ([Windows Server 2008 procedure](http://www.howtonetworking.com/Windows/2008vpn1.htm)). This is pretty simple to do and there weren't any settings I needed to modify. Then, on the user account in my domain, I had to right-click and go to properties. There is a section under the Account tab called Account Properties.

[![AccountOptions](http://weblogs.asp.net/blogs/jgaylord/WindowsLiveWriter/EstablishingaVPNonWindowsMobile5_EFC8/AccountOptions_thumb.jpg)](http://weblogs.asp.net/blogs/jgaylord/WindowsLiveWriter/EstablishingaVPNonWindowsMobile5_EFC8/AccountOptions_2.jpg)

Click the checkbox that says "Store password using reversible encryption." Now that VPN is setup on our Windows Server 2003 box, we can setup our mobile device.

On your mobile device, click the Windows Flag/Start button, and go to Settings. Then click the Connections tab and the Connections icon.

[![Settings](http://weblogs.asp.net/blogs/jgaylord/WindowsLiveWriter/EstablishingaVPNonWindowsMobile5_EFC8/Settings_thumb.jpg)](http://weblogs.asp.net/blogs/jgaylord/WindowsLiveWriter/EstablishingaVPNonWindowsMobile5_EFC8/Settings_2.jpg)

Under My Work Network, Click Add a new VPN server connection

[![Connections](http://weblogs.asp.net/blogs/jgaylord/WindowsLiveWriter/EstablishingaVPNonWindowsMobile5_EFC8/Connections_thumb_1.jpg)](http://weblogs.asp.net/blogs/jgaylord/WindowsLiveWriter/EstablishingaVPNonWindowsMobile5_EFC8/Connections_4.jpg)

Enter your public IP Address (not 192.168.1.1 but the address available from the outside) and choose the appropriate VPN connection type.

[![New VPN Connection](http://weblogs.asp.net/blogs/jgaylord/WindowsLiveWriter/EstablishingaVPNonWindowsMobile5_EFC8/New%20VPN%20Connection_thumb.jpg)](http://weblogs.asp.net/blogs/jgaylord/WindowsLiveWriter/EstablishingaVPNonWindowsMobile5_EFC8/New%20VPN%20Connection_2.jpg)

Then enter your user credentials and choose Finish.

[![credentials](http://weblogs.asp.net/blogs/jgaylord/WindowsLiveWriter/EstablishingaVPNonWindowsMobile5_EFC8/credentials_thumb.jpg)](http://weblogs.asp.net/blogs/jgaylord/WindowsLiveWriter/EstablishingaVPNonWindowsMobile5_EFC8/credentials_2.jpg)

Your VPN connection is now setup. When you want to connect to VPN, go back into Connections, choose Edit my VPN Servers, and click and hold the VPN until the context menu appears for Delete and Connect. Choose Connect to attempt your connection.

[![Connect](http://weblogs.asp.net/blogs/jgaylord/WindowsLiveWriter/EstablishingaVPNonWindowsMobile5_EFC8/Connect_thumb_1.jpg)](http://weblogs.asp.net/blogs/jgaylord/WindowsLiveWriter/EstablishingaVPNonWindowsMobile5_EFC8/Connect_4.jpg)

I've noticed that the connection does drop from time to time, but the checkbox under your user profile above should minimize this.