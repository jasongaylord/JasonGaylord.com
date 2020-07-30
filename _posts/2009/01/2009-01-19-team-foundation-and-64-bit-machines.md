---
title: Team Foundation and 64 bit Machines
author: Jason Gaylord
date: 2009-01-19 08:00:00
aspnet-weblog-link: http://weblogs.asp.net/jgaylord/archive/2009/01/19/team-foundation-and-64-bit-machines.aspx
msmvps_path: https://blogs.msmvps.com/jgaylord/2009/01/19/team-foundation-and-64-bit-machines/
categories: [aspnet-weblog]
tags: [archive]
bitly: https://jasong.us/3hNCHG6
---

Just to be clear from the start, Team Foundation Server is _not_ supported on x64 machines.

Recently, I setup a Windows Server 2008 box and was looking to install a fresh TFS database to use from this point forward. To my surprise, I received an error message when installing TFS that said that it is not supported on Windows Server 2003 x64. The error message details, although wrong about the version, were right. TFS is not supported on x64. My only option now is to setup Hyper-V if I'd like to run it on the box.

[Brian Harry seems to hint](http://blogs.msdn.com/bharry/archive/2008/02/06/installing-tfs-2008-on-windows-2008.aspx) that x64 support will be available in the VS2010 release. [Mike Warriner](http://www.mikewarriner.com/) also posted a workaround to getting it up and running. However, I'd strongly advise that you wait for 2010 if you need it to be on an x64 machine.