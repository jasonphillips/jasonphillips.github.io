---
title: Data Visualization
tags: ["react","python","opensource"]
---

Data visualization has continued to be a principal component of my work across many projects in different domains. Often I will happily hook up existing visualizations from various popular packages like `recharts`, but just as often I end up writing new visualizations to target our specific needs. For this purpose, my primary starting point was typically D3, but its somewhat less-than-desirable integration with React's tree (though I have created [various React experiments](https://jasonphillips.github.io/react-likert/) to integrate it into the DOM / virtual DOM in different ways) has increasingly led me to simply draw the `svg` layer directly from React, but using an animation library to get the desired effects (and careful memoing). 

When exploring a dataset for my own purposes and examining its contents, I most often begin instead with [Jupyter notebooks](/technologies/python), which even offer a perfectly acceptable space to embed a bit of exploratory D3 after slicing and plotting. 

> I once wrote an entire animated mini-film as a gift to my wife coded _entirely_ in vanilla D3 code, using a hand-calculated camera / parallax / zooming scene system, photo assets of her artwork with many svg filters and distortions applied, and more tricks. D3 is a strange choice for the job, but it made for an enjoyable experiment. [Watch the first 30 seconds here](/misc/ichabod).
