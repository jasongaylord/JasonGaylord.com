---
title: Use Vanilla JavaScript to Set Link Targets in Container
author: Jason Gaylord
cloudscribe_id: "d6b176a2-a64f-4d96-b925-fc2829c19400"
cloudscribe_path: "/blog/use-vanilla-javascript-to-set-link-targets-in-container"
permalink: /blog/use-vanilla-javascript-to-set-link-targets-in-container
date: 2020-05-10
categories: [development,javascript,tip]
tags:  [development,javascript,tip]
bitly: https://jasong.us/2YRhd4O
---

There are times where using a full JavaScript framework simply does not make sense. In these cases, you'll need to use traditional, vanilla JavaScript to enumerate through the DOM. With ES6, the for…each loop is no longer valid. So, you'll need to use a for…of loop. Let's assume we have a div with a class of page-content. We may want to look for all links within that container and set the target of those links to a new tab. We can accomplish this like so:

```js
var pageContent = document.getElementsByClassName("page-content");  
if (pageContent.length > 0) {   
  var links = pageContent[0].getElementsByTagName("a");  
  for (var link of links) {  
    link.setAttribute("target", "_blank");   
  }  
}  
```

![https://cdn.jasongaylord.com/images/2020/05/10/for-of-loop.jpg](https://cdn.jasongaylord.com/images/2020/05/10/for-of-loop.jpg)