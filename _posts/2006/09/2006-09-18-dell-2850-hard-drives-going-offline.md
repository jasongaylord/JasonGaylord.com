---
title: Dell 2850 Hard Drives Going Offline
author: Jason Gaylord
date: 2006-09-18 16:24:00
windowsadvice-link: http://windowsadvice.com/blogs/jason_n_gaylord/archive/2006/09/18/Dell-2850-Hard-Drives-Going-Offline.aspx
categories: [windowsadvice-blog]
tags: [archive]
bitly: https://bit.ly/2AUsxmP
---

We have a fairly new Dell PowerEdge 2850. The hard drives were randomly going offline and flashing amber (orange). We thought at first that it was a bad hard drive, PERC card, or backplane, but apparently these SCSI drives are Maxtor Genesis hard drives with a need for a firmware upgrade. The firmware upgrade can be found on [Dell's support site here](http://support.dell.com/support/downloads/download.aspx?c=us&l=en&s=gen&releaseid=R123857&SystemID=PWE_PNT_P3C_2850&os=WNET&osl=en&deviceid=9452&devlib=0&typecnt=1&vercnt=1&formatcnt=1&libid=33&fileid=164749). The RAID must be in good health before running this update. So far, we've had no issues.