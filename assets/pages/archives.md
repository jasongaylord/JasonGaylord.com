---
title: Archives
permalink: /archives/
include_nav: true
---

<div class="archives" itemscope itemtype="http://schema.org/Blog">
<ul>
{% assign counter = 0 %}
{% for post in site.posts %}
  {% assign thisyear = post.date | date: "%B %Y" %}
  {% assign prevyear = post.previous.date | date: "%B %Y" %}
  {% assign counter = counter | plus: 1 %}
  {% if thisyear != prevyear %}
    <li><a href="/archive/#{{ post.date | date:"%B %Y" }}">{{ thisyear }} ({{ counter }})</a></li>
    {% assign counter = 0 %}
  {% endif %}
{% endfor %}
</ul>
</div>