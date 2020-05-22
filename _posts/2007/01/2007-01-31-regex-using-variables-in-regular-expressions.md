---
title: "RegEx: Using Variables in Regular Expressions"
author: Jason Gaylord
date: 2007-01-31 11:00:00
aspnet-weblog-link: http://weblogs.asp.net/jgaylord/archive/2007/01/31/regex-using-variables-in-regular-expressions.aspx
categories: [aspnet-weblog]
tags: [archive]
bitly: https://jasong.us/2LMgH0m
---

First off, I'd like to thank Steve Smith for helping me out yesterday with a major brain `<insert your favorite phrase here>`. Like always, my issue turned out to be something stupid. Anyway, my issue ended up bringing something else to my attention. Why not use regular expressions to grab data from strings being passed in and then do something with that data. Hmmm.

It took me a little bit to figure out the logistics of what I wanted to accomplish. But from a Regex end, it was quite simple. Basically, I wanted to use variables in a regular expression to parse through data. I have a string that says: Hello, my name is Jason and his name is Bob. I'd like to first obtain the match to ensure that I receive the "name is %" string. Then I'd like to obtain each name in a variable so I can run some process against it. This is shown in the following sample:

```vb
Function ObtainResults() As String  
    Dim rtn As String = ""  
    Dim str As String = "Hello, my name is Jason and his name is Bob."  
          
    Dim obj As New Regex("name is(?<name>.\*?)")  
          
    Dim result As Match  
          
    For Each result In obj.Matches(str)  
        'The statement below grabs each |name| and adds it the the rtn string  
        rtn \= rtn & "Result: " & result.Groups("name").Value & "<br/>"  
    Next  
          
    Return rtn  
End Function
```

As you can see, it's fairly simple to establish and has some better uses than this. :-)