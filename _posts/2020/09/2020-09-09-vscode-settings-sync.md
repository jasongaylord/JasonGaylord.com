---
title: Settings Sync for Visual Studio Code
author: Jason Gaylord
date: 2020-09-09
categories: [dev,microsoft,visual-studio]
tags:  [dev,microsoft,visual-studio]
post-number: 1032
image: https://cdn.jasongaylord.com/images/2020/09/09/turn-on-settings-sync.jpg
bitly: https://jasong.us/32XkD6i
---

For the longest time, if you wanted to sync settings across Visual Studio Code instances, you'd need to use [Shan Khan](https://jasong.us/3jFAltN)'s extension [Settings Sync](https://jasong.us/2QRcZVD). That was essentially your only option. In fact, that extension has had nearly **2 million installs** to date! There's still a great benefit to using the extension. For one, you could backup the settings to GitHub and compare versions of the settings. However, if you're looking for a native implementation, the Visual Studio Code team now has one.

{% include info-notice.html %}
<strong>Note:</strong> As of this post, *Settings Sync* is still in preview.
{% include end-notice.html %}

The latest version of VS Code, version 1.48, now includes the preview version of Settings Sync. It's quite easy to turn on. Start with clicking the Settings cog in the lower, left-hand corner of VS Code and click the link **Turn on Settings Sync...**. 

{% include open-thumbnail.html path="2020/09/09/turn-on-settings-sync.jpg" alt="Turn on Settings Sync" %}

In the VS Code Insiders edition, you may have noticed the settings menu option **Turn on Preferences Sync...**. This has been renamed.

If it's already enabled, you'll see the following option in the menu:

{% include open-thumbnail.html path="2020/09/09/settings-sync-on.jpg" alt="Settings Sync is On" %}

For a complete overview of the feature including choosing what to sync, enabling settings sync with different logins, handling conflicts, and more, visit [code.visualstudio.com/docs/editor/settings-sync](https://jasong.us/2Dwzyfm).