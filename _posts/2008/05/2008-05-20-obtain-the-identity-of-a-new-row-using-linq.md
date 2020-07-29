---
title: Obtain the Identity of a New Row Using LINQ
author: Jason Gaylord
date: 2008-05-20 09:30:00
aspnet-weblog-link: http://weblogs.asp.net/jgaylord/archive/2008/05/20/obtain-the-identity-of-a-new-row-using-linq.aspx
msmvps_path: https://blogs.msmvps.com/jgaylord/2008/05/20/obtain-the-identity-of-a-new-row-using-linq/
categories: [aspnet-weblog]
tags: [archive]
bitly: https://jasong.us/3fb3cnd
---

It's actually pretty easy and user friendly to obtain the value of the identity column using LINQ. After you create your object and insert it on submit, you can call the identity column's property on your object. For instance:

```vb
Dim db As New BlogDataContext()
db.BlogPosts.InsertOnSubmit(MyPost)
db.SubmitChanges()
Dim IdentityValue As Integer \= MyPost.PostID
```

In this example, the `IdentityValue` variable would be assigned to the `PostID` of the post that was just submitted.