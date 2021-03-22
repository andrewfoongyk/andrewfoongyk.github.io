---
title: "'In-Between' Uncertainty in Bayesian Neural Networks"
collection: publications
permalink: /publication/inbetween-uncertainty
excerpt: "We show that a common approach to Bayesian neural network inference often fails to model increased uncertainty in-between separated clusters of observed data."
date: 2019-06-27
venue: 'ICML Workshop on Uncertainty and Robustness in Deep Learning'
paperurl: 'https://arxiv.org/abs/1906.11537'
citation:
---

**Andrew Y. K. Foong**, Yingzhen Li, José Miguel Hernández-Lobato, and Richard E. Turner.

## Abstract
We describe a limitation in the expressiveness of the predictive uncertainty estimate given by mean-field variational inference (MFVI), a popular approximate inference method for Bayesian neural networks. In particular, MFVI fails to give calibrated uncertainty estimates in between separated regions of observations. This can lead to catastrophically overconfident predictions when testing on out-of-distribution data. Avoiding such overconfidence is critical for active learning, Bayesian optimisation and out-of-distribution robustness. We instead find that a classical technique, the linearised Laplace approximation, can handle 'in-between' uncertainty much better for small network architectures.
