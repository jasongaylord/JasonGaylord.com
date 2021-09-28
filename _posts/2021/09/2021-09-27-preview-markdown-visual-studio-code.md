---
title: Preview Markdown in Visual Studio Code
author: Jason Gaylord
date: 2021-09-27
categories: [dev,tip,visual-studio]
tags:  [dev,tip,visual-studio]
post-number: 1179
image: https://cdn.jasongaylord.com/images/2021/09/27/
bitly: https://jasong.us/39BVKRI
---

Visual Studio Code is a very powerful editor. There's little doubt that developers from many different languages are using this editor to extend for their own needs. One of my favorite uses of Visual Studio Code is to use it as a pure [Markdown editor](https://jasong.us/3AGrvVp). Chances are you're familiar with Markdown at this point as GitHub, StackOverflow, and many other systems use Markdown to strip out unnecessary HTML and have a clean and concise rendering. 

Here is a sample of Markdown:

```md
## Heading ##
This is a paragraph of text. 

We can also include [links](https://jasong.us/39BVKRI)

### Task List ###
* Task 1
* Task 2
```

You may want to see the rendered result of the Markdown. To do this in Visual Studio Code, there are two options:

* To open a separate preview window, use the keyboard shortcut `Ctrl+Shift+V`
* To open side by side, use the keyboard shortcut `Ctrl+K V`

As an example, the preview of this post would look like this in preview:

{% include open-thumbnail.html path="2021/09/27/post-markdown-preview.jpg" alt="Post Markdown Preview" %}

{% include info-notice.html %}
<strong>Note:</strong> Typically, images would render in the preview. However, I'm using a custom include so I can handle images differently than Markdown out of the box.
{% include end-notice.html %}

When opening the preview side by side, you'll notice the preview updates dynamically and will scroll with the content you are typing in the other window. If you'd like to disable this, you can update the settings `markdown.preview.scrollPreviewWithEditor` and `markdown.preview.scrollEditorWithPreview`.

You can also use the _Outline_ pane in the _Explorer_. If you are using headers, you'll see the headings appear in _Outline_. Using the markdown sample above, we would see the following in _Outline_:

{% include open-thumbnail.html path="2021/09/27/outline-pane-visual-studio-code.jpg" alt="Outline Pane in Visual Studio Code" %}