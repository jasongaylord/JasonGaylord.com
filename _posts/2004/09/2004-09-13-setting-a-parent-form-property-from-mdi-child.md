---
title: Setting A Parent Form Property From MDI Child
author: Jason Gaylord
date: 2004-09-13 12:21:00
aspnet-weblog-link: http://weblogs.asp.net/jgaylord/archive/2004/09/13/228858.aspx
categories: [aspnet-weblog]
tags:  [archive]
bitly: https://jasong.us/2WvTq8X
---

I needed a way to access the menu on my MdiParent form. However, the menu is built dynamically, and using the `MdiParent.Menu.Items` collection just won't work. So, I created a Public Property in my main form like such:

```vb
Public Property MenuToggle() As Boolean
    Get
        MenuToggle = mnuItem1.Enabled
    End Get
    Set(ByVal Value As Boolean)
        mnuItem1.Enabled = Value
        mnuItem2.Enabled = Value
    End Set
End Property
```

It's not the best implementation, but it works. Then in my child form I cast the parent form and set the single property to be True or False to enable or disable the form. Here is an example:

```vb
Private Sub btnToggle_Click(ByVal sender As System.Object, _
  ByVal e As System.EventArgs) Handles btnToggle.Click
    CType(Me.MdiParent, MyApp.Form1).MenuToggle = True
End Sub
```

So, the child form can then set the property which has been built dynamically.