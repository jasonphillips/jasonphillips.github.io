---
title: C++
tags: ["wasm","nlp","projects/browserNLP"]
competence: "intermediate"
---

My initial training in C++ took place in high school, during which I completed a standard course in the language and subsequently elected to take an AP test on my own with the result of obtaining college credit. Although [my undergraduate career](/other/education) ended up taking a different course through the humanities, this early foundation in the language laid the primary groundwork for continued hacking on the sidelines during college, and largely influenced my eventual return to a career in technology. 

In later years, I've returned to C++ occasionally in order to compile and modify smaller tools. My most prolonged professional engagement with the language has come in the context of using emscripten to compile the [MeTA toolkit](https://meta-toolkit.org/) into web assembly, for the purposes of obtaining a sufficiently fast, browser-embeddable foundation for the NLP tasks of tokenizing, POS tagging, and dependency parsing text with very low resource usage. This particular project relies on newer conventions in the language (chiefly, move semantics) that I was able to quickly incorporate due to learning languages like Rust in close proximity (which I have also used in coordination with C++ via the FFI). I not only worked with the tooling of compiling a complex framework and its dependencies for the web and wrapping it in a cleanly exported API, but also wrote a considerable amount of new code, carrying out deep changes to the framework in order to implement features tailored to our environment, including a more efficient way of mapping and serializing the sentence structures for consumption on the web side. 

> **A tangential bit of fun**: Occasionally my free time leads back into enjoyable engagements with lower-level languages. One weekend, I wanted to show my son an old Gamecube game running in 3D under Google Cardboard, so I read up on Google's lens distortion formula and [wrote a parameterized shader](https://gist.github.com/jasonphillips/4cc91e85f128eae4f086118a59241ca1) for the Dolphin emulator to realize this idea. It was later merged into Dolphin and is [still shipped as part of its standard shaders](https://github.com/dolphin-emu/dolphin/blob/master/Data/Sys/Shaders/lens_distortion.glsl). GLSL is of course not coextensive with C++, but shares the C fundamentals and conventions--and the bottom line is that I'll enter into this kind of code when necessary to realize an idea, even if I strongly prefer to work with something like [rust](/technologies/rust). 