---
title: Setting the Default Printer in a Win App
author: Jason Gaylord
date: 2006-05-19 16:19:00
aspnet-weblog-link: http://weblogs.asp.net/jgaylord/archive/2006/05/19/447292.aspx
categories: [aspnet-weblog]
tags: [archive]
bitly: https://jasong.us/2yZAWF7
---

Sometimes you just can't get around using old API calls. One of the things (unless I've missed it) that is not found in the .NET Framework 2.0 is a Printers class that contains methods for enumerating printer objects, setting properties, etc. You can read 99% of the properties using the PrinterSettings class in System.Drawing.Printing, but you can't set the properties there. In VB6 we had to call the `WriteProfileStringA` method in Kernel32. In .NET 1.x or 2.0, we can use WMI script with the `System.Managment` namespace to make similar calls. One of the tasks I had earlier was to set the default printer using a function. Here is what it would look like using the `System.Managment` namespace:
 
```vb
Public Shared Function SetDefaultPrinter(ByVal PrinterName As String) As Boolean  
    'Declare WMI Variables  
    Dim MgmtObject As ManagementObject  
    Dim MgmtCollection As ManagementObjectCollection  
    Dim MgmtSearcher As ManagementObjectSearcher  
    Dim ReturnBoolean As Boolean = False  

    'Perform the search for printers and return the listing as a collection  
    MgmtSearcher = New ManagementObjectSearcher("Select \* from Win32\_Printer")  
    MgmtCollection = MgmtSearcher.Get  

    'Enumerate Objects To Find Printer  
    For Each MgmtObject In MgmtCollection  
        'Look for a match  
        If MgmtObject.Item("name").ToString = PrinterName Then  
            'Set Default Printer  
            Dim TempObject() As Object 'Temporary Object for InvokeMethod. Holds no purpose.  
            MgmtObject.InvokeMethod("SetDefaultPrinter", TempObject)  

            'Set Success Value and Exit For..Next Loop  
            ReturnBoolean = True  
            Exit For  
        End If  
    Next  

    'Return Success Value  
    Return ReturnBoolean  
End Function
```