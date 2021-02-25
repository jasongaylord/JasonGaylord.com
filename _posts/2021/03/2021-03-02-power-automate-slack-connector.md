---
title: "Power Automate Error \"The response is not in a JSON format\" with Slack Connector"
author: Jason Gaylord
date: 2021-03-02
categories: [collaboration,microsoft,productivity,technology,tip]
tags: [collaboration,microsoft,productivity,technology,tip]
post-number: 1141
image: https://cdn.jasongaylord.com/images/2021/03/02/power-automate-error.jpg
bitly: https://jasong.us/3qX6jph
---

I have a Power Automate flow (old Microsoft Flow) that uses the Slack connector to take the contents of an email that meets certain criteria and post the contents to a Slack channel. It was working most of the time. However, on occasion, some runs would fail. 

{% include open-thumbnail.html path="2021/03/02/power-automate-error.jpg" alt="Power Automate Error: The response is not in a JSON format" %}

After searching online, I could not seem to locate where the issue could be coming from. I reached out to Microsoft which helped point me to a direction that seemed to help. The Slack connector only allows a message length of 4000 characters or less. In rare occasions, I'd see the size of the message jump over 4000 characters. This would cause the following error:

```json
{
    "statusCode": 400,
    "headers": {
        "Timing-Allow-Origin": "*",
        "x-ms-apihub-cached-response": "true",
        "Cache-Control": "no-cache",
        "Date": "Mon, 22 Feb 2021 20:49:14 GMT",
        "Content-Length": "344",
        "Content-Type": "application/json"
    },
    "body": {
        "error": {
            "code": 400,
            "source": "flow-apim-msmanaged-na-westus2-01.azure-apim.net",
            "clientRequestId": "8f175fee-c5d2-4723-a6e2-3f2209419f3f",
            "message": "The response is not in a JSON format.",
            "innerError": "<html><body><h1>400 Bad request</h1>\nYour browser sent an invalid request.\n</body></html>\n"
        }
    }
}
```

Simply adding in the Substring connector helped to solve the message length, for now. In the future, I could check the length and post separate messages for each segment over 4000 characters.

{% include open-thumbnail.html path="2021/03/02/substring-connector.jpg" alt="Substring Connector" %}

I wish that the Slack connector would provide some sort of data validation or that the Slack API would bubble up a more appropriate error message instead of just throwing a 400 error.