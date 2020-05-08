---
title: "Embed JavaScript in Custom ASP.NET Server Controls"
author: Jason Gaylord
email: jason@jasongaylord.com
cloudscribe_id: "5b517ce2-4a7f-4083-b224-5c3cc7670c29"
cloudscribe_path: "/Blog/embed-javascript-in-custom-aspnet-server-controls"
permalink: /Blog/embed-javascript-in-custom-aspnet-server-controls
date: 2012-11-09
categories: [Archive]
tags:  [Archive]
---

As ASP.NET evolves, using ASP.NET WebForms is still the most popular way to serve up ASP.NET. One of the biggest benefits of ASP.NET WebForms is the fact that we can use re-usable code in several ways including in a compiled server control. What you may not know is that server controls can be quite powerful and can allow referencing JavaScript files. But, if you’re distributing your controls or do not have the means to host your JavaScript files on a content delivery network (CDN), you may want to package the files with your control.

So, let’s start from the beginning. Let’s assume that we’re building a sample web application to test our control output. We’ll create a brand new solution in Visual Studio 2012 along with an ASP.NET Empty Web Application. After the project is created, we’ll add another new project: an ASP.NET Server Control project called ‘OurSuperCoolControlSuite’.

After our server control project has been added, we’ll see a .cs file (or .vb file if we are using Visual Basic) named ServerControl1.cs. For this example, let’s rename this to GreetingControl.cs. I then have updated my GreetingControl.cs to include a basic input text element that calls some custom JavaScript when the input element loses focus to show a Greeting alert. Here’s what the GreetingControl.cs looks like:

**GreetingControl.cs**

<div id="codeSnippetWrapper" style="margin: 20px 0px 10px; padding: 4px; border: 1px solid silver; border-image: none; width: 97.5%; text-align: left; line-height: 12pt; overflow: auto; font-family: " courier="" new",="" courier,="" monospace;="" font-size:="" 8pt;="" cursor:="" text;="" direction:="" ltr;="" max-height:="" 200px;="" background-color:="" rgb(244,="" 244,="" 244);"="">
<div id="codeSnippet" style="padding: 0px; width: 100%; text-align: left; color: black; line-height: 12pt; overflow: visible; font-family: " courier="" new",="" courier,="" monospace;="" font-size:="" 8pt;="" direction:="" ltr;="" background-color:="" rgb(244,="" 244,="" 244);"="">


<span id="lnum1" style="color: rgb(96, 96, 96);">   1:</span> <span style="color: rgb(0, 0, 255);">using</span> System;

<span id="lnum2" style="color: rgb(96, 96, 96);">   2:</span> <span style="color: rgb(0, 0, 255);">using</span> System.Collections.Generic;

<span id="lnum3" style="color: rgb(96, 96, 96);">   3:</span> <span style="color: rgb(0, 0, 255);">using</span> System.ComponentModel;

<span id="lnum4" style="color: rgb(96, 96, 96);">   4:</span> <span style="color: rgb(0, 0, 255);">using</span> System.Linq;

<span id="lnum5" style="color: rgb(96, 96, 96);">   5:</span> <span style="color: rgb(0, 0, 255);">using</span> System.Text;

<span id="lnum6" style="color: rgb(96, 96, 96);">   6:</span> <span style="color: rgb(0, 0, 255);">using</span> System.Threading.Tasks;

<span id="lnum7" style="color: rgb(96, 96, 96);">   7:</span> <span style="color: rgb(0, 0, 255);">using</span> System.Web;

<span id="lnum8" style="color: rgb(96, 96, 96);">   8:</span> <span style="color: rgb(0, 0, 255);">using</span> System.Web.UI;

<span id="lnum9" style="color: rgb(96, 96, 96);">   9:</span> <span style="color: rgb(0, 0, 255);">using</span> System.Web.UI.WebControls;

<span id="lnum10" style="color: rgb(96, 96, 96);">  10:</span>  

<span id="lnum11" style="color: rgb(96, 96, 96);">  11:</span> <span style="color: rgb(0, 0, 255);">namespace</span> OurSuperCoolControlSuite

