---
title: Machine Learning
tags: ["python", "rust","wasm"]
competence: "advanced"
---

My work over the past several years has turned increasingly towards elements of machine learning, both at the level of lighter tasks (clustering) and more in-depth [NLP](/technologies/nlp) processing. 

To read the overview of a project whose development was mostly centered on building, fine-tuning, clustering, and then serving robust vectors for topical analysis purposes, using simpler foundational NLP techniques, see [this write-up](/projects/surveyText). A secondary impact of that project was to present the value of these techniques to the university administration, and to lead technical presentations of the project to groups of campus professionals. 

Following up on that project, I have frequently been tasked with taking large survey or other text data (e.g., a database of syllabi) and performing analysis for certain topics and themes of interest to the administration. I have successfully made the case over these projects for intelligent embeddings that go well beyond the "keywords" approach that is often first given to me by the person seeking information. Often, this can be demonstrated simply by producing a graph of how their keywords fit into additional, neighboring terminology in a way that they wouldn't have anticipated. 

Working in a consulting role for the startup [Overlay AI](/projects/browserNLP) has meant diving deep into the latest state-of-the-art for NLP in a number of domains, and working to efficiently build an entire pipeline in a resource-constrained context--going from tokenization, though tagging, stemming, lemmatization, dependency parsing, and then applying top-level rules or vector-space comparisons, all within a chain of WASM-compiled tools running in a background WebWorker.

I have also expended a fair amount of effort in the domain of working with semantic graphs, particularly Wordnet. Given a desire to find topical connections across words and potentially disambiguate meanings, I have written code (in Rust) to traverse Wordnet's relations in order to pick the most neighboring senses. I later moved those efforts into simply reducing the graph (via the technique of node2vec) into a vector domain, gaining useful spatial representations of all Wordnet senses, which I later was able to put to use in obtaining smart synonyms or word replacements. 

More recently, I have adopted the increasingly dominant approach of extending transformer-based, pre-trained models (specifically BERT, since it obtains excellent sentence-level vectors) and further tuning these to the domain-specific task. Given the size of these models and my focus on web-embeddable learning, I am particularly invested in the research of model distillation through teacher-student or other methods (tinyBert is a great step in this direction).

I am also currently tasked with evaluating and building a neural approach to enrollment prediction, as an outgrowth of the work above and [my unification of the admissions data pipeline for a large institution](/projects/admissionsTracking).

I conduct much of my machine learning work within Jupyter Notebooks, at least during a prototype phase, even if I later opt to convert these to scripts to be run in the background. I am quite competent working with the deep data structures of tensors using the syntax of `numpy` and its close derivatives in ML libraries. Typically, where my work involves directly manipulating aspects of a neural network and not merely running one off-the-shelf, I opt for `pytorch`, which in my estimation offers a more natural, immediate, and pythonic way of constructing the flow, compared to competitors like `tensorflow`.