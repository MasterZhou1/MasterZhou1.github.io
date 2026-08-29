---
layout: page
title: "How Science Compresses Complex Systems"
permalink: /articles/complexity-compression/
---

## How Science Compresses Complex Systems

The strangest fact about science is not that the universe is complicated. It obviously is. A gas contains on the order of $10^{23}$ particles. A turbulent fluid couples motion across many spatial scales. A biological system contains enormous numbers of interacting components. Even a simple deterministic equation can produce behavior that looks irregular and unpredictable.

The strange fact is that, despite all of this complexity, we repeatedly find **short descriptions that work**.

This makes me think that one useful way to read the history of science is as a history of **compression**. Scientific progress often happens when we discover that most of the apparent detail of a system is irrelevant for the questions we care about. The hard part is not merely fitting a better equation. It is discovering a representation in which a short equation can exist at all.

In modern notation, the recurring pattern looks something like:

$$
x_{\text{micro}} \;\xrightarrow{\phi}\; z_{\text{effective}} \;\xrightarrow{F}\; z'_{\text{effective}}.
$$

Here $\phi$ decides what information to keep, and $F$ describes how the retained variables behave. Historically, many of the deepest scientific breakthroughs were breakthroughs in $\phi$, not merely in $F$.

<figure class="article-figure">
  <img src="{{ '/assets/images/articles/closure.svg' | relative_url }}" alt="Many microscopic states collapse onto a single effective state. Evolving the microscopic state and then coarse-graining agrees with applying the effective law directly.">
  <figcaption>Coarse-graining is many-to-one. A representation earns its keep only when the square closes.</figcaption>
</figure>

---

### 1) The Newtonian Ideal: Compress the Trajectory into a Law

Classical mechanics gives the cleanest possible picture of scientific understanding.

Instead of recording the position of a planet every night forever, we describe its state using a small number of variables and evolve them with a compact dynamical rule. In the Newtonian ideal, the entire trajectory is generated from:

* a small state,
* an initial condition,
* and a short equation of motion.

Schematically,

$$
x_0 + F \quad\Longrightarrow\quad x_1,x_2,\dots,x_T.
$$

A huge table of observations is replaced by a tiny generative program.

This is an extraordinary compression. But it quietly assumes that we already know the right state variables and that the system can be usefully tracked at the microscopic level.

For many-body systems, that assumption immediately collapses.

A classical gas with $N$ particles requires roughly $6N$ coordinates just to specify all positions and momenta. For macroscopic $N$, exact microscopic prediction is not merely inconvenient; it is the wrong scientific object.

The history of complex systems begins when science learns to stop asking for the full trajectory.

---

### 2) Thermodynamics: Compress by Forgetting

Thermodynamics made a radical move: **throw almost everything away**.

A gas may contain $10^{23}$ molecules, but at the macroscopic scale we describe it with a handful of variables:

$$
(P,V,T,S,\dots).
$$

We do not care which molecule is currently near the left wall. We do not even try to retain enough information to reconstruct the microscopic configuration. Instead, we choose variables that remain stable and useful under massive microscopic variation.

For an ideal gas, an enormous microscopic system collapses into a relation as compact as

$$
PV = Nk_B T.
$$

This is not lossless compression. It is something much more scientifically useful: **task-dependent lossy compression**.

Many microscopic states map to the same macroscopic state:

$$
x_{\text{micro}} \longrightarrow M(x_{\text{micro}}).
$$

The remarkable fact is that, after this information is discarded, the remaining variables often obey *cleaner* laws than the underlying constituents appear to.

This gives the first major lesson of complex-system science:

> A good theory does not preserve all information. It preserves the information that closes at the scale of interest.

The microscopic world is complicated partly because we are insisting on distinctions that the macroscopic law does not care about.

---

### 3) Boltzmann: Replace Exact Behavior with Statistical Structure

Statistical mechanics pushed this idea further.

A macrostate does not correspond to one microstate. It corresponds to an enormous region of microscopic phase space. Boltzmann connected thermodynamic entropy to the multiplicity of microscopic realizations:

$$
S_B = k_B \log \Omega.
$$

Here $\Omega$ is, roughly, the number of microscopic configurations compatible with a macroscopic description.

This changes what it means to explain a complex system.

The goal is no longer:

> Predict every molecule.

It becomes:

> Characterize the distribution of microscopic possibilities that are compatible with the macroscopic constraints.

The law moves from a trajectory to a probability distribution.

This is a subtle but profound form of compression. Instead of storing every microscopic detail, we describe an **equivalence class** of states. Two microstates that differ enormously at the particle level may be scientifically identical because they belong to the same macrostate.

In this view, complexity naturally decomposes into two parts:

$$
\text{observation} = \text{regular structure} + \text{unresolved microscopic information}.
$$

A theory does not need to explain away the second term. It needs to identify which part is structured and which part should remain statistical.

This is very different from the naive idea that a successful law must deterministically predict everything.

---

### 4) Chaos: A Short Law Does Not Mean an Easy Trajectory

The development of nonlinear dynamics added another correction.

Consider a system with an extremely short update rule, such as the logistic map:

$$
x_{t+1} = r x_t(1-x_t).
$$

The equation can fit on one line. Yet for some values of $r$, nearby initial conditions rapidly diverge.

More generally, in a chaotic system,

$$
|\delta x(t)| \approx e^{\lambda t}|\delta x(0)|, \qquad \lambda > 0.
$$

A tiny amount of uncertainty in the initial state is exponentially amplified.

This means that **mechanistic simplicity and trajectory predictability are not the same thing**.

The mechanism may be extremely compressible while a realized long-horizon trajectory remains practically difficult to compress or predict, because information hidden in the initial condition, measurement noise, and finite precision keeps getting amplified.

So science changes the target again.

Instead of demanding the exact future trajectory, we study:

* attractors,
* invariant measures,
* Lyapunov exponents,
* bifurcations,
* stability regions,
* conserved or approximately conserved quantities.

The law becomes a compact description of the **space of possible behavior**, not necessarily a compressed transcript of one exact history.

This is an important distinction:

$$
\boxed{\text{simple mechanism} \;\not\Rightarrow\; \text{simple observed trajectory}}
$$

Complexity in the observations does not by itself imply complexity in the underlying law.

---

### 5) Renormalization: Compress the Theory Itself

For me, the most beautiful answer to the complex-system problem comes from the renormalization group.

Near a critical point, a physical system contains fluctuations over many length scales. A direct microscopic attack becomes hopeless because behavior at tiny, intermediate, and macroscopic scales all matters at once.

The key idea, developed through Kadanoff's block-spin picture and Wilson's renormalization group, is to repeatedly **coarse-grain the system**.

Very schematically:

$$
x \;\xrightarrow{\mathcal{C}}\; x' \;\xrightarrow{\mathcal{C}}\; x'' \;\xrightarrow{\mathcal{C}}\; \dots
$$

But the deeper object being transformed is not only the state. The *theory parameters themselves* flow:

$$
\theta \;\xrightarrow{\mathcal{R}}\; \theta' \;\xrightarrow{\mathcal{R}}\; \theta'' \longrightarrow \theta^\star.
$$

Under repeated coarse-graining, many microscopic details disappear. Some parameters shrink away and become **irrelevant**. A few remain important. Near fixed points, systems with wildly different microscopic constructions can flow toward the same effective description.

This is universality.

A magnet, a fluid, and a binary mixture can have completely different microscopic constituents and still share the same critical behavior.

That is an astonishing compression:

$$
\text{many microscopic theories} \quad\longrightarrow\quad \text{one universality class}.
$$

<figure class="article-figure">
  <img src="{{ '/assets/images/articles/rg-flow.svg' | relative_url }}" alt="Along most directions, unrelated theories flow inward under repeated coarse-graining and converge on one fixed point; along two relevant directions the flow runs outward.">
  <figcaption>Unrelated theories flow to the same $\theta^\star$ along the irrelevant directions. Along the few relevant ones the flow runs outward, so criticality has to be tuned to.</figcaption>
</figure>

The renormalization-group viewpoint says something stronger than "ignore small details." It tells us that there can be a mathematical flow under which those details systematically lose predictive importance.

In a sense, RG performs scientific feature selection across scale.

It asks:

> If I repeatedly zoom out, which pieces of the microscopic description survive?

The answer is often: surprisingly few.

This may be one of the deepest reasons simple macroscopic laws can exist in a complicated universe.

---

### 6) Minimum Description Length: Turning Occam into an Objective

By the late twentieth century, information theory and algorithmic complexity made the compression view explicit.

Suppose we observe data $D$ and propose a model $M$. A natural description of the whole dataset consists of two parts:

1. the bits required to specify the model,
2. the bits still required to encode the data once the model is known.

This gives the Minimum Description Length principle:

$$
M^\star = \arg\min_M \left[ L(M) + L(D\mid M) \right].
$$

A model that memorizes every observation can make $L(D\mid M)$ tiny, but then $L(M)$ becomes enormous.

An overly simple model has a tiny description, but leaves large unexplained residuals.

The best theory sits at the tradeoff.

This is essentially Occam's razor written as an optimization problem:

> The useful law is the one that makes the total description shortest.

Rissanen's formulation of shortest-description modeling made this idea operational for statistical inference. Kolmogorov complexity gives an even more idealized version: the complexity of an object is the length of the shortest program that generates it.

