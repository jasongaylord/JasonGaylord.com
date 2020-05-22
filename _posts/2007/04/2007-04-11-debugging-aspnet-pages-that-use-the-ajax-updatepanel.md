---
title: Debugging ASP.NET Pages that use the AJAX UpdatePanel
author: Jason Gaylord
date: 2007-04-11 12:03:00
aspnet-weblog-link: http://weblogs.asp.net/jgaylord/archive/2007/04/11/debugging-asp-net-pages-that-use-the-ajax-updatepanel.aspx
categories: [aspnet-weblog]
tags: [archive]
bitly: https://jasong.us/3g0JyM6
---

I ran into an issue earlier today where I had a web control inside of an `UpdatePanel` that was causing some errors. So, I began looking for ways to circumvent removing the `UpdatePanel` and reading it at a later time. I posted a message out on the ASPAdvice.com lists and received 2 great responses. One was from Mike Campbell who pointed me to the "official" debugging page on AJAX ([http://ajax.asp.net/docs/overview/ASPNETAJAXDebuggingAndTracingOverview.aspx](http://ajax.asp.net/docs/overview/ASPNETAJAXDebuggingAndTracingOverview.aspx)). The other was from Wally McClure who pointed out that since the issue was server side, I had two options. First, I could have attached VS.NET to the IIS process on the remote machine (although the machine would have needed Visual Studio Remote Debugging enabled). Or, I could modify the script manager on my site. I opted for the second option. I created a `Page\_Init` event on my master page which is where the script manager is located. I then set the `SupportsPartialRendering` property to `False`. This allowed me to see the server side error messages.

Thanks again to both of these guys!