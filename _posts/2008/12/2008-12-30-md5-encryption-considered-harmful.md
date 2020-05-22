---
title: MD5 Encryption Considered Harmful
author: Jason Gaylord
date: 2008-12-30 16:02:00
aspnet-weblog-link: http://weblogs.asp.net/jgaylord/archive/2008/12/30/md5-encryption-considered-harmful.aspx
categories: [aspnet-weblog]
tags: [archive]
bitly: https://bit.ly/2Zq056A
---

A group of 7 researchers have been able to successfully hack an MD5 encrypted security certificate. While this is a critical security risk, most security certificates do not use MD5 encryption in their generating processes. The more common security certificate and digital signature encryption type is SHA-1. One thing you'll note is that the attack is on PKI as MD5 is a crypto hashing algorithm and not an encryption type.

The full explanation of their findings can be read at [http://www.win.tue.nl/hashclash/rogue-ca/](http://www.win.tue.nl/hashclash/rogue-ca/ "http://www.win.tue.nl/hashclash/rogue-ca/").