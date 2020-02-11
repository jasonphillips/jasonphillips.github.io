---
title: Admissions Tracking & Visualizations
tags: ["graphql", "microservices", "mongodb", "sql", "nodejs", "javascript", "react", "d3", "data visualization"]
roles: ["full-stack"]
---

In this project, I built a data & reporting pipeline for admissions data for the university administration, with the ultimately realized goal of becoming a sole, centralized set of numbers upon which all parties (admissions, housing, student life, etc) can agree. At the outset, data for applicants was spread across countless Banner (Oracle) tables that were mutable without history, rapidly changing daily, and filled with messy designations or often conflicting codes.

After working through the existing wall-sized SQL queries used by invested parties and then mapping out all the tables and rules, I constructed a graph-based schema using `join-monster` in [GraphQL](/technologies/graphql), which meant realizing a clear, well-documented set of paths through the data from applicant, to extant applications, to decisions and actions, demographics records, etc. 

From there, I wrote a minimal complete graph query representing everything we need to know about an applicant / application, so that a clean, nested object could be obtained from the schema. But that only obtains the still-conradictory and indeterminate data that is still in want of various top-level decisions (e.g., does this count as an application deposit or a deposit waiver?). Next, I wrote a series of rules (in Typescript) that run against one of these objects, with each rule deriving some piece of metadata from examining the object, and/or based on a reading of metadata from prior rules. By running each applicant object through this metadata layer, I obtained well-justified information ready for reporting.

Each night, I run a task that fires up this GraphQL schema and its rules code within a Docker container, pulling all applicants as of that moment, and writing into a Mongo collection. This Mongo collection is then wired into a reporting dashboard with strong aggregation pipeline code that enables slicing charts by any combination of demographic or application attributes, and rolls up the timestamped data of prior terms up to the same data for comparison. This needed to be fast, so significant effort was devoted to writing smart and efficient pipelines, since all of the main computation occurs there. 

The resulting views and dynamic dashboard ([React](/technologies/react) and Apollo) are used by many key players at the instutition daily, and the data also powers regular reporting requirements. The scope and capabilities continue to expand due to its popularity. 