# PHelper (V1.0正式版)
[![Build Status](https://travis-ci.org/Yuki-Minakami/PHelper.svg?branch=v1)](https://travis-ci.org/Yuki-Minakami/PHelper)


### 这是一个基于Node.js的爬虫项目，主要用来爬取[pixiv-插画网站](http://pixiv.net)上的高分图片
主要代码分布在getURL和download文件夹中
##### getURL：按照ID逐个遍历pixiv上的图片，按一定规则筛选后提取页面中的图片URL，写入文件中
##### download：读取url文件下载图片
----------------

## 项目分支
####  master: 可以稳定运行的版本
####  V1:     包含一些最新特性的版本

### 标准的开发流程：
#### 开发者新建branch --> pull request --> 合并到V1 --> 定期合并到master

---------------------------------

## 安装与运行
##### getURL 和download是两个分开的过程

* 将项目克隆到本地后，在根目录下运行npm install
* 进入getURL文件夹，运行 node master.js ,如果出现了依赖不存在的错误，请根据提示信息手动安装
* 注：由于网络原因，pixiv的http request可能不流畅,运行master.js是会长时间没有结果，要测试的话请运行getURL/example.js 查看一次请求需要的时间

------------------

### 目前的问题
##### 对response html的xpath解析还有问题
##### 异步流程还需要改善 
##### 对下载的图片文件还缺乏有效的的利用
##### 有些dependcy node_module 需要更新
--------------------------------
  
#### 更新日志，发布计划详见[wiki](https://github.com/Yuki-Minakami/PHelper/wiki) 
----------  
  
#### 更多信息请联系 likaiboy_2012@126.com





