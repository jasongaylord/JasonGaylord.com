---
title: Ten Design Best Practices for Azure Applications
author: Jason Gaylord
date: 2020-09-20
categories: [azure,cloud,dev,microsoft]
tags:  [azure,cloud,dev,microsoft]
post-number: 1045
image: https://cdn.jasongaylord.com/images/2020/09/20/ten-design-principles-azure-apps.jpg
bitly: https://jasong.us/32G6dIW
---

While the [10 design best practices](https://jasong.us/2ZLEi8E) for Azure applications has been around for a couple of years, it's always nice to revisit periodically. Included in the list are:

* **[Design for self healing](https://jasong.us/3kxTLB0)**. In a distributed system, failures happen. Design your application to be self healing when failures occur.
* **[Make all things redundant](https://jasong.us/35RN8pc)**. Build redundancy into your application, to avoid having single points of failure.
* **[Minimize coordination](https://jasong.us/3hJQ2i3)**. Minimize coordination between application services to achieve scalability.
* **[Design to scale out](https://jasong.us/2RBuQAe)**. Design your application so that it can scale horizontally, adding or removing new instances as demand requires.
* **[Partition around limits](https://jasong.us/2FPWGWZ)**. Use partitioning to work around database, network, and compute limits.
* **[Design for operations](https://jasong.us/306QHEz)**. Design your application so that the operations team has the tools they need.
* **[Use managed services](https://jasong.us/3kotNQu)**. When possible, use platform as a service (PaaS) rather than infrastructure as a service (IaaS).
* **[Use the best data store for the job](https://jasong.us/33Jrsc2)**. Pick the storage technology that is the best fit for your data and how it will be used.
* **[Design for evolution](https://jasong.us/3hGAQ5j)**. All successful applications change over time. An evolutionary design is key for continuous innovation.
* **[Build for the needs of business](https://jasong.us/3mvJmYy)**. Every design decision must be justified by a business requirement.

{% include link-thumbnail.html path="2020/09/20/ten-design-principles-azure-apps.jpg" alt="Ten design principles for Azure applications" url="https://jasong.us/2ZLEi8E" %}