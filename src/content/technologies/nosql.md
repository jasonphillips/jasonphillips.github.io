---
title: NoSQL Databases
tags: []
competence: advanced
---

Over the past half-decade, I have used "NoSQL" databases in close integration with relational databases across a wide range of projects. Some of my work in moving between these mutually reinforcing domains (document or object-type storage, and relational storage) can be found under [ORM](/technologies/orm).

**MongoDB** undoubtedly offers tremendous benefits and drawbacks; I've put it to use on large and varied enough projects to have seen both sides of the equation. For many smaller databases that support microservices or layers within web applications--such as a service querying and authorizing users for specific puroses--Mongo will be one of my first contenders, in that it can offer tremendous development speed for iteration while sacrificing little in the ability to make queries. That said, once a project grows in size, I inevitably end up attaching some sort of structured schema layer on top of it, which can raise the question as to the benefits over traditional tables once all entities are strictly typed. However, one area where there is little that can compete with mongo's usefulness is storing document-like structured texts, stemming from various [text-editing applications](/projects/textEditors).

Mongo is often the destination for collections of objects I produce by mapping relational data--for instance, when nightly populating a list of faculty with nested credentials and other information--so that the more sensitive source databases are only used in a scheduled, offline phase to populate the operational data needed in a user-facing application. In some cases, I have heavily relied upon the aggregation pipeline to run [complex slicing queries against large nightly data](/projects/admissionsTracking).

My experience with **Redis** is a bit more limited, but I have employed it for stateful information under a cluster, particularly for rate-limiting or for creating a work-queue (as an alternative to [rabbitmq](/technologies/rabbitmq)).

**Elasticsearch** is another alternative that has served me as a backend for colletions of objects that require flexible facet-like navigation from the end-user. I have also used it in synchronization with another database in order to develop full-text searching capabilities. A more recent area of innovation that I'm pursuing in this space is to greatly enhance searching by hooking up transformer-based [NLP models](/technologies/nlp) to augment full-text searches, with Elasticsearch playing a role for fast retrieval but not for finding the cluster of related keywords that are of interest. 
