---
title: "Office to Include \"Save As PDF\" Option"
author: Jason Gaylord
date: 2005-10-19 12:29:00
windowsadvice-link: http://windowsadvice.com/blogs/jason_n_gaylord/archive/2005/10/19/Office-12-Save-As-PDF-Announced.aspx
categories: [windowsadvice-blog]
tags: [archive]
bitly: https://jasong.us/3jOkTwh
---

All Microsoft Office "12" applications will have the ability to save documents as PDFs. You can find out more specific details about this feature by visiting [Cyndy Wessling's blog](http://blogs.msdn.com/cyndy_wessling/default.aspx). Cyndy is the Program Manager on the Office team and her team is the one working on this feature.  
  
Repost of Q&A from Cyndy's Blog on 10/13/2005:  
  
> **Is this a one-way publish only, or do we support opening and editing PDFs as well?**  
>   
> Save as PDF is a one-way "publish" operation only. We are neither shipping a special viewer nor doing any work to make PDF files readable or editable by the Office applications.  
>   
> **Why is this built directly into Office as opposed to a print driver available to all applications?  
>   
> **Because this functionality is native to Office applications, we can capture richer document data further upstream than we would be able to do with a print driver. For example, we annotate our PDF output with tags for accessibility and we support internal and external hyperlinks. An additional advantage to capturing document data further upstream is that we render some visual effects, such as transparency and gradients, better because we are working with native information that has not been converted to bitmap for printer output.  
>   
> **Do we support tagged PDF (for accessibility)?  
>   
> **Yes, Office PDF output contains tags to assist with reading order for screen readers, and alternative text on images and on rasterized (bitmapped) text (to avoid interrupted text flow when portions of a text run are rasterized due to text effects or other document constructions). We also tag documents and, in some cases, text runs with language tags to assist with accurate pronunciation, and we export Unicode text for nonstandard glyphs to enable screen readers to access the actual text content. I appreciate the feedback we have received in this area as to what tags people would like to see implemented.  
>   
> **What choices were made with font embedding/subsetting/outlining?  
>   
> **For our Standard intent, we both embed and subset embeddable fonts (when permitted). For our Minimum Size intent, we do not embed "Web safe" fonts, but we do embed and subset all other embeddable fonts. We are not doing font outlining in the general case.  
>   
> **Do you support automatic bookmarking?  
>   
> **Yes, document structure is implemented for some applications to support bookmark navigation in PDF viewers. In Word, for example, you have the option to generate bookmarks by page, by heading, or by Word bookmarks.