---
title: ORM(s)
tags: ["sql","nosql","python","nodejs","graphql"]
---

"ORM" doesn't quite fully encompass the broader range of technical problems that I intend below, but many of the solutions entail some sort of mapping between relational databases and objects. Another way of putting it might be: I have done considerable work that centers around moving between very large [SQL-driven databases](/technologies/sql) and more logical objects.

One tool I've often used in the past is SQLAlchemy in python, a fairly traditional ORM in style. I have also used its surrounding tools to, for example, map and expose an Oracle database under a [GraphQL](/technologies/graphql) endpoint. I find tools like SQLAlchemy to be immensely useful in certain scenarios for their ability to clean up code by permitting piecewise composition of queries through functional chaining or overloads, helping to mitigate any chance that the ugliness of constructing query strings will rear its head in your application logic.  

Today, I often use `joinmonster` to create well-mapped GraphQL schemas for either Postgres or Oracle databases, and have [used this approach as part of solving a major data normalization problem for the university administration](/projects/admissionsTracking). 

In the case of large institutional data, a related topic in my projects is running [business rules](/technologies/rules), for it turns out in my experience that carefully normalizing and reshaping relational data is much more logical when you first convert the set of tables into a graph or object-like structure that permits smoother traversal. 

> I have also spent time working with related database abstractions that are not quite ORMs but that similarly map queries into a compositional syntax and offer other contructive tools; see, for instance, [my work on restructuring and improving](https://github.com/web2py/pydal/pull/464) the Oracle code in `pydal`, a database abstraction in python--which represents an unfortunate case in which a library is not well enough maintained to keep up with its own PRs and their conflicts, although the essentially forked code was necessary and useful for my own projects for a time. 
