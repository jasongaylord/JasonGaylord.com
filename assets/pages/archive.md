---
title: Archives
permalink: /archive/
include_nav: false
---

<div class="archives" itemscope itemtype="http://schema.org/Blog">
{% for post in site.posts %}
    {% assign currentyear = post.date | date: "%Y" %}
    {% if currentyear != year %}
      {% unless forloop.first %}</ul>{% endunless %}
      <h2 id="{{ post.date | date:"%Y" }}">{{ currentyear }}</h2>
      {% assign year = currentyear %} 
    {% endif %}
    {% assign currentmonth = post.date | date: "%B" %}
    {% if currentmonth != month %}
      {% unless forloop.first %}<!--</ul>-->{% endunless %}
      <h4 id="{{ post.date | date:"%Y-%B" }}">{{ currentmonth }}</h4>
      <ul>
      {% assign month = currentmonth %} 
    {% endif %}
    {% if post.url != "" %}
        <li>{% include post/archive-listitem.html %}</li>
    {% endif %}
      {% if forloop.last %}</ul>{% endif %}
{% endfor %}
</div>