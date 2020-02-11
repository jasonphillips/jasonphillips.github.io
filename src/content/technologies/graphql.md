---
title: GraphQL
tags: ["react","orm","meteor"]
competence: "advanced"
---

When Facebook first previewed their upcoming graph data layer, I found the concepts compelling, and the query language promising. But when it finally arrived--buried largely within the bizarre abstractions and verbose oddities of `relay` (_getFatQuery_?)--the tooling fell well short of the promise. I must confess to briefly adopting a competitor that is now at best an also-ran in this space--Netflix's `falcor`--simply due to the cleaner and less weighted-down API of the latter.

Things began to change when Apollo stepped in and finally began to build tools for GraphQL which proved its generalizable utility outside of Relay. Within a short time spent [adapting a large Meteor application to use GraphQL for all its fetching and mutations](/technologies/meteor), I was hooked on the concept and began to use it for a number of projects in different domains, even creating a few small wrappers to mimick the structure of `apollo-tools` [within the python implementation of GraphQL of that time](https://gist.github.com/jasonphillips/d80642fc33d98cb34bad131adfcf6ed8). I have used Apollo's various implementations, secondary tools (schema stitching, local state management, etc), and other features like subscriptions many times over the past years.

In the context of [static-site generation](/technologies/staticSites), I found Gatsby's adoption of GraphQL for its data layer to be one of the features that has made it the ideal tool for static sites. At various times, I [have contributed](https://github.com/gatsbyjs/gatsby/pull/2452) to its codebase in this area. 

I have also developed internal tools for using GraphQL as a complete tool for describing and generating deeply nested (meaning, "pivoted" but with finer control) descriptive statistics, permitting my front-end code to declaratively describe the shape of any deep hierarchy of filters, grouping, or statistics, which are then converted immediately into a GraphQL query, sent to the server, and populated into tables (see [the basic tests](https://github.com/jasonphillips/retabulate/tree/master/packages/retabulate-graphql/tests/schema) for `retabulate-graphql`). More information on the initial motivation for that strategy is available under [SAS](/technologies/sas), and it also forms a major part of my common [reporting strategy](/projects/dynamicReporting).
