---
title: Microservices
tags: ["docker","kubernetes","nodejs","python"]
competence: "advanced"
---

The "microservices" architectural strategy has quickly become a mainstay of my application development for many years. While I am comfortable working within more unified codebases when necessary (see, or example, my work converting a large [Meteor app](/technologies/meteor)--or plenty of legacy projects where there wasn't a choice), I tend to prefer smaller, coordinated endpoints, particularly now that it is relatively frictionless to employ reliable service layers for connecting app elements (cluster-internal http, [task queues](/technologies/rabbitmq), etc), and given the wealth of tools for repeatable, descriptive deployments ([kubernetes](/technologies/kubernetes), [severless](/technologies/serverless), `terraform`). 

In a majority of cases, I have set up my endpoints running `express` under [nodejs](/technologies/nodejs) or  `flask` (with a wrapping server) under [python](/technologies/python), typically hosted under [nginx](/technologies/nginx). For authentication, I prefer solutions like JWT tokens with a primary token-generating service tied closely to the main ingress, because having as many _stateless_ endpoints as possible is one of the key advantages of this deployment paradigm. 

I have deployed apps using this broad set of patterns for The University of Alabama on projects that see a great deal of traffic and thousands of active authenticated users per semester, as well as for forward-thinking startups where quick iteration and scaling is invaluable. 