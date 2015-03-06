---
layout: post
title: A Discriminative CNN Video Representation for Event Detection
category: 科研
tags: deep_learning
keywords: CNN，video representation，event detection
description: 
---

还在家舒服过着年假的时候，小老板就默默滴在 QQ 给发了这篇文章，还不忘说了句要与时代接轨，确实，是不该脱轨一周这么久的~~~

文章是好文章，一直对自己没有亲自实现过的东西都怀着敬畏的态度，这篇文章也是。

### 知识点

- Fine-tuning

- 


### 摘要

Event detection 和 action detection 是有区别的，前者有较大的 intra-class variations, 如 marriage proposal, 可能发生在室内，也可能在室外，
但是包括一些特定的概念，如戒指(object)，单漆下跪(action)和亲吻(action)等。

这篇文章提出了一种基于CNN的视频特征描述方法，从而进行 event detection. 主要的贡献点包括：1）基于传统的 average pooling 和 max pooling，
作者提出了 appropriate encoding method，实验验证 significantly improved；2）提出了a set of latent concept descriptors 作为 frame descriptors，
在丰富视觉信息的同时没有大幅增加计算量。

通过大量的数据库验证，要比 state-of-the-art 方法 <i>Dense Trajectories</i> 的<i> mAP </i> 从27.6%提升到36.8%。

### 相关工作

Dense Trajectories 和它的增强版本 <i>improved Dense Trajectories</i>(IDT),对输入视频进行 spatial re-sizing and temporal down-sampling processing 处理,
时间复杂度仍太高。

之前有用 CNN 在 MEDTest 13 和 MEDTest 14 上做 event detection， 但是精度都低于 IDT, 作者归结出一些问题：1）CNN需要大量的训练样本，而且用 action dataset 训练模型也不太合适；
2）当解决 domain specific task, 同时有较少的训练样本时候，使用训练好的模型做 <B>fine-tuning</B> 是一个很好的策略；3) 有了frame level CNN descriptors，生成 video level representation
是很关键的。  


### Video CNN descriptors

标准的步骤包括：1）Obtain the descriptors for individual frames; 2) Apply normalization on frame descriptors; 3) Average pooling on
frame descriptors to obtain the video representation,
<a href="http://www.codecogs.com/eqnedit.php?latex=\tiny&space;x_{video}=&space;\frac{1}{N}\sum_{i=1}^{N}x_i" target="_blank">
<img src="http://latex.codecogs.com/png.latex?\tiny&space;x_{video}=&space;\frac{1}{N}\sum_{i=1}^{N}x_i" title="\tiny x_{video}= \frac{1}{N}\sum_{i=1}^{N}x_i" /></a>;
4) Re-normalization on video representation.

### 思考

### 参考文章

- [A Discriminative CNN Video Representation for Event Detection](http://arxiv.org/abs/1411.4006)

- [阅读版本](/public/img/pdf/1411.4006v1.pdf)