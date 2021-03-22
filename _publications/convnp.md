---
title: "Meta-Learning Stationary Stochastic Process Prediction with Convolutional Neural Processes"
collection: publications
permalink: /publication/convnp
excerpt: "We expand on our previous work on Convolutional Conditional Neural Processes by building a model that can also model dependencies between different outputs."
date: 2020-11-20
venue: 'Neural Information Processing Systems (NeurIPS)'
paperurl: 'https://arxiv.org/abs/2007.01332'
citation:
---

**Andrew Y. K. Foong\***, Wessel P. Bruinsma\*, Jonathan Gordon\*, Yann Dubois, James Requeima, and Richard E. Turner.

## Abstract
Stationary stochastic processes (SPs) are a key component of many probabilistic models, such as those for off-the-grid spatio-temporal data. They enable the statistical symmetry of underlying physical phenomena to be leveraged, thereby aiding generalization. Prediction in such models can be viewed as a translation equivariant map from observed data sets to predictive SPs, emphasizing the intimate relationship between stationarity and equivariance. Building on this, we propose the Convolutional Neural Process (ConvNP), which endows Neural Processes (NPs) with translation equivariance and extends convolutional conditional NPs to allow for dependencies in the predictive distribution. The latter enables ConvNPs to be deployed in settings which require coherent samples, such as Thompson sampling or conditional image completion. Moreover, we propose a new maximum-likelihood objective to replace the standard ELBO objective in NPs, which conceptually simplifies the framework and empirically improves performance. We demonstrate the strong performance and generalization capabilities of ConvNPs on 1D regression, image completion, and various tasks with real-world spatio-temporal data.
