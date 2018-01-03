<template lang="html">
  <div class="container">
    <div class="message" :style="{backgroundColor:$store.state.color}">
      <div class="msg">
        <h2>李先生</h2>
        <div class="target">
            <h1>欢迎来稿合作</h1>
        </div>
        <div class="background">
          个人信息：
          <p>公司：上海拍拍贷金融信息服务有限公司</p>
          <p>职位：资深前端工程师</p>
          <p>个人网站：<a href="https://github.com/moveondo" target="_blank">moveon</a></p>
         
        </div>
      </div>
      <div class="more">
        <p class="aa">其他信息：</p>
        <p class="bb">github：<a href="https://github.com/moveondo" target="_blank">moveon</a></p>
        <p class="bb">QQ：1020124712</p>
        <p class="bb">邮箱：movelilu@163.com</p>
      </div>
    </div>
    <div class="production">
      <div class="prox">
        <div class="top">
          <img src="../../pic/jishu.png" alt="">
          <p class="pro_1">技术栈</p>
        </div>
        <div class="bottom">
          <p class="bat">【前端】Vue.js、CSS/CSS3、HTML/HTML5、JQuery、JavaScript(ES6、ES5)、SASS(SCSS)、Socket.io</p>
          <p class="bat">【后端】Node.js(Express.js,Koa.js),PHP</p>
          <p class="bat">【自动化构建】Webpack、Gulp</p>
          <p class="bat">【版本管理】Git,SVN</p>
        </div>
      </div>
      <div class="proy">
        <div class="top">
          <img src="../../pic/zuopin.png" alt="">
          <p class="pro_1">作品</p>
        </div>
        <div class="bottom">
          参考本人<p class="bb">github：<a href="https://github.com/moveondo" target="_blank">moveon</a></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'showMsg',
  data () {
    return {

    }
  },
  computed: {
  }
}
</script>

<style lang="scss" scoped>
@import "../../common/style/showmsg.scss";
</style>
