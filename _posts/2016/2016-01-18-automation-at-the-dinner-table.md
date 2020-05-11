---
title: Automation at the Dinner Table
author: Jason Gaylord
cloudscribe_id: "36e880a0-4edf-4417-be13-905a233e1238"
cloudscribe_path: "/blog/automation-at-the-dinner-table"
permalink: /blog/automation-at-the-dinner-table
date: 2016-01-18
categories: [archive]
tags:  [archive,home-automation,iot]
---

Two parents working. All day events with the kids. A day of shopping. Sometimes, when we have those moments, we opt for eating out. Other times, we opt for eating in using something like a crock pot. Those handy devices that usually cost $20 are great in a pinch. But, have you ever found a recipe that requires only a few hours on low? Well, I did. But, I made sure that it was cooked to perfection even though I sat in my office all day. I used something coined as “home automation.”

## The Hardware
Last year at Microsoft’s Build conference, I picked up a couple of [Aeon Labs Z-Wave products](http://jasong.us/1PCcvbL). One of the products was a USB controller and the other was a switch. Both are shown below:

![Z-Wave Controller](https://cdn.jasongaylord.com/images/2016/01/18/zwavecontroller.jpg "Z-Wave Controller")

![Z-Wave Switch](https://cdn.jasongaylord.com/images/2016/01/18/zwaveswitch.jpg "Z-Wave Switch")

They were just laying around in the boxes. Sure I’ve setup various automated products in the past (other switches, Nest thermostat, light controllers, etc), but never used a Z-Wave product. Once we found this recipe, I was determined to use these to make it.

## The Software
Having no clue how this worked, I took to the web and found a piece of software called [InControl HA](http://jasong.us/1PCcEMo). InControl has two pieces of software:

- Server/Home PC – Software installed on your desktop that helps to control the Z-Wave light controller. Above, I had installed this on one of my older Dell machines as I was uncertain as to what this software would do. 
- Mobile – Works on your iPhone, iPad, Windows Phone, or Android device to help remotely control the controller. 

When you install the server/home PC software, you can set it up to make it cloud enabled. This, in turn, enables you to use your Microsoft, Android, or iPhone mobile device to connect remotely, such as from your workplace miles away, and turn on your switch. Of course, don’t forget to plug the crock pot into the switch and turn it on. The switch itself will control the power to the device.

## The Results
Nothing beats coming home to a great meal. In my case, chicken marsala.

![Dinner after using Z-Wave](https://cdn.jasongaylord.com/images/2016/01/18/dinner.jpg "Dinner after using Z-Wave")

I hope this inspires you to make a great meal!