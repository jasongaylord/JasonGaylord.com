---
title: "RESOLVED: Microsoft Azure Storage Explorer Copy URL Issue"
author: Jason Gaylord
date: 2020-05-19 08:00:00 -4
categories: [cloud]
tags:  [cloud]
bitly: https://jasong.us/2zdcDDo
---

On Friday, I had [blogged about](https://jasong.us/2yTQLNe) how Microsoft Azure Storage Explorer had an issue with the Copy URL functionality. I found out late last night that this has been resolved in version 1.13.1 which is available immediately by visiting [https://github.com/microsoft/AzureStorageExplorer/releases](https://jasong.us/36bLRY6) and will be propagated to the Windows Update servers within the next 12-24 hours.

This update also has the following hotfixes:

- For Blob snapshot URLs, the snapshot ID is now present both for Copy URL and in the Properties dialog. [#2788](https://jasong.us/3bJGuke)
- Several properties were missing from the Properties dialog for Blobs. All missing properties have been restored. [#2940](https://jasong.us/2X3r70I)
- When generating a SAS for an emulator Blob or container, the emulator account name was missing. This has been fixed. [#2948](https://jasong.us/2X21ey8)
- If you used a stored access policy while creating a Blob SAS, the SAS would incorrectly be a container SAS. This has been fixed. [#2981](https://jasong.us/2X8bxRr)

Be sure to get the latest version and try it out!

![https://cdn.jasongaylord.com/images/2020/05/16/microsoft-azure-storage-explorer.jpg](https://cdn.jasongaylord.com/images/2020/05/16/microsoft-azure-storage-explorer.jpg)