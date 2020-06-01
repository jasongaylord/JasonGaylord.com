---
title: Microsoft Edge Debugger Splitter Issue
author: Jason Gaylord
cloudscribe_id: "e386790f-cbb8-4390-b7c2-d1f6a595b89f"
cloudscribe_path: "/blog/edge-debugger-splitter-issue"
permalink: /blog/edge-debugger-splitter-issue
date: 2015-11-04
categories: [archive]
tags:  [archive,web]
bitly: https://jasong.us/2yXFvja
---

The other day I hit F12 and started to debug some code. Microsoft Edge stopped showing the left side of the splitter that shows file content and the file browser for scripts and such. The issue breaks down that the right window was set at 100%. After talking with some people on the Microsoft Edge team, the solution, for now, was to tweak a registry key. The key to update is below, if you are using the Windows 10 RTM version (meaning you're not on the Slow or Fast ring for updating):

```
HKEY_CURRENT_USER\SOFTWARE\Classes\Local Settings\Software\Microsoft\Windows\CurrentVersion\AppContainer\Storage\microsoft.microsoftedge_8wekyb3d8bbwe\MicrosoftEdge\F12
```

Change the value of `DebuggerVEditorSplitterPosition` to `0.2` or something greater than 0 and less than 1. Your splitter bar will now appear.

The initial screen looked like this below:

[![Microsoft Edge Dev Tools Splitter Issue](https://cdn.jasongaylord.com/images/2015/11/04/edgedevtoolssplitterissue.png "Microsoft Edge Dev Tools Splitter Issue")](https://cdn.jasongaylord.com/images/2015/11/04/edgedevtoolssplitterissue.png)

Special thanks to [Andy Sterland](https://twitter.com/AndySterland) for the help on this.