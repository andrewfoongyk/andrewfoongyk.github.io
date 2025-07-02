---
layout: archive
title: null
permalink: /publications/
author_profile: true
---

<style>
  .page__title {
    display: none;
  }
</style>

<!-- <div style="display:flex; align-items:flex-start; gap:1.2em; margin-bottom:0.5em;">
  <div style="margin-left: calc(80px + 1.2em);">
    <p style="margin:0; font-family: 'EB Garamond'; font-style: italic;">For a full list of publications, please see my Google Scholar page.</p>
  </div>
</div>
 -->

<div style="display:flex; align-items:flex-start; gap:1.2em; margin-bottom:0.5em;">
    <p style="margin:0; font-family: 'EB Garamond'; font-style: italic;">
      For a full list of research papers, please see my
      <a href="https://scholar.google.com/citations?user=2UOjgIUAAAAJ&hl=en" target="_blank">
        Google Scholar page
      </a>.
    </p>
</div>


<div style="display:flex; align-items:flex-start; gap:1.2em; margin-bottom:0.5em;">
  <div style="margin-left: calc(80px + 1.2em);">
    <h2 style="margin:0;">2024</h2>
  </div>
</div>

<div style="display:flex; align-items:flex-start; gap:1.2em; margin-bottom:2em;">

  <!-- Square thumbnail -->
  <img src="/assets/images/publications/bioemu-banner.png"
       alt="BioEmu figure"
       style="width:80px; height:80px; object-fit:cover; border-radius:6px; flex-shrink:0;">

  <!-- Text content -->
  <div>
    <!-- Remove default top margin so it lines up with the image -->
    <h3 style="margin:0 0 0.3em 0;">
      <a href="https://www.biorxiv.org/content/10.1101/2024.12.05.626885"
            target="_blank" style="text-decoration:none; color:inherit;">
        🔗 Scalable Emulation of Protein Equilibrium Ensembles With Generative Deep Learning
      </a>
    </h3>

    <p style="margin:0 0 0.3em;">
      Sarah Lewis*, Tim Hempel*, José Jiménez-Luna*, Michael Gastegger*, Yu Xie*, <strong>Andrew Y. K. Foong</strong>*, Victor García Satorras*, Osama Abdin*, Bastiaan S. Veeling*, Iryna Zaporozhets, Yaoyi Chen, Soojung Yang, Arne Schneuing, Jigyasa Nigam, Federico Barbero, Vincent Stimper, Andrew Campbell, Jason Yim, Marten Lienen, Yu Shi, Shuxin Zheng, Hannes Schulz, Usman Munir, Cecilia Clementi, Frank Noé
    </p>

    <p style="margin:0 0 0.3em; font-style:italic;">
      bioRxiv
    </p>

    <details style="margin-top:0.2em;">
      <summary style="cursor:pointer; font-style:italic;">Abstract</summary>
      <p style="margin-top:0.4em;">
       Following the sequence and structure revolutions, predicting the dynamical mechanisms of proteins that implement biological function remains an outstanding scientific challenge. Several experimental techniques and molecular dynamics (MD) simulations can, in principle, determine conformational states, binding configurations and their probabilities, but suffer from low throughput. Here we develop a Biomolecular Emulator (BioEmu), a generative deep learning system that can generate thousands of statistically independent samples from the protein structure ensemble per hour on a single graphical processing unit. By leveraging novel training methods and vast data of protein structures, over 200 milliseconds of MD simulation, and experimental protein stabilities, BioEmu’s protein ensembles represent equilibrium in a range of challenging and practically relevant metrics. Qualitatively, BioEmu samples many functionally relevant conformational changes, ranging from formation of cryptic pockets, over unfolding of specific protein regions, to large-scale domain rearrangements. Quantitatively, BioEmu samples protein conformations with relative free energy errors around 1 kcal/mol, as validated against millisecond-timescale MD simulation and experimentally-measured protein stabilities. By simultaneously emulating structural ensembles and thermodynamic properties, BioEmu reveals mechanistic insights, such as the causes for fold destabilization of mutants, and can efficiently provide experimentally-testable hypotheses.
      </p>
    </details>
  </div>