<span id="lnum12" style="color: rgb(96, 96, 96);">  12:</span> {

<span id="lnum13" style="color: rgb(96, 96, 96);">  13:</span>     [DefaultProperty(<span style="color: rgb(0, 96, 128);">"Text"</span>)]

<span id="lnum14" style="color: rgb(96, 96, 96);">  14:</span>     [ToolboxData(<span style="color: rgb(0, 96, 128);">"<{0}:GreetingControl runat=server></{0}:GreetingControl>"</span>)]

<span id="lnum15" style="color: rgb(96, 96, 96);">  15:</span>     <span style="color: rgb(0, 0, 255);">public</span> <span style="color: rgb(0, 0, 255);">class</span> GreetingControl : WebControl

<span id="lnum16" style="color: rgb(96, 96, 96);">  16:</span>     {

<span id="lnum17" style="color: rgb(96, 96, 96);">  17:</span>         [Bindable(<span style="color: rgb(0, 0, 255);">true</span>)]

<span id="lnum18" style="color: rgb(96, 96, 96);">  18:</span>         [Category(<span style="color: rgb(0, 96, 128);">"Appearance"</span>)]

<span id="lnum19" style="color: rgb(96, 96, 96);">  19:</span>         [DefaultValue(<span style="color: rgb(0, 96, 128);">""</span>)]

<span id="lnum20" style="color: rgb(96, 96, 96);">  20:</span>         [Localizable(<span style="color: rgb(0, 0, 255);">true</span>)]

<span id="lnum21" style="color: rgb(96, 96, 96);">  21:</span>         <span style="color: rgb(0, 0, 255);">public</span> <span style="color: rgb(0, 0, 255);">string</span> Text

<span id="lnum22" style="color: rgb(96, 96, 96);">  22:</span>         {

<span id="lnum23" style="color: rgb(96, 96, 96);">  23:</span>             get

<span id="lnum24" style="color: rgb(96, 96, 96);">  24:</span>             {

<span id="lnum25" style="color: rgb(96, 96, 96);">  25:</span>                 String s = (String)ViewState[<span style="color: rgb(0, 96, 128);">"Text"</span>];

<span id="lnum26" style="color: rgb(96, 96, 96);">  26:</span>                 <span style="color: rgb(0, 0, 255);">return</span> ((s == <span style="color: rgb(0, 0, 255);">null</span>)? <span style="color: rgb(0, 96, 128);">"Jason"</span> : s);

<span id="lnum27" style="color: rgb(96, 96, 96);">  27:</span>             }

<span id="lnum28" style="color: rgb(96, 96, 96);">  28:</span>  

<span id="lnum29" style="color: rgb(96, 96, 96);">  29:</span>             set

<span id="lnum30" style="color: rgb(96, 96, 96);">  30:</span>             {

<span id="lnum31" style="color: rgb(96, 96, 96);">  31:</span>                 ViewState[<span style="color: rgb(0, 96, 128);">"Text"</span>] = <span style="color: rgb(0, 0, 255);">value</span>;

<span id="lnum32" style="color: rgb(96, 96, 96);">  32:</span>             }

<span id="lnum33" style="color: rgb(96, 96, 96);">  33:</span>         }

<span id="lnum34" style="color: rgb(96, 96, 96);">  34:</span>  

<span id="lnum35" style="color: rgb(96, 96, 96);">  35:</span>         <span style="color: rgb(0, 0, 255);">protected</span> <span style="color: rgb(0, 0, 255);">override</span> <span style="color: rgb(0, 0, 255);">void</span> OnPreRender(EventArgs e)

<span id="lnum36" style="color: rgb(96, 96, 96);">  36:</span>         {

<span id="lnum37" style="color: rgb(96, 96, 96);">  37:</span>             Page.ClientScript.RegisterClientScriptResource(<span style="color: rgb(0, 0, 255);">typeof</span>(GreetingControl), <span style="color: rgb(0, 96, 128);">"OurSuperCoolControlSuite.Scripts.Greeting.js"</span>);

<span id="lnum38" style="color: rgb(96, 96, 96);">  38:</span>             Page.ClientScript.RegisterStartupScript(<span style="color: rgb(0, 0, 255);">typeof</span>(Page), <span style="color: rgb(0, 96, 128);">"ControlFocus"</span>, <span style="color: rgb(0, 96, 128);">"document.getElementById('"</span> + <span style="color: rgb(0, 0, 255);">this</span>.ClientID + <span style="color: rgb(0, 96, 128);">"').focus();"</span>, <span style="color: rgb(0, 0, 255);">true</span>);

<span id="lnum39" style="color: rgb(96, 96, 96);">  39:</span>         } 

<span id="lnum40" style="color: rgb(96, 96, 96);">  40:</span>  

<span id="lnum41" style="color: rgb(96, 96, 96);">  41:</span>         <span style="color: rgb(0, 0, 255);">protected</span> <span style="color: rgb(0, 0, 255);">override</span> <span style="color: rgb(0, 0, 255);">void</span> RenderContents(HtmlTextWriter output)

<span id="lnum42" style="color: rgb(96, 96, 96);">  42:</span>         {

<span id="lnum43" style="color: rgb(96, 96, 96);">  43:</span>             output.RenderBeginTag(HtmlTextWriterTag.Div);

<span id="lnum44" style="color: rgb(96, 96, 96);">  44:</span>             output.AddAttribute(HtmlTextWriterAttribute.Type, <span style="color: rgb(0, 96, 128);">"text"</span>);

<span id="lnum45" style="color: rgb(96, 96, 96);">  45:</span>             output.AddAttribute(HtmlTextWriterAttribute.Id, <span style="color: rgb(0, 0, 255);">this</span>.ClientID);

<span id="lnum46" style="color: rgb(96, 96, 96);">  46:</span>             output.AddAttribute(HtmlTextWriterAttribute.Name, <span style="color: rgb(0, 0, 255);">this</span>.ClientID);

<span id="lnum47" style="color: rgb(96, 96, 96);">  47:</span>             output.AddAttribute(HtmlTextWriterAttribute.Value, <span style="color: rgb(0, 0, 255);">this</span>.Text);

<span id="lnum48" style="color: rgb(96, 96, 96);">  48:</span>             output.AddAttribute(<span style="color: rgb(0, 96, 128);">"onBlur"</span>, <span style="color: rgb(0, 96, 128);">"greetMe(this.value);"</span>);

<span id="lnum49" style="color: rgb(96, 96, 96);">  49:</span>             output.RenderBeginTag(HtmlTextWriterTag.Input);

<span id="lnum50" style="color: rgb(96, 96, 96);">  50:</span>             output.RenderEndTag();

<span id="lnum51" style="color: rgb(96, 96, 96);">  51:</span>             output.RenderEndTag();

<span id="lnum52" style="color: rgb(96, 96, 96);">  52:</span>         }

<span id="lnum53" style="color: rgb(96, 96, 96);">  53:</span>     }

<span id="lnum54" style="color: rgb(96, 96, 96);">  54:</span> }

