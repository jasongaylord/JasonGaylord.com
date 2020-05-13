---
title: Globalization Causes Assembly Issue
author: Jason Gaylord
date: 2003-08-22 14:53:00
aspnet-weblog-link: http://weblogs.asp.net/jgaylord/archive/2003/08/22/25003.aspx
categories: [aspnet-weblog]
tags:  [archive]
bitly: https://jasong.us/2Wt5WWB
---

Today I was building an assembly in C#. I received an error saying, `CS1607: Assembly generation -- Referenced assembly 'Assembly Name' is a localized satellite assembly`. After lots of fussing, I figured out that the reason I was receiving that error was because of incorrect data in the `AssemblyCulture` property. In the `AssemblyInfo.cs` (or whatever your file is called with the version information), I had to change the `[assembly: AssemblyCulture("en")]` to `[assembly: AssemblyCulture("")]`. That fixed the issue!

Now my task was to really use my brain to think why that happened. Well, the `AssemblyCulture` is set so the code is compiled for a particular "culture." The cultured assembly is considered a satellite assembly since it is wrapped for a particular culture. This is where globalization takes place. Since I've never had the need to use globalization, I think it was a bit difficult to figure out the issue.