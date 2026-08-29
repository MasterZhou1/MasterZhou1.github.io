---
layout: page
title: "Welcome to the World of Intention"
permalink: /articles/world-of-intention/
---

## Welcome to the World of Intention

I increasingly believe it will become a world of **intention**.

If AI eventually becomes capable of doing almost anything that can be specified, searched, and evaluated, then execution itself becomes less scarce. The interesting question moves one level upstream:

$$
\text{What do you want to happen?}
$$

Not what can be done. Not even how to do it. What future state do you want to make more likely?

That is intention.

---

### 1) Intention Comes Before Execution

I notice this most clearly in research.

Sometimes an idea appears with little warning. I read a paper, see an experiment, notice an unexplained phenomenon, or connect two things that previously looked unrelated. There is often no complete argument yet. There is only a weak internal signal:

> This might work.

A few years ago, many such ideas would have disappeared. Testing them required searching the literature, understanding several adjacent areas, implementing a baseline, finding the right codebase, preparing data, debugging infrastructure, and running experiments. The activation energy was high enough that most intentions never became actions.

Now the loop can look very different:

$$
\text{idea} \rightarrow \text{literature search} \rightarrow \text{implementation} \rightarrow \text{experiment} \rightarrow \text{evidence}
$$

An idea appears on a walk. I describe it to an AI system on my phone. It searches the literature and helps determine whether the idea already exists. If the direction still looks interesting, the specification goes to a coding agent. Experiments begin.

The important change is not merely that each step became faster. It is that **far more of these weak intentions survive long enough to encounter reality**.

---

### 2) From Intention to Trajectory

The same pattern appears outside research.

Suppose I see a website and suddenly imagine a different product built around the same interaction. Previously, the thought might have remained a bookmark. Now it can immediately become a repository.

Suppose I become curious about a new field. That curiosity can become a map of the literature, several hypotheses, a prototype, and an experiment.

Suppose I want to work on a particular problem. That intention can become messages, conversations, introductions, projects, and eventually collaborations.

What matters is not any individual action. It is the **trajectory** created by acting.

If the current world state is $s_0$ and some desired future state is $G$, then there is often an enormous number of trajectories connecting them:

$$
\tau_i:\ s_0 \rightarrow s_1 \rightarrow s_2 \rightarrow \cdots \rightarrow G.
$$

We almost never know the winning trajectory in advance. Research projects evolve unexpectedly. Products find users through channels nobody predicted. Careers change because of accidental conversations. Collaborations begin from weak connections. An idea that looks unimportant today may become useful after an unrelated development six months later.

Reality is not a deterministic program. It is a distribution over trajectories.

---

### 3) The Goal Is Not to Predict the Exact Path

Consider a simple intention:

> I want to build something valuable.

There are many possible trajectories. One begins with a research result. Another begins with an open-source project. Another begins with a small tool made for personal use. Another begins with meeting someone who has a complementary idea. Another begins with an unexpected observation that changes the original problem entirely.

It would be strange to demand the exact trajectory before starting. The trajectory is partially revealed by taking it.

More abstractly, if $G$ is a goal state and $\pi$ is the policy one is currently running, meaning how attention, time, and attempts are allocated, then the problem is not

$$
\text{find the unique correct }\tau.
$$

It is closer to

$$
\max_{\pi}\ P(G \mid \pi).
$$

This reframing is worth taking literally. The probability of reaching $G$ is not carried by any single path. It is the total probability mass of every trajectory that happens to end there:

$$
P(G \mid \pi) = \sum_{\tau\, :\, \tau \rightarrow G} P(\tau \mid \pi).
$$

We never choose a future directly. We choose how we act, and that changes how probability is spread across the futures that remain possible.

> Intention defines the target. Action redistributes probability mass over possible futures.

One way to increase $P(G \mid \pi)$ is to create more promising trajectories toward $G$. Some die immediately. Some produce useful information. Some branch into new trajectories. A very small number of them compound.

<figure class="article-figure">
  <img src="{{ '/assets/images/articles/trajectories.svg' | relative_url }}" alt="Trajectories leaving s0. Most terminate. A few reach G.">
  <figcaption>Most trajectories die. A few reach $G$.</figcaption>
</figure>

This is close to how research already works. Most hypotheses fail. Most experiments are not papers. Most papers are not major discoveries. But the expected return is still often dominated by a small number of trajectories with very large rewards.

---

### 4) Scale the Trajectories

This leads to a different interpretation of scaling.

We usually talk about scaling models, compute, data, or inference. But agents also allow us to scale **attempts**.

One person has limited sequential bandwidth. There are only so many papers one can read, codebases one can inspect, experiments one can implement, and ideas one can seriously pursue. Agents change this constraint.

Instead of

$$
10\ \text{intentions} \;\rightarrow\; 1\ \text{executed trajectory},
$$