</div>
</div>


Next, we’ll add a *Scripts* folder to this same project. We don’t have to, but this allows us to organize our JavaScript files better. So, if you look in the code snippet above, you’ll notice on Line 37, we’re using ClientScript.RegisterClientScriptResource. This method takes two attributes: a type and a string of the resource. For the type, it’s best to use the class name of the control you are building. The reasoning behind this is that if you are sharing the same script across multiple controls, you may run into some strange behavior as the embedded resource will be shared between all of the controls using the same type. This means that if your end users are using two different controls that use the same resource on the same page and that resource contains a variable to store a value, the value is used between both controls. The second attribute is our JavaScript file. Now, in a minute, we’ll add Greeting.js to our Scripts folder. But, we can have multiple Greeting.js files in our application. So, to clarify which one we would like to use, we need to specify the assembly name, folder structure, and JavaScript file name. In this case, our default namespace and assembly are both OurSuperCoolControlSuite. The folder structure is just Scripts. We’ll separate these using periods to get *OurSuperCoolControlSuite.Scripts.Greeting.js*.

Let’s add that JavaScript file now and change the Build Action of the file in the properties window to ‘Embedded Resource’.

**Greeting.js**

<div id="codeSnippetWrapper" style="margin: 20px 0px 10px; padding: 4px; border: 1px solid silver; border-image: none; width: 97.5%; text-align: left; line-height: 12pt; overflow: auto; font-family: " courier="" new",="" courier,="" monospace;="" font-size:="" 8pt;="" cursor:="" text;="" direction:="" ltr;="" max-height:="" 200px;="" background-color:="" rgb(244,="" 244,="" 244);"="">
<div id="codeSnippet" style="padding: 0px; width: 100%; text-align: left; color: black; line-height: 12pt; overflow: visible; font-family: " courier="" new",="" courier,="" monospace;="" font-size:="" 8pt;="" direction:="" ltr;="" background-color:="" rgb(244,="" 244,="" 244);"="">