</div>

<div style="display:flex; align-items:flex-start; gap:1.2em; margin-bottom:0.5em;">
  <div style="margin-left: calc(80px + 1.2em);">
    <h2 style="margin:0;">2023</h2>
  </div>
</div>

<div style="display:flex; align-items:flex-start; gap:1.2em; margin-bottom:2em;">

  <!-- Square thumbnail -->
  <img src="/assets/images/publications/frameflow-banner.png"
       alt="FrameFlow figure"
       style="width:80px; height:80px; object-fit:cover; border-radius:6px; flex-shrink:0;">

  <!-- Text content -->
  <div>
    <h3 style="margin:0 0 0.3em 0;">
      🔗 <a href="https://www.mlsb.io/papers_2023/Fast_protein_backbone_generation_with_SE3_flow_matching.pdf"
            target="_blank" style="text-decoration:none; color:inherit;">
        Fast Protein Backbone Generation with SE(3) Flow Matching
      </a>
    </h3>

    <p style="margin:0 0 0.3em;">
      Jason Yim, Andrew Campbell, <strong>Andrew Y. K. Foong</strong>, Michael Gastegger,
      José Jiménez-Luna, Sarah Lewis, Victor Garcia Satorras, Bastiaan S. Veeling,
      Regina Barzilay, Tommi Jaakkola, Frank Noé
    </p>

    <p style="margin:0 0 0.3em; font-style:italic;">
      NeurIPS Machine Learning for Structural Biology workshop (MLSB) 2023
    </p>

    <details style="margin-top:0.2em;">
      <summary style="cursor:pointer; font-style:italic;">Abstract</summary>
      <p style="margin-top:0.4em;">
        We present FrameFlow, a method for fast protein backbone generation using SE(3) flow matching. Specifically, we adapt FrameDiff, a state-of-the-art diffusion model, to the flow-matching generative modeling paradigm. We show how flow matching can be applied on SE(3) and propose modifications during training to effectively learn the vector field. Compared to FrameDiff, FrameFlow requires five times fewer sampling timesteps while achieving two fold better designability. The ability to generate high quality protein samples at a fraction of the cost of previous methods paves the way towards more efficient generative models in de novo protein design.
      </p>
    </details>
  </div>
</div>


<!-- Paper -->
<div style="display:flex; align-items:flex-start; gap:1.2em; margin-bottom:2em;">

  <!-- Square thumbnail -->
  <img src="/assets/images/publications/acnp-banner.png"
       alt="Autoregressive Conditional Neural Processes figure"
       style="width:80px; height:80px; object-fit:cover; border-radius:6px; flex-shrink:0;">

  <!-- Text content -->
  <div>
    <h3 style="margin:0 0 0.3em 0;">
      🔗 <a href="https://openreview.net/forum?id=OAsXFPBfTBh"
            target="_blank" style="text-decoration:none; color:inherit;">
        Autoregressive Conditional Neural Processes
      </a>
    </h3>

    <p style="margin:0 0 0.3em;">
      Wessel Bruinsma*, Stratis Markou*, James Requeima*, <strong>Andrew Y. K. Foong</strong>*,
      Anna Vaughan, Tom Andersson, Anthony Buonomo, Scott Hosking, Richard E Turner
    </p>

    <p style="margin:0 0 0.3em; font-style:italic;">
      International Conference on Learning Representations (ICLR)
    </p>

    <details style="margin-top:0.2em;">
      <summary style="cursor:pointer; font-style:italic;">Abstract</summary>
      <p style="margin-top:0.4em;">
        Conditional neural processes (CNPs; Garnelo et al., 2018a) are attractive meta-learning models which produce well-calibrated predictions and are trainable via a simple maximum likelihood procedure. Although CNPs have many advantages, they are unable to model dependencies in their predictions. Various works propose solutions to this, but these come at the cost of either requiring approximate inference or being limited to Gaussian predictions. In this work, we instead propose to change how CNPs are deployed at test time, without any modifications to the model or training procedure. Instead of making predictions independently for every target point, we autoregressively define a joint predictive distribution using the chain rule of probability, taking inspiration from the neural autoregressive density estimator (NADE) literature. We show that this simple procedure allows factorised Gaussian CNPs to model highly dependent, non-Gaussian predictive distributions. Perhaps surprisingly, in an extensive range of tasks with synthetic and real data, we show that CNPs in autoregressive (AR) mode not only significantly outperform non-AR CNPs, but are also competitive with more sophisticated models that are significantly more computationally expensive and challenging to train.
      </p>
    </details>
  </div>
