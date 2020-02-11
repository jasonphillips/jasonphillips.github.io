---
title: Automated Testing 
tags: ["javascript","nodejs","react","python"]
competency: "advanced"
---

When a project has the potential to grow in size and complexity--or when building a low-level library that needs to be reliable--testing is something that I use at each end of the process. Often, I have found that isolating your behavior or components well enough to make unit tests possible is _itself_ a key reflective task that forces cleaner abstractions with less overlap. It is also frequently the case that the development of a feature can proceed much faster within a constructed testing environment (essentially using TDD) than attempting to work on the code within its full application context. For both of these reasons, I have often led sessions walking other developers through the process of mocking and isolating components or features for proper testing abstraction. 

I have written innumerable tests for front-end javascript and for nodejs applications, as well as for python and occasionally other coding contexts. I have also spearheaded the reorganization of complex codebases to enable testing, and then helped to train others to follow the new component standards to uphold maintainability, particularly in my time consulting for the start-up [Brewery Buddy](/projects/brewerySoftware).

Two public PRs can help demonstrate my commitment to testing in different languages:

  - nodejs: [PR on slate](https://github.com/ianstormtaylor/slate/pull/1777); this PR is specifically dedicated to improving testability of one of the key components
  - python: [PR on SASPy](https://github.com/sassoftware/saspy/pull/125); see [this file](https://github.com/jasonphillips/saspy/blob/c85df12f8ebb2132511d6c77c3fbbeb9e9947b9b/saspy/tests/test_sastabulate.py)