<span id="lnum1" style="color: rgb(96, 96, 96);">   1:</span> <span style="color: rgb(0, 0, 255);">function</span> greetMe(value) {

<span id="lnum2" style="color: rgb(96, 96, 96);">   2:</span>     alert(<span style="color: rgb(0, 96, 128);">'Welcome, '</span> + value);

<span id="lnum3" style="color: rgb(96, 96, 96);">   3:</span> }

</div>
</div>


We’re almost there. We have our JavaScript embedded into the binary and we’re looking to register the script file in our control, but at this point we haven’t specified that this resource is available to the Web. So, just to keep all of our assembly information together in AssemblyInfo.cs by adding the following to that file (found in the Properties folder):

<div id="codeSnippetWrapper">
<div id="codeSnippet" style="padding: 0px; width: 100%; text-align: left; color: black; line-height: 12pt; overflow: visible; font-family: " courier="" new",="" courier,="" monospace;="" font-size:="" 8pt;="" direction:="" ltr;="" background-color:="" rgb(244,="" 244,="" 244);"="">


[assembly: WebResource(<span style="color: rgb(0, 96, 128);">"OurSuperCoolControlSuite.Scripts.Greeting.js"</span>, <span style="color: rgb(0, 96, 128);">"text/javascript"</span>)]

</div>
</div>


Now, let’s compile our server control project OurSuperCoolControlSuite.

Going back to our ASP.NET Web project, let’s add a new ASP.NET WebForm called default.aspx. We’ll switch to design mode as this refreshes the Toolbox window. We should now see our control appear at the top of the toolbox as shown below:

