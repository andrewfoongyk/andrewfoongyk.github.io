---
title: "Autoregressive Conditional Neural Processes"
collection: publications
permalink: /publication/arcnp
excerpt: "We show that applying neural processes autoregressively at test time leads to dramatic improvements in prediction quality, without the need to modify the training procedure or architecture."
date: 2023-02-26
venue: 'International Conference on Learning Representations (ICLR)'
paperurl: 'https://openreview.net/forum?id=OAsXFPBfTBh'
citation:
---

Wessel Bruinsma\*, Stratis Markou\*, James Requeima\*, **Andrew Y. K. Foong\***, Anna Vaughan, Tom Andersson, Anthony Buonomo, Scott Hosking, Richard E Turner

## Abstract
Conditional neural processes (CNPs; Garnelo et al., 2018a) are attractive meta-learning models which produce well-calibrated predictions and are trainable via a simple maximum likelihood procedure. Although CNPs have many advantages, they are unable to model dependencies in their predictions. Various works propose solutions to this, but these come at the cost of either requiring approximate inference or being limited to Gaussian predictions. In this work, we instead propose to change how CNPs are deployed at test time, without any modifications to the model or training procedure. Instead of making predictions independently for every target point, we autoregressively define a joint predictive distribution using the chain rule of probability, taking inspiration from the neural autoregressive density estimator (NADE) literature. We show that this simple procedure allows factorised Gaussian CNPs to model highly dependent, non-Gaussian predictive distributions. Perhaps surprisingly, in an extensive range of tasks with synthetic and real data, we show that CNPs in autoregressive (AR) mode not only significantly outperform non-AR CNPs, but are also competitive with more sophisticated models that are significantly more computationally expensive and challenging to train. This performance is remarkable given that AR CNPs are not trained to model joint dependencies. Our work provides an example of how ideas from neural distribution estimation can benefit neural processes, and motivates research into the AR deployment of other neural process models.
