<template lang="html">
  <div v-show="isShowAbout" class="container">
    <transition name="slide">
      <div class="msg">
        <i @click="showAbout" class="close"></i>
        <div class="title">
          <h2>关于作品</h2>
          <h3>vue.js全家桶打造的一款云新闻</h3>
        </div>
        <div class="content">
          <p class="tech"><b>技术栈</b></p>
          <div class="skill">axios(发起请求)<br>Vuex(状态共享)<br>vue-router(前端路由)<br>Vue2<br>SASS,LESS
          <br>Express(node.js)<br>Canvas(载入页面的动画条)
          <br>Socket.io<br>MySql
          <br>ES6<br>localStorage<br>Webpack<br>CSS3<br>HTML5
          </div>
        </div>
        <div class="link">
          <p class="url"><b>个人网站:</b>&nbsp&nbsp&nbsp<a href="https://github.com/moveon" target="_blank">moveondo</a></p>
          <p class="url"><b>源码地址:</b>&nbsp&nbsp&nbsp<a href="https://github.com/moveondo/CloudNews" target="_blank">github</a></p>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'about',
  data () {
    return {

    }
  },
  computed: {
    isShowAbout() {
      return this.$store.state.isShowAbout;
    }
  },
  methods: {
    showAbout() {
      this.$store.commit('showAbout', false)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../common/style/about.scss";
</style>
