---
title: Known Issues with Service Pack 1 in ASP.NET 3.5
author: Jason Gaylord
date: 2008-08-15 08:33:00
aspnet-weblog-link: http://weblogs.asp.net/jgaylord/archive/2008/08/15/known-issues-with-service-pack-1-in-asp-net-3-5.aspx
msmvps_path: https://blogs.msmvps.com/jgaylord/2008/08/15/known-issues-with-service-pack-1-in-asp-net-3-5/
categories: [aspnet-weblog]
tags: [archive]
bitly: https://bit.ly/3easVvV
---

Scott Galloway from the Microsoft DevDiv team has posted a couple of known issues with Service Pack 1 in ASP.NET 3.5 on the ASP.NET forums at [http://forums.asp.net/t/1305800.aspx](http://forums.asp.net/t/1305800.aspx "http://forums.asp.net/t/1305800.aspx"). The issues he currently has on the post are:

> **Issue:  The HtmlForm action attribute is now honored when defined in declarative markup.**  
> **Reason:  
> **3.5 SP1 added a settable Action property to the HtmlForm type.  This new feature makes it much easier for developers to explicitly set the form's action attribute for scenarios where a developer wants to use a different Url than the normal postback-generated Url.  However this change also means that if the action attribute has been set in an .aspx page's declarative markup, ASP.NET will use the setting from the markup when rendering a <form /> element.   
> **Workaround:  
> **Previous versions of ASP.NET always ignored the action attribute if it was present in the declarative markup for a <form /> element.  Developers should remove the action attribute from their declarative markup to return to the original behavior where ASP.NET renders the postback Url.  
> **Example:  
> **Before (the action attribute was ignored by ASP.NET as dead code):  <form name="form1" method="post" runat="server" action="test.aspx"></form>  
> 3.5 SP1 (remove the action attribute to have ASP.NET render the postback Url):  <form name="form1" method="post" runat="server" ></form>
> 
>   
> **Issue: After installing .NET 3.5 SP1, a web site using pageBaseType now encounters the following compilation error: "Make sure that the class defined in this code file matches the 'inherits' attribute."**  
> **Reason:**  
> The behavior you are seeing is the original behavior of ASP.NET 2.0. When .NET 3.5 / VS 2008 was introduced a bug occurred that affected certain pageBaseType scenarios, unfortunately inadvertently enabling scenarios which were not intended. It seems like you might have run into one of the latter scenarios. In FX3.5 SP1, these unintended scenarios were removed so that pageBaseType works the same as in ASP.NET 2.0 (RTM), following requests by customers.  Unfortunately, this means customers who have relied upon these unintended scenarios for their applications to work between 3.5 RTM and 3.5 SP1 would now encounter problems running their applications. We are now evaluating a HotFix for these particular scenarios and providing workarounds for customers to help with this issue.   
> In retrospect, it was a mistake to disable these unintended scenarios in FX3.5 SP1 and we apologize for the inconvenience this has caused.  
> Here are some more details about the issue: -  
> The mismatch is caused by the class in the code-file not being assignable to the pageBaseType defined in web.config.  
> \- During code generation for a page (foo.aspx), in a Web Site model ASP.NET creates a separate class from the class defined in the CodeFile source (foo.aspx.cs). The Web.config's pageBaseType value can be used in cases where you want all pages to have certain properties. It applies to all pages, not just pages that do not have code-files.- If foo.aspx has a CodeFile attribute and therefore inherits from a class defined in foo.aspx.cs, the class defined in foo.aspx.cs must extend the pageBaseType.  
> **Workarounds:**  
> 1\. If the pageBaseType (MyBasePage) is not needed for all pages, you could remove it from web.config  
> 2\. Where pages do require the pageBaseType, modify the classes in the code-files to extend the base type. In the <filename>.aspx.cs code-file, make sure the class inherits from the pageBaseType specified in web.config e.g. "public partial class CodeFileClass : MyBasePage", instead of "public partial class CodeFileClass : System.Web.UI.Page"  
> 3\. Add the following to your page directive: CodeFileBaseClass="System.Web.UI.Page"

If you have any others, feel free to post them here and I'll pass them onto ScottGa and the rest of the team.