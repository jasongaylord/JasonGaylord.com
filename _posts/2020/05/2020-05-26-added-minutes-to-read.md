---
title: Adding Minutes to Read to my Website
author: Jason Gaylord
date: 2020-05-26
categories: [personal]
tags: [personal]
bitly: https://bit.ly/2ZEYRob
---

I've been slowly adding small features and tweaks to my site. Eventually I'll add this as a meta component for the SpaacedOut theme, but for now I've added the minutes to read a post to my website and pushed some of the other content (such as tags and the page edit link) to the bottom of the post. I want to get content higher in the fold.

## Calculating Minutes to Read
An average number of words per minute read is usually around 225. So, the first thing I do is read the number of words within a post. I do that by getting the number of words using a useful liquid filter like so:

```markdown
{{ page.content | number_of_words }}
```

But, I really don't care to show how long it will take to read a post that has less than 225 words because this will be captured within a minute. So, I'll first take the word count and subtract 225 words. If that number is still a positive number or greater than 0, I'll add 225 back to the total word count and show the number of minutes to read appropriately. You'll notice that this post will come in at 1 minute.

Here's what the entire code block looks like:

```markdown
{% capture words %}
    {{ page.content | number_of_words | minus: 225 }}
{% endcapture %}
{% unless words contains "-" %}
    {{ words | plus: 225 | divided_by: 225 | append: " minute(s) to read" }}
{% endunless %}
```

I'm curious to see what you think.

I've also corrected my github link in the menu on the side. I'm going to continue adding in little nuggets. If you're interested in seeing something in particular, let me know.