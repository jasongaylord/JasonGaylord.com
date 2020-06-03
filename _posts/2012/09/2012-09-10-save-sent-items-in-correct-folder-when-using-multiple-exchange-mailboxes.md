---
title: "Save Sent Items in Correct Folder when Using Multiple Exchange Mailboxes"
author: Jason Gaylord
msmvps_path: "https://blogs.msmvps.com/jgaylord/2012/09/10/save-sent-items-in-correct-folder-when-using-multiple-exchange-mailboxes/"
date: 2012-09-10
categories: [archive]
tags: [archive]
bitly: https://jasong.us/2yQIrxM
---

In Microsoft Outlook 2003, 2007, 2010, and 2013 (beta), you can add multiple Microsoft Exchange mailboxes by going into your Outlook account, and adding mailboxes like so:

[![sample](http://jasongaylord.com/Media/Default/Windows-Live-Writer/Save-Sent-Items-in-Correct-Sent-Item-Fol_10E13/sample_thumb.jpg "sample")](http://jasongaylord.com/Media/Default/Windows-Live-Writer/Save-Sent-Items-in-Correct-Sent-Item-Fol_10E13/sample_2.jpg)

However, when you send email messages from one of these additional mailboxes, you'd notice that your sent items would go into your primary mailbox's sent items. This is a bug in Outlook. However, there is a hotfix for Outlook 2003, 2007, and 2010 to resolve this issue. For these versions of Microsoft Outlook, you can download the appropriate hotfix below:

-   [](http://support.microsoft.com/hotfix/KBHotfix.aspx?kbnum=953803)[Outlook 2003 – Download KB Hotfix 953803](http://jasong.us/TL4tDq)
-   [](http://support.microsoft.com/hotfix/KBHotfix.aspx?kbnum=970944)[Outlook 2007 – Download KB Hotfix 970944](http://jasong.us/TL4p6O)
-   [](http://support.microsoft.com/hotfix/KBHotfix.aspx?kbnum=2547227&kbln=en-us)[Outlook 2010 – Download KB Hotfix 2547227](http://jasong.us/TL4lnq)
-   Outlook 2013 – No download is available yet

After that is applied, a registry key needs to be added. The key that is added needs to be in `HKEY_CURRENT_USER\Software\Microsoft\Office\{OfficeVersion}\Outlook\Preferences`where `{OfficeVersion}` is the following:

-   Outlook 2003 – 11.0
-   Outlook 2007 – 12.0
-   Outlook 2010 – 14.0
-   Outlook 2013 – 15.0

The key to add is a `DWORD` key named `DelegateSentItemsStyle`. The value for this key should be `1`.

## Using Outlook 2010 or Outlook 2013

If you are using Outlook 2010 or Outlook 2013, there's a better solution. Starting in Outlook 2010, the application would allow you to add more than one Microsoft Exchange mailbox per profile. This solves this issue without applying these hotfixes.