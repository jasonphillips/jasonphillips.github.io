---
title: Accreditation Preparation
technologies: ["staticSites", "react"]
roles: ["full-stack"]
---

For the enormous undertaking of preparing a reaccreditation reporting suite for the corresponding regional higher-ed accreditation body (SACS), the requirements were complex and high-priority for our administration:  

 - **The site must accomodate over a hundred detailed write-ups submitted by various parties on campus**: given this requirement, yet the need for the relevant administrators and consultants to write independently of any formal system, I decided to use our graduate students to check-in and convert every new document into a carefully defined `markdown` format, complete with a highly specific set of specifications for all links and footnotes (see below);
 - **The entire report must be shipped on a flash drive, yet navigable without any additional technical requirements or live connections**: given this need, and our administration's advisement to keep open the possibility of publishing a redacted version publicly at a later date, I decided to use `middleman` to build the report as a [static site](/technologies/staticSites); 
 - **Paper copies are also required**: a dual branching of the rendering was established so that the static site could be used to create a site and a structured, complete PDF in parallel, for which markdown-written text was well prepared;
 - **All sources must be centrally indexed and frozen**: the "frozen" requirement meant building a script to enable our graduate students to capture any web content as an archived page with a corresponding archive-date header appended. The need for central indexing meant keeping to a strict markdown formatting for all footnotes (indicating type of content clearly) and then building scripts to scan and collect all of these across all of the current markdown drafts, generating a finalized indexed list and finding potential overlaps in sources;
 - **Some pages require more visual presentations to be embedded**: for write-ups that include complex tables or charts, I typically embedded custom mini-`React` implementations as needed in different sections, each with a clear directive as to what must appear in the corresponding markdown, typically as something like a list of the stats to be shown so that a non-interactive view (PDF or paper copy) contains the same information as the web presentation; 
 - **Daily builds must be available internally**: given the above decision to employ a static site, this was relatively easy, but did depend upon maintaining a clear daily pipeline to latest bulids.

On top of the above, I also personally headed up the entire project of reconciling, documenting, and justifying the matching between all faculty or instructor credentials and teaching assignments over an entire year period, an undertaking which I have [documented elsewhere](/projects/credentials).
