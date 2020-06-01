---
title: Developing with Cosmos DB Locally
author: Jason Gaylord
cloudscribe_id: "57d3e428-6dbd-4f64-8302-eb586bd5f7cc"
cloudscribe_path: "/blog/developing-with-cosmos-db-locally"
permalink: /blog/developing-with-cosmos-db-locally
date: 2020-04-27
categories: [cloud,development,tip]
tags: [cloud,development,tip]
bitly: https://jasong.us/2xe3REh
---

![https://cdn.jasongaylord.com/images/2020/04/27/azure-cosmosdb-logo.png](https://cdn.jasongaylord.com/images/2020/04/27/azure-cosmosdb-logo.png)

[Cosmos DB](https://jasong.us/2y3tRmi) is a cloud-based NoSQL database offering from Microsoft. It's very similar to MongoDB and in fact, one of the most common ways that Cosmos data is stored is nearly identical to MongoDB. Many of Microsoft's services use Cosmos including Xbox, Microsoft Office, and Active Directory. There are many pros and cons to using a NoSQL database structure. I suggest reading more about Cosmos and NoSQL before deciding if its the appropriate data storage solution for your feature or application.

Even though Cosmos is a cloud-based solution, you can still use Cosmos locally by using the [Azure Cosmos Emulator](https://jasong.us/2xVQKbo). The Azure Cosmos Emulator can be executed within Windows or within a [Docker container](https://jasong.us/2KDJKm7). In addition, there's a VS Code plugin which you can download here: [https://jasong.us/35c02vZ](https://jasong.us/35c02vZ "https://jasong.us/35c02vZ").