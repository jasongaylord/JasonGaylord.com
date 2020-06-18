---
title: Site Tags and Sorting Tags in Jekyll
author: Jason Gaylord
date: 2020-06-18
categories: [jekyll]
tags:  [jekyll]
post-number: 943
image: https://cdn.jasongaylord.com/images/2020/06/18/tag-cloud.png
bitly: https://jasong.us/30RH3GJ
---

I've been trying to find a cleaner way to represent the tags on my website. I came across a post by [Joe Kampschmidt](https://jasong.us/2N4sd7O). That inspired me to take a look at my tags page and make some changes. 

First, the default `site.tags` value is a random list of tags completely unsorted. So, I changed the listing by defining a variable like so:

```markdown
{% raw %}{%{% endraw %} assign tags = site.tags | sort {% raw %}%}{% endraw %}
```

Next, I wanted to add a tag cloud, without weights or counts to the top of the tags page. I did this by creating the variable and reusing the collection returned. Finally, I updated the style and decided to list the tags link on my site. 

I'm curious to know what you think:

{% include open-thumbnail.html path="2020/06/18/tag-cloud.png" alt="Tag Cloud and Tags page on JasonGaylord.com" %}

Here is the final _tags.md_ page:

```markdown
---
title: Tags
permalink: /tags/
include_nav: true
---

{% raw %}{%{% endraw %} assign tags = site.tags | sort {% raw %}%}{% endraw %}

<div class="meta">
<ul class="tags">
{% raw %}{%{% endraw %} for tag in tags {% raw %}%}{% endraw %}
  {% raw %}{%{% endraw %} assign t = tag | first {% raw %}%}{% endraw %}
  <li><a href="#{{t | downcase | replace:" ","-" }}">{{ t | downcase }}</a></li>
{% raw %}{%{% endraw %} endfor {% raw %}%}{% endraw %}
</ul>
</div>

---

{% raw %}{%{% endraw %} for tag in tags {% raw %}%}{% endraw %}
  {% raw %}{%{% endraw %} assign t = tag | first {% raw %}%}{% endraw %}
  {% raw %}{%{% endraw %}assign posts = tag | last {% raw %}%}{% endraw %}
<div class="tag_page">
<h2><a name="{{t | downcase | replace:" ","-" }}"></a><a class="internal" href="/tag/#{{t | downcase | replace:" ","-" }}">{{ t | downcase }}</a></h2>
{% raw %}{%{% endraw %} for post in posts {% raw %}%}{% endraw %}
  {% raw %}{%{% endraw %} if post.tags contains t {% raw %}%}{% endraw %}
  <div class="post-entry">
    <a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a>
    <span class="date">{{ post.date | date: "%B %-d, %Y"  }}</span>
  </div>
  {% raw %}{%{% endraw %} endif {% raw %}%}{% endraw %}
{% raw %}{%{% endraw %} endfor {% raw %}%}{% endraw %}
</div>

---

{% raw %}{%{% endraw %} endfor {% raw %}%}{% endraw %}
```