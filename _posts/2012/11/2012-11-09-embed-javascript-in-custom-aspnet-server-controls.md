---
title: Embed JavaScript in Custom ASP.NET Server Controls
author: Jason Gaylord
cloudscribe_id: "5b517ce2-4a7f-4083-b224-5c3cc7670c29"
cloudscribe_path: "/blog/embed-javascript-in-custom-aspnet-server-controls"
permalink: /blog/embed-javascript-in-custom-aspnet-server-controls
date: 2012-11-09
categories: [archive]
tags:  [archive,dotnet,javascript]
---

As ASP.NET evolves, using ASP.NET WebForms is still the most popular way to serve up ASP.NET. One of the biggest benefits of ASP.NET WebForms is the fact that we can use re-usable code in several ways including in a compiled server control. What you may not know is that server controls can be quite powerful and can allow referencing JavaScript files. But, if you're distributing your controls or do not have the means to host your JavaScript files on a content delivery network (CDN), you may want to package the files with your control.

So, let's start from the beginning. Let's assume that we're building a sample web application to test our control output. We'll create a brand new solution in Visual Studio 2012 along with an ASP.NET Empty Web Application. After the project is created, we'll add another new project: an ASP.NET Server Control project called 'OurSuperCoolControlSuite'.

After our server control project has been added, we'll see a .cs file (or .vb file if we are using Visual Basic) named ServerControl1.cs. For this example, let's rename this to GreetingControl.cs. I then have updated my GreetingControl.cs to include a basic input text element that calls some custom JavaScript when the input element loses focus to show a Greeting alert. Here's what the GreetingControl.cs looks like:

**GreetingControl.cs**
```csharp
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace OurSuperCoolControlSuite
{
    [DefaultProperty("Text")]
    [ToolboxData("<{0}:GreetingControl runat=server></{0}:GreetingControl>")]
    public class GreetingControl : WebControl
    {
        [Bindable(true)]
        [Category("Appearance")]
        [DefaultValue("")]
        [Localizable(true)]
        public string Text
        {
            get
            {
                String s = (String)ViewState["Text"];
                return ((s == null)? "Jason" : s);
            }
 
            set
            {
                ViewState["Text"] = value;
            }
        }
 
        protected override void OnPreRender(EventArgs e)
        {
            Page.ClientScript.RegisterClientScriptResource(typeof(GreetingControl), "OurSuperCoolControlSuite.Scripts.Greeting.js");
            Page.ClientScript.RegisterStartupScript(typeof(Page), "ControlFocus", "document.getElementById('" + this.ClientID + "').focus();", true);
        } 
 
        protected override void RenderContents(HtmlTextWriter output)
        {
            output.RenderBeginTag(HtmlTextWriterTag.Div);
            output.AddAttribute(HtmlTextWriterAttribute.Type, "text");
            output.AddAttribute(HtmlTextWriterAttribute.Id, this.ClientID);
            output.AddAttribute(HtmlTextWriterAttribute.Name, this.ClientID);
            output.AddAttribute(HtmlTextWriterAttribute.Value, this.Text);
            output.AddAttribute("onBlur", "greetMe(this.value);");
            output.RenderBeginTag(HtmlTextWriterTag.Input);
            output.RenderEndTag();
            output.RenderEndTag();
        }
    }
}
```

Next, we'll add a _Scripts_ folder to this same project. We don't have to, but this allows us to organize our JavaScript files better. So, if you look in the code snippet above, you'll notice on Line 37, we're using ClientScript.RegisterClientScriptResource. This method takes two attributes: a type and a string of the resource. For the type, it's best to use the class name of the control you are building. The reasoning behind this is that if you are sharing the same script across multiple controls, you may run into some strange behavior as the embedded resource will be shared between all of the controls using the same type. This means that if your end users are using two different controls that use the same resource on the same page and that resource contains a variable to store a value, the value is used between both controls. The second attribute is our JavaScript file. Now, in a minute, we'll add Greeting.js to our Scripts folder. But, we can have multiple Greeting.js files in our application. So, to clarify which one we would like to use, we need to specify the assembly name, folder structure, and JavaScript file name. In this case, our default namespace and assembly are both `OurSuperCoolControlSuite`. The folder structure is just Scripts. We'll separate these using periods to get `OurSuperCoolControlSuite.Scripts.Greeting.js`.

Let's add that JavaScript file now and change the Build Action of the file in the properties window to `Embedded Resource`.

**Greeting.js**
```javascript
function greetMe(value) {
    alert('Welcome, ' + value);
}
```

We're almost there. We have our JavaScript embedded into the binary and we're looking to register the script file in our control, but at this point we haven't specified that this resource is available to the Web. So, just to keep all of our assembly information together in AssemblyInfo.cs by adding the following to that file (found in the Properties folder):

```csharp
[assembly: WebResource("OurSuperCoolControlSuite.Scripts.Greeting.js", "text/javascript")]
```

Now, let's compile our server control project OurSuperCoolControlSuite.

Going back to our ASP.NET Web project, let's add a new ASP.NET WebForm called default.aspx. We'll switch to design mode as this refreshes the Toolbox window. We should now see our control appear at the top of the toolbox as shown below:

[![](https://cdn.jasongaylord.com/images/2012/11/09/embedded-script-demo-toolbox.png)](https://cdn.jasongaylord.com/images/2012/11/09/embedded-script-demo-toolbox)

Finally, let's drag our control to the designer. We'll leave all of the default values of the control and simply run our Web application to see what we've done. When we leave the input control, we'll get our JavaScript alert like we're expecting:

[![](https://cdn.jasongaylord.com/images/2012/11/09/welcome-jason-alert.png)](https://cdn.jasongaylord.com/images/2012/11/09/welcome-jason-alert.png)

So, let's check out the rendered markup:

```html
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head><title></title></head>
<body>
    <form method="post" action="default.aspx" id="form1">
        <div class="aspNetHidden">
            <input type="hidden" name="__VIEWSTATE" id="__VIEWSTATE" value="ujUKHFd/M66UGv4J0cHNpTYhArBWf9fbtT2EnoPIeBCTvKsxnv8RhqWiclz4isaDVA5RGAq34QhgzP1u00nUnc2G+uo9cHBXO93wo4KVt0g=" />
        </div>

        <script src="/WebResource.axd?d=-P4RDcgXkNOn_YBSzQs9QnlpUkuyKvL9dN_aN24z9gNtNbp8N0RegRa0qyC9MB1-76d6lcsPvf-em95iFJrp2hesCfrTWRkCgd7vEMF3yI3Rfc_Eyywc7m9bEtxaWp_rVl_WDYbyF97Ehy42Q0Z1WQ2&amp;t=634880155251801752" type="text/javascript"></script>
        
        <div>
            <span id="GreetingControl1">
            <div>
                <input type="text" id="GreetingControl1" name="GreetingControl1" value="Jason" onBlur="greetMe(this.value);" />
            </div>
            </span>
        </div>

        <script type="text/javascript">
            //<![CDATA[
                document.getElementById('GreetingControl1').focus();//]]>
        </script>
    </form>
</body>
</html>
```

Notice that in Line 16, we have a script reference. This reference is using an HttpHandler named WebResource.axd. Our JavaScript file has been referenced through this URL.

What's cool about this is that we now have a self-contained server control that has an embedded JavaScript file.

So, if you'd like to skip right to the demo without building it yourself, feel free to download the solution using the link below.

Enjoy!

[![Download](https://cdn.jasongaylord.com/images/_archive/Download.png)](http://jasong.us/Twz0RL)