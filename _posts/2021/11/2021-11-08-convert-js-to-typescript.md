---
title: Converting JavaScript to TypeScript
author: Jason Gaylord
date: 2021-11-08
categories: [dev,javascript,tip]
tags:  [dev,javascript,tip]
post-number: 1205
image: https://cdn.jasongaylord.com/images/2021/11/08/npx-ts-migrate-full.jpg
bitly: https://jasong.us/3BJVVG3
---

As support for TypeScript errors continues to improve, many find it easy to just rename their JavaScript files from `.js` or `.jsx` to `.ts` or `.tsx` respectively then leverage Visual Studio Code errors to assist with the conversion from JavaScript to TypeScript. However, there's another way. 

The dev team over at Airbnb have created a `ts-migrate` plug-in. I have to admit that it does have it's flaws and seems to be better at converting React components to `.tsx` files than anything, but it can help. If you're on a Mac or Linux machine, chances are you have a bash command tool at your disposal already. If you're on Windows, you may already have a bash command tool installed. If you do not, you can either follow a procedure to install the Windows Subsystem for Linux on Windows 10 or 11 or install the Git Bash command tool.

Once you do, you'll want to open up the Bash window and install the `ts-migrate` plugin using `npm install --save-dev ts-migrate`.

{% include open-thumbnail.html path="2021/11/08/npm-install.jpg" alt="npm install --save-dev ts-migrate results" %}

Now that we have it installed, we'll want to run the command `npx ts-migrate-full <folder>` specifying the folder we'd like to migrate.

{% include open-thumbnail.html path="2021/11/08/npx-ts-migrate-full.jpg" alt="npx ts-migrate-full results" %}

When it finishes, you should notice that your files are now the corresponding TypeScript extension. You may notice error messages throughout the TypeScript file that you'll have to resolve such as the one below:

```ts
// @ts-expect-error ts-migrate(2580) FIXME: Cannot find name 'foo'. Do you need to install... Remove this comment to see the full error message
const foo = require('foo');
```

However, this will be a good start and should help you convert to TypeScript.