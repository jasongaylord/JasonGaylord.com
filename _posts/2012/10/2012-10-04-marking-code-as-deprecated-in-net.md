---
title: "Marking Code as Deprecated in .NET"
author: Jason Gaylord
msmvps_path: "https://blogs.msmvps.com/jgaylord/2012/10/04/marking-code-as-deprecated-in-net/"
date: 2012-10-04
categories: [archive]
tags: [archive]
bitly: https://jasong.us/2TZhuiV
---

Do you work on a team that shares code libraries? Have you ever wanted to implement a new method to replace an old one (with a differing signature) and simply deleted the old method? You can handle these situations easier by using an attribute on a class or method. The attribute is called Obsolete. This allows you to gracefully mark code as deprecated as shown below:

**C#**
```csharp
\[Obsolete("This class has been deprecated.")\]
public class Test
{
    \[Obsolete("This method has been deprecated.")\]
    public void FooBar () { }
}
```

**VB**
```vb
<Obsolete("This class has been deprecated.")>
Public Class Test
    <Obsolete("This method has been deprecated.")>
    Public Sub FooBar()
    End Sub 
End Class
```

However, in the code above, both of these instances will only show a warning in the compiler. To throw an exception, you can add another property to the code to pass in a Boolean value to throw an exception as shown below:

**C#**
```csharp
\[Obsolete("This class has been deprecated.", true)\]
public class Test
{
    \[Obsolete("This method has been deprecated.", true)\]
    public void FooBar () { }
}
```

**VB**
```vb
<Obsolete("This class has been deprecated.", True)>
Public Class Test
    <Obsolete("This method has been deprecated.", True)>
    Public Sub FooBar()
    End Sub 
End Class
```