---
title:          "Why Do Transformers Fail to Forecast Time Series In-Context?"
date:           2025-10-13 00:01:00 +0800
selected:       true
pub:            "NeurIPS 2025 Workshop: What Can('t) Transformers Do? "
pub_last:       '<span class="badge badge-pill badge-publication badge-success">Oral (3/68 ≈ 4.4%)</span>'
# pub_date:       "2025"

abstract: >-
  We analyze why Transformers fail in time-series forecasting through in-context learning theory, proving that, under AR($p$) data, linear self-attention cannot outperform classical linear predictors and suffers a strict $O(1/n)$ excess-risk gap, while chain-of-thought inference compounds errors exponentially—revealing fundamental representational limits of attention and offering principled insights.

cover:          /assets/images/covers/icl-tsf.png
authors:
  - Yufa Zhou*
  - Yixiao Wang*
  - Surbhi Goel
  - Anru R. Zhang

bib: |
  @article{zhou2025tsf,
  title={Why Do Transformers Fail to Forecast Time Series In-Context?},
  author={Zhou, Yufa and Wang, Yixiao and Goel, Surbhi and Zhang, Anru R.},
  journal={arXiv preprint arXiv:2510.09776},
  year={2025}
  }



links:
  Paper: https://arxiv.org/abs/2510.09776
  Code: https://github.com/MasterZhou1/ICL-Time-Series
  Poster: /assets/pdfs/ICL_TSF_Poster.pdf
  Slides: /assets/pdfs/ICL_TSF_Slides.pdf
---
