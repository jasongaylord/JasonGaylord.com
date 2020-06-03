---
title: "Samsung Focus to Windows Phone 7.8 to Straight Talk"
author: Jason Gaylord
msmvps_path: "https://blogs.msmvps.com/jgaylord/2013/04/09/samsung-focus-to-windows-phone-7-8-to-straight-talk/"
date: 2013-04-09
categories: [archive]
tags: [archive]
bitly: https://jasong.us/3eG5quW
---

Recently, we made the decision to change one of our Verizon Wireless plans. The plan was a family share plan that has existed for quite some time now. Both phones on the plan were "dumb" phones and the near $130 price point for up to 1400 minutes and no data seemed way too steep. When evaluating other Verizon Wireless plans, the price would increase even more for the two devices plus taxes.

After some discussion, we realized that Verizon Wireless plans just didn't make sense for these two devices. I had a Samsung Focus v1.3 phone that I received from Microsoft when Windows Phone was first released. The phone still had Windows Phone 7.1 installed on it.

## Upgrading the Samsung Focus to Windows Phone 7.8

Before deciding to upgrade to Straight Talk, I took to the Internet to see what issues others have been experiencing. One of the issues had to do with MMS messaging and the Samsung Focus. For some reason, there was some issue with the software installed on the Focus.  After some searching, I finally found a tutorial to upgrade the phone to Windows Phone 7.8.  The best part of this process was that the phone would look like a Nokia Lumia 800 device.

Before we begin, the following will be needed:

