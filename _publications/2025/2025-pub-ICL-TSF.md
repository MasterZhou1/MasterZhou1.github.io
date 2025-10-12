---
title:          "Why Do Transformers Fail to Forecast Time Series In-Context?"
date:           2025-10-13 00:01:00 +0800
selected:       true
pub:            "NeurIPS 2025 Workshop: What Can('t) Transformers Do? "
pub_last:       '<span class="badge badge-pill badge-publication badge-success">Oral (3/68 ≈ 4.4%)</span>'
# pub_date:       "2025"

abstract: >-
  We analyze why Transformers fail in time-series forecasting through in-context learning theory, proving that linear self-attention cannot outperform classical AR((p)) predictors and suffers a strict (O(1/n)) excess-risk gap, while chain-of-thought inference compounds errors exponentially—revealing fundamental representational limits of attention and offering principled insights.

cover:          /assets/images/covers/icl-tsf.png
authors:
  - Yufa Zhou*
  - Yixiao Wang*
  - Surbhi Goel
  - Anru R. Zhang

links:
  # Paper: TODO
  Code: https://github.com/MasterZhou1/ICL-Time-Series
---
