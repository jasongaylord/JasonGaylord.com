---
title: Writing a Base64 String to the File System or Browser
author: Jason Gaylord
date: 2007-10-10 16:18:00
aspnet-weblog-link: http://weblogs.asp.net/jgaylord/archive/2007/10/10/writing-a-base64-string-to-the-file-system-or-browser.aspx
msmvps_path: https://blogs.msmvps.com/jgaylord/2007/10/10/writing-a-base64-string-to-the-file-system-or-browser/
categories: [aspnet-weblog]
tags: [archive]
bitly: https://bit.ly/36hjxnd
---

Quite often, vendors pass images or PDFs to customers using the binary contents of the file. To make it more secure, they convert the binary contents to a Base64 string. [A full explanation about Base64 encoding can be found at Wikipedia here](http://en.wikipedia.org/wiki/Base64). Anyway, when you receive the string, you cannot simply write it to a file or to the browser. First, you must convert the data into a `Byte` array. The sample code below demonstrates this:

```vb
Dim str As  String = "Insert Your Base64 String Here"  
Dim Base64Byte() As  Byte = Convert.FromBase64String(str)
```

Then, you can decide which output method you'd prefer. If you'd like to write the content to the file system, you can write it as:

```vb
> Dim obj As FileStream = File.Create("C:\\test.pdf")  
> obj.Write(Base64Byte, 0, Base64Byte.Length)  
> obj.Close()
```

If you'd prefer to write the content to the browser, you'd most likely add this to your page:

```vb
> Response.ContentType = "application/pdf"  
> Response.BinaryWrite(Base64Byte)  
> Response.End()
```

I'd highly recommend setting the `content-disposition` header attribute if you write the file to the browser. I've explained more about using this header at [http://weblogs.asp.net/jgaylord/archive/2004/12/08/278309.aspx](https://jasong.us/3cyH3i7).