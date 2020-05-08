---
title: Setup and Deployment Options Abandoned in Visual Studio 2012
author: Jason Gaylord
cloudscribe_id: "387144ce-ef51-49c7-95f7-f355ecc3d41a"
cloudscribe_path: "/Blog/old-deployment-options-abandoned-in-visual-studio-2012"
permalink: /Blog/old-deployment-options-abandoned-in-visual-studio-2012
date: 2012-09-10
categories: [archive]
tags:  [archive,visual-studio]
---

One of my colleagues found out earlier today that a project he recently upgraded to Visual Studio 2012 was broken. What caused this? The setup project that was added to his solution. Back on July 15th, 2010, a [program manager from Microsoft posted that](http://jasong.us/PiU7K4) Microsoft was abandoning the Visual Studio 2012 setup options in favor of InstallShield LE. While InstallShield does have it's purpose and many consider it to be the best (or only) real setup solution out there, the Microsoft team offers no standalone installer out of the box. This means developers must be forced to use ClickOnce, Windows Store, InstallShield LE, or another product they purchase.

If you are one of the developers that use the old setup project types, be sure to tell Microsoft you want them back – even if that means it's a separate add-on or open sourced project on CodePlex.

**Action:** Vote to get these options back by visiting [http://visualstudio.uservoice.com/forums/121579-visual-studio/suggestions/3041773-bring-back-the-basic-setup-and-deployment-project-](http://jasong.us/PiUww7).

Note: There are other free options to generating a deployment package such as [WiX](http://jasong.us/RyhWzm), which has officially become part of the Outercurve Foundation as of [August 10th, 2012](http://jasong.us/RyhO2O). However, it's a separate installation to get this setup and there's limited tooling for it at the current time. There is a pretty decent script to convert your old projects to WiX available at [http://www.chrisoldwood.com/win32/vdproj2wix/vdproj2wix.html](http://jasong.us/U52tTU) (special thanks to [Darrel Miller](http://jasong.us/U52DL9) for sending that to me).