---
layout: archive
title: "Research"
permalink: /research/
author_profile: true
---

<link rel="stylesheet" href="{{ base_path }}/assets/css/research.css">

<div class="research-page">
  <section class="research-hero">
    <p>I have very broad interests in Software Engineering and Artificial Intelligence but in particular focus on Empirical Software Engineering, Mining Software Respositories, AI4SE and SE4AI.</p>
    <div class="hero-highlights">
      <div class="highlight-card">
        <span class="highlight-label">Research tools</span>
        <span class="highlight-value">5</span>
      </div>
      <div class="highlight-card">
        <span class="highlight-label">Open datasets</span>
        <span class="highlight-value">3</span>
      </div>
      <div class="highlight-card">
        <span class="highlight-label">Years of focus</span>
        <span class="highlight-value">2016-2025</span>
      </div>
    </div>
  </section>

  <section class="research-areas">
    <div class="areas-header">
      <div>
        <h2>Research areas</h2>
        <p class="area-tip">Tip: Selecting an area filters the projects below.</p>
      </div>
      <p class="area-tip">Click <strong>All areas</strong> to reset the list.</p>
    </div>

    <div class="areas-grid">
      <article class="area-card">
        <h3>Empirical Software Engineering</h3>
        <p>Advancing evidence‑based software practice through rigorous empirical methods—large‑scale mining, experiments and mixed‑method studies of developer workflows, artefacts and socio‑technical systems—to evaluate and improve tools and processes.</p>
      </article>
      <article class="area-card">
        <h3>Mining Software Repositories</h3>
        <p>Analysing version control, issue and code review repositories, Q&A archives, CI/build servers and runtime telemetry with data science, ML/AI and qualitative methods to surface actionable insights that improve software engineering practice and guide project evolution.</p>
      </article>
      <article class="area-card">
        <h3>AI4SE</h3>
        <p>Advancing AI‑driven Software Engineering through human‑centred, trustworthy, sustainable and collaborative methods - spanning LLM‑enabled automation, AI‑assisted design, recommender systems for code and repair, prompt engineering, and rigorous efficacy measurement beyond traditional metrics.</p>
      </article>
      <article class="area-card">
        <h3>SE4AI</h3>
        <p>Engineering reliable, reproducible AI‑enabled systems—spanning SE for models and AI‑infused systems; AI code, libraries and datasets; autonomic and self‑healing systems with automated model repair; rigorous testing, verification, validation and user‑based evaluation; and requirements engineering.</p>
      </article>
    </div>

    <div class="area-chips" id="areaChips">
      <button class="area-chip active" data-area="all">All areas</button>
      <button class="area-chip" data-area="empirical-se">Empirical Software Engineering</button>
      <button class="area-chip" data-area="msr">Mining Software Repositories</button>
      <button class="area-chip" data-area="ai4se">AI4SE</button>
      <button class="area-chip" data-area="se4ai">SE4AI</button>
    </div>
  </section>

  <section class="research-projects">
    <div class="project-group">
      <h3 class="group-title">Ongoing projects</h3>
      <div class="project-grid">
        <article class="project-card" data-areas="ai4se empirical-se" data-status="ongoing">
          <div class="project-meta">Since 2025</div>
          <h4 class="project-title">Design Pattern Identification and Summarisation</h4>
          <p class="project-summary">A feature-based and LLM-based design pattern summarisation system that parses Java systems with JavaParser, produces JSON knowledge graphs and turns them into readable English generated narratives.</p>
          <ul class="project-points">
            <li>Captures both the structural context and usage intent for every detected pattern.</li>
            <li>Exports enriched JSON artifacts, enabling downstream reasoning pipelines.</li>
            <li>Automates summary text generation so reviewers can skim complex codebases quickly.</li>
          </ul>
          <div class="project-pills">
            <span class="project-pill">AI4SE</span>
            <span class="project-pill">Empirical SE</span>
            <span class="project-pill">MSR</span>
          </div>
          <div class="project-links">
            <a href="https://github.com/najamnazar/designpatternsummariser" target="_blank">GitHub</a>
            <a href="https://github.com/najamnazar/designpatternsummarisation-nlg-swum-llm" target="_blank">GitHub</a>
          </div>
        </article>
      </div>
    </div>

    <div class="project-group">
      <h3 class="group-title">Completed projects</h3>
      <div class="project-grid">
        <article class="project-card" data-areas="ai4se msr" data-status="completed">
          <div class="project-meta">2022-2024</div>
          <h4 class="project-title">Feature-based Design Pattern Detection</h4>
          <p class="project-summary">A machine-learning model that detects Gang-of-Four patterns inside Java projects, combining structural fingerprints with semantic cues so teams can inventory reuse opportunities.</p>
          <ul class="project-points">
            <li>Ships both a classic pipeline and a Python 3 refactor for modern toolchains.</li>
            <li>Provides a reproducible corpus for benchmarking new detection heuristics.</li>
            <li>Feeds summaries and diagrams into the Design Pattern Summariser pipeline.</li>
          </ul>
          <div class="project-pills">
            <span class="project-pill">Empirical SE</span>
            <span class="project-pill">MSR</span>
          </div>
          <div class="project-links">
            <a href="https://github.com/najamnazar/designpatterndetection" target="_blank">Python 2 Edition</a>
            <a href="https://github.com/najamnazar/designpatterndetection-v2-python3" target="_blank">Python 3 Edition</a>
          </div>
        </article>

        <article class="project-card" data-areas="se4ai msr" data-status="completed">
          <div class="project-meta">2023-2024</div>
          <h4 class="project-title">CodeLabeller</h4>
          <p class="project-summary">A web-based annotation environment where researchers and practitioners label Java design pattern instances and summaries to bootstrap supervised learning datasets.</p>
          <ul class="project-points">
            <li>Streamlines the end-to-end labeling workflow for machine-learning-ready corpora.</li>
            <li>Supports collaborative review cycles so multiple experts can converge on gold data.</li>
            <li>Exports datasets compatible with the detection and summarisation pipelines below.</li>
          </ul>
          <div class="project-pills">
            <span class="project-pill">Empirical SE</span>
            <span class="project-pill">MSR</span>
          </div>
          <div class="project-links">
            <a href="https://github.com/najamnazar/codelabeller" target="_blank">GitHub</a>
          </div>
        </article>

        <article class="project-card" data-areas="ai4se empirical-se" data-status="completed">
          <div class="project-meta">2016-2017</div>
          <h4 class="project-title">Source Code Fragment Summarisation (CFS)</h4>
          <p class="project-summary">The first effort to blend supervised learning with crowdsourcing for summarising source code fragments harvested from Eclipse and NetBeans FAQs.</p>
          <ul class="project-points">
            <li>Builds a 127-fragment corpus plus feature lists curated by nine expert volunteers.</li>
            <li>Applies SVM and Naive Bayes classifiers trained on crowd-sourced features.</li>
            <li>Makes both the corpus and feature sets openly available for replication.</li>
          </ul>
          <div class="project-pills">
            <span class="project-pill">MSR</span>
            <span class="project-pill">Empirical SE</span>
          </div>
          <div class="project-links">
            <a href="http://oscar-lab.org/CFS/codeFragments.txt" target="_blank">Corpus</a>
            <a href="http://oscar-lab.org/CFS/features.txt" target="_blank">Features</a>
            <a href="http://oscar-lab.org/CFS/dataset.zip" target="_blank">Classifiers</a>
          </div>
        </article>

        <article class="project-card" data-areas="empirical-se msr" data-status="completed">
          <div class="project-meta">2017</div>
          <h4 class="project-title">PRST: PageRank-based Bug Report Summaries</h4>
          <p class="project-summary">A PageRank-inspired approach for summarising duplicate-heavy bug reports drawn from Eclipse, Mozilla, KDE, and Gnome tracker conversations.</p>
          <ul class="project-points">
            <li>Constructs the modified BRC corpus (28 reports) and OSCAR corpus (59 reports).</li>
            <li>Engages human annotators to label sentence-level extracts for evaluation.</li>
            <li>Releases both the raw bug corpus and the manually annotated summaries.</li>
          </ul>
          <div class="project-pills">
            <span class="project-pill">Empirical SE</span>
            <span class="project-pill">MSR</span>
          </div>
          <div class="project-links">
            <a href="http://oscar-lab.org/paper/prst/file/bugreports.rar" target="_blank">Bug Corpus</a>
            <a href="http://oscar-lab.org/paper/prst/file/annotation.rar" target="_blank">Annotated Corpus</a>
          </div>
        </article>
      </div>
    </div>
  </section>
</div>

<script src="{{ base_path }}/assets/js/research-filter.js"></script>
