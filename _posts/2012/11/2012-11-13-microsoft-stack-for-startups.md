---
title: Microsoft Stack for Startups
author: Jason Gaylord
msmvps_path: "https://blogs.msmvps.com/jgaylord/2012/11/13/microsoft-stack-for-startups/"
date: 2012-11-15
categories: [archive]
tags: [archive]
bitly: https://jasong.us/2Ap2e81
---

One of the questions I've been getting asked lately at user group meetings, advisory board meetings, and lunch discussions about technology is "What startups are using Microsoft technology?" The perception is that building on top of the Microsoft stack costs money, much more than using LAMP (Linux, Apache, MySQL, and PHP). Let's see what Microsoft can offer as of today.

## Microsoft BizSpark
Many startups aren't aware of [](http://www.microsoft.com/bizspark/)[BizSpark](http://jasong.us/W1fCmJ). BizSpark is very similar to WebSpark (for web developers) and DreamSpark (for students) in that businesses can have access to [Microsoft software and services](http://jasong.us/SjCszF) and [partner expertise](http://jasong.us/SjCeIM) during a three year time period. At that time, participants "graduate" and get to keep everything that they've used during the time period as well as receive steep discounts on future software. To qualify, startups must be less than five years old, be privately held, have less than $1 million in revenue and be developing software. If you're a student, you can even participate in the [annual ImagineCup](http://jasong.us/W1f5kQ) competition. Looking for some VC funding? [Bing Fund](http://jasong.us/X3mZeO) is a potential place to check out. You can find out more about the BizSpark program by [visiting the website](http://jasong.us/W1fCmJ) or by [](http://www.microsoft.com/BizSpark/ShowItem.aspx?LocalizedItemId=11488)[downloading the fact sheet](http://jasong.us/SjIQXT).

Since I'm based in Pennsylvania, I wanted to show my user group members the following in our area and surrounding areas. I think this graphic is pretty telling:

