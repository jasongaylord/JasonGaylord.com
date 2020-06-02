---
title: Using PowerShell to Obtain CD/DVD Disk Information
author: Jason Gaylord
cloudscribe_id: "31845b4a-1f3d-4a33-b01c-956f3a9d338f"
cloudscribe_path: "/blog/using-powershell-to-obtain-cd-dvd-disk-information"
msmvps_path: "https://blogs.msmvps.com/jgaylord/2013/05/29/using-powershell-to-obtain-cd-dvd-disk-information/"
permalink: /blog/using-powershell-to-obtain-cd-dvd-disk-information
date: 2013-05-29
categories: [archive]
tags: [archive,shell]
bitly: https://jasong.us/2MfIdn8
---

As the years go by, more and more research, information, and documents can be found online. However, several business verticals still use CDs and DVDs to access research content, backup documents, and share files. In every position that I've ever held, I have been asked by someone to locate a disk. I had an old WMI script that would grab the information, place it in a text file on a machine, and notify me via a net message that the file was ready. This was great and did the job, but I wanted to see how I can do the same using PowerShell (and WMI).

When you install PowerShell, it's capabilities can be expanded through modules. One of the modules that is found in the base installation of PowerShell is the Microsoft.PowerShell.Management module. This module contains a method called `Get-WmiObject`. This method will use WMI to gain access to certain machine information. In this case, we can obtain the drive information by using the class `Win32_LogicalDisk` and filtering the drive type to `2` and `5`. We'll choose 2 and 5 as this will return only the Removable Disc and Compact Disc drives. The [other drive types](http://jasong.us/146i3n) are shown below:

> <table><tbody><tr><th>**Value**</th><th>**Meaning**</th></tr><tr><td>0</td><td>Unknown</td></tr><tr><td>1</td><td>No Root Directory</td></tr><tr><td>2</td><td>Removable Disk</td></tr><tr><td>3</td><td>Local Disk</td></tr><tr><td>4</td><td>Network Drive</td></tr><tr><td>5</td><td>Compact Disk</td></tr><tr> <td>6</td><td>RAM Disk</td></tr></tbody></table>

From each of these drives, we'll be able to obtain the `DriveID` (drive letter) and `VolumeName` (CD/DVD label or name of the removable device). Finally, we'll pass this information into a custom `psobject` to display a result table such as below:

![https://cdn.jasongaylord.com/images/2013/05/29/powershelloutput.png](https://cdn.jasongaylord.com/images/2013/05/29/powershelloutput.png "Powershell Output")

The final script appears as below:

For this script to work, remote RPC needs to be enabled, it should be executed from an administrator account, and it should either be signed or executed by allowing (temporarily) unsigned scripts to be executed. This script has been tested to work with PowerShell v1 so that it will work with legacy versions of PowerShell. With later versions of PowerShell (and potentially with this version), this may be able to be refactored.

Feel free to submit revisions to this Gist:

{% gist jasongaylord/5672298 %}