we move toward

$$
10\ \text{intentions} \;\rightarrow\; 10\ \text{parallel trajectories}.
$$

Why this matters can be stated in one line. Suppose each attempt is roughly independent and succeeds with some small probability $p$. Then the chance that $n$ attempts produce at least one success is

$$
P(\text{hit}) = 1 - (1-p)^n.
$$

When $p$ is small, this is approximately

$$
1 - (1-p)^n \approx np.
$$

Nothing here requires any single attempt to be brilliant. It only requires that attempts are cheap enough to run many of them, and honest enough that a real success can be recognized when it appears. Under those conditions, the number of trajectories becomes a first-order term.

Not all trajectories deserve equal resources. Good judgment still matters. Feedback still matters. Compute is still finite. But the cost of asking reality a question is collapsing.

This changes the optimal behavior. When an idea is cheap to test, it often makes less sense to spend days debating whether it deserves to exist.

Instantiate it.

Let the literature kill it.

Let the experiment kill it.

Let the user kill it.

Or let it survive.

**The world provides a much higher-quality gradient than prolonged internal speculation.**

---

### 5) Intuition, Taste, and Intention

Where do intentions come from? Often, they begin as weak signals.

In research, it might be a vague feeling that two seemingly unrelated observations share the same mechanism. In products, it might be noticing that a strange behavior will eventually become common. In engineering, it might be the sense that a cumbersome workflow should not exist at all.

At this stage, there is usually not enough evidence for a complete argument. There is only intuition:

> This might work.

Intuition proposes possibilities. Taste evaluates which possibilities are worth attention. Intention turns one of them into a trajectory.

$$
\text{weak signal} \rightarrow \text{intuition} \rightarrow \text{taste} \rightarrow \text{intention} \rightarrow \text{trajectory} \rightarrow \text{feedback}
$$

None of these need to be correct in advance. An intuition can be wrong. Taste can misjudge. An intention can lead nowhere.

But once execution becomes cheap, the cost of being wrong changes. Instead of resolving every uncertainty internally, we can instantiate the trajectory and let reality answer. The feedback then updates both intuition and taste.

Over time, this becomes a compounding loop:

$$
\text{better intuition} \rightarrow \text{better intentions} \rightarrow \text{more informative trajectories} \rightarrow \text{better feedback} \rightarrow \text{better intuition}
$$

Taste still matters, but less as a gatekeeper that decides what is allowed to begin. It increasingly becomes a resource allocator:

> Which trajectories deserve another round of scaling?

In a world where experiments are cheap, the strongest process may not be to wait until an idea is fully justified. It is to notice, instantiate, observe, and update.

---

### 6) AI Expands the Reachable World

The deepest effect of agents may therefore not be productivity. It may be an expansion of the set of futures that an individual can realistically attempt to reach. Call this set $\mathcal{R}(s_0)$, the set of states reachable from the current state under practical constraints.

Historically, $\mathcal{R}(s_0)$ was heavily constrained by execution. You could have an excellent idea for a software system and still be unable to build it. You could have an interesting scientific hypothesis and still lack the engineering bandwidth to test it. You could become curious about a field but never have enough time to cross the initial knowledge barrier.

Agents expand $\mathcal{R}(s_0)$. As capability improves, more intentions become executable.

This is a deeper change than simply doing the same work faster. Entire classes of trajectories that were previously too expensive to instantiate now become cheap enough to try. And once execution becomes sufficiently abundant, the bottleneck moves upstream.

The question becomes less:

> Can this be done?

and more:

> Did someone want it enough to start the trajectory?

An agent cannot pursue an unexpressed goal. It can search an enormous space once given a direction, but the direction still has to come from somewhere.

---

### 7) The World of Intention

The industrial world scaled physical execution. The information world scaled access to knowledge. The intelligence world is beginning to scale cognitive execution. The next consequence may be a world increasingly organized around intention.

In such a world, the distinction between people may be less about who can execute a known procedure and more about who repeatedly generates directions worth executing: who notices something interesting, who develops intuitions before the evidence becomes obvious, who wants something enough to instantiate it, who turns vague possibilities into trajectories, and who scales enough trajectories that rare outcomes become less rare.

The world remains stochastic. Most things will still fail. Luck does not disappear. Constraints do not disappear. But we can continuously move probability mass toward the futures we care about.

$$
\text{Intuition reveals possibilities.}
$$

$$
\text{Intention selects a direction.}
$$

$$
\text{Agents instantiate the trajectories.}
$$

$$
\text{Scaling gives the future more chances to happen.}
$$

> We cannot choose the future, but we can increase the number and quality of trajectories that point toward it.

If intelligence becomes abundant, perhaps the scarce resource is no longer the ability to answer questions. It is having something that one wants the world to become.

**Welcome to the world of intention.**

---

*Yufa Zhou — August 29, 2026*