[![image](https://cdn.jasongaylord.com/images/2012/11/09/image_2.png "image")](https://cdn.jasongaylord.com/images/2012/11/09/image_2.png)

Finally, let’s drag our control to the designer. We’ll leave all of the default values of the control and simply run our Web application to see what we’ve done. When we leave the input control, we’ll get our JavaScript alert like we’re expecting:

[![image](https://cdn.jasongaylord.com/images/2012/11/09/image_4.png "image")](https://cdn.jasongaylord.com/images/2012/11/09/image_4.png)

So, let’s check out the rendered markup:

<div id="codeSnippetWrapper" style="margin: 20px 0px 10px; padding: 4px; border: 1px solid silver; border-image: none; width: 97.5%; text-align: left; line-height: 12pt; overflow: auto; font-family: " courier="" new",="" courier,="" monospace;="" font-size:="" 8pt;="" cursor:="" text;="" direction:="" ltr;="" max-height:="" 200px;="" background-color:="" rgb(244,="" 244,="" 244);"="">
<div id="codeSnippet" style="padding: 0px; width: 100%; text-align: left; color: black; line-height: 12pt; overflow: visible; font-family: " courier="" new",="" courier,="" monospace;="" font-size:="" 8pt;="" direction:="" ltr;="" background-color:="" rgb(244,="" 244,="" 244);"="">


<span id="lnum1" style="color: rgb(96, 96, 96);">   1:</span>  

<span id="lnum2" style="color: rgb(96, 96, 96);">   2:</span>  

<span id="lnum3" style="color: rgb(96, 96, 96);">   3:</span> <span style="color: rgb(0, 0, 255);"><!</span><span style="color: rgb(128, 0, 0);">DOCTYPE</span> <span style="color: rgb(255, 0, 0);">html</span><span style="color: rgb(0, 0, 255);">></span>

<span id="lnum4" style="color: rgb(96, 96, 96);">   4:</span>  

<span id="lnum5" style="color: rgb(96, 96, 96);">   5:</span> <span style="color: rgb(0, 0, 255);"><</span><span style="color: rgb(128, 0, 0);">html</span> <span style="color: rgb(255, 0, 0);">xmlns</span><span style="color: rgb(0, 0, 255);">="http://www.w3.org/1999/xhtml"</span><span style="color: rgb(0, 0, 255);">></span>

<span id="lnum6" style="color: rgb(96, 96, 96);">   6:</span> <span style="color: rgb(0, 0, 255);"><</span><span style="color: rgb(128, 0, 0);">head</span><span style="color: rgb(0, 0, 255);">><</span><span style="color: rgb(128, 0, 0);">title</span><span style="color: rgb(0, 0, 255);">></span>

<span id="lnum7" style="color: rgb(96, 96, 96);">   7:</span>  

<span id="lnum8" style="color: rgb(96, 96, 96);">   8:</span> <span style="color: rgb(0, 0, 255);"></</span><span style="color: rgb(128, 0, 0);">title</span><span style="color: rgb(0, 0, 255);">></</span><span style="color: rgb(128, 0, 0);">head</span><span style="color: rgb(0, 0, 255);">></span>

<span id="lnum9" style="color: rgb(96, 96, 96);">   9:</span> <span style="color: rgb(0, 0, 255);"><</span><span style="color: rgb(128, 0, 0);">body</span><span style="color: rgb(0, 0, 255);">></span>

<span id="lnum10" style="color: rgb(96, 96, 96);">  10:</span>     <span style="color: rgb(0, 0, 255);"><</span><span style="color: rgb(128, 0, 0);">form</span> <span style="color: rgb(255, 0, 0);">method</span><span style="color: rgb(0, 0, 255);">="post"</span> <span style="color: rgb(255, 0, 0);">action</span><span style="color: rgb(0, 0, 255);">="default.aspx"</span> <span style="color: rgb(255, 0, 0);">id</span><span style="color: rgb(0, 0, 255);">="form1"</span><span style="color: rgb(0, 0, 255);">></span>

<span id="lnum11" style="color: rgb(96, 96, 96);">  11:</span> <span style="color: rgb(0, 0, 255);"><</span><span style="color: rgb(128, 0, 0);">div</span> <span style="color: rgb(255, 0, 0);">class</span><span style="color: rgb(0, 0, 255);">="aspNetHidden"</span><span style="color: rgb(0, 0, 255);">></span>

<span id="lnum12" style="color: rgb(96, 96, 96);">  12:</span> <span style="color: rgb(0, 0, 255);"><</span><span style="color: rgb(128, 0, 0);">input</span> <span style="color: rgb(255, 0, 0);">type</span><span style="color: rgb(0, 0, 255);">="hidden"</span> <span style="color: rgb(255, 0, 0);">name</span><span style="color: rgb(0, 0, 255);">="__VIEWSTATE"</span> <span style="color: rgb(255, 0, 0);">id</span><span style="color: rgb(0, 0, 255);">="__VIEWSTATE"</span> <span style="color: rgb(255, 0, 0);">value</span><span style="color: rgb(0, 0, 255);">="ujUKHFd/M66UGv4J0cHNpTYhArBWf9fbtT2EnoPIeBCTvKsxnv8RhqWiclz4isaDVA5RGAq34QhgzP1u00nUnc2G+uo9cHBXO93wo4KVt0g="</span> <span style="color: rgb(0, 0, 255);">/></span>

<span id="lnum13" style="color: rgb(96, 96, 96);">  13:</span> <span style="color: rgb(0, 0, 255);"></</span><span style="color: rgb(128, 0, 0);">div</span><span style="color: rgb(0, 0, 255);">></span>

<span id="lnum14" style="color: rgb(96, 96, 96);">  14:</span>  

<span id="lnum15" style="color: rgb(96, 96, 96);">  15:</span>  

<span id="lnum16" style="color: rgb(96, 96, 96);">  16:</span> <span style="color: rgb(0, 0, 255);"><</span><span style="color: rgb(128, 0, 0);">script</span> <span style="color: rgb(255, 0, 0);">src</span><span style="color: rgb(0, 0, 255);">="/WebResource.axd?d=-P4RDcgXkNOn_YBSzQs9QnlpUkuyKvL9dN_aN24z9gNtNbp8N0RegRa0qyC9MB1-76d6lcsPvf-em95iFJrp2hesCfrTWRkCgd7vEMF3yI3Rfc_Eyywc7m9bEtxaWp_rVl_WDYbyF97Ehy42Q0Z1WQ2&amp;t=634880155251801752"</span> <span style="color: rgb(255, 0, 0);">type</span><span style="color: rgb(0, 0, 255);">="text/javascript"</span><span style="color: rgb(0, 0, 255);">></</span><span style="color: rgb(128, 0, 0);">script</span><span style="color: rgb(0, 0, 255);">></span>

<span id="lnum1" style="color: rgb(96, 96, 96);">   1:</span>  

<span id="lnum2" style="color: rgb(96, 96, 96);">   2:</span>     <div>

<span id="lnum3" style="color: rgb(96, 96, 96);">   3:</span>     

<span id="lnum4" style="color: rgb(96, 96, 96);">   4:</span>         <span id=<span style="color: rgb(0, 96, 128);">"GreetingControl1"</span>><div>

<span id="lnum5" style="color: rgb(96, 96, 96);">   5:</span>     <input type=<span style="color: rgb(0, 96, 128);">"text"</span> id=<span style="color: rgb(0, 96, 128);">"GreetingControl1"</span> name=<span style="color: rgb(0, 96, 128);">"GreetingControl1"</span> value=<span style="color: rgb(0, 96, 128);">"Jason"</span> onBlur=<span style="color: rgb(0, 96, 128);">"greetMe(this.value);"</span> />

<span id="lnum6" style="color: rgb(96, 96, 96);">   6:</span> </div></span>

<span id="lnum7" style="color: rgb(96, 96, 96);">   7:</span>     

<span id="lnum8" style="color: rgb(96, 96, 96);">   8:</span>     </div>

<span id="lnum9" style="color: rgb(96, 96, 96);">   9:</span>     

<span id="lnum10" style="color: rgb(96, 96, 96);">  10:</span>  

<span id="lnum11" style="color: rgb(96, 96, 96);">  11:</span> <script type=<span style="color: rgb(0, 96, 128);">"text/javascript"</span>>

<span id="lnum12" style="color: rgb(96, 96, 96);">  12:</span> <span style="color: rgb(0, 128, 0);">//<![CDATA[</span>

<span id="lnum13" style="color: rgb(96, 96, 96);">  13:</span> document.getElementById(<span style="color: rgb(0, 96, 128);">'GreetingControl1'</span>).focus();<span style="color: rgb(0, 128, 0);">//]]></span>

<span style="color: rgb(0, 0, 255);"></</span><span style="color: rgb(128, 0, 0);">script</span><span style="color: rgb(0, 0, 255);">></span>

<span id="lnum17" style="color: rgb(96, 96, 96);">  17:</span> <span style="color: rgb(0, 0, 255);"></</span><span style="color: rgb(128, 0, 0);">form</span><span style="color: rgb(0, 0, 255);">></span>

<span id="lnum18" style="color: rgb(96, 96, 96);">  18:</span> <span style="color: rgb(0, 0, 255);"></</span><span style="color: rgb(128, 0, 0);">body</span><span style="color: rgb(0, 0, 255);">></span>

<span id="lnum19" style="color: rgb(96, 96, 96);">  19:</span> <span style="color: rgb(0, 0, 255);"></</span><span style="color: rgb(128, 0, 0);">html</span><span style="color: rgb(0, 0, 255);">></span>

</div>
</div>


Notice that in Line 16, we have a script reference. This reference is using an HttpHandler named WebResource.axd. Our JavaScript file has been referenced through this URL.

What’s cool about this is that we now have a self-contained server control that has an embedded JavaScript file.

So, if you’d like to skip right to the demo without building it yourself, feel free to download the solution using the link below.

Enjoy!

[![](https://cdn.jasongaylord.com/images/_archive/Download.png)  
Download](http://jasong.us/Twz0RL)
