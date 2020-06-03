---
title: Orchard CMS Command Line Exception
author: Jason Gaylord
msmvps_path: "https://blogs.msmvps.com/jgaylord/2011/06/06/orchard-cms-command-line-exception/"
date: 2011-06-06
categories: [archive]
tags: [archive]
bitly: https://jasong.us/3cnBh1X
---

Late last week when I was at CodeStock 2011, I ran into an error with the orchard.exe command line utility. The exception generated looked similar to the following:

```
c:\inetpub\wwwroot\Orchard\Modules\Orchard.Packaging\Services\FileBaseProjectSystem.cs(33): error CS0246: The type or namespace name 'FrameworkName' could not be found (are you missing a using directive or an assembly reference?)

Exception Details: System.Web.HttpCompileException: c:\inetpub\wwwroot\Orchard\Modules\Orchard.Packaging\Services\FileBaseProjectSystem.cs(33): error CS0246: The type or namespace name 'FrameworkName' could not be found (are you missing a using directive or an assembly reference?)
After talking with individuals on the Orchard team, this appears to be an open item that they hope to solve for Orchard 1.2. If you run into this, please contact me directly by responding with a comment or messaging me on Twitter so I can pass on a potential resolution. I'm hoping that we can track whether or not the supposed solution does actually solve this issue.
```

Since, this is a random exception, we can use your help.