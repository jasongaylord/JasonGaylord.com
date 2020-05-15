---
title: Microsoft Azure Storage Explorer Copy URL Issue
author: Jason Gaylord
date: 2020-05-16 08:00:00 -4
categories: [cloud]
tags:  [cloud]
bitly: https://jasong.us/2yTQLNe
---

Microsoft Azure Storage Explorer recently updated to version 1.13.0 and updated AzCopy to 10.4.2. With this update, [a bug](https://jasong.us/3cuWRSQ) was introduced inadvertently with a [change within the client SDK for Azure](https://jasong.us/2y6oEdy). Essentially, when copying a file, instead of:

```html
https://(storage account).blob.core.windows.net/(container)/folder/file.doc
```

You'll now see and `/` after the container decoded as `%2F` instead:

```html
https://(storage account).blob.core.windows.net/(container)/folder%2Ffile.doc
```

Navigating that URL will not resolve properly. Microsoft is aware of this issue and is working on a resolution. In the meantime, replace the `%2F` values with `/` so the file will load properly.

![https://cdn.jasongaylord.com/images/2020/05/16/microsoft-azure-storage-explorer.jpg](https://cdn.jasongaylord.com/images/2020/05/16/microsoft-azure-storage-explorer.jpg)