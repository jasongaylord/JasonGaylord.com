---
title: Copy to Clipboard using JavaScript
author: Jason Gaylord
date: 2020-05-21 07:30:00 -4
categories: [dev,javascript,web]
tags: [dev,javascript,web]
bitly: https://jasong.us/2LIwdu1
---

As browsers have evolved over the years, security has tightened and the ability to perform certain actions has changed. Browsers have long supported a new, standard API, called `ClipboardEvent`. However, most browsers did not widely support `Clipboard` until [mid 2019](https://jasong.us/3bNdnfO). Up to that point, you'd most likely use jQuery, a JavaScript framework that included clipboard functionality, or [clipboard.js](https://jasong.us/2ynmBSu).

Here is the current support for the `Clipboard` API:

<a href="https://cdn.jasongaylord.com/images/2020/05/21/clipboard-browser-compatibility.jpg" target="_blank"><img src="https://cdn.jasongaylord.com/images/2020/05/21/clipboard-browser-compatibility.jpg" alt="Clipboard API browser compatibility" style="width:400px;"></a>

There are times where you may be looking for a vanilla JavaScript approach. I've included one here on my site where you can copy the short URL representation of the permalink for each post. I was able to accomplish this by first identifying a common selector. In my case, I decided to add a new `data-` attribute to each element I'd like to copy. An example would be:

```html
<span data-copy-text="This text will be copied">Click here to copy</span>
```

In JavaScript, I can select all of the possible elements I'd like to copy text from using `querySelectorAll` like so:

```js
var copy_elements = document.querySelectorAll("[data-copy-text]");
```

Next, I'll loop through each of the elements and add a click event listener to each. In vanilla JavaScript, this is accomplished using the `addEventListener` method. If the `Clipboard` API is not present within the browser, such as in the Samsung Internet browser, I'll break out of the click event and do nothing. This is not ideal, but short of adding an alert or other message, I have limited options. I'll get the value of the current element and write that text to the clipboard using the `writeText()` property of the Clipboard API. This returns a `Promise` that will copy the contents to the clipboard if the caller is allowed.

Here is an example where `VALUE` is copied to the clipboard:

```js
await navigator.clipboard.writeText("VALUE");
```

Here is a complete sample of the JavaScript that I am using:

```js
var copy_elements = document.querySelectorAll("[data-copy-text]");
var copy_count;

for (copy_count = 0; copy_count < copy_elements.length; copy_count++) {
    copy_elements[copy_count].addEventListener("click", async(event) => {
        if (!navigator.clipboard) {
            return;
        }

        try {
            var copy_value = event.srcElement.getAttribute("data-copy-text");
            await navigator.clipboard.writeText(copy_value);
        } catch (error) {
            console.error("copy failed", error);
        }
    });
}
```

In this sample, I'm selecting any element that has the attribute `data-copy-text`, using a `for...` loop, and adding the click event to each element. You'll notice that the events are all `async`. When the event fires, as mentioned above, we'll `return` if the browser does not support `Clipboard`. Otherwise, we'll try to get the value from the `element.srcElement`'s `data-copy-text` attribute. Finally, we'll write the text to the clipboard. If the copy fails, we'll display a message.