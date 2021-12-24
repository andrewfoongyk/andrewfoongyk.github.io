---
title: "Collapsed Variational Bounds for Bayesian Neural Networks"
collection: publications
permalink: /publication/collapsed_bounds
excerpt: "We propose a collapsed Evidence Lower Bound (ELBO) for Bayesian Neural Networks that alleviates underfitting."
date: 2021-11-10
venue: 'Neural Information Processing Systems (NeurIPS)'
paperurl: 'https://openreview.net/forum?id=ykN3tbJ0qmX'
citation:
---

Marcin B. Tomczak, Siddharth Swaroop, **Andrew Y. K. Foong**, Richard E Turner

## Abstract
Recent interest in learning large variational Bayesian Neural Networks (BNNs) has been partly hampered by poor predictive performance caused by underfitting, and their performance is known to be very sensitive to the prior over weights. Current practice often fixes the prior parameters to standard values or tunes them using heuristics or cross-validation. In this paper, we treat prior parameters in a distributional way by extending the model and collapsing the variational bound with respect to their posteriors. This leads to novel and tighter Evidence Lower Bounds (ELBOs) for performing variational inference (VI) in BNNs. Our experiments show that the new bounds significantly improve the performance of Gaussian mean-field VI applied to BNNs on a variety of data sets, demonstrating that mean-field VI works well even in deep models. We also find that the tighter ELBOs can be good optimization targets for learning the hyperparameters of hierarchical priors.
