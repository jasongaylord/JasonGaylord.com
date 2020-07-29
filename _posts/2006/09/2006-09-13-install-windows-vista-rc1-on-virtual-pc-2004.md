---
title: Install Windows Vista RC1 on Virtual PC 2004
author: Jason Gaylord
date: 2006-09-13 20:45:00
windowsadvice-link: http://windowsadvice.com/blogs/jason_n_gaylord/archive/2006/09/13/Install-Windows-Vista-RC1-on-Virtual-PC-2004.aspx
categories: [windowsadvice-blog]
tags: [archive]
bitly: https://jasong.us/30Zcgq8
---

Virtual PC 2004 has something within its build that prevents the Vista RC1 from being setup. When the setup begins, you'll receive an error message about a corrupt install.wim file following the entry of your installation code. To get around this issue, download the free version of Virtual Server 2005 RC2. Setup Vista using that. Then, if you'd prefer a smoother interface, you can disconnect your machine and connect to the vmc file using Virtual PC. You'll receive a hardware warning message since you're using a newer vmc, but it will let you load the vmc. Hope that helps!