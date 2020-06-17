---
title: Tags
permalink: /tags/
include_nav: false
---

<script>
  SpaacedOut.ready(() => {
    let title = document.getElementsByClassName('post-title')
    if (title) {
      title[0].style.display = 'none'
    }
    let tag = window.location.hash
    if(tag) {
        let tagElement = document.getElementById(tag.substring(1))
        if (tagElement) {
          tagElement.style.display = 'block'
        }
    }
    else {
      // Let's just show them all
      var tags = document.getElementsByClassName('tag')
      for (var tagElement of tags) {
        if (tagElement) {
          tagElement.style.display = 'block'
        }
      }
    }
  })
</script>

{% assign tags = site.tags | sort %}

<div class="meta">
<ul class="tags">
{% for tag in tags %}
  {% assign t = tag | first %}
  <li><a href="#{{t | downcase | replace:" ","-" }}">{{ t | downcase }}</a></li>
{% endfor %}
</ul>
</div>

---

{% for tag in site.tags %}
  {% assign t = tag | first %}
  {% assign posts = tag | last %}
<div class="tag_page">
<h2><a name="{{t | downcase | replace:" ","-" }}"></a><a class="internal" href="/tag/#{{t | downcase | replace:" ","-" }}">{{ t | downcase }}</a></h2>
<ul>
{% for post in posts %}
  {% if post.tags contains t %}
  <li>
    <a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a>
    <span class="date">{{ post.date | date: "%B %-d, %Y"  }}</span>
  </li>
  {% endif %}
{% endfor %}
</ul>
</div>

---

{% endfor %}