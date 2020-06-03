---
title: "Solving TFS400018: The local version table for the local workspace…"
author: Jason Gaylord
msmvps_path: "https://blogs.msmvps.com/jgaylord/2013/11/03/solving-tfs400018-the-local-version-table-for-the-local-workspace/"
date: 2013-11-03
categories: [archive]
tags: [archive]
bitly: https://jasong.us/304pt1M
---

Today I hopped back into Visual Studio 2012 to update a project from TFS. To my surprise, I was greeted with the following error:

[![clip_image002](http://jasongaylord.com/Media/Default/WindowsLiveWriter/TFS_ED75/clip_image002_thumb.jpg "clip_image002")](http://jasongaylord.com/Media/Default/WindowsLiveWriter/TFS_ED75/clip_image002_2.jpg)

After some unsuccessful online searching, I used a snippet I had found within an MSDN forum post. It mentioned to delete the workspace cache from the machine at C:\\ProgramData\\Microsoft\\Team Foundation\\… As I navigated through, I noticed the C:\\ProgramData\\Microsoft Team Foundation Local Workspaces folder instead. After exiting Visual Studio, removing the folder, and trying it again, it worked.