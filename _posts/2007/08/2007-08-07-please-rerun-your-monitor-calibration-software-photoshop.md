---
title: "Resolved: \"Please rerun your monitor calibration software.\" in Photoshop"
author: Jason Gaylord
date: 2007-08-07 16:40:00
windowsadvice-link: http://windowsadvice.com/blogs/jason_n_gaylord/archive/2007/08/08/Resolved_3A00_-_2200_Please-rerun-your-monitor-calibration-software_2E002200_-in-Photoshop.aspx
categories: [windowsadvice-blog]
tags: [archive]
bitly: https://jasong.us/33c7etb
---

A few days ago I reformatted my Dell D820 and installed Windows Vista Ultimate. I also added Photoshop CS3 Extended to my laptop. Usually my laptop is docked and my current monitors are Dell 1907. When I opened Photoshop for the first time on the new configuration, I received an error message stating:

> 'The monitor profile "LCD color management and conversion" appears to be defective. Please rerun your monitor calibration software.'

I chose 'Use Anyway'. I then proceeded to create a new file leaving the background as White. I was quite surprised when I saw that my background had a yellowish tint. Ignoring the background, I went to add a grey tone. I noticed that the greys all seemed to have a pink tint to them. My image simply did not look right. However, if I saved the image as a web file, the preview screen displayed the image correct. I searched high and low on Google and Live search looking for a solution. Finally, a coworker who was having the same issue, discovered a [YouTube podcast (Chad & Todd Podcast)](http://youtube.com/watch?v=cge3zE5cNP0) explaining how to fix this issue using Adobe Gamma. Here are the steps:

1.  Go to C:\\Program Files\\Common Files\\Control Panels
2.  Copy the "Adobe Gamma.cpl" file to C:\\Windows\\System32
3.  Open up your Control Panel (in Classic View) and double click Adobe Gamma
4.  Choose Step-By-Step (Wizard) on the first screen
5.  Enter a custom name in the description field on the next screen
6.  Click next until you get to the screen with a red, green and blue box
7.  Blur your eyes and adjust each color until the box in the center blends in with the lines on the outside
8.  Set the Gamma to custom and enter 2.00 (in between Windows and Macintosh) and then choose Next
9.  Choose Next until you get to the screen with the Before and After radio buttons
10.  Choose between the two to see your changed settings
11.  Click Finish and save your ICC Profile somewhere on your PC

That should do it. Open up Photoshop and everything should be ok. Hope this helps!