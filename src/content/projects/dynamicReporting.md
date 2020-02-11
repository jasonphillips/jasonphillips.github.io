---
title: Dynamic Data Reporting
tags: ["react","nodejs","visualization","graphql"]
---

In a broad category of projects, I have built and rebuilt a stack for quickly constructing dynamic reports of large descriptive data, while meeting the need to not have each of these numerous internal ad hoc reporting projects turn into an app of its own in need of any maintenance. It is worth laying out the shape of my typical approach:

While the interfaces to our ad hoc reports need to feel as dynamic & exploratory as possible, a primary goal is for [static site deployments](/technologies/staticSites) _without_ accompanying backend services as much as possible--because maintaining an endpoint for each unique report would be unmanageable, as would attempting to centralize their data structures sufficiently to deploy them all under one roof, when their types of information and organizational strategies greatly differ.

"Dynamic" means, at a minimum, that the user can slice and dive into the data through various facets. However, permitting the entire _raw_ dataset to be present within the front-end of the reports--even if identifying columns are scrubbed--is impossible, not only due to size, but also due to privacy concerns (in cases where one record equals one student, etc). 

For this reason, I built an approach around my own [GraphQL](/technologies/graphql) descriptive statistics [library](https://github.com/jasonphillips/retabulate/tree/master/packages/retabulate-graphql/tests/schema) with the result of easily pre-computing all permitted facets of the data:

 - On the front-end, I construct a declarative tree of [React](/technologies/react) components that cleanly descrive the shape of each table, or the shape of sliced records and stats required for each visualization; 
 - these component trees each emit (by essentially static analysis) a corresponding GraphQL query which can be executed against the dataset; 
 - the full permitted set of breakdowns (college, department, age group, etc) is defined so that every combination can be pre-executed against the tables and the summarized stats produced in the appropriate shape; 
 - thanks to a "minimum threshold" protection in my GraphQL library, breakdowns that would fall under a certain minimum number or records are either elided or combined in this phase; 
 - the payloads are written out, so that all the summary statistics are already ready to go for the front-end, with protections in place, and pleny of combinations freely selectable by the user, but now all pre-computed and ready for static deployment;  
 - in many cases, Gatsby is my static site building framework, and my own custom plugin ensures all of the above is aligned to parameterized routing for easily isolated, pre-rendered yet dynamic routes that are ready for the user to freely play with the charts and breakdowns. In many cases, I can then deploy these pages onto a static server that has the option to use [NGINX's auth mod](/technologies/nginx) to limit breakdowns by hierarchical access, without changing the report's build process from being purely static. 
