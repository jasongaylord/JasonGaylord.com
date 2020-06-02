---
title: Updating Common Controls for Older Applications to Support Windows 8
author: Jason Gaylord
cloudscribe_id: "5b0b2357-1f98-4471-be8e-03da5dd3b129"
cloudscribe_path: "/blog/updating-common-controls-for-older-applications-to-support-windows-8"
msmvps_path: "https://blogs.msmvps.com/jgaylord/2013/07/30/updating-common-controls-for-older-applications-to-support-windows-8/"
permalink: /blog/updating-common-controls-for-older-applications-to-support-windows-8
date: 2013-07-30
categories: [archive]
tags: [archive,windows]
bitly: https://jasong.us/2XPlN1d
---

There are times that you may need to install an older Windows application especially something developed using Visual Basic 6 or earlier. In these cases, you should always ensure that the installed application is using the most current common control library available from Microsoft. If not, you may receive strange error message that logs the following in the Event Viewer (abbreviated exception):

```
Log Name: Application
Source: Application Error
Date: 07/08/2013 11:10:57 AM
Event ID: 1000
Task Category: (100)
Level: Error
Keywords: Classic
User: N/A
Computer: my-msft-surface
Description:
Faulting application name: TestComControls.exe, version: 1.0.0.0, time stamp: 0x4cb60c27
Faulting module name: comctl32.ocx, version: 6.0.81.5, time stamp: 0x3802598b
Exception code: 0xc000041d
Fault offset: 0x00020f51
Faulting process id: 0x858
Faulting application start time: 0x01ce7bed4062ea40
Faulting application path: C:\Program Files (x86)\Test\TestComControls.exe
Faulting module path: C:\Windows\SYSTEM32\comctl32.ocx
Report Id: 96a08c71-e7e0-11e2-be6c-6045bd92f0bd
Faulting package full name:
Faulting package-relative application ID:
```

On most Windows 8 machines, the application worked correctly. However, in the case of a touch device such as our Microsoft Surface Pro, whenever we used touch or the pen for input, this error would occur. So, in this case, we needed to update to the latest COM controls. These were found at [http://www.microsoft.com/en-us/download/details.aspx?id=10019](http://jasong.us/1ckYsqp).