</div>


<!-- Paper -->
<div style="display:flex; align-items:flex-start; gap:1.2em; margin-bottom:2em;">

  <!-- Square thumbnail -->
  <img src="/assets/images/publications/timewarp-banner.png"
       alt="Timewarp figure"
       style="width:80px; height:80px; object-fit:cover; border-radius:6px; flex-shrink:0;">

  <!-- Text content -->
  <div>
    <h3 style="margin:0 0 0.3em 0;">
      🔗 <a href="https://arxiv.org/abs/2302.01170"
            target="_blank" style="text-decoration:none; color:inherit;">
        Timewarp: Transferable Acceleration of Molecular Dynamics by Learning Time-Coarsened Dynamics
      </a>
    </h3>

    <p style="margin:0 0 0.3em;">
      Leon Klein*, <strong>Andrew Y. K. Foong</strong>*, Tor Erlend Fjelde*, Bruno Mlodozeniec*,
      Marc Brockschmidt, Sebastian Nowozin, Frank Noé, Ryota Tomioka
    </p>

    <p style="margin:0 0 0.3em; font-style:italic;">
      Neural Information Processing Systems (NeurIPS) 2023 (spotlight presentation)
    </p>

    <details style="margin-top:0.2em;">
      <summary style="cursor:pointer; font-style:italic;">Abstract</summary>
      <p style="margin-top:0.4em;">
        Molecular dynamics (MD) simulation is a widely used technique to simulate molecular systems, most commonly at the all-atom resolution where the equations of motion are integrated with timesteps on the order of femtoseconds ($1\mathrm{fs}=10^{-15}\mathrm{s}$). MD is often used to compute equilibrium properties, which requires sampling from an equilibrium distribution such as the Boltzmann distribution. However, many important processes, such as binding and folding, occur over timescales of milliseconds or beyond, and cannot be efficiently sampled with conventional MD. Furthermore, new MD simulations need to be performed from scratch for each molecular system studied. We present Timewarp, an enhanced sampling method which uses a normalising flow as a proposal distribution in a Markov chain Monte Carlo method targeting the Boltzmann distribution. The flow is trained offline on MD trajectories and learns to make large steps in time, simulating the molecular dynamics of $10^5−10^6\mathrm{fs}$. Crucially, Timewarp is transferable between molecular systems: once trained, we show that it generalises to unseen small peptides (2–4 amino acids), exploring their metastable states and providing wall-clock acceleration when sampling compared to standard MD. Our method constitutes an important step towards developing general, transferable algorithms for accelerating MD.
      </p>
    </details>
  </div>
</div>



<div style="display:flex; align-items:flex-start; gap:1.2em; margin-bottom:0.5em;">
  <div style="margin-left: calc(80px + 1.2em);">
    <h2 style="margin:0;">2021</h2>
  </div>
</div>


