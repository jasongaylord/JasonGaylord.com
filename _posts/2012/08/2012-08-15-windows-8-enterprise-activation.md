---
title: Windows 8 Enterprise Activation
author: Jason Gaylord
msmvps_path: "https://blogs.msmvps.com/jgaylord/2012/08/15/windows-8-enterprise-activation/"
date: 2012-08-15
categories: [archive]
tags: [archive]
bitly: https://jasong.us/301y0Te
---

If you are downloading the new Windows 8 Enterprise edition from MSDN or TechNet today (as a Volume License Customer) and plan on adding in your volume license, you can do so without the need for a Key Management Server (KMS). To do so, run a command prompt as Administrator and enter the following:

```shell
slmgr.vbs -ipk "PRODUCT KEY HERE"
```

After, go back into _Windows Activation_ and choose _Activate_. You'll be soon on your way to Windows 8 goodness.