-   Zune software installed on your machine
-   Application to unzip .rar files such as [7-zip](http://jasong.us/10KXhJd)
-   [](http://forum.xda-developers.com/attachment.php?attachmentid=891696&d=1328640699 "Skip Ad")[DarkForcesTeam MAGLDR Installer](http://jasong.us/10KXigh "Skip Ad")
-   [](http://fs1.d-h.st/download/00017/hOp/FOCUS%2520V1.3-ROM%25208835%2520WP7.8%2520V5.3.rar%3Fdownload%26psid%3D1)[Samsung Focus 1.3 Image](http://jasong.us/10KXiwH) (note: save this as SamsungFocus.rar when downloading)

In preparation for the install, I found it easiest to copy all files to a common folder on my machine. I used 7-zip to expand the .rar file and extract the files contained within. An example of what these look like can be found below:

[![image](http://jasongaylord.com/Media/Default/Windows-Live-Writer/Samsung-Focus-to-Wind.8-to-Straight-Talk_14B7A/image_thumb.png "image")](http://jasongaylord.com/Media/Default/Windows-Live-Writer/Samsung-Focus-to-Wind.8-to-Straight-Talk_14B7A/image_2.png)

Next, I followed the step-by-step process outlined in this great video by [Leapy Tech](http://jasong.us/10IoDRL) on Youtube. If this process works for you, definitely click the their name in the previous sentence and give them a shout out on Twitter.

Here is the step-by-step process to getting the ROM loaded:

## Enabling Straight Talk on our Samsung Focus

Between the upgrade of OS and the switch in provider, the provider switch was definitely the more trying process. I'll end with these pain points in hopes that someone who cares at Tracfone (the technical partner of Straight Talk) actually pays attention.

There were a bunch of steps required for this to work:

1.  We needed to order a SIM card for the phone. These are best to be acquired directly through [Straight Talk](http://jasong.us/10KXqwb). Click on the Shop menu option and choose SIM cards. For the Samsung Focus to work, the phone must be **unlocked**. This is extremely important. If you are coming off your contract, your provider, most likely AT&T, should help to unlock the device.  
    
2.  In my case, I had to port my number from Verizon Wireless. To do this, you must call Straight Talk using the phone number on the SIM card paper. You will be transferred to at least one other rep that can better assist you. You will be required to have your account number and password or PIN. In the case of Verizon Wireless, it is the PIN that you'll need. You'll be told that this will take up to 72 hours to migrate, but it actually takes around 15 minutes. Calling into the phone will take longer. This may take up to 4 hours to complete. I would recommend removing the battery and placing it back in every so often to completely reset the phone.  
    
3.  Update the APN settings for the web and MMS to work. This was painful, but I finally have it working. I'll break this down further below.

Before attempting to update the APN settings in the Cellular menu option in Settings, be sure to read this. Nokia has a great app that has full APN capabilities. The app is called Network Setup and can be downloaded in the Marketplace:

[![Screen Capture](http://jasongaylord.com/Media/Default/Windows-Live-Writer/Samsung-Focus-to-Wind.8-to-Straight-Talk_14B7A/Screen%20Capture_thumb.jpg "Screen Capture")](http://jasongaylord.com/Media/Default/Windows-Live-Writer/Samsung-Focus-to-Wind.8-to-Straight-Talk_14B7A/Screen%20Capture_2.jpg)

After it's installed, find it in your app listing:

[![Screen Capture (5)](http://jasongaylord.com/Media/Default/Windows-Live-Writer/Samsung-Focus-to-Wind.8-to-Straight-Talk_14B7A/Screen%20Capture%20(5)_thumb.jpg "Screen Capture (5)")](http://jasongaylord.com/Media/Default/Windows-Live-Writer/Samsung-Focus-to-Wind.8-to-Straight-Talk_14B7A/Screen%20Capture%20(5)_2.jpg)

Next, open up the app. Once you're in the app, you'll notice that you can edit an APN or add a new one. Add a new one called Straight Tal (note the name only allows so many characters.)

[![Screen Capture (3)](http://jasongaylord.com/Media/Default/Windows-Live-Writer/Samsung-Focus-to-Wind.8-to-Straight-Talk_14B7A/Screen%20Capture%20(3)_thumb.jpg "Screen Capture (3)")](http://jasongaylord.com/Media/Default/Windows-Live-Writer/Samsung-Focus-to-Wind.8-to-Straight-Talk_14B7A/Screen%20Capture%20(3)_2.jpg)

Since I already have it added, I'll choose Edit so you can see all of the settings:

[![Screen Capture (4)](http://jasongaylord.com/Media/Default/Windows-Live-Writer/Samsung-Focus-to-Wind.8-to-Straight-Talk_14B7A/Screen%20Capture%20(4)_thumb.jpg "Screen Capture (4)")](http://jasongaylord.com/Media/Default/Windows-Live-Writer/Samsung-Focus-to-Wind.8-to-Straight-Talk_14B7A/Screen%20Capture%20(4)_2.jpg)   [![Screen Capture (2)](http://jasongaylord.com/Media/Default/Windows-Live-Writer/Samsung-Focus-to-Wind.8-to-Straight-Talk_14B7A/Screen%20Capture%20(2)_thumb.jpg "Screen Capture (2)")](http://jasongaylord.com/Media/Default/Windows-Live-Writer/Samsung-Focus-to-Wind.8-to-Straight-Talk_14B7A/Screen%20Capture%20(2)_2.jpg)   [![Screen Capture (1)](http://jasongaylord.com/Media/Default/Windows-Live-Writer/Samsung-Focus-to-Wind.8-to-Straight-Talk_14B7A/Screen%20Capture%20(1)_thumb.jpg "Screen Capture (1)")](http://jasongaylord.com/Media/Default/Windows-Live-Writer/Samsung-Focus-to-Wind.8-to-Straight-Talk_14B7A/Screen%20Capture%20(1)_2.jpg)

Now, reboot your phone. It may take a bit for your phone to realize that the MMS settings are correct. I had issues receiving MMS messages. However, after approximately 6-8 hrs of the phone sitting, everything worked.

## My Complaints about Straight Talk

I have several. Rather than boring you with details, here are the most important ones:

-   Straight Talk seems to use T-Mobile in our area. In our neighborhood in Northeastern PA, there are very few 3G areas. Verizon Wireless has full 4G service. So, we tend to drop to a very slow connection. For most picture messages or downloads, we connect the phone to our wireless.
-   The Straight Talk SIM cards are horrible. There are plenty of horror stories on the Internet. They're mostly true. The cards aren't that reliable and tend to drop signal. I'm not sure if it's a programming issue or a short in the card. Regardless, it's painful.
-   Support? What support? Be prepared for offshore support. If it's not documented (and you have access to all of the documentation) they don't know it. In fact, they contradict themselves telling you one thing, then later saying "don't do that." They even told me that Windows Phones don't work on Straight Talk. I'm hoping that the service gets better because if not, we'll realize that we're getting what we're paying for.
-   The "bring-your-own-phone" process is also poor. If it wasn't, I wouldn't have the need for this post. We're struggling to find out how to setup voicemail. I'm only hoping that visual voicemail works. However, I have my doubts.

Overall, I can't say anything much more critical about the service yet. We're still testing the waters. I do know that the one phone we needed, we were able to save over $50. That's $1200 over the normal two year commitment by Verizon Wireless and we're not locked into a contract.

If you have any additional feedback, please leave me a comment.