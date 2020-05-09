---
title: "Detecting Caps Lock with JavaScript"
author: Jason Gaylord
email: jason@jasongaylord.com
cloudscribe_id: "df518cb1-f441-426e-85a3-aafc4bd4bdd2"
cloudscribe_path: "/blog/detecting-caps-lock-with-javascript"
permalink: /blog/detecting-caps-lock-with-javascript
date: 2013-12-05
categories: [Archive]
tags:  [Archive]
---

Earlier today, I saw a user attempt to type his password in both Internet Explorer 9 and Chrome. In both browsers, he failed to successfully type it in. After 3 failed attempts, he realized it was due to his caps lock key being pressed. In some cases, a keyboard driver will inform you on screen when you press the caps lock button. If you are lucky enough to use Internet Explorer 10, you’ll notice that it is built into the browser as shown below:

[![20131205_1333_CapsLockOn](/media/images/20131205_1333_capslockon-wlw.png "20131205_1333_CapsLockOn")](/media/images/20131205_1333_capslockon.png)

However, not all users are using Internet Explorer 10 and some users have a tablet that doesn’t show that caps lock is on.

Implementing a little JavaScript, we can add functionality to our page. As a user types in a textbox, we can call an event that checks to see if the user has pressed the shift key and hit an upper case letter or we can check to see if the user has the caps lock on.

An example is shown below:

In most cases, we’ll likely want to apply this to all password fields, but not necessarily to all text fields.  While we can select only password fields in straight JavaScript, it’s much, much easier to use jQuery for that. Below is a sample jQuery script for this:

As you can see, we’re using the :password selector to only apply this to the password elements. However, because we left the isCapsLockOn method separate, we can always use this method on future elements.
