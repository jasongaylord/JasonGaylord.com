---
title: Tags
permalink: /tags/
include_nav: true
---

{% assign tags = site.tags | sort %}

<div class="meta">
<ul class="tags">
{% for tag in tags %}
  {% assign t = tag | first %}
  <li><a href="#{{t | downcase | replace:" ","-" }}" title="{{ t | downcase }}" aria-label="{{ t | downcase }}">{{ t | downcase }}</a></li>
{% endfor %}
</ul>
</div>

---

{% for tag in tags %}
  {% assign t = tag | first %}
  {% assign posts = tag | last %}
<div class="tag_page">
<h2><a name="{{t | downcase | replace:" ","-" }}"></a><a title="{{ t | downcase }}" aria-label="{{ t | downcase }}" class="internal" href="/tag/#{{t | downcase | replace:" ","-" }}">{{ t | downcase }}</a></h2>
{% for post in posts %}
  {% if post.tags contains t %}
  <div class="post-entry">
    <a href="{{ site.baseurl }}{{ post.url }}" title="{{ post.title | smartify }}" aria-label="{{ post.title | smartify }}">{{ post.title | smartify }}</a>
    <span class="date">{{ post.date | date: "%B %-d, %Y"  }}</span>
  </div>
  {% endif %}
{% endfor %}
</div>

---

{% endfor %}