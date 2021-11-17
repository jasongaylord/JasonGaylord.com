---
title: Archives
permalink: /archive/
include_nav: false
---

<div class="archives" itemscope itemtype="http://schema.org/Blog">
{% assign isopenlist = 0 %}
{% for post in site.posts %}
    {% assign currentyear = post.date | date: "%Y" %}
    {% if currentyear != year %}
      {% unless forloop.first %}{% if isopenlist == 1 %}</ul>{% assign isopenlist = 0 %}{% endif %}{% endunless %}
      <h3 id="{{ post.date | date:"%Y" }}">{{ currentyear }}</h3>
      {% assign year = currentyear %} 
    {% endif %}
    {% assign currentmonth = post.date | date: "%B" %}
    {% if currentmonth != month %}
      {% unless forloop.first %}{% if isopenlist == 1 %}</ul>{% assign isopenlist = 0 %}{% endif %}{% endunless %}
      <h4 id="{{ post.date | date:"%Y-%B" }}">{{ currentmonth }}</h4>
      <ul>
      {% assign isopenlist = 1 %}
      {% assign month = currentmonth %} 
    {% endif %}
    {% if post.url != "" %}
        <li>{% include post/archive-listitem.html %}</li>
    {% endif %}
      {% if forloop.last %}{% if isopenlist == 1 %}</ul>{% assign isopenlist = 0 %}{% endif %}{% endif %}
{% endfor %}
</div>