<!-- Paper -->
<div style="display:flex; align-items:flex-start; gap:1.2em; margin-bottom:2em;">

  <!-- Square thumbnail -->
  <img src="/assets/images/publications/bnn-collapsed-banner.png"
       alt="Collapsed Variational Bounds for BNNs figure"
       style="width:80px; height:80px; object-fit:cover; border-radius:6px; flex-shrink:0;">

  <!-- Text content -->
  <div>
    <h3 style="margin:0 0 0.3em 0;">
      🔗 <a href="https://openreview.net/forum?id=ykN3tbJ0qmX"
            target="_blank" style="text-decoration:none; color:inherit;">
        Collapsed Variational Bounds for Bayesian Neural Networks
      </a>
    </h3>

    <p style="margin:0 0 0.3em;">
      Marcin B. Tomczak, Siddharth Swaroop, <strong>Andrew Y. K. Foong</strong>, Richard E Turner
    </p>

    <p style="margin:0 0 0.3em; font-style:italic;">
      Neural Information Processing Systems (NeurIPS)
    </p>

    <details style="margin-top:0.2em;">
      <summary style="cursor:pointer; font-style:italic;">Abstract</summary>
      <p style="margin-top:0.4em;">
        Recent interest in learning large variational Bayesian Neural Networks (BNNs) has been partly hampered by poor predictive performance caused by underfitting, and their performance is known to be very sensitive to the prior over weights. Current practice often fixes the prior parameters to standard values or tunes them using heuristics or cross-validation. In this paper, we treat prior parameters in a distributional way by extending the model and collapsing the variational bound with respect to their posteriors. This leads to novel and tighter Evidence Lower Bounds (ELBOs) for performing variational inference (VI) in BNNs. Our experiments show that the new bounds significantly improve the performance of Gaussian mean-field VI applied to BNNs on a variety of data sets, demonstrating that mean-field VI works well even in deep models. We also find that the tighter ELBOs can be good optimization targets for learning the hyperparameters of hierarchical priors.
      </p>
    </details>
  </div>
</div>

<!-- Paper -->
<div style="display:flex; align-items:flex-start; gap:1.2em; margin-bottom:2em;">

  <!-- Square thumbnail -->
  <img src="/assets/images/publications/pacbayes-smalldata-banner.png"
       alt="PAC-Bayes Small Data figure"
       style="width:80px; height:80px; object-fit:cover; border-radius:6px; flex-shrink:0;">

  <!-- Text content -->
  <div>
    <h3 style="margin:0 0 0.3em 0;">
      🔗 <a href="https://arxiv.org/abs/2106.03542"
            target="_blank" style="text-decoration:none; color:inherit;">
        How Tight Can PAC-Bayes be in the Small Data Regime?
      </a>
    </h3>

    <p style="margin:0 0 0.3em;">
      <strong>Andrew Y. K. Foong</strong>*, Wessel P. Bruinsma*, David R. Burt, and Richard E. Turner
    </p>

    <p style="margin:0 0 0.3em; font-style:italic;">
      Neural Information Processing Systems (NeurIPS)
    </p>

    <details style="margin-top:0.2em;">
      <summary style="cursor:pointer; font-style:italic;">Abstract</summary>
      <p style="margin-top:0.4em;">
        In this paper, we investigate the question: Given a small number of datapoints, for example N = 30, how tight can PAC-Bayes and test set bounds be made? For such small datasets, test set bounds adversely affect generalisation performance by discarding data. In this setting, PAC-Bayes bounds are especially attractive, due to their ability to use all the data to simultaneously learn a posterior and bound its generalisation risk. We focus on the case of i.i.d. data with a bounded loss and consider the generic PAC-Bayes theorem of Germain et al. (2009) and Begin et al. (2016). While their theorem is known to recover many existing PAC-Bayes bounds, it is unclear what the tightest bound derivable from their framework is. Surprisingly, we show that for a fixed learning algorithm and dataset, the tightest bound of this form coincides with the tightest bound of the more restrictive family of bounds considered in Catoni (2007). In contrast, in the more natural case of distributions over datasets, we give examples (both analytic and numerical) showing that the family of bounds in Catoni (2007) can be suboptimal. Within the proof framework of Germain et al. (2009) and Begin et al. (2016), we establish a lower bound on the best bound achievable in expectation, which recovers the Chernoff test set bound in the case when the posterior is equal to the prior. Finally, to illustrate how tight these bounds can potentially be, we study a synthetic one-dimensional classification task in which it is feasible to meta-learn both the prior and the form of the bound to obtain the tightest PAC-Bayes and test set bounds possible. We find that in this simple, controlled scenario, PAC-Bayes bounds are surprisingly competitive with comparable, commonly used Chernoff test set bounds. However, the sharpest test set bounds still lead to better guarantees on the generalisation error than the PAC-Bayes bounds we consider.
      </p>
    </details>
  </div>
