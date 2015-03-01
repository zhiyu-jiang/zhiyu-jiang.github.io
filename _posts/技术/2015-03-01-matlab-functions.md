---
layout: post
title: 常用Matlab函数
category: 技术
tags: Matlab
keywords: 
description: 
---

###查看内核版本
	
本文主要收集编程中用到的一些比较实用的函数，便于以后查阅。

同时，该文档会不定期更新。


### 形态学操作

- [L, num] = bwlabel(BW, n)
查找BW二值图中的连通区域，其中n为连通区域的定义，n=4/8,即为四连通或者八连通。

- BW2 = imfill(BW,'holes')
填充区域，也可以对灰度图进行操作。

### 编译技巧
- （待补充。。。）
