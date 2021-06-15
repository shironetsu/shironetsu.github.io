---
layout: post
title:  "MathJaxのテスト投稿"
date:   2021-06-16 01:00:00 +0900
categories: jekyll update
usemathjax: true
---

<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>

以下のスクリプトタグを埋め込む：
```html
<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
```
[MathJax \| Beautiful math in all browsers\.](https://www.mathjax.org/#gettingstarted)

# ヤコビの三重積等式

$$
\prod_{n=1}^\infty = (1-q^n)(1+zq^n)(1+z^{-1}q^{n-1}) = \sum_{n\in \mathbb{Z}} z^m q^{\frac{m^2+m}{2}}.
$$

# クラインの正二十面体不変式

$$
\begin{align}
f &=z_1z_2(z_1^{10}+11z_1^5z_2^5-z_2^{10}),\\
H &= -(z_1^{20}+z_2^{20}) + 228(z_1^{15}z_2^5-z_1^5z_2^{15}) - 494 z_1^{10}z_2^{10},\\
T &= (z_1^{30}+z_2^{30})+522(z_1^{25}z_2^5-z_1^5z_2^{25}) - 10005(z_1^{20}z_2^{10}+z_1^{10}z_2^{20}).
\end{align}
$$

インライン数式：$$ H^3+T^2=1728f^5 $$

# ロジャーズ・ラマヌジャンの恒等式

第一恒等式:

$$
1+\sum_{n=1}^\infty \frac{q^{n^2}}{(1-q)(1-q^2)\cdots(1-q^n)}
=\prod_{n=1}\frac{1}{(1-q^{5n-4})(1-q^{5n-1})}.
$$

第二恒等式:

$$
1+\sum_{n=1}^\infty \frac{q^{n^2+n}}{(1-q)(1-q^2)\cdots(1-q^n)}
=\prod_{n=1}\frac{1}{(1-q^{5n-3})(1-q^{5n-2})}.
$$