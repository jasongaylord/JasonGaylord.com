---
title: "SharePoint 2013 Review: Installation Process"
author: Jason Gaylord
msmvps_path: "https://blogs.msmvps.com/jgaylord/2012/07/20/sharepoint-2013-review-installation-process/"
date: 2012-07-20
categories: [archive]
tags: [archive]
bitly: https://jasong.us/36Tah99
---

Now that Office 2013 is out, I wanted to check out the new SharePoint 2013. I downloaded the ISO, mounted it in my brand new installation of Windows Server 2012, and clicked setup.exe (no auto run executed on mounting). After a couple of minutes, I was greeted with the following:

[![image](http://jasongaylord.com/Media/Default/Windows-Live-Writer/SharePoint-2013-Review-Installation-Proc_D427/image_thumb.png "image")](http://jasongaylord.com/Media/Default/Windows-Live-Writer/SharePoint-2013-Review-Installation-Proc_D427/image_2.png)

Apparently, there are a bunch of software prerequisites. So, I tried what most of us would by attempting to manually install as many as I could. I got so far and realized, there's got to be a better way. That's when I noticed that in the ISO, there's a file for installing Prerequisites:

[![image](http://jasongaylord.com/Media/Default/Windows-Live-Writer/SharePoint-2013-Review-Installation-Proc_D427/image_thumb_1.png "image")](http://jasongaylord.com/Media/Default/Windows-Live-Writer/SharePoint-2013-Review-Installation-Proc_D427/image_4.png)

I ran through the installer

[![image](http://jasongaylord.com/Media/Default/Windows-Live-Writer/SharePoint-2013-Review-Installation-Proc_D427/image_thumb_2.png "image")](http://jasongaylord.com/Media/Default/Windows-Live-Writer/SharePoint-2013-Review-Installation-Proc_D427/image_6.png)

And then back to setup.exe only to get

[![image](http://jasongaylord.com/Media/Default/Windows-Live-Writer/SharePoint-2013-Review-Installation-Proc_D427/image_thumb_3.png "image")](http://jasongaylord.com/Media/Default/Windows-Live-Writer/SharePoint-2013-Review-Installation-Proc_D427/image_8.png)

So, my question is this: Why can't the installer be one executable called setup.exe that is smart enough to check for prerequisites? Also, why doesn't it check for the prerequisites and instead of listing each item independently, rolls them up into a "if you wan this feature, you'll need some stuff" where the stuff is equal to 3 prerequisite installations?

I know this is beta, but we really should be getting to the point where it's just easy to install.

Also, while the Office team may be getting some flak for the minimalist design or lack of color in the metro inspired Office 2013 theme, I think they can lend some thoughts to the SharePoint team that obviously forgot that the installer may need updating too:

[![image](http://jasongaylord.com/Media/Default/Windows-Live-Writer/SharePoint-2013-Review-Installation-Proc_D427/image_thumb_5.png "image")](http://jasongaylord.com/Media/Default/Windows-Live-Writer/SharePoint-2013-Review-Installation-Proc_D427/image_12.png)

When comparing this to a SharePoint 2010 installation on a brand new box, it is an improvement. In SharePoint 2010 on a brand new Windows Server 2008 box, I get an extra message after installing the prerequisites:

 [![image](http://jasongaylord.com/Media/Default/Windows-Live-Writer/SharePoint-2013-Review-Installation-Proc_D427/image_thumb_4.png "image")](http://jasongaylord.com/Media/Default/Windows-Live-Writer/SharePoint-2013-Review-Installation-Proc_D427/image_10.png)

A reboot (which wasn't mentioned) was all that was needed to get these issues resolved.