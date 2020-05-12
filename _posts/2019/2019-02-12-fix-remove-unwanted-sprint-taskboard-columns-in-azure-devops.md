---
title: "Fix: Remove Unwanted Sprint Taskboard Columns in Azure DevOps"
author: Jason Gaylord
cloudscribe_id: "f83c5387-e2eb-45e4-b33e-1ff7a9d1b9e8"
cloudscribe_path: "/blog/fix-remove-unwanted-sprint-taskboard-columns-in-azure-devops"
permalink: /blog/fix-remove-unwanted-sprint-taskboard-columns-in-azure-devops
date: 2019-02-12
categories: [devops]
tags:  [devops]
---

Over the past six months, we've changes some of the status values to values that correspond more to how we operate on a daily basis. However, we noticed that some of the values that we had hidden were still appearing on our sprint's taskboard. One of the suggestions that the Microsoft Azure DevOps team provided triggered us to look at our item types. We had created a few additional item types a long time ago, but had disabled them in the system. However, the hidden statuses were still part of those disabled item types. Once those statuses were removed, the taskboard reflected the columns correctly.

This has been documented as a bug by the Azure DevOps team and in the future they will no longer dedicate columns to disable work item type states. There's currently no time table for this change.

Hope this helps!