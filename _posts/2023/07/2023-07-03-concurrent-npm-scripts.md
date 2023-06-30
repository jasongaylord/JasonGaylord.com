---
title: Executing Concurrent NPM Scripts
author: Jason Gaylord
date: 2023-07-03
categories: [dev,tip,web]
tags: [dev,tip,web]
post-number: 1256
image: https://cdn.jasongaylord.com/images/2023/07/03/concurrently-demo.jpg
bitly: https://jasong.us/3JzXeOH
---

All along, we've been able to run multiple NPM scripts in the same run command. Here's the scenario: Imagine that we have a script that is called `buildStaging` and another called `buildProduction`. We could run both scripts out of the box with NPM by creating a new script, let's call it `build` and setting the value to `npm run buildStaging && npm run buildProduction`. The problem with this is that `buildProduction` won't start until `buildStaging` is complete.

At times, we'll want to run NPM scripts concurrently. There are several ways you can run NPM scripts in parallel. We would need to bring in a package. Here are a few packages that would solve this along with a sample snippet to run the `build` script above concurrently:

* [npm-run-all](https://jasong.us/3r45qjD) - Change the `build` script to have a value of `npm-run-all --parallel buildStaging buildProduction`
* [concurrently](https://jasong.us/3NTPQ33) - Change the `build` script to have a value of `concurrently --kill-others \"npm run buildStaging\" \"npm run buildProduction\"`
* [parallelshell](https://jasong.us/43mggiJ) - Change the `build` script to have a value of `parallelshell \"npm run buildStaging\" \"npm run buildProduction\"`

{% include open-thumbnail.html path="2023/07/03/demo.gif" alt="Concurrently npm package demo" %}