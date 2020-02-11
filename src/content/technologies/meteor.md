---
title: Meteor
tags: ["graphql","react","mongodb"]
competence: "advanced"
---

My work with the start-up Brewery Buddy began with inheriting a sizeable Meteor proof-of-concept application, with a great number of models, routes, forms, etc, and using React as its front-end framework. I spearheaded the move from Meteor's prior pub/sub data layer (DDP, based essentially on MongoDB oplog tailing) to [graphql](/technologies/graphql), writing an entirely new, comprehensive schema, mutations, side-effects logic, subscription code, and front-end integrations with the developing set of `apollo` tools (whose rapid internal shifts and pitfalls I was often involved in tracking through its codebase or [fixing](https://github.com/apollographql/apollo-client/pull/700/files)). 

After moving fully into graphql for the core [MongoDB](/technologies/mongodb) database, I later took advantage of graphql's extensibility to begin building and connecting a `postgres` instance, incorporating a design driven more by event-sourcing to counter the loose mutability of Mongo; for that integration, I relied on a tool of which I've increasingly grown fond, `join-monster`, to make the [relational-to-graph mapping](/technologies/orm) work smoothy. 
