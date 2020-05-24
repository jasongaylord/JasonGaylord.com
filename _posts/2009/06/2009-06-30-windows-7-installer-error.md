---
title: Windows 7 and Windows Installer Error \"Another installation is in progress\"
author: Jason Gaylord
date: 2009-06-30 22:11:00
aspnet-weblog-link: http://weblogs.asp.net/jgaylord/archive/2009/06/30/windows-7-and-windows-installer-error-another-installation-is-in-progress.aspx
categories: [aspnet-weblog]
tags: [archive]
bitly: https://bit.ly/2ZpfkwB
---

All morning long I've been battling my Windows 7 system. I finally found out that the error code which reads:

> "Error 1500. Another installation is in progress. You must complete that installation before continuing this one."

can be attributed to the InProgress key found in the registry at

> HKEY\_LOCAL\_MACHINE\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Installer\\InProgress

After doing a little searching on the web, I found that Microsoft has a program called msizap.exe which can be found in the [Windows Installer SDK](http://www.microsoft.com/downloads/info.aspx?na=90&p=&SrcDisplayLang=en&SrcCategoryId=&SrcFamilyId=6a35ac14-2626-4846-bb51-ddce49d6ffb6&u=http%3a%2f%2fdownload.microsoft.com%2fdownload%2f7%2fc%2f4%2f7c426dfc-46e2-4ded-bab4-3b33600ad7d1%2fmsi45sdk.msi). The problem with that is that the SDK itself is an .msi file. I didn't really want to install the full SDK anyway. So I searched some more and came across the [Windows Installer Cleanup Utility](http://support.microsoft.com/kb/290301/). This was mainly created to clean-up an Office installation gone bad. Again, an .msi file. So, I went back to the Windows Installer SDK and downloaded it. To trick the system into letting me install it, I simply deleted the key mentioned above (`HKEY\_LOCAL\_MACHINE\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Installer\\InProgress`). At first attempt, I received an error. I tried deleting it again and it worked. Went through the installation process only to receive the same error. After I refreshed the registry, I saw that it was back. It pointed to a .ipi file contained in the C:\\Windows\\Installer directory. At this point, I still don't know what this installer is that is still hung up. I opened several of these files from today and the reference Visual Studio 9.0. I'll see if I can track down what is later.

Anyway, I finally decided to quick hit delete on the key and then quickly hit retry on the installation. It worked. My installation continued. At the very end a refresh of the registry showed that the other application came back and added an InProgress key again.

Back to the [msizap.exe application](http://msdn.microsoft.com/en-us/library/aa370523(VS.85).aspx). On the surface, if you use the [p switch](http://msdn.microsoft.com/en-us/library/aa370523(VS.85).aspx) like

> msizap p

It appears to only delete the key in the registry just like the above. I saw that in my case, the InProgress key still comes back. I guess it's purpose is so that you don't touch the registry.

I'll add an update to this post if I find out how to completely kill that other installation package.