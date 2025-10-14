---
layout: page
title: "AI Theory: Fragmented but Expansive"
permalink: /articles/ai_theory_future/
---

## AI Theory: Fragmented but Expansive

*TL;DR — Don’t wait for a “theory of everything.” AI will mature the way physics, biology, and engineering did: via a network of local theories that are right at their scale. That’s good news for progress—and for researchers who can bridge ideas across domains.*

---

### 1) A Personal Prediction

I don’t expect a single grand unifying theory of AI any time soon. The field looks set to evolve like post-Newtonian physics or modern biology: **patchworks of locally powerful laws, models, and intuitions** that each explain part of intelligence under specific assumptions and scales.

- Learning theory, optimization, probabilistic modeling, LLM scaling, diffusion dynamics—each already has its own **objects, invariants, and proof styles**.  
- Convergence might come much later—if at all. For now, **pluralism is a feature, not a bug**: multiple angles sharpen our collective understanding.

---

### 2) Why Unification Is Unlikely (for Now)

Three structural forces keep AI theory plural:

1. **System complexity and heterogeneity**  
   LLMs, diffusion models, tool-using agents, and multi-modal stacks behave differently because they *are* different systems with different bottlenecks.

2. **Scale vs. abstraction mismatch**  
   Techniques that characterize small models (e.g., VC bounds) often lose bite at trillion-parameter scales; statistical-mechanics-style arguments capture trends but miss mechanism-level precision.

3. **Incompatible objectives and constraints**  
   Efficiency, alignment, interpretability, reasoning, privacy, and safety often **pull in orthogonal directions**, requiring different abstractions and evaluation regimes.

**Outcome:** a **pluralistic ecosystem** of theories, each valid in its operating region.

---

### 3) Analogies That Actually Map

- **Aerodynamics vs. quantum mechanics**  
  Airplanes were designed with aerodynamics (derived from fluid mechanics), not quantum electrodynamics. When engineers compute lift/drag, they use the **right theory at the right scale**—not the deepest theory available.  
  **AI parallel:** RL uses value functions/Bellman operators without reducing everything to backprop; LLM work uses scaling laws without reducing all results to PAC-style generalization.

- **Biology’s layered frameworks**  
  Darwinian evolution explained the *why*, but genetics, molecular biology, and ecology each built **distinct frameworks** that didn’t collapse into one equation.  
  **AI parallel:** “reasoning,” “alignment,” “interpretability,” and “efficiency” develop semi-independently, then meet at the application layer.

---

### 4) What “Fragmented Progress” Looks Like

- **Learning theory**: generalization/regret bounds, stability analyses, compression views.  
- **Optimization**: convergence under non-convexity, saddle dynamics, implicit bias of SGD/Adam.  
- **Representation theory**: approximation capacity, manifold geometry, phase transitions, trajectory analysis.  
- **Empirical science**: scaling laws, emergent abilities, ablation taxonomies.  
- **Interpretability**: circuits, attribution, mechanistic probes; local causal models of behavior.  
- **Systems & efficiency**: KV-cache, quantization/distillation regimes, throughput/latency trade-offs.  
- **Agents**: planning priors, tool-use formalisms, self-consistency dynamics, multi-agent incentives.

Each speaks a completely **different language**; together they form a growing **atlas of intelligence**.

---

### 5) Counterpoints—and What Would Falsify This

Could we still arrive at a unifying theory of AI? Possibly—but I suspect it would be as difficult as reconciling the four fundamental forces in physics or proving $\mathsf{P} \neq \mathsf{NP}$:

- **A universal invariant** that predicts generalization and behavior **across** LLMs, diffusion models, and agents, with **tight error bounds** that hold at practical scales.  
- **A single law of training dynamics**, insensitive to optimizer choice, data distribution, or architecture, yielding **mechanistic predictions** rather than trend-fitting.  
- **A unifying evaluation principle** that integrates alignment, reasoning, and efficiency into a provable frontier of trade-offs, while still matching real-world empirical performance.  

Absent breakthroughs of this magnitude, **local theories will continue to dominate**—just as in physics, where unification remains elusive, or in complexity theory, where $\mathsf{P} \stackrel{?}{=} \mathsf{NP}$ persists as one of the deepest open problems: beautiful, profound, but far beyond immediate reach.  

---

### 6) Why Local, Messy Formulas Still Matter

And even if a grand unifying theory of AI were discovered, **local, messy formulas would remain indispensable**. Civil engineering makes this obvious. Earthquake design, for instance, often relies not on elegant PDEs but on blunt empirical rules. A typical “base shear–type” formula looks something like:

$$
V = C_s \cdot W, 
\quad C_s = \frac{0.44\, S}{R/I + 0.5\,(T/6.0)^{0.8}}
$$

Here $S, R, I, T$ are just code-defined factors—seismic intensity, response modification, importance level, and structural period—stitched together with constants and exponents. Plugging in some typical numbers, you might get a coefficient around $0.06$. Multiply by the building’s weight $W$ and—voilà—the design shear force.  

To a physicist, this looks like an arbitrary patchwork of constants and powers. Yet to an engineer, it is nothing more than \\(+, -, \times, \div, \sqrt{}\\)—simple operators wrapped in messy-looking fractions—that have been **validated through decades of practice**. Sure, refinements exist, and in aerospace or nuclear engineering they matter. But for ordinary civil structures, these empirical rules are more than enough: practical, robust, and trustworthy.  

Likewise in AI, unification—if it ever comes—will not displace practical “local laws.” Scaling curves, regret bounds, or optimization heuristics endure not because they are elegant, but because they are **usable at the right scale**. They may look crude compared to a hypothetical “grand theory,” yet they remain the workhorses precisely because they solve the problems we actually face.  

---

### 7) Why Fragmentation Is Good (Now)

- **Faster progress**: local theories let us *ship knowledge* without waiting for grand unification.  
- **Creative degrees of freedom**: researchers can found micro-fields with their own objects and benchmarks.  
- **Robustness**: overlapping partial theories reduce the risk of a single paradigm’s blind spots.

> Think “federated science”: many lenses, frequent cross-checks, rapid iteration.

---

### 8) Where This Leaves AGI

Advances toward AGI will likely **accelerate** this pluralism before they reduce it. As capabilities expand, **new regimes** (long-horizon planning, tool economies, social learning) will demand **new local theories**.

History gives a guide:  
- The **Wright brothers** built a working airplane decades before fluid mechanics matured; commercial aviation scaled on the back of engineering heuristics, not quantum electrodynamics.  
- **AI parallel:** AGI may emerge under scaling laws and empirical recipes first, with deeper theory catching up later. Just as aeronautics eventually systematized after practice, a true unifying AI theory—if possible—may follow only after AGI is already here.

---

### 9) Closing Thought

AI’s scientific richness won’t come from compressing everything into one equation. It will come from **cultivating a network of partial, overlapping theories**—each precise at its scale, each falsifiable in its domain, and each useful for building and understanding intelligent systems.

*Fragmented, but expansive—and that’s exactly how science often wins.*

---

*Yufa Zhou — August 18, 2025*
