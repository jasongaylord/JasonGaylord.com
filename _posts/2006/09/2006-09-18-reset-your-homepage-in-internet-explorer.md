---
title: Reset Your Homepage in Internet Explorer
author: Jason Gaylord
date: 2006-09-18 16:21:00
windowsadvice-link: http://windowsadvice.com/blogs/jason_n_gaylord/archive/2006/09/18/Reset-Your-Homepage-in-Internet-Explorer.aspx
categories: [windowsadvice-blog]
tags: [archive]
bitly: https://bit.ly/3ebDO0g
---

Below is a basic Registry script to reset your Internet Explorer homepage. In this example, the homepage is being reset to jasongaylord.com: 

Windows Registry Editor Version 5.00

```
\[HKEY\_CURRENT\_USER\\Software\\Microsoft\\Internet Explorer\\Main\]  
"Start Page"="[http://www.jasongaylord.com](http://www.jasongaylord.com/)"
```

```
\[HKEY\_LOCAL\_MACHINE\\SOFTWARE\\Microsoft\\Internet Explorer\\Main\]  
"Default\_Page\_URL"="[http://www.jasongaylord.com](http://www.jasongaylord.com/)"  
"Start Page"="[http://www.jasongaylord.com](http://www.jasongaylord.com/)"
```