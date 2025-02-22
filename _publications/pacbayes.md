---
title: "How Tight Can PAC-Bayes be in the Small Data Regime?"
collection: publications
permalink: /publication/pacbayes
excerpt: "We investigate, both theoretically and empirically, how tight PAC-Bayes generalisation bounds can be made with small datasets."
date: 2021-01-10
venue: 'Neural Information Processing Systems (NeurIPS)'
paperurl: 'https://arxiv.org/abs/2106.03542'
citation:
---

**Andrew Y. K. Foong\***, Wessel P. Bruinsma\*, David R. Burt, and Richard E. Turner.

## Abstract
In this paper, we investigate the question: Given a small number of datapoints, for example N = 30, how tight can PAC-Bayes and test set bounds be made? For such small datasets, test set bounds adversely affect generalisation performance by discarding data. In this setting, PAC-Bayes bounds are especially attractive, due to their ability to use all the data to simultaneously learn a posterior and bound its generalisation risk. We focus on the case of i.i.d. data with a bounded loss and consider the generic PAC-Bayes theorem of Germain et al. (2009) and Begin et al. (2016). While their theorem is known to recover many existing PAC-Bayes bounds, it is unclear what the tightest bound derivable from their framework is. Surprisingly, we show that for a fixed learning algorithm and dataset, the tightest bound of this form coincides with the tightest bound of the more restrictive family of bounds considered in Catoni (2007). In contrast, in the more natural case of distributions over datasets, we give examples (both analytic and numerical) showing that the family of bounds in Catoni (2007) can be suboptimal. Within the proof framework of Germain et al. (2009) and Begin et al. (2016), we establish a lower bound on the best bound achievable in expectation, which recovers the Chernoff test set bound in the case when the posterior is equal to the prior. Finally, to illustrate how tight these bounds can potentially be, we study a synthetic one-dimensional classification task in which it is feasible to meta-learn both the prior and the form of the bound to obtain the tightest PAC-Bayes and test set bounds possible. We find that in this simple, controlled scenario, PAC-Bayes bounds are surprisingly competitive with comparable, commonly used Chernoff test set bounds. However, the sharpest test set bounds still lead to better guarantees on the generalisation error than the PAC-Bayes bounds we consider.
