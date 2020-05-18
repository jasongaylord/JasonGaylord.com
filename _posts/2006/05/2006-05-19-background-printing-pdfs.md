---
title: Background Printing PDFs
author: Jason Gaylord
date: 2006-05-19 17:25:00
aspnet-weblog-link: http://weblogs.asp.net/jgaylord/archive/2006/05/19/447379.aspx
categories: [aspnet-weblog]
tags: [archive]
bitly: https://jasong.us/36hkEDG
---

A common task that developers attempt to do is print PDF files from code. Unfortunately, there is no simple and easy way of doing this. However, I found a work around using the Acrobat Type Library that can assist with this. It's by no means the best solution, but will allow you to perform background printing:
 
```vb
Public Shared Function PrintPDF(ByVal Filename As String) As Boolean  
    'Declare Variables  
    Dim AcrobatApp As New AcroApp  
    Dim AcrobatDoc As New AcroAVDoc  
    Dim AcrobatPDFDoc As New AcroPDDoc  
    Dim TotalPageCount As Integer  
    Dim ResultsBoolean As Boolean  
    Dim ReturnBoolean As Boolean = False  
  
    Try  
        'Attempt To Open The Report  
        AcrobatDoc.Open(Filename, "")  
 
        'Pass the Document to the PDF Handler  
        AcrobatPDFDoc = AcrobatDoc.GetPDDoc  
 
        'Grab the total number of pages  
        TotalPageCount = AcrobatPDFDoc.GetNumPages  
  
        'Perform a background print using Acrobat  
        ResultsBoolean = AcrobatDoc.PrintPagesSilent(0, TotalPageCount - 1, 0, False, True)  
  
        If ResultsBoolean = False Then  
            Throw New Exception("Acrobat returned a False value when attempting to print the pages in the background.")  
        Else  
            ReturnBoolean = True  
        End If  
    Catch ex As Exception  
        'Add In Exception Handling  
    End Try  
 
    Return ReturnBoolean  
End Function
```