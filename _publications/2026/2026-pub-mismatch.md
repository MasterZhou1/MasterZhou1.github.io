---
title:          "On the Origin and Evolution of Training-Inference Mismatch in LLM Reinforcement Learning"
date:           2026-10-29 00:01:00 +0800
selected:       false
pub:            "arXiv"
pub_date:       "2026"

abstract: >-
  We split the training-inference mismatch in LLM reinforcement learning exactly into a near-constant numerical discrepancy and a self-reinforcing policy lag, and derive the discrepancy-lag correction (DLC), which centers the former, clips the latter, and resynchronizes the sampler when the effective sample size of the lag ratio falls below one half.

cover:          /assets/images/covers/mismatch.png
authors:
  - Yu Li*
  - Yufa Zhou*
  - Tian Lan

bib: |
  @article{li2026mismatch,
    title={On the Origin and Evolution of Training-Inference Mismatch in LLM Reinforcement Learning},
    author={Li, Yu and Zhou, Yufa and Lan, Tian},
    journal={arXiv preprint arXiv:2610.40945},
    year={2026}
  }

links:
  Paper: https://arxiv.org/abs/2610.40945
  Code: https://github.com/Skylanding/Training-Inference-Mismatch
---
