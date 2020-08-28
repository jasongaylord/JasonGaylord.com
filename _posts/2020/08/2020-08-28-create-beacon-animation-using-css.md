---
title: How to Create a Beacon Animation Using CSS
author: Jason Gaylord
date: 2020-08-28
categories: [css,design,dev,web]
tags:  [css,design,dev,web]
post-number: 1020
image: https://cdn.jasongaylord.com/images/2020/08/28/beacon.jpg
bitly: https://jasong.us/3jnHTkS
---

I had a need to create a CSS animation that showed a "beacon" using CSS. Basically, I was dropping an animation showing where someone was located on a map. So, I was setting a background image of a container to an image and then placing a "bursting" dot within the container based on the location. Instead of using an animated gif like the one showing below:

{% include open-thumbnail.html path="2020/08/28/beacon.gif" alt="Beacon" %}

I opted to use CSS. By using the `::before` psuedo element, I was able to use an animation on an infinite loop to accomplish the desired outcome. Below is a sample HTML file that creates the beacon image shown above:

<script src="https://gist.github.com/jasongaylord/4562338b891718157feeee21794c268e.js"></script>