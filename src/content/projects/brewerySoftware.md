---
title: Brewery Software
tags: ["react","nodejs","meteor","graphql","microservices","rabbitmq"]
---

Several years ago, I regularly contributed to development for a local start-up that had won a contest for sizeable state grants. Some of the initial challenge--which was to convert a Meteor app to fully use graphql as its data layer--I have documented on the [meteor page](/technologies/meteor). 

Beyond that conversion to a very large graphql schema unifying data stored in [MongoDB](/technologies/mongodb) and [Postgres](/technologies/sql), I took on the priority of establishing a more distributed microservice architecture outside of Meteor to supplement it for more complex or long-running data tasks. Here, I set up [RabbitMQ](/technologies/rabbitmq) to power work queues and then established subscriptions up through the Meteor graphql layer onto the client. 

In my role as a primary developer, I also frequently led sessions teaching other developers best practices, particularly around code structure and [testing](/technologies/testing). 