</div>


<!-- Paper -->
<div style="display:flex; align-items:flex-start; gap:1.2em; margin-bottom:2em;">

  <!-- Square thumbnail -->
  <img src="/assets/images/publications/gnp-banner.png"
       alt="Gaussian Neural Process figure"
       style="width:80px; height:80px; object-fit:cover; border-radius:6px; flex-shrink:0;">

  <!-- Text content -->
  <div>
    <h3 style="margin:0 0 0.3em 0;">
      🔗 <a href="https://arxiv.org/abs/2101.03606"
            target="_blank" style="text-decoration:none; color:inherit;">
        The Gaussian Neural Process
      </a>
    </h3>

    <p style="margin:0 0 0.3em;">
      Wessel P. Bruinsma, James Requeima, <strong>Andrew Y. K. Foong</strong>,
      Jonathan Gordon, and Richard E. Turner
    </p>

    <p style="margin:0 0 0.3em; font-style:italic;">
      Advances in Approximate Bayesian Inference (AABI)
    </p>

    <details style="margin-top:0.2em;">
      <summary style="cursor:pointer; font-style:italic;">Abstract</summary>
      <p style="margin-top:0.4em;">
        Neural Processes (NPs; Garnelo et al., 2018a,b) are a rich class of models for meta-learning that map data sets directly to predictive stochastic processes. We provide a rigorous analysis of the standard maximum-likelihood objective used to train conditional NPs. Moreover, we propose a new member to the Neural Process family called the Gaussian Neural Process (GNP), which models predictive correlations, incorporates translation equivariance, provides universal approximation guarantees, and demonstrates encouraging performance.
      </p>
    </details>
  </div>
</div>



<div style="display:flex; align-items:flex-start; gap:1.2em; margin-bottom:0.5em;">
  <div style="margin-left: calc(80px + 1.2em);">
    <h2 style="margin:0;">2020</h2>
  </div>
</div>


<div style="display:flex; align-items:flex-start; gap:1.2em; margin-bottom:2em;">

  <!-- Square thumbnail -->
  <img src="/assets/images/publications/convnp-banner.png"
       alt="ConvNP figure"
       style="width:80px; height:80px; object-fit:cover; border-radius:6px; flex-shrink:0;">

  <!-- Text content -->
  <div>
    <h3 style="margin:0 0 0.3em 0;">
      🔗 <a href="https://arxiv.org/abs/2007.01332"
            target="_blank" style="text-decoration:none; color:inherit;">
        Meta-Learning Stationary Stochastic Process Prediction with Convolutional Neural Processes
      </a>
    </h3>

    <p style="margin:0 0 0.3em;">
      <strong>Andrew Y. K. Foong</strong>*, Wessel P. Bruinsma*, Jonathan Gordon*, Yann Dubois,
      James Requeima, and Richard E. Turner
    </p>

    <p style="margin:0 0 0.3em; font-style:italic;">
      Neural Information Processing Systems (NeurIPS)
    </p>

    <details style="margin-top:0.2em;">
      <summary style="cursor:pointer; font-style:italic;">Abstract</summary>
      <p style="margin-top:0.4em;">
        Stationary stochastic processes (SPs) are a key component of many probabilistic models, such as those for off-the-grid spatio-temporal data. They enable the statistical symmetry of underlying physical phenomena to be leveraged, thereby aiding generalization. Prediction in such models can be viewed as a translation equivariant map from observed data sets to predictive SPs, emphasizing the intimate relationship between stationarity and equivariance. Building on this, we propose the Convolutional Neural Process (ConvNP), which endows Neural Processes (NPs) with translation equivariance and extends convolutional conditional NPs to allow for dependencies in the predictive distribution. The latter enables ConvNPs to be deployed in settings which require coherent samples, such as Thompson sampling or conditional image completion. Moreover, we propose a new maximum-likelihood objective to replace the standard ELBO objective in NPs, which conceptually simplifies the framework and empirically improves performance. We demonstrate the strong performance and generalization capabilities of ConvNPs on 1D regression, image completion, and various tasks with real-world spatio-temporal data.
      </p>
    </details>
  </div>
