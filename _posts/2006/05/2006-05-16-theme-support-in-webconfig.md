---
title: Theme Support in Web.config
author: Jason Gaylord
date: 2006-05-16 10:58:00
aspnet-weblog-link: http://weblogs.asp.net/jgaylord/archive/2006/05/16/446745.aspx
categories: [aspnet-weblog]
tags: [archive]
bitly: https://jasong.us/2AFA8pd
---

Another thing Scott Guthrie pointed out to me is that in order to get the Theme and the stylesheet to work across the site in design mode, I must set both the theme and `syleSheetTheme` properties in the `web.config` file. Otherwise, it will not render in the designer. Again, another thing I just realized. I must have been setting this on each page in previous projects or ignored the designer and *assumed* that it wasn't supported.