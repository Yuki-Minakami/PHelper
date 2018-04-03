
<h1 align="center">PHelper</h1>
 
<p align="center">
  <a title = "Building Status" href="https://travis-ci.org/Yuki-Minakami/PHelper">
    <img src="https://travis-ci.org/Yuki-Minakami/PHelper.svg?branch=master">
  </a>
  <a title = "license" href="https://github.com/ellerbrock/open-source-badge/">
      <img src="https://badges.frapsoft.com/os/mit/mit.svg?v=102">
    </a>
</p>

### 这是一个基于Node.js的爬虫项目，主要用来爬取[pixiv.net-插画网站](http://pixiv.net)上的高分图片

## PHelper可以做什么
* 根据用户自定义规则来爬取满足条件的图片信息，包括链接和tag等。<br/>
* 爬下来的图片可以做一些有趣的应用，例如机器学习和推荐系统，或者一个第三方app等等


## 项目结构
主要代码分布在getURL和download文件夹中
##### getURL：按照ID逐个遍历pixiv上的图片，按一定规则筛选后提取页面中的图片URL，写入持久化介质中(需要自行实现)
##### download：从持久化介质中读取url并下载图片



## 准备工作
### redis
* 运行该项目需要redis，请在运行之前确保redis已经启动，并且为默认端口


## 安装与运行
### 安装依赖

* 将项目克隆到本地后，在根目录下运行`npm install`来安装依赖，本项目使用了shrinkpack来管理依赖，使得安装过程不需要http请求


### 爬取链接
* 进入cluster目录，运行`npm start`
* 这会开启一个生产者和多个消费者，由运行机器的cpu数量决定，持久化的方法需要自行实现，目前只是在控制台中打印出来可以存入文件或者数据库

### 下载图片
* 等待优化，计划仍然使用redis实现

* 注：由于网络原因，pixiv的http request可能不流畅，因此运行前请在根目录下运行 `npm test`来运行测试用例



<h5>更新日志，发布计划详见[wiki](https://github.com/Yuki-Minakami/PHelper/wiki) 

  
#### 如果有疑问欢迎提issue