But there is an important catch.

The shortest program cannot in general be computed. More practically, MDL always depends on the model language or hypothesis class we are willing to search.

So MDL gives a beautiful **selection principle**, but not a complete discovery algorithm.

It can tell us which description is shorter *once we have candidate descriptions*. It does not automatically tell us where the right variables, abstractions, or model family came from.

And historically, that has often been the hardest step.

---

### 7) Predictive Compression: Keep Only What the Future Needs

There is another formulation of complexity that I find especially elegant.

Suppose we observe a long history

$$
x_{<t} = (\dots,x_{t-2},x_{t-1}).
$$

Two different histories may look completely different, but if they imply exactly the same distribution over futures, then for prediction they contain the same information.

We can define an equivalence relation:

$$
x_{<t} \sim x'_{<t} \quad\Longleftrightarrow\quad P(X_{>t}\mid x_{<t}) = P(X_{>t}\mid x'_{<t}).
$$

Computational mechanics calls the resulting equivalence classes **causal states**.

The idea is beautiful because it defines a representation by a functional criterion:

> Two pasts are the same state if the future cannot tell them apart.

Now compression is no longer "make the representation small at any cost." It is:

> Throw away every distinction that does not improve prediction.

The resulting state can be dramatically smaller than the full history while retaining all predictive information.

This connects back to thermodynamics and renormalization. In every case, the core move is to identify an equivalence relation over microscopic descriptions:

* same macroscopic observables,
* same large-scale behavior,
* same universality class,
* same predictive future.

Scientific abstraction is, in a deep sense, the art of deciding **which differences do not matter**.

---

### 8) The Hidden Variable in Scientific Discovery: Representation

If I had to summarize the historical pattern in one modern objective, I would not write MDL only over a model $F$.

I would write something closer to:

$$
\min_{\phi,F} \; L(\phi) + L(F) + L\left( D_{\text{future}} \mid F, \phi(D_{\text{past}}) \right).
$$

Here:

* $\phi$ is the representation or coarse-graining,
* $F$ is the effective law,
* the last term measures what remains unpredictable.

This makes the real difficulty obvious.

If $\phi$ is wrong, no elegant $F$ may exist.

The molecules of a gas are a terrible representation for thermodynamics. Individual spins are often a terrible representation near a critical point. A raw time series can be a terrible representation for a stochastic process with a small predictive state.

So the hardest scientific problem is often not:

> Which equation fits these variables?

It is:

> In what coordinates does this system become simple?

This is why great theories often feel less like better curve fitting and more like discovering a new language.

Once the language is right, the law can suddenly become short.

---

### 9) What Does It Mean for a Complex System to "Have a Law"?

This perspective also changes the question itself.

A complex system does not need to have a short description of every microscopic detail. That would be far too strong.

A more useful criterion is that there exists some compact representation that preserves a stable, transferable structure:

$$
x \rightarrow z \rightarrow \text{predictive regularity}.
$$

A convincing effective law should ideally have several properties:

* **Compression:** it is substantially shorter than memorizing the observations.
* **Prediction:** it reduces uncertainty on unseen data.
* **Invariance:** it survives changes in initial conditions, instances, or scale.
* **Closure:** once the effective state is known, discarded detail matters little for the target prediction.
* **Residual randomness:** after the law is extracted, what remains should be difficult to compress further.

This also explains why we can almost never prove that a complicated system has **no** law.

Failure to find compression may mean the system is genuinely structureless. But it may also mean:

* we chose the wrong observables,
* we looked at the wrong scale,
* we used the wrong hypothesis class,
* we do not have enough data,
* or we simply have not discovered the right abstraction yet.

There is no universal algorithm that guarantees the correct scientific representation.

That is exactly why science remains a search problem.

---

### 10) Closing Thought: Science as the Search for the Right Forgetting

Looking across this history, I no longer think the deepest scientific move is "finding an equation."

The recurring move is more specific:

$$
\boxed{\text{find what can be forgotten without losing the phenomenon}}
$$

Thermodynamics forgets molecular identity.

Statistical mechanics replaces exact microstates with distributions over macrostates.

Chaos theory gives up exact long-horizon trajectories and keeps invariant structure.

Renormalization systematically removes degrees of freedom that disappear at larger scales.

MDL formalizes the preference for descriptions that explain much with little.

Predictive-state methods merge histories that imply the same future.

The striking lesson is that complex systems do not usually become understandable because we model *more* detail. They become understandable because we discover which detail was never essential.

Perhaps that is what a scientific law really is:

> **a compact representation of everything that continues to matter after the rest has been forgotten.**

---

*Yufa Zhou — August 20, 2026*