</div>


<!-- Paper -->
<div style="display:flex; align-items:flex-start; gap:1.2em; margin-bottom:2em;">

  <!-- Square thumbnail -->
  <img src="/assets/images/publications/convcnp-banner.png"
       alt="Convolutional Conditional Neural Processes figure"
       style="width:80px; height:80px; object-fit:cover; border-radius:6px; flex-shrink:0;">

  <!-- Text content -->
  <div>
    <h3 style="margin:0 0 0.3em 0;">
      🔗 <a href="https://arxiv.org/abs/1910.13556"
            target="_blank" style="text-decoration:none; color:inherit;">
        Convolutional Conditional Neural Processes
      </a>
    </h3>

    <p style="margin:0 0 0.3em;">
      Jonathan Gordon*, Wessel P. Bruinsma*, <strong>Andrew Y. K. Foong</strong>,
      James Requeima, Yann Dubois, and Richard E. Turner
    </p>

    <p style="margin:0 0 0.3em; font-style:italic;">
      International Conference on Learning Representations (ICLR)
    </p>

    <details style="margin-top:0.2em;">
      <summary style="cursor:pointer; font-style:italic;">Abstract</summary>
      <p style="margin-top:0.4em;">
        We introduce the Convolutional Conditional Neural Process (ConvCNP), a new member of the Neural Process family that models translation equivariance in the data. Translation equivariance is an important inductive bias for many learning problems including time series modelling, spatial data, and images. The model embeds data sets into an infinite-dimensional function space as opposed to a finite-dimensional vector space. To formalize this notion, we extend the theory of neural representations of sets to include functional representations, and demonstrate that any translation-equivariant embedding can be represented using a convolutional deep set. We evaluate ConvCNPs in several settings, demonstrating that they achieve state-of-the-art performance compared to existing NPs. We demonstrate that building in translation equivariance enables zero-shot generalization to challenging, out-of-domain tasks.
      </p>
    </details>
  </div>
</div>



<div style="display:flex; align-items:flex-start; gap:1.2em; margin-bottom:0.5em;">
  <div style="margin-left: calc(80px + 1.2em);">
    <h2 style="margin:0;">2019</h2>
  </div>
</div>


<!-- Paper -->
<div style="display:flex; align-items:flex-start; gap:1.2em; margin-bottom:2em;">

  <!-- Square thumbnail -->
  <img src="/assets/images/publications/inbetween-uncertainty-banner.png"
       alt="In-Between Uncertainty in Bayesian Neural Networks figure"
       style="width:80px; height:80px; object-fit:cover; border-radius:6px; flex-shrink:0;">

  <!-- Text content -->
  <div>
    <h3 style="margin:0 0 0.3em 0;">
      🔗 <a href="https://arxiv.org/abs/1906.11537"
            target="_blank" style="text-decoration:none; color:inherit;">
        "In-Between" Uncertainty in Bayesian Neural Networks
      </a>
    </h3>

    <p style="margin:0 0 0.3em;">
      <strong>Andrew Y. K. Foong</strong>, Yingzhen Li, José Miguel Hernández-Lobato, and Richard E. Turner
    </p>

    <p style="margin:0 0 0.3em; font-style:italic;">
      ICML Workshop on Uncertainty and Robustness in Deep Learning
    </p>

    <details style="margin-top:0.2em;">
      <summary style="cursor:pointer; font-style:italic;">Abstract</summary>
      <p style="margin-top:0.4em;">
        We describe a limitation in the expressiveness of the predictive uncertainty estimate given by mean-field variational inference (MFVI), a popular approximate inference method for Bayesian neural networks. In particular, MFVI fails to give calibrated uncertainty estimates in between separated regions of observations. This can lead to catastrophically overconfident predictions when testing on out-of-distribution data. Avoiding such overconfidence is critical for active learning, Bayesian optimisation and out-of-distribution robustness. We instead find that a classical technique, the linearised Laplace approximation, can handle 'in-between' uncertainty much better for small network architectures.
      </p>
    </details>
  </div>
</div>

