---
layout: post
title: OPTIMAL组会：视频质量评价+高光谱异常检测+Deep Feature
category: 科研
tags: group_meeting
keywords: Quality Assessment，Anomaly Detection，Features
description: 
---

大老板，小老板多次强调，要在周五下午的组会有所得，不能只是听一下，或者思考，或者提问。之前每次例会我也会做点笔记，记下不懂的或者需要学习的地方，但是也没有整理，
时间久了也就基本忘了之前听到的和想到的。

基于此，为了长久的发展，打算记录每次例会的内容，主要是自己不懂的和思考到的问题，便于以后查阅。

好记性不如烂笔头，不是毛爷爷说的！！！~~~

### 知识点

- **SVR, MLP**

- <B>Collaborative Representation</B> 

- <B>Metric Learning</B> 

- <B>DCT变换</B>

- <B>张量表达</B>  

### Outline
- PPT 汇报人员：

1. 郭  群：Blind Video Quality Assessment

2. 马单丹：Hyperspectral Anomaly Detection

- Reading Group 汇报人员：

1. 史建华：Y. Gong, L. Wang, R. Guo, and S. Lazebnik, “Multi-Scale Orderless Pooling of Deep Convolutional Activation Features,” in ECCV, 2014. 

### Blind Video Quality Assessment

- 视频包括*获取 -> 编码 -> 传输 -> 解码 -> 显示*这几个过程，视频质量评价主要是对解码之后的视频进行评价。 

- 视频质量评价根据是否有参考图像，可以分为*全参考*，*减参考*和*无参考*图像质量评级，难点是在*无参考*。（注：这里的参考指的是是否有原始无失真图像，不是指训练集）

- 无参考视频质量评价框架：video -> feature extraction -> mapping model -> quality assessment，其中核心是中间两步。

### Hyperspectral Anomaly Detection

- 区别于target detection

### Multi-Scale Orderless Pooling of Deep Convolutional Activation Features

- 主要贡献是把图像输入 CNN 之前，分为三个尺度处理，类似于对 BoW 做空间金字塔处理。

- VLAD pooling

### 参考资料

【1】 [Blind Video Quality Assessment]()

【2】 [Hyperspectral Anomaly Detection]()

【3】 [Multi-Scale Orderless Pooling of Deep Convolutional Activation Features](http://arxiv.org/abs/1403.1840)

【4】 [CSDN论文阅读笔记](http://blog.csdn.net/woyaopojie1990/article/details/38560371)