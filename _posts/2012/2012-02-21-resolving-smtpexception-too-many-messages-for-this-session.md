---
title: Resolving an SmtpException stating 'Too many messages for this session'
author: Jason Gaylord
cloudscribe_id: "cb418641-7e6f-45a7-83ae-fed7241fc0de"
cloudscribe_path: "/Blog/resolving-smtpexception-too-many-messages-for-this-session"
permalink: /Blog/resolving-smtpexception-too-many-messages-for-this-session
date: 2012-02-21
categories: [archive]
tags:  [archive,dotnet]
---

Have you ever noticed an exception being thrown by your application stating something like the following:

```csharp
System.Net.Mail.SmtpException: Service not available, closing transmission channel. 
The server response was: #4.x.2 Too many messages for this session
```

This has been an issue since early versions of the `System.Net.Mail` namespace. The `SmtpServer` object never included a `Dispose()` method that properly shutdown the connection to the server. So, even if you are creating new objects, the GC never disposed of the original thus causing this exception.

There are two workarounds for this exception as document on the [Connect website](http://jasong.us/wXDVAH):

1.  Upgrade to the .NET Framework 4.0 or later. This version of the framework now includes a `Dispose()` method that properly closes the connection to the server. Anytime you are connecting to the server to send a message, you should dispose the object afterwards.  

2.  If you are using older versions of the framework (.NET Framework 3.5 or earlier), you can set the `MaxIdleTime` property to 0 and the `ConnectionLimit` to 1 on the `SmtpClient`’s `ServicePoint` object. For example, your code may look like the following:

```csharp
 var client = new SmtpClient("hostname");
     client.ServicePoint.MaxIdleTime = 0;
     client.ServicePoint.ConnectionLimit = 1;
     ...
     client.Send(new MailMessage(...));
 
     // at this point, the connection will get closed
     // since the ServicePoint idle time is now 0.
```

Hope this helps to solve any issues you’ve had with this.