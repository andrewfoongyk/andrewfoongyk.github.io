---
title: "Fast Protein Backbone Generation with SE(3) Flow Matching"
collection: publications
permalink: /publication/flow_matching
excerpt: "Recently, equivariant diffusion models such as RFdiffusion and Chroma have revolutionised the field of de novo protein design. We investigate the use of flow matching as an alternative to diffusion to accelerate the sampling of novel proteins."
date: 2023-02-02
venue: 'NeurIPS Machine Learning for Structural Biology workshop (MLSB) 2023'
paperurl: 'https://www.mlsb.io/papers_2023/Fast_protein_backbone_generation_with_SE3_flow_matching.pdf'
citation:
---

Jason Yim, Andrew Campbell, **Andrew Y. K. Foong**, Michael Gastegger, José Jiménez-Luna, Sarah Lewis, Victor Garcia Satorras, Bastiaan S. Veeling, Regina Barzilay, Tommi Jaakkola, Frank Noé.

## Abstract
We present FrameFlow, a method for fast protein backbone generation using SE(3) flow matching. Specifically, we adapt FrameDiff, a state-of-the-art diffusion model, to the flow-matching generative modeling paradigm. We show how flow matching can be applied on SE(3) and propose modifications during training to effectively learn the vector field. Compared to FrameDiff, FrameFlow requires five times fewer sampling timesteps while achieving two fold better designability. The ability to generate high quality protein samples at a fraction of the cost of previous methods paves the way towards more efficient generative models in de novo protein design.
