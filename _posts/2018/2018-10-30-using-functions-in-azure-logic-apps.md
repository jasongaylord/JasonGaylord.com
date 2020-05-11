---
title: Using Functions in Azure Logic Apps
author: Jason Gaylord
cloudscribe_id: "02dc5c7e-f78f-4162-94ea-92fc78cde149"
cloudscribe_path: "/Blog/using-functions-in-azure-logic-apps"
permalink: /Blog/using-functions-in-azure-logic-apps
date: 2018-10-30
categories: [cloud,tip]
tags:  [cloud,tip]
---

In an earlier post, [I blogged about](https://jasong.us/2yKwFRq) using an Azure Logic App to distribute a link to an RSS feed item. One of the actions I had identified was to send a tweet to followers of mine.  However, late on Friday I had tweaked my Logic App to show more information. As a result, I started running into errors in my Logic App like the following:

![https://cdn.jasongaylord.com/images/2018/10/30/Twitter_Error.png](https://cdn.jasongaylord.com/images/2018/10/30/Twitter_Error.png)

While the best solution will likely be for me to create an Azure function to call out to determine the right tweet message, the short term solution is to limit the number of characters I’m taking from the plain text field. 

![https://cdn.jasongaylord.com/images/2018/10/30/ShortenedString.png](https://cdn.jasongaylord.com/images/2018/10/30/ShortenedString.png)

In the image above, you’ll notice that I’ve added a second Html to Text action called `ShortenedString`.

{% include info-notice.html %}
**Tip:** You can name the actions whatever you’d like by clicking the ellipsis on the action and choosing Rename. If you are using the action anywhere in the logic, you won’t be able to do this.
{% include end-notice.html %}

Instead of choosing Dynamic content, I chose Expression. Under the String functions, click See more. This will provide a list of all of the potential string functions including `substring()`. Within the expression, I can get the value of a previous step by choosing the Dynamic content item. So, the output of the Html to text item is `body(‘Html_to_text’)`</font>`.  Then, I set the starting index to 0 and the length to be 180.  This will give me a maximum string length of 180 every time this action is executed.

After editing, I was able to go back to each of the runs that had failed and resubmit using the new Logic App. Each were successful. At a later date I’ll revisit to add in a function with a better Tweet format.