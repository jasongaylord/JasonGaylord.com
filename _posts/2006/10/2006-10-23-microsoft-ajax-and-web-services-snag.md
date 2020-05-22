---
title: Microsoft AJAX and Web Services Snag
author: Jason Gaylord
date: 2006-10-23 10:14:00
aspnet-weblog-link: http://weblogs.asp.net/jgaylord/archive/2006/10/23/Microsoft-AJAX-and-Web-Services-Snag.aspx
categories: [aspnet-weblog]
tags: [archive]
bitly: https://jasong.us/2zVTMN8
---

If you plan on using Microsoft AJAX with web services, you better plan hard. The AJAX Control Toolkit is currently built using web services. I attempted to use the NumericUpDown control provided in a user control. However, I continually received an error message stating that `The given key was not present in the dictionary.` Upon further investigation, I found that the partial pages in the code samples inherited the `CommonPage` class. The `CommonPage` class, found in the `App_Code` folder, inherited the `Page` class. The page class contains some additional events in the load cycle that the user controls do not contain such as `Pre_Init`. In the `CommonPage` class, there is an override for PreInit which grabs all content placeholders and adds them to a list. That was it, once I switched the contents from a user control into a page, it worked. Of course there are other work around solutions to get the User Control to pull the content place holders.