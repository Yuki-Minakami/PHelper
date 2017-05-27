<p align="center">
    <h1>PHelper</h1>
</p>
 
<p align="center">
  <a title = "Building Status" href="https://travis-ci.org/Yuki-Minakami/PHelper">
    <img src="https://travis-ci.org/Yuki-Minakami/PHelper.svg?branch=master">
  </a>
  <a title = "license" href="https://github.com/ellerbrock/open-source-badge/">
      <img src="https://badges.frapsoft.com/os/mit/mit.svg?v=102">
    </a>
</p>

### 这是一个基于Node.js的爬虫项目，主要用来爬取[pixiv.net-插画网站](http://pixiv.net)上的高分图片
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
#### getURL 和download是两个分开的过程

* 将项目克隆到本地后，在根目录下运行npm install

### 爬取链接
* 进入cluster目录，运行master.js，开始爬取url
* 这会开启一个生产者和多个消费者，由运行机器的cpu数量决定，持久化的方法需要自行实现，可以存入文件或者数据库

### 下载图片
* 等待优化

* 注：由于网络原因，pixiv的http request可能不流畅,运行master.js可能会长时间没有结果，因此运行前请先使用ava跑一遍测试

------------------

<h5>更新日志，发布计划详见[wiki](https://github.com/Yuki-Minakami/PHelper/wiki) 
----------  
  
#### 更多信息请联系 likaiboy_2012@126.com





