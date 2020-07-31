---
title: Using Liquid Templating Filters in Jekyll
author: Jason Gaylord
date: 2020-08-06
categories: [dev,html,jekyll,web]
tags: [dev,html,jekyll,web]
post-number: 996
image: https://cdn.jasongaylord.com/images/2020/08/06/jekyll-liquid-section.jpg
bitly: https://jasong.us/3hSQUl2
---

My current site uses Jekyll, as [I've indicated before](https://jasong.us/3dN88ht). Jekyll uses the [Liquid template language](https://jasong.us/2D7WK35) which is common within Jekyll, Salesforce desk, Zendesk, and many other platforms. While Jekyll uses Liquid, it does not use the most current version and does not support all of the appropriate templating filters. Therefore, you should check out the Liquid section of the Jekyll site which can be found at [jekyllrb.com/docs/liquid/](https://jasong.us/3jUuEsZ).

{% include link-thumbnail.html path="2020/08/06/jekyll-liquid-section.jpg" alt="Jekyll Liquid Documentation" url="https://jasong.us/3jUuEsZ" %}

An example of something that doesn't work is this. Let's assume I'm trying to replace the double-quotes in a title on the site. I typically would do something similar to this:

```rb
page.title | replace: {% raw %}"\""{% endraw %}, {% raw %}""{% endraw %}
```

However, this doesn't work. Rather, I needed to use the `smartify` filter to convert the double quotes to smart quotes.

```rb
page.title | smartify
```

This now lets me use the title as a value of an HTML attribute such as when I need to use it with the `aria-label` attribute.