---
title: Active Design Discussion for Surface Duo and Foldable Hardware
author: Jason Gaylord
date: 2020-09-23
categories: [android,dev,hardware,microsoft,mobile,web]
tags:  [android,dev,hardware,microsoft,mobile,web]
post-number: 1048
image: https://cdn.jasongaylord.com/images/2020/09/23/
bitly: https://jasong.us/2ZRmvwX
---

The [Surface Duo](https://www.amazon.com/Microsoft-Surface-Factory-Unlocked-TGM-00001/dp/B08J8HKXVF/ref=as_li_ss_tl?dchild=1&keywords=Surface+Duo&qid=1600701941&sr=8-6&linkCode=ll1&tag=jasongaylor01-20&linkId=f5cfcb6350035b8b30037960c5eb721f&language=en_US) is now available through various retailers. The device is very interesting and continues to expand the category of foldable hardware such as the [Samsung Z Fold 2](https://www.amazon.com/s/ref=as_li_ss_tl?k=Samsung+Z+fold&ref=nb_sb_noss_2&linkCode=ll2&tag=jasongaylor01-20&linkId=a6550eb5afd88a3415edc6dfb4b167fe&language=en_US) and the [new Motorola Razr](https://www.amazon.com/s/ref=as_li_ss_tl?k=motorola+razr&crid=1AFPU0RX2AXCN&sprefix=Moto,aps,182&ref=nb_sb_ss_midas-iss-sm_1_4&linkCode=ll2&tag=jasongaylor01-20&linkId=c86328e8d0803184fb4cd335b7c45e17&language=en_US).

With this new category of devices, developers are scrambling to be able to support the multiple screen form factor. In some cases, responsive web development is good enough. However, with the Surface Duo, there's a hinge in the middle of the screen making it less desirable for development. The picture below from the [W3C CSS draft issue logged by Microsoft](https://jasong.us/2HlXXpq) for new CSS spanning media features depict this pretty well:

{% include open-thumbnail.html path="2020/09/23/surface-hinge.png" alt="Adding CSS primitives for spanning" %}

The same concerns apply for the new [LG Wing Smartphone](https://www.amazon.com/s/ref=as_li_ss_tl?k=LG+Wing+Phone&ref=nb_sb_noss_2&linkCode=ll2&tag=jasongaylor01-20&linkId=a935b5fb456915459129480ecb9f32ba&language=en_US) that swivels into a 'T' shape.

Back in June, Microsoft [posted](https://jasong.us/3iSf67Q) about their proposed media additions to CSS and how you'd use `getWindowSegments` to return a number of panes. There are some pretty good comments on the CSS issue mentioned above and the flexibility of including this on multiple screen resolutions. As pointed out in one of Microsoft's posts, the [mention by **@fantasai**](https://jasong.us/33Rnezv) seems to be an appropriate concern for tackling both the LG Wing concept and the Surface Duo. 

Earlier this month, [Microsoft posted yet another article](https://jasong.us/3kCVl4I). However, this time there's a little bit more to get excited about. They released a new [Surface Duo Emulator](https://jasong.us/2HhWost). The emulator is still in public preview, but will allow developers to start testing multiple screens. Microsoft shows this below in their concept:

{% include open-thumbnail.html path="2020/09/23/word-image-4.png" alt="Screen spanning concept" %}

If you're considering supporting foldable hardware, I'd recommend looking into the current proposals by Microsoft. Hopefully they don't run with this as Edge-only primitives.