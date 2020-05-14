---
title: "ASP.NET 2.0 Example: Setting Profile Properties When Creating Users"
author: Jason Gaylord
date: 2005-04-28 15:52:00
aspnet-weblog-link: http://weblogs.asp.net/jgaylord/archive/2005/04/28/404962.aspx
categories: [aspnet-weblog]
tags:  [archive]
bitly: https://jasong.us/2T9ykeC
---

You can add personalization to your ASP.NET 2.0 website by adding a Profile section to your web.config file. After you setup your properties, you can begin to add, edit, retrieve, and remove these properties from a profile. Most users like to set personalized properties when they first establish account. By default, the `CreateUser` control does not include a step to ask for these profile properties. So, you must create your own step. When you get finished adding in your fields, modify the step's next button `click` event. In the subroutine, add the information to the profile. This can be accomplished by using something similar to this:

```vb
Profile.GetProfile(CreateUserWizard1.UserName).NickName = NickNameTextBox.Text
```

In this example, the `Profile` property `NickName` is added to the profile for the username specified in the `CreateUserWizard` control. At this point this user is already added and we can now add their profile properties. If you don't include this step in the `CreateUserWizard` control, you can follow the same procedure and replace `CreateUserWizard1.UserName` with `Membership.GetUser.UserName`. This will set the profile value for the logged in user.