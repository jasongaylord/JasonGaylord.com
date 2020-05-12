---
title: "Using Spy++ to Obtain Winform Control TreeView"
author: Jason Gaylord
cloudscribe_id: "4f37761b-de21-4a53-8cae-b526c110cc3f"
cloudscribe_path: "/blog/using-spy-to-obtain-winform-control-treeview"
permalink: /blog/using-spy-to-obtain-winform-control-treeview
date: 2018-11-24
categories: [development,windows]
tags:  [development,windows]
---

Typically I find myself developing .NET Core applications for the web. However, even the most cutting edge developer will find their way to supporting legacy applications from time to time. This holiday week was a great example. I have an older Win32 application that was recently updated. As a result, the UI had changed. I needed to use COM Interop to connect to the process and read the form values. 

First, the application I modified to handle the scraping is a VB.NET application. There's no point in moving it to C# or Core as it functions as intended. The first thing I needed to do is to ensure that I have the appropriate methods mapped for Interop. I did something like the following:

```vb
Private Declare Function FindWindowEx Lib "user32" Alias "FindWindowExA" (ByVal hWnd1 As Integer, ByVal hWnd2 As Integer, ByVal lpsz1 As String, ByVal lpsz2 As String) As Integer
Private Declare Ansi Function SendMessage Lib "user32.dll" Alias "SendMessageA" (ByVal hwnd As Integer, ByVal wMsg As Integer, ByVal wParam As Integer, ByVal lParam As String) As Integer  

Private Const WM_GETTEXT As Short = &HDS  
Private Const WM_GETTEXTLENGTH As Short = &HES
```

So, we'll generally use `FindWindowExA` and `SendMessageA` to obtain the values. Next, we need to track down the values we'll be grabbing. For this, we'll use **Spy++**. In Visual Studio 2017, Spy++ isn't installed by default. If you modify your installation and include the Visual Studio C++ Core Features (as shown below), you'll be able to find it. Typically, it's found at `C:\Program Files (x86)\Microsoft Visual Studio\2017\Enterprise\Common7\Tools`. You'll find the `spyxx.exe` and `spyxx_amd64.exe` files there.

![https://cdn.jasongaylord.com/images/2018/11/24/Visual_Studio_Cplus_Core_Features.png](https://cdn.jasongaylord.com/images/2018/11/24/Visual_Studio_Cplus_Core_Features.png)

To use **Spy++**, you should use the Find Window tool in the toolbar, clear the Handle and the Class, and type the exact caption of the window you are looking for in the Caption field. Then, take note of the controls within. 

In my particular case, the control I needed was a `RichTextBox` 4 levels deep. So, in code, I navigated from the primary control to that control like so:

```vb
Dim hMain As Integer = FindWindowEx(0, 0, "ThunderRT6FormDC", "{My Caption}")
Dim hPic As Integer = FindWindowEx(hMain, 0, "ThunderRT6PictureBoxDC", vbNullString)
Dim hTab As Integer = FindWindowEx(hPic, 0, "ThunderRT6UserControl", vbNullString)
Dim hEditor As Integer = FindWindowEx(hTab, 0, "RICHEDIT50W", vbNullString)

Dim tLength As Long = SendMessage(hEditor, WM_GETTEXTLENGTH, CInt(0), CInt(0)) + 1  
tBuff = Space(tLength)  
Dim tValue As Long = SendMessage(hEditor, WM_GETTEXT, tLength, tBuff)
```

This provides a buffer with the Caption text in the RichTextEditor. From here, you can parse the text or do whatever you need to.

For me, the end result was to expose that content in a local app that would randomly hit a web service passing in the values and ultimately floating to the [mylightdisplay.com](https://jasong.us/mylightdisplay) website. You can see these results today in the song listing.