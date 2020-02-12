---
title: Survey Text Analysis 
tags: ["python", "machineLearning", "javascript", "react", "visualization"]
roles: ["full-stack"]
---

Below is a pre-existing write-up of this project for administrative purposes & accountability. For other work in this space, see [machine learning](/technologies/machineLearning).

## Survey Text Analysis

The University of Alabama Workplace Experience Survey asked the following three open-ended questions:

  - What do you appreciate most about working at this institution?
  - What would make this institution a better place to work?
  - Please suggest two to three things the University could do to improve your work/life experience.

The Office of Instutitional Research and Assessment handled the task of finding a meaningful way to present and navigate the comments, which were received from the ModernThink (third-party administrator of the survey) as anonymous text.

There are over 7,000 individual comments, which vary greatly in length (notice that the questions above are worded to solicit lists of suggestions) and which add up to roughly 17,000 sentences once split (see below on sentence splitting). The following steps were undertaken in order to create meaningful relations and groupings, so that administrators and others in this process could have a useful way to navigate the considerable and initially unordered mass of text. 

## Step 1 - Identifying Names

In order to ensure no proper names of individuals written into the comments were preserved in any reporting--either from cases of naming one's supervisor or co-worker directly, or in rarer cases of naming oneself--we used the common technique of [named entity recognition](https://en.wikipedia.org/wiki/Named-entity_recognition#www) to search and isolate any name-like entities in the text, after which this smaller list was examined to make any necessary redactions. The library used for identifying named entities was [AllenNLP](https://allennlp.org/#www).

All comments containing redacted items were reviewed by University administrators in whole to assure that the information was officially seen.

## Step 2 - Pre-processing

To prepare the text for clustering into meaningful topics or indexing for searches, we first decided to split up the text into separate sentences. This approach brings some drawbacks in that it reduces the contextual information for comments that spanned many sentences discussing one topic, yet it was chosen after noticing that the most common type of response--again, due largely to the wording of the question prompts--was a list of generally unrelated suggestions or critiques, one after the other. Generating topics by treating each comment as a single unit, then, shows far too much noise and general digression to be coherent. 

In addition to splitting into sentences, we performed standard steps like reducing words to their base forms, and we replaced extremely rare words (appearing once or twice in the text) with close equivalents that already appear more frequently in the corpus of text, so that these were not merely discarded by the model (for instance, "transit" appeared only once, so it was automatically replaced by "transportation," which is semantically related and appears over 20 times). Note that these text changes were only carried out for the learning process, and the original comments are what we present unaltered in the final step. These transformations were carried out mostly by leveraging the widely-used Python library [spaCy](https://www.spacy.io/). 

## Step 3 - Learning Word Vectors

Once clean sentences with relatively little noise were generated in the prior step, we trained word vectors using [fastText](https://www.fasttext.cc/), which is essentially an efficient improvement over the standard Word2Vec algorithm for learning word embeddings. In effect, this step churned through the body of text as unknown tokens, ie. without using any prior language knowledge or dictionaries, and learned a distinct high-dimensional vector (we typically used about 150 dimensions) for each term so that words with structurally similar uses in this body of comments were given close proximity in that dimensional space. This is a standard procedure in language processing, and in this case we possessed enough comments to obtain decent results by training the vectors strictly on this text. 

## Step 4 - Sentence Embedding

Word vectors are a first crucial step, but the goal for meaningfully grouping the comments was to produce a vector representation for each sentence. To achieve better results than merely averaging the word vectors in each sentence, we applied two techniques. The first is to weigh the vectors by the rarity of the words TF-IDF, so that rarer words in the overall corpus are given higher weight in calculating the sentence vector--this is a commonly used step. Second, we removed the first principal component from the vectors, applying a recent technique that reduces the overall noise (see: https://openreview.net/pdf?id=SyK00v5xx). The result is a vector for every single comment sentence, where these vectors intelligently combine the vectors learned for the words, which means that higher connections and patterns between sentences should appear in that space, beyond eg. merely grouping on topic keywords by simplistic counts.

## Step 5 - Clustering

After obtaining sentence representations, the clustering step was fairly straightforward. We used _k_-means clustering, since it performed as well as more complicated models and with much quicker results, and we typically chose somewhere between 25 and 40 clusters. Many of the clusters were merely noise, grouping together eg. all the instances in which someone merely commented "see #2 above" to the third question. In order to identify a meaningful subset of the clusters that represent coherent topics, we applied a simple (tf-idf like) algorithm to rank the resulting clusters by how much their contents showed a strong concentration of words. 

## Step 6 - Indexing & (Internal) Publication 

We then named these clusters with short identifying names based on their prominent terms; this simple labeling of the clusters was the only part in which our own influence enters the process, since the goal was to produce at least some comment organization to report viewers without manually coding or gathering topics of interest to us.

The interface we created allows these topic clusters to be viewed, but also permits free searching or searching by similarity. These latter two functions use approximate nearest neighbor indexes built with [Annoy](https://github.com/spotify/annoy).

