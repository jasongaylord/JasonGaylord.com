---
title: Calculating Dell Power Consumption for Servers
author: Jason Gaylord
msmvps_path: "https://blogs.msmvps.com/jgaylord/2011/06/30/calculating-dell-power-consumption-for-servers/"
date: 2011-06-30
categories: [archive]
tags: [archive]
bitly: https://jasong.us/2XSXpvF
---

We are in the process of building out a new data center. One of the items I needed to know was a rough estimate of our new, monthly electrical bill. In some cases, you may need to show a return on investment (ROI) for going to a virtualized environment using VMWare or Microsoft Hyper-V. You can calculate the number of watts your devices use by visiting [http://www.dell.com/calc](http://www.dell.com/calc).

If you need to calculate cost of power, you can convert watts to kilowatts (watts / 1000), then multiply that by 24 hours, 30 days, and the cost per kwh. So, if you live in an area that has a cost per kilowatt hour at 9.5 cents and your equipment uses 2500 watts, your total cost per month would be $171 per month.