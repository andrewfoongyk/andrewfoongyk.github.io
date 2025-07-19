---
title: "On the Expressiveness of Approximate Inference in Bayesian Neural Networks"
collection: publications
permalink: /publication/expressiveness-approx-inference
excerpt: "Bayesian neural networks aim to solve the problem of overconfident predictions using probabilistic modeling. However, we show that some common approximations used in Bayesian neural networks lead to undesirable behaviour. Along with [Sebastian Farquhar](https://sebastianfarquhar.com/) and [Yingzhen Li](http://yingzhenli.net/home/en/), I gave a [short talk explaining this paper](https://www.youtube.com/watch?v=BJTkLxSQrHI). You can also find the [slides](../files/RIKEN_handout.pdf) for a longer version of that talk (given with [David Burt](https://davidrburt.github.io/) at the RIKEN Center)."
date: 2020-10-23
venue: 'Neural Information Processing Systems (NeurIPS)'
paperurl: 'https://arxiv.org/abs/1909.00719'
citation:
---

**Andrew Y. K. Foong\***, David R. Burt\*, Yingzhen Li, and Richard E. Turner.

## Abstract
While Bayesian neural networks (BNNs) hold the promise of being flexible, well-calibrated statistical models, inference often requires approximations whose consequences are poorly understood. We study the quality of common variational methods in approximating the Bayesian predictive distribution. For single-hidden layer ReLU BNNs, we prove a fundamental limitation in function-space of two of the most commonly used distributions defined in weight-space: mean-field Gaussian and Monte Carlo dropout. We find there are simple cases where neither method can have substantially increased uncertainty in between well-separated regions of low uncertainty. We provide strong empirical evidence that exact inference does not have this pathology, hence it is due to the approximation and not the model. In contrast, for deep networks, we prove a universality result showing that there exist approximate posteriors in the above classes which provide flexible uncertainty estimates. However, we find empirically that pathologies of a similar form as in the single-hidden layer case can persist when performing variational inference in deeper networks. Our results motivate careful consideration of the implications of approximate inference methods in BNNs.
