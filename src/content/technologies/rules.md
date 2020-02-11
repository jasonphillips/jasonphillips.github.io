---
title: Rule Systems
tags: ['nodejs','python']
---

A niche interest of mine is the composition of rule systems, by which I mean processing pipelines that can take individually composed _or_ graph-composed sets of rules and use them to validate complex logic, assign metadata, or make decisions. I have designed my own rule systems for several projects, usually written to be saved as JSON objects with various query directives supported (e.g., derived Mongo-like parameters like `instructor.degrees: {$count: {$gte: 2}}`, but extending to more complicated comparisons, with a decision-tree kind of branching to subrules). 

The most significant project for which I worked out a robust rule system was [credential mapping for reaccreditation](/projects/credentials). In that case, the rules could be easily expanded directly by stakeholders willing to write justifications for each one, and the final set fully described a sophisticated logic for relating all teaching areas and degrees.

In other cases, I have used a similar principle to bring a more logical validation and correction strategy to other areas of often-irregular institutional data, like the full set of circumstances that need to be met in order to cross-list courses. In many of these cases, the prior status quo from administrators on campus took the wildly inefficient approach of long, difficult to debug sql query runs, and I have always advocated for the advantage of clearly auditable rules that can show their sequences of tests and failures per object in the domain. 