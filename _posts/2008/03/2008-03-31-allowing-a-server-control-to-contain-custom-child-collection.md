---
title: Allowing a Server Control to Contain Custom Child Collection
author: Jason Gaylord
date: 2008-03-31 23:21:00
aspnet-weblog-link: http://weblogs.asp.net/jgaylord/archive/2008/03/31/allowing-a-server-control-to-contain-custom-child-collection.aspx
msmvps_path: https://blogs.msmvps.com/jgaylord/2008/03/31/allowing-a-server-control-to-contain-custom-child-collection/
categories: [aspnet-weblog]
tags: [archive]
bitly: https://bit.ly/3cUdjMA
---

I've probably done this at least a dozen times, but when you don't do something everyday, you tend to forget. I created a custom control that I wanted to place into a control collection. So, I created the child control as a custom server control. Then I created another server control that contained a property called Items as a `Generic.List(Of T)` where T was my custom child control. I kept running my app and couldn't figure out why I couldn't create my child controls in the Parent. I forgot that I had to import the namespace `System.ComponentModel` and add the `PersistenceMode` property to the property. So, my code looked like this:

**Visual Basic**
```vb
Public Class MyServerControlCollection  
    Inherits WebControl  
  
    Private \_Items As Generic.List(Of MyChildControl)  
  
    <PersistenceMode(PersistenceMode.InnerProperty)> \_  
    Public Property Items() As Generic.List(Of MyChildControl)  
        Get  
            Return \_Items  
        End Get  
        Set(ByVal value As Generic.List(Of MyChildControl))  
            \_Items \= value  
        End Set  
    End Property  
  
    Protected Overrides Sub CreateChildControls()  
        For Each obj As MyChildControl In Items  
            Me.Controls.Add(obj)  
        Next  
  
        MyBase.CreateChildControls()  
    End Sub
End Class
```

**C#**
```csharp
public class MyServerControlCollection : WebControl  
{   
    private Generic.List<MyChildControl> \_Items;  
  
    \[PersistenceMode(PersistenceMode.InnerProperty)\]  
    public Generic.List<MyChildControl> Items {  
        get { return \_Items; }  
        set { \_Items \= value; }  
    }  
  
    protected override void CreateChildControls()  
    {  
        foreach (MyChildControl obj in Items) {  
            this.Controls.Add(obj);  
        }  
  
        base.CreateChildControls();  
    }  
}
```

Hope that helps!