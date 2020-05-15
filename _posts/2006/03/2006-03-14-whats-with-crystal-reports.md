---
title: What's With Crystal Reports?
author: Jason Gaylord
date: 2006-03-14 23:30:00
aspnet-weblog-link: http://weblogs.asp.net/jgaylord/archive/2006/03/14/440241.aspx
categories: [aspnet-weblog]
tags: [archive]
bitly: https://jasong.us/2TpEfMP
---

I have a really good question that I'd love to pose to Business Objects: Will there ever be a stable version of Crystal Reports that doesn't crash, deploys easily with .NET, and generates everything you need? Over the past few months, I've been trying to deploy an application that uses the Crystal merge module with Crystal 11. We purchased Crystal 11 because Crystal .NET was having its own issues. At random times, the merge module kicks off an error during builds. It seems as though if you use an embedded report and don't touch the code, the error occurs. Weird huh? That's not all. Today, on a completely different machine, I attempted to Suppress a Group Header. Crystal locked up and then kicked me out. Unfortunately, Crystal is not like Word and does not save your report during a critical error. So, I had to continue from mid point. Then, when you try to go through their support, you're talking to 3 different people via an email-based helpdesk and that have no clue what .NET is. Argh! I wish the apps I'm using can use MS SQL Reporting or something else!