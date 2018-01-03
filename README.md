# vue全家桶+node.js+socket打造新闻社区


 本文包括新闻页面，智能聊天界面，和登录注册功能，并区分是否登录和登录后状态进入聊天室。
 
 ### 技术栈

前端：html、css、scss、less、ES6、webpack、socket.io、vue-cli、vue2、vuex、vue-router、vue-resource

后端：Node、Mysql

### 项目运行方法

#### 注：前端使用ES6的很多新特性，所以NodeJs 必须是6.0稳定版本，我使用的版本是8.9.0

（1）git clone https://github.com/moveondo/CloudNews.git

（2）npm install

（3）npm run dev

（4）安装mysql数据库，新建数据库tour，然后导入全部数据（此项目根目录下的tour.sql）

（5）浏览器访问：localhost:8088

（6）数据库tour_user表中的用户默认密码均为123456

### 说明

如果对您有帮助，您可以点右上角 "Star" 支持一下 谢谢！ ^_^

或者您可以 "follow" 一下，我会不断开源更多的有趣的项目

开发环境 WIN7、Chrome 61.0、nodejs 8.9.0、Mysql5.7.14


### 目标功能

- [x] 登录、注册（100%）
- [x] 云新闻首页（100%）
- [x] 云新闻列表页展示（100%）
- [x] 智能聊天室（100%）
- [x] 区分是否登录进入聊天室


#### 注：此项目纯属个人爱好及代码测试。

## 项目截图

全局页面：

![2](https://github.com/moveondo/CloudNews/blob/master/static/image/2.png)

如果没有登录状态：

![7](https://github.com/moveondo/CloudNews/blob/master/static/image/7.png)

有登录状态时：

![4](https://github.com/moveondo/CloudNews/blob/master/static/image/5.png)
![5](https://github.com/moveondo/CloudNews/blob/master/static/image/1.png)

注册登录页面后端MySQL：

![2](https://github.com/moveondo/CloudNews/blob/master/static/image/3.png)
![3](https://github.com/moveondo/CloudNews/blob/master/static/image/4.png)




## 注意事项

node版本要求较高 需要使用新版本的node

升级node

```shell
## 安装node的一个版本管理器n
npm install n -g  

## 安装最新版本的node
n latest  

## 切换到某个固定的版本
n ^7.6.0  
```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```


