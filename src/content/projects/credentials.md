---
title: Credential Mapping
tags: ["rules", "python", "javascript", "orm", "sql", "mongodb"]
roles: ["full-stack"]
---

As part of the University of Alabama's required reporting submissions for reaccreditation, the institution was tasked with proving that all course instructors over the prior academic year possessed sufficient credentials to teach the subject matter at the academic level taught. However, very little consistent or systematic information on credentials had been centrally assembled. 

As the principal individual tasked with assembling this information, I planned and executed a process in two majors phases: 

 - In the first phase, I assembled a systematically rigorous database for the academic background of more than four thousand faculty , which extended well beyond the usual information to include coding precise CIP academic codes (collected largely by our own graduate students pouring over available CVs, then ultimately verified by the faculty themselves, among others), managing the collection of full transcripts, and obtaining lists of substantial graduate courses completed prior to teaching, in the case of our GTAs.
 - Upon securing this information, I constructed a custom rules engine & notation that permitted the declarative encoding of a large pool of existing policy statements ("A Masters or greater in a field matching the CIP for Finance up to the 4-digit level is sufficient for teaching any undergradate course in the domain of statistics"; or "A secondary instructor who has at least a Masters can teach alongside any fully qualified primary instructor"). These base rules were run against all combinations of faculty and courses, and could find the shortest justification for each course taught, or--failing that--add the mismatched faculty member to a list to be further verified.
 - Chairs and Deans were then permitted to see the rule-governed justifications, examine the remaining teaching combinations to be handled, and submit new rules within a simple interface, designating all parts of the scope ("Any doctorate under field X" versus "seminar courses under by this department", etc). 
 - Many thousands of reports were regularly generated for review by various parties including an external consultant who was able to quickly glance over all new rules.  
Technical Notes:

Most of the backend for this project was written in Python, backed by a large Oracle database with objects then regularly mapped and frozen (ORM style) into a Mongo database for the rule processing. The generic rules engine takes in JSON objects and runs them against rules submitted both as a hierachy of dependencies and as one-off exceptions to other rules ("must match one of these" / "if this, then reject that", etc). The rules engine was also written in vanilla Javascript in parallel, to permit re-running the stack on the front-end for dynamic outputs of the tree of decisions.

 The final output summaries--a report per faculty member--were generated as static pages for submission to our accreditor, and the result was a successful pass of the requirements, despite the relatively short time frame and the vast amount of information that had to be assembled in the course of the project. 