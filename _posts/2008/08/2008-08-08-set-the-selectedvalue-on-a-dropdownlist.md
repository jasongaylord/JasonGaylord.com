---
title: "Tip: Set the SelectedValue on a DropDownList that is populated by a CascadingDropDown "
author: Jason Gaylord
date: 2008-08-08 08:00:00
aspnet-weblog-link: http://weblogs.asp.net/jgaylord/archive/2008/08/08/tip-set-the-selectedvalue-on-a-dropdownlist-that-is-populated-by-a-cascadingdropdown.aspx
msmvps_path: https://blogs.msmvps.com/jgaylord/2008/08/08/tip-set-the-selectedvalue-on-a-dropdownlist-that-is-populated-by-a-cascadingdropdown/
categories: [aspnet-weblog]
tags: [archive]
bitly: https://bit.ly/2ZkrK8W
---

When using a `DropDownList`, you can set the selected item by using the `SelectedIndex` property. However, if your `DropDownList` is being populated by the `CascadingDropDown` control (from the ASP.NET AJAX Control Toolkit), that doesn't work. Instead, you must use the `SelectedValue` property on the `CascadingDropDown` control.