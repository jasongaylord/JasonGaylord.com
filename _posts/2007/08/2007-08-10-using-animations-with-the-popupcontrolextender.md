---
title: Using Animations with the PopupControlExtender
author: Jason Gaylord
date: 2007-08-10 16:18:00
aspnet-weblog-link: http://weblogs.asp.net/jgaylord/archive/2007/08/10/using-animations-with-the-popupcontrolextender.aspx
msmvps_path: https://blogs.msmvps.com/jgaylord/2007/08/10/using-animations-with-the-popupcontrolextender/
categories: [aspnet-weblog]
tags: [archive]
bitly: https://jasong.us/2P48whg
---

I was looking for a solution to provide a "fly-in" form when a user would click on a particular button. I found it with the PopupControlExtender. The documentation for Animations with controls is poor so with some testing, I finally got a solution working for me. I added a button and a panel on my page. I set the panel below the button and set the style to:

```css
.myPanel { background-color: white; border: 1px solid black; z-index: 99; width: 0px; height: 0px; }
```

My panel was then setup like so:

```html
<asp:Panel ID="MyTestPanel" runat="server" CssClass="myPanel" >
    <asp:RadioButtonList ID="TestRadioButtonList" runat="server" AutoPostBack="true">
        <asp:ListItem Text="Item 1" />
        <asp:ListItem Text="Item 2" />
    </asp:RadioButtonList><br /><br />
    <asp:Button ID="MyTestButton" runat="server" Text="Close" />
</asp:Panel>
```

Then, I added the PopupControlExtender like so:

```html
<ajax:PopupControlExtender  ID\="MyTestPopupControlExtender"  runat\="server" TargetControlID\="TestButton"  PopupControlID\="MyTestPanel"  Position\="Bottom">
    <Animations\>
        <OnShow\>
            <Sequence\>
                <HideAction  Visible\="true"  />
                <Parallel  Duration\=".2">
                    <Resize  Height\="200"  Width\="300"  />
                </Parallel\>
            </Sequence\>
        </OnShow\>
        <OnHide\>
            <Sequence\>
                <StyleAction  Attribute\="overflow"  Value\="hidden"/>
                <Parallel  Duration\=".2">
                    <Resize  Height\="0"  Width\="0"  />
                </Parallel\>
                <HideAction  Visible\="false"  />
            </Sequence\>
        </OnHide\>
    </Animations\>
</ajax:PopupControlExtender\>
```

The panel and the actions are hidden when the button is clicked, so we needed to add `<HideAction Visible\="true" />` to the OnShow animation sequence. During the OnHide animation, we'll need to set the visible property to false. We'll also want to add `<StyleAction Attribute\="overflow" Value\="hidden" />` just in case the user clicks on another button or form item that postbacks. This hides the contents of the panel.

Happy programming!