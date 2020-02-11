---
title: RabbitMQ
tags: ["microservices"]
competency: "intermediate"
---

My work with RabbitMQ has been restricted to creating work queues, either for a side-effects channel or for centralized management of tasks in a production cluster. RabbitMQ managed channels for pushing various tasks, which were picked up by workers as available, then in some cases a kind of subscription on the calling end (in one application, these were eventually surfaced to user under GraphQL subscriptions) would kick off upon a task completion being published. 

A preview of my strategy for setting up workers is below, in my original gist where I came up with a way of wrapping rabbit with an interface inspired by `express` routing, to make setting up a worker dramatically easier. I iterated on this strategy quite a bit in a particular application, but the foundation remained. 

https://gist.github.com/jasonphillips/81f2d73ba9d76b1de4cdcdf3528bbe04 (see _usage.js_)

