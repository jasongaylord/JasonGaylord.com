---
title: Repeating A Details Section Using Crystal Reports
author: Jason Gaylord
date: 2007-02-13 16:48:00
aspnet-weblog-link: http://weblogs.asp.net/jgaylord/archive/2007/02/13/repeating-a-details-section-using-crystal-reports.aspx
categories: [aspnet-weblog]
tags: [archive]
bitly: https://jasong.us/36iposD
---

This year I created a 1099 reporting module for our accounting system. One issue I came across occurred when I was pulling the information from Microsoft SQL into a Crystal Report. I couldn't find a nice, clean way to print two 1099s per page. Then it hit me. I could have two detailed sections. The first section would contain the fields necessary to display the data. The second section would act as a buffer and add white space to the report so I could print both 1099s on one page. I then came across the issue that every other page was blank. So, this is what I did:

1.  I created 2 Details sections, an A and B section.
2.  I added my printable fields to Details A
3.  I created white space in Details B
4.  Then, I suppressed the Details B section, but added a Basic Syntax function to the Suppress action. The function looked like this:  

```vb      
    Dim tmp as Boolean  
    tmp = True  
    If (Remainder (RecordNumber, 2) = 1) Then tmp = False  
    formula = tmp  
```
    
5.  I finally made sure that all sections were marked as Keep Together

This would ensure that I could create 2 details sections on a single page. Hope that helps!