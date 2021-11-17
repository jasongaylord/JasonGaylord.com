---
title: Archives
permalink: /archives/
include_nav: true
---

<div class="archives" itemscope itemtype="http://schema.org/Blog">
{% assign counteryear = 0 %}
{% assign countermonth = 0 %}
{% for post in site.posts %}
  {% assign thisyear = post.date | date: "%Y" %}
  {% assign prevyear = post.previous.date | date: "%Y" %}
  {% assign counteryear = counteryear | plus: 1 %}

  {% if thisyear != prevyear %}
    <h3>{{ thisyear }} Posts ({{ counteryear }})</h3>
    <ul>
      {% for post2 in site.posts %}
      {% assign tempyear = post2.date | date: "%Y" %}
      {% if tempyear == thisyear %}
        {% assign thismonth = post2.date | date: "%B %Y" %}
        {% assign prevmonth = post2.previous.date | date: "%B %Y" %}
        {% assign countermonth = countermonth | plus: 1 %}
        {% if thismonth != prevmonth %}
          <li><a href="/archive/#{{ post2.date | date:"%Y-%B" }}">{{ thismonth }} ({{ countermonth }})</a></li>
          {% assign countermonth = 0 %}
        {% endif %}
      {% endif %}
    {% endfor %}
    </ul>
    {% assign counteryear = 0 %}
  {% endif %}
{% endfor %}
</div>