---
title: An Overview of IIS 7.0
author: Jason Gaylord
date: 2005-05-25 16:33:00
aspnet-weblog-link: http://weblogs.asp.net/jgaylord/archive/2005/05/25/408928.aspx
windowsadvice-link: http://windowsadvice.com/blogs/jason_n_gaylord/archive/2005/05/25/Overview-Of-IIS-7-Alpha.aspx
categories: [aspnet-weblog,windowsadvice-blog]
tags:  [archive]
bitly: https://jasong.us/2Z3MvWc
---

I saw a preview of IIS 7.0 today. IIS 7.0 has many new features that will send IT Professionals and Developers into a "tailspin." Unfortunately, the first public beta of IIS 7.0 won't be until Longhorn Beta 2. IIS 6.0 will be part of Longhorn Beta 1.  
  
**Configuration and Admin Tool**
The Configuration and Admin Tool is not similar to the existing IIS 4, 5, or 6 admin tools. Rather, it is in a control-panel format. IIS 7 can be managed completely through an admin website that runs on port 80. The tool can also be exposed to additional users in a limited fashion by the admin setting up rules. So, web hosters can now offer a managed solution with doing minimal work.  
  
**Core Server**
The server now allows features and functionality to work as a "plug-in-play" format. What I mean is that all of the functionality for IIS 7.0 is setup in what they now call modules. So, third-party companies can now write add-in modules for the system. Also, the ASP.NET configuration tool is now integrated in IIS.  
  
**Diagnostics**
Administrators can now diagnose issues happening with their IIS box by establishing traces and performance monitoring within the Admin tool. They can even see if multiple processes or a single process is tying up the server. Administrators can define traces to be as granular as a particular page, type of document, and error type.  
  
**Security**
The security options now include supporting non-Windows authenticated models. Since the server now uses a component-based model, there is now a reduced risk for attacks.