[![BizSparkParticipation20121113](http://jasongaylord.com/Media/Default/Windows-Live-Writer/c807bf986c7f_8993/BizSparkParticipation20121113_thumb.jpg "BizSparkParticipation20121113")](http://jasongaylord.com/Media/Default/Windows-Live-Writer/c807bf986c7f_8993/BizSparkParticipation20121113_2.jpg)

## Mono Tools
So, let's assume that you're worried that Windows and Windows Server will cost way too much down the road. However, you love Visual Studio and .NET. For many years, there has been a toolset that allows you to build .NET applications and deploy them to Linux. The toolset is called the [](http://www.mono-project.com/)[Mono Project](http://jasong.us/GXczzu). The Mono Project is a port of functionality based on the CLR and specifically C# to Linux. Currently, it covers C# through version 4.0. A commercial product, called [](http://mono-tools.com/)[Mono Tools](http://jasong.us/SjJLaL), allows developers to have a more seamless integration of the Mono Project within Visual Studio. Mono also has an increasingly large community and you can find out more by reading the [Monologue](http://jasong.us/SjLaOC).

One of the major sponsors of the Mono Project is a company called [Xamarin](http://jasong.us/SjM39E). The company's founder, Miguel de Icaza, was the primary force behind the Mono Project before Novell had shut it down. Miguel's company Xamarin has continued development on the Mono Project and two other interesting projects: [monotouch](http://jasong.us/SjM9hI) and [mono for Android](http://jasong.us/SjMeSs). The monotouch product allows developers to write C# applications for iOS while the mono for Android product allows the same for Android devices. If you're interested in learning more about either, check out the following books written by Wally McClure:

[![](http://ws.assoc-amazon.com/widgets/q?_encoding=UTF8&ASIN=047063782X&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=jasongaylordc-20)](https://amzn.to/3dyixhG)

[![](http://ws.assoc-amazon.com/widgets/q?_encoding=UTF8&ASIN=1118026438&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=jasongaylordc-20)](https://amzn.to/3gLmMbB)

## Other Free Microsoft Resources
If I were to research and list all of the free resources that Microsoft has for startups, I may never stop typing. So, below is an incomplete list of resources. If you are aware of others, feel free to leave them as a comment and I'll try to keep this list as complete as possible.

-   [](http://www.microsoft.com/visualstudio/eng/products/visual-studio-express-products)[Visual Studio 2012 Express Products](http://jasong.us/W1uy4g) – Please don't look at the term _Express_ and think that these products are not feature rich. These products include most of what a startup would need if not everything. If you do need a full version of Visual Studio, look at the Spark programs. If you don't, you have access the following products:
    -   Express for Web – For web development
    -   Express for Windows 8 – For WindowsRT design style applications
    -   Express for Windows Desktop – For traditional desktop applications
    -   Express for Windows Phone – For Windows Phone applications
    -   Team Foundation Server Express – For source code management for small teams. If TFS Express isn't your cup of tea because you use GitHub, you can always consider [GitHub for Windows](http://jasong.us/W1Aryt) by the GitHub team which is also free.
-   SQL Server Products
    -   [](http://www.microsoft.com/sqlserver/en/us/editions/2012-editions/express.aspx)[SQL Server Express 2012](http://jasong.us/W1vVzO) – This is a great way to start off with creating a database that will eventually grow up to and beyond 10 GB. SQL Server Express databases can be migrated over to full blown SQL databases and clustering. [Click here for a full comparison](http://jasong.us/W1weuu).
    -   [](http://www.microsoft.com/sqlserver/en/us/editions/2012-editions/compact.aspx)[SQL Server 2012 Compact Edition](http://jasong.us/W1wGZZ) – SQL Server Compact is not full featured, but is a free, embedded database that can be used with applications. If you're just looking to store some core data and not looking to do lots with your data, this is perfect. However, you can always use WebMatrix (mentioned next) to convert the database later on if you made the "wrong" choice.
-   [](http://www.microsoft.com/web/webmatrix/)[WebMatrix](http://jasong.us/W1wWrI) – This tool is phenomenal. It's a great lightweight tool for creating web applications. It has been optimized for open source and allows developers to spin up WordPress and other popular open source applications. It also includes IIS Express (mentioned next)
-   [](http://www.iis.net/learn/extensions/introduction-to-iis-express/iis-express-overview)[IIS Express](http://jasong.us/W1xVYW) – IIS Express is a free version of the IIS Web Server that can be installed and setup to point to any directory. This is a great tool during the development process. Oh, and this is also bundled with WebMatrix and Visual Studio.
-   [](http://www.windowsazure.com/en-us/pricing/calculator/)[Azure Cloud Services](http://jasong.us/W1yqCg) – So this one is tricky. It's not really free. There is a 90 day trial and the team frequently offers free services for a limited time when they offer new features or products. However, if you don't want to pay for hardware, this is a great way to host your entire business (or parts of it). Active Directory (for authentication), Exchange (for email), SQL Azure, etc. are all part of the same service.
-   [](http://www.outlook.com)[Outlook.com Email](http://jasong.us/W1zo1v) – Outlook.com is the new Hotmail. One of the cool features is that if you already own a custom domain name, you can set it up with Outlook.com for email. Check out [http://domai](http://domai)
-   ns.live.com for more information.
-   Open Source Projects – There are too many to name them all. However, check out these resources that highlight Microsoft supported and community open source projects on the Microsoft stack:
    -   [ASP.NET MVC, ASP.NET Web API, and Razor](http://jasong.us/W1zPsw)
    -   [](http://www.microsoft.com/opensource/directory.aspx)[Microsoft Open Source Directory](http://jasong.us/W1zZAa)
    -   [Orchard CMS](http://jasong.us/W1ARVv) – A CMS system for developing feature rich web applications.
    -   [](http://www.outercurve.org/)[Outercurve Foundation](http://jasong.us/W1BiiF)
    -   [CodePlex](http://jasong.us/W1Ab2t) and [GitHub](http://jasong.us/UAJFlf)

## Startups Currently Using the Microsoft Stack
Much like the free resource listing above, this list is (very) incomplete. If you are aware of a startup that is using the Microsoft stack, please let me know in the comment section and I'll try to keep this up to date. Microsoft also has an [incomplete listing on their website](http://jasong.us/W1BSNf).

-   [](http://stackoverflow.com/)[StackOverflow](http://jasong.us/W1BBtU) and the entire [StackExchange](http://jasong.us/W1BJJL) network
-   Several companies at [nebraskaGlobal](http://jasong.us/TDiVfA)
-   [](http://www.axosoft.com/)[Axosoft](http://jasong.us/TDj6aF)
-   [](http://app.eventday.com/)[EventDay](http://jasong.us/TDjjus)
-   [](http://www.zocdoc.com/)[ZocDoc](http://jasong.us/TYI9Hs)
-   [](http://www.adzerk.com/)[Adzerk](http://jasong.us/TYIpGn)
-   [](http://plumreward.com/)[PlumReward.com](http://jasong.us/TYIwl8)
-   [](http://www.pof.com/)[Plenty of Fish](http://jasong.us/TDfu8M)
-   [](http://marketinvoice.com/)[Market Invoice](http://jasong.us/TDgolA)
-   [](http://effectcheck.com/)[EffectCheck](http://jasong.us/TDipOI)
-   And of course, numerous first time applications that have come first to Windows Phone or Windows 8 such as [](PDP?PFN=HiddenPineappleLLC.Rowi_8364z769gkj0p&qpvt=Rowi)[Rowi](PDP?PFN=HiddenPineappleLLC.Rowi_8364z769gkj0p&qpvt=Rowi).

So, hopefully you have a better idea as to what the Microsoft Stack can do for your startup. If you have any suggestions for items you'd like to see added, be sure to let me know in the comments of this post.