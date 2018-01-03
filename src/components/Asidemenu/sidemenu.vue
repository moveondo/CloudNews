<template lang="html">
  <transition name="slide-left">
    <div class="aside-menu" v-show="isShowAsideMenu" >
        <div class="menu" >
          <div class="user" :style="{backgroundColor:$store.state.bgColor}" @click="$router.push('/Enter')">
              <div class="user-avatar">
                  <img src='../../pic/user.png' alt="">
              </div>
              <div class="username">
                点击头像登录
              </div>
        </div>
        <div class="message group">
      <!-- *********************************         -->
          <div class="collection group" @click="collec">
            <img src="../../pic/collection.png" alt="">我的收藏
          </div>
      <!-- *********************************         -->
          <div class="color group" @click="changeC">
            <img src="../../pic/color.png" alt="">个性换肤
          </div>
      <!-- *********************************         -->
        <router-link to="/msg">
          <div class="info group" @click="toShowMsg">
            <img src="../../pic/info.png" alt="">个人主页
          </div>
        </router-link>
      <!-- *********************************         -->
          <div class="history group">
            <img src="../../pic/history.png" alt="">浏览历史
          </div>
      <!-- *********************************         -->

          <div class="about group" @click="showAbout">
            <img src="../../pic/about.png" alt="">关于
          </div>

      <!-- *********************************         -->
        </div>
      </div>

   <div @click.stop.prevent="showAsideMenu" class="mask"></div>

  </div>
  </transition>
</template>

<script>
export default {
  name: 'asideMenu',
  computed: {
    isShowAsideMenu() {
      return this.$store.state.isShowAsideMenu;
    },
    tip() {
      return this.$store.state.tip;
    }
  },
  methods: {
    showAsideMenu() {
      this.$store.commit('showAsideMenu', false);
      this.$store.commit('showAbout', false)
      this.$store.commit('changeC', false);

    },
    showAbout() {
      this.$store.commit('showAbout', true);
    },
    collec() {
      this.$store.commit('Collec', true);
    },
    changeC() {
      let c = !this.$store.state.ischangeC
      this.$store.commit('changeC', c);
    },
    toShowMsg() {
      this.$store.commit('showAsideMenu', false);
      this.$store.commit('details', {data: '我的简历', fa: false, fb: true, fc: false})
      this.$store.commit('hidTab', false)
      this.$store.commit('hmdTab', false)
      if(this.$store.state.ischangeC = true) {
        this.$store.commit('changeC', false);
      }
    },
  }
}
</script>

<style lang="scss" scoped>
@import "../../common/style/sidemenu.scss";
</style>
