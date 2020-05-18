---
title: Archives
permalink: /archive/
include_nav: false
---

<div class="archives" itemscope itemtype="http://schema.org/Blog">
<h1>{{ page.title }}</h1>
<p>&nbsp;</p>
{% for post in site.posts %}
    {% assign currentyear = post.date | date: "%Y" %}
    {% if currentyear != year %}
      {% unless forloop.first %}</ul>{% endunless %}
      <h2 id="{{ post.date | date:"%Y" }}">{{ currentyear }}</h2>
      <ul>
      {% assign year = currentyear %} 
    {% endif %}
        <li>{% include post/archive-listitem.html %}</li>
    {% if forloop.last %}</ul>{% endif %}
{% endfor %}
</div>