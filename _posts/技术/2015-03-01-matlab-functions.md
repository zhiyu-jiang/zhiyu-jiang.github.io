---
layout: post
title: 常用Matlab函数
category: 技术
tags: Matlab
keywords: 
description: 
---

本文主要收集编程中用到的一些比较实用的函数，便于以后查阅。
		
同时，该文档会不定期更新。
		

### 形态学操作

- `[L, num] = bwlabel(BW, n)`:查找BW二值图中的连通区域，其中n为连通区域的定义，n=4/8,即为四连通或者八连通。
- `BW2 = imfill(BW,'holes')`:填充区域，也可以对灰度图进行操作。

### 并行操作

- （待补充。。。）

### 字符串处理

资料来自参考文献【1】。


- 检测字符类
  isstr             检测是否为字符串
  
  ischar            检测字符串是否为字符数组
  
  isletter          检测字符串中的英文字母
  
  isspace           检测字符串中的空格
  
  isstrprop         检测字符串中符合特定范畴的字符
 
- 元胞数组类
  cellstr           转换字符数组到元胞数组，通常用于元胞数组元素为不定长字符串
  
  char              转换元胞数组到字符数组，转换ASCII码到字符
  
  iscellstr         判断是否为元胞数组
  
  sort              数组元素排序
  
  intersect         数组交集，升序排列输出
  
  ismember          判断是否为集合中的元素
  
  setdiff           数组差集，升序排列输出
  
  setxor            数组异或，即不属于数组交集的元素，升序排列输出
  
  union             数组并集，升序排列输出
  
  unique            查找数组中独特的元素序列
 
- 字符操作类
  strcat            字符串连接
  
  strvcat           字符串垂直连接
  
  strcmp            判断字符串是否相等
  
  strncmp           判断两个字符串的前n个字符是否相等
  
  strcmpi           判断字符串是否相等，忽略大小写
  
  strncmpi          判断两个字符串的前n个字符是否相等，忽略大小写
  
  strrep(s,s1,s2)   替换字符串s中的s1为s2
  
  strfind(s,s1)     查找字符串s中串s1的位置
  
  findstr(s1,s2)    查找短字符串在长字符串中的位置
  
  strtok(s,char)    对字符串s中首个char前后分割
  
  strmatch          查找匹配字符串
  
  regexp            正则表达式
  
  lower             转换字符串中的字母为小写
  
  upper             转换字符串中的字母为小写
 
- 数据转换类
  int2str           整数转换到字符串
  
  num2str           按指定精度和格式转换数字到字符串
  
  mat2str           矩阵转换到字符串
  
  dec2hex           十进制转换到十六进制字符串
  
  dec2bin           十进制转换到二进制字符串
  
  dec2base          十进制转换到指定进制字符串
  
  uint8/abs         字符串转换到ASCII码
  
  str2num           字符串转换到数字
  
  str2double        字符串转换到数字，元胞数组转换到数字
  
  hex2num           十六进制字符串转换到数字
  
  hex2dec           十六进制字符串转换到十进制数字
  
  bin2dec           二进制字符串转换到十进制数字
  
  base2dec          指定进制字符串转换到十进制数字
 
- 空格处理类
  blanks            创建空格字符串
  
  deblank           去除字符串尾部空格
  
  strjust           字符串对齐
  
  strtrim           去除字符串头尾空格
 
- 格式字符类
  eval              执行包含MATLAB表达式的字符串
  
  sprintf           按格式写数据到字符串
  
  fprintf           按格式写数据到文件
  
  sscanf            按格式从字符串中读取数据

### 参考资料

【1】 [MATLAB 精华 · 字符串全函数 ](http://blog.sina.com.cn/s/blog_5d06e2390100l3aw.html)
