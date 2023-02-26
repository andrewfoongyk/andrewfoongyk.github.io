---
title: "Timewarp: Transferable Acceleration of Molecular Dynamics by Learning Time-Coarsened Dynamics"
collection: publications
permalink: /publication/timewarp
excerpt: "Solving the sampling problem is a longstanding challenge in the field of molecular dynamics, with crucial applications for understanding protein function and drug design. We train a generalisable normalising flow that accelerates sampling for small peptide systems."
date: 2023-02-02
venue: 'arXiv preprint'
paperurl: 'https://arxiv.org/abs/2302.01170'
citation:
---

Leon Klein\*, **Andrew Y. K. Foong\***, Tor Erlend Fjelde\*, Bruno Mlodozeniec\*, Marc Brockschmidt, Sebastian Nowozin, Frank Noé, Ryota Tomioka

## Abstract
Molecular dynamics (MD) simulation is a widely used technique to simulate molecular systems, most commonly at the all-atom resolution where the equations of motion are integrated with timesteps on the order of femtoseconds ($1\mathrm{fs}=10−15\mathrm{s}$). MD is often used to compute equilibrium properties, which requires sampling from an equilibrium distribution such as the Boltzmann distribution. However, many important processes, such as binding and folding, occur over timescales of milliseconds or beyond, and cannot be efficiently sampled with conventional MD. Furthermore, new MD simulations need to be performed from scratch for each molecular system studied. We present Timewarp, an enhanced sampling method which uses a normalising flow as a proposal distribution in a Markov chain Monte Carlo method targeting the Boltzmann distribution. The flow is trained offline on MD trajectories and learns to make large steps in time, simulating the molecular dynamics of $10^5−10^6\mathrm{fs}$. Crucially, Timewarp is transferable between molecular systems: once trained, we show that it generalises to unseen small peptides (2-4 amino acids), exploring their metastable states and providing wall-clock acceleration when sampling compared to standard MD. Our method constitutes an important step towards developing general, transferable algorithms for accelerating MD.
