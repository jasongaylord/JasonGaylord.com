---
title: "\"OLE received a packet with an invalid extension.\" in Microsoft Word"
author: Jason Gaylord
msmvps_path: https://blogs.msmvps.com/jgaylord/2008/06/02/quot-ole-received-a-packet-with-an-invalid-extension-quot-in-microsoft-word/
date: 2008-06-02
categories: [archive]
tags: [archive]
bitly: https://jasong.us/2Xpm9wv
---

We still have Small Business Accounting 2006 implemented for some companies. When we use a custom invoice to print using the MS Word Smart Document set, we receive the error "OLE received a packet with an invalid extension." This error occurs since the document was created before .NET 2.0 (or 3.0) was installed and before the Smart Document set was installed. To work around this issue, perform the following:

1.  Add .old as a suffix to the document name (rename)
2.  Open the .old custom invoice
3.  You'll receive an error in MS Word saying the the XML Extension pack or Smart Document set is not installed properly or is corrupt. OK out of that message.
4.  Save the document without the .old suffix.

It should work fine next time you print using that document in SBA.