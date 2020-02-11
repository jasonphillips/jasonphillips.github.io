---
title: WebAssembly 
tags: ["rust"]
competence: "advanced"
---

My work with WebAssembly has been in [C++](/technologies/cpp) using Emscripten and [rust](/technologies/rust) using `wasm-pack`. In both cases, I worked with complex dependencies, serializing and deserializing structures to and from the browser, and loading into memory external model files as needed. I also have developed all of my `wasm` libraries to run equivalently in the browser and within NodeJS on the server, which poses particular challenges with ingesting model files. 

Having deployed WebAssembly into production in an application that fires up and coordinates several `wasm` bundles from within a background WebWorker, I have a full grasp of the way this new terrain of web development opens up possibilites in cases where highly efficient code is needed and Javascript won't suffice. 

In [one case](/projects/browserNLP), I worked to efficiently build an entire NLP pipeline in the resource-constrained context of the browser--going from tokenization, though tagging, stemming, lemmatization, dependency parsing, and then applying top-level rules or vector-space comparisons, all within a chain of WASM-compiled tools communicating smoothly and running in a background WebWorker.