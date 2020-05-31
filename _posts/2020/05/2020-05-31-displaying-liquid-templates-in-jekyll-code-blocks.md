---
title: How to Display Liquid Templates in Code Blocks in Jekyll
author: Jason Gaylord
date: 2020-05-31
categories: [jekyll]
tags:  [jekyll]
bitly: https://bit.ly/3gxyyWY
---

Every now and then, I want to post a sample code block for my blog that displays a liquid template. However, if I simply paste in a liquid template, it will be rendered.

Then I found the `{% raw %}{%{% endraw %} raw {% raw %}%}{% endraw %}` and `{% raw %}{%{% endraw %} endraw {% raw %}%}{% endraw %}` tags. So, you may want to wrap your source like so:

```
 {% raw %}{%{% endraw %} raw {% raw %}%}{% endraw %}{% raw %}{%{% endraw %} include foobar.html {% raw %}%}{% endraw %}{% raw %}{%{% endraw %} endraw {% raw %}%}{% endraw %}
```

This will display a proper code sample in your post like so:

```
{% raw %}{%{% endraw %} include foobar.html {% raw %}%}{% endraw %}
```

While you really only need to put the first `{% raw %}{%{% endraw %}` inside a `raw` tag to escape, I have a habit of also following with the last `{% raw %}%}{% endraw %}` as well.