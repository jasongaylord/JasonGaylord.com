---
title: Generic Host Process on Windows XP Boot
author: Jason Gaylord
date: 2007-03-22 10:20:00
windowsadvice-link: http://windowsadvice.com/blogs/jason_n_gaylord/archive/2007/03/22/Generic-Host-Process-on-Windows-XP-Boot.aspx
categories: [windowsadvice-blog]
tags: [archive]
bitly: https://jasong.us/2CYoTK1
---

I kept receiving an error message when trying to boot up my PC. I continually received the error message: The instruction at "0x745f2780" referenced memory at "0x00000000". The memory could not be "read". and was tied to a Svchost.exe error. I'd also receive a Generic Host Process error message. If I browsed the details, it would not provide any information. After reviewing plenty of forum posts online, I finally came to the conclusion that my Windows Update (or Microsoft Update) has crashed. KB 931852 details a quick and painless way to fix this issue. However, I could not get the service to stop before receiving the message. So, I created a quick batch file and placed it in the Start menu. We run WSUS on site so that probably helped cause this issue. Also, we have automatic updates selected and disabled the ability to change this option in a global policy (nice, huh?). So, the batch file was my only chance. Here is the contents:

```shell
net stop wuauserv

rd c:\\wutemp /S /Q

rd c:\\windows\\system32\\catroot2 /S /Q

ren "c:\\windows\\softwaredistribution" "c:\\windows\\softwaredistributionold"

ren "c:\\windows\\system32\\wuweb.dll" "wuweb.dll.old"  
ren "c:\\windows\\system32\\wuapi.dll" "wuapi.dll.old"  
ren "c:\\windows\\system32\\wuauclt.exe" "wuauclt.exe.old"  
ren "c:\\windows\\system32\\wuaucpl.cpl" "wuaucpl.cpl.old"  
ren "c:\\windows\\system32\\wuaueng1.dll" "wuaueng1.dll.old"  
ren "c:\\windows\\system32\\wuaueng.dll" "wuaueng.dll.old"  
ren "c:\\windows\\system32\\wuauserv.dll" "wuserv.dll.old"  
ren "c:\\windows\\system32\\wucltui.dll" "wucltui.dll.old"  
ren "c:\\windows\\system32\\wups2.dll" "wups2.dll.old"  
ren "c:\\windows\\system32\\wups.dll" "wups.dll.old"

pause
```

So far so good. I rebooted my PC after that batch file ran and now am attempting to run Microsoft Update again. If it fails I'll let everyone know. :)