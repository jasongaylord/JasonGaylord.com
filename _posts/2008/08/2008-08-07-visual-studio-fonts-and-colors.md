---
title: Visual Studio Fonts and Colors
author: Jason Gaylord
msmvps_path: https://blogs.msmvps.com/jgaylord/2008/08/07/visual-studio-fonts-and-colors/
date: 2008-08-07
categories: [archive]
tags: [archive]
bitly: https://jasong.us/3eCsCtQ
---

For quite some time I've been working with a modified version of [Scott Hanselman's "Dark Theme"](http://www.hanselman.com/blog/ChangingYourColorsInVisualStudioNETBlackVersusWhite.aspx) for Visual Studio. The reason for my modifications is that the HTML and CSS settings were very difficult to read. Here is the complete list of changes I've made in Tools > Options > Environment > Fonts and Colors:

-   Plain Text font to Monaco, 9pt font size, white foreground, and the background to {42, 42, 42}
-   Comment: {0, 217, 108}
-   Compiler Error: Red
-   CSS Comment: {0, 217, 108}
-   CSS Keyword: Cyan
-   CSS Property Value: Cyan
-   CSS Selector: White
-   CSS String Value: {238, 125, 125}
-   HTML Attribute Name: {255, 120, 120}
-   HTML Attribute Value: {108, 182, 255}
-   HTML Comment: {0, 217, 108}
-   HTML Element Name: Red
-   HTML Entity: {128, 128, 255}
-   HTML Operator: Silver
-   HTML Server-Side Script: Silver for the foreground and {128, 64, 0} for the background
-   HTML Tag Delimiter: Silver
-   Identifier: {253, 223, 57}
-   Keyword: {244, 122, 0}
-   String: {238, 125, 125}
-   String (C# @ Verbatim): {238, 125, 125}
-   User Types: {179, 179, 0}
-   User Types (Delegates): {179, 179, 0}
-   User Types (Enums): {179, 179, 0}
-   User Types (Interfaces): {179, 179, 0}
-   User Types (Value Types): {179, 179, 0}
-   Visual Basic Read Only Marker: Black
-   Warning: {0, 166, 0}

The color values above in {brackets} are the custom {R, G, B} values. All color values are for the foreground unless otherwise noted.

Here is an example of what the source code file would look like (from a sample VB project):

[![VBFileSourceCode](http://weblogs.asp.net/blogs/jgaylord/WindowsLiveWriter/VisualStudioFontsandColors_D08A/VBFileSourceCode_thumb.jpg)](http://weblogs.asp.net/blogs/jgaylord/WindowsLiveWriter/VisualStudioFontsandColors_D08A/VBFileSourceCode_2.jpg)

Here is an example of what the HTML file would look like (from a sample ASP.NET project):

[![HTMLSourceCode](http://weblogs.asp.net/blogs/jgaylord/WindowsLiveWriter/VisualStudioFontsandColors_D08A/HTMLSourceCode_thumb.jpg)](http://weblogs.asp.net/blogs/jgaylord/WindowsLiveWriter/VisualStudioFontsandColors_D08A/HTMLSourceCode_2.jpg)

You can download the complete theme from: [http://jasongaylord.com/downloads/DarkSettings-August2008.zip](http://jasongaylord.com/downloads/DarkSettings-August2008.zip).