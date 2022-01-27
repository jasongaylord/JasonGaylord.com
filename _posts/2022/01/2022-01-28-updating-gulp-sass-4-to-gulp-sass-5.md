---
title: Updating Gulp Sass 4 to Gulp Sass 5
author: Jason Gaylord
date: 2022-01-28
categories: [dev,devops,javascript,tip]
tags:  [dev,devops,javascript,tip]
post-number: 1213
image: https://cdn.jasongaylord.com/images/2022/01/28/gulp-sass.jpg
bitly: https://jasong.us/3ADSm5d
---

On the heals of my pipeline issue I mentioned earlier this week, I also had an issue with SASS compilation. I currently use Gulp in this project for compiling SASS.

My project was still configured to use the `gulp.sass` package version 4 instead of version 5. When upgrading to version 5, I discovered that I needed to include a SASS compiler such as the `sass` or `node-sass` package, although `node-sass` has been deprecated. 

Here is what my gulp require statement looks like:

```js
sass = require('gulp-sass')(require('sass'))
```