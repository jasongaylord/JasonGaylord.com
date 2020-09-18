---
title: Using the IIS Express Extension for Visual Studio Code
author: Jason Gaylord
date: 2020-09-17
categories: [dev,microsoft,visual-studio]
tags:  [dev,microsoft,visual-studio]
post-number: 1042
image: https://cdn.jasongaylord.com/images/2020/09/17/iis-express-vs-code.jpg
bitly: https://jasong.us/2FzdXUk
---

Earlier this week, I needed to run a web project that I was modifying in Visual Studio Code. I couldn't use `dotnet run` or `npm start` as it was a classic ASP.NET application. What I really needed was to host it inside of IIS but I didn't want to open up Visual Studio 2019 and run it there. I had not realized that someone ported IIS Express to Visual Studio Code. After a quick search, I found that someone was Warren Buckley. At over 65,000 installs and over 4.5 rating, it is definitely a beneficial add-on. Check it out in the Visual Studio marketplace by visiting [https://jasong.us/35DsCbU](https://jasong.us/35DsCbU)

{% include link-thumbnail.html path="2020/09/17/iis-express-vs-code.jpg" alt="IIS Express for Visual Studio Code" url="https://jasong.us/35DsCbU" %}

Feel free to also check out the repository on GitHub by visiting:

{% include github-browse.html bitly="jasong.us/2FIpfpe" repo="warrenbuckley/IIS-Express-Code" branch="develop" %}
