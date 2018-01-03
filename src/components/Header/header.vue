<template lang="html">
<div class="header" :style="{backgroundColor:$store.state.bgColor}">
  <div class="title">
    <i class="icon-menu" @click.stop.prevent="showAsideMenu" v-show="showmenu"></i>
    <i class="icon-back" @click.stop.prevent="back" v-show="showback"></i>
    <h3>{{title}}</h3>
    <i class="icon-msg" v-show="msg"></i>
    <i class="icon-more" v-show="more" @click.stop.prevent="share"></i>
    <span class="counts" :style="{backgroundColor:$store.state.bgColor}" v-show="msg">{{Math.ceil(30 * Math.random())}}</span >
  </div>
</div>
</template>
<script>
export default {
  name: 'header',
  data () {
    return {

    }
  },
  computed: {
    title() {
      return this.$store.state.title
    },
    showmenu() {
      return this.$store.state.showmenu
    },
    showback() {
      return this.$store.state.showback
    },
    msg() {
      return this.$store.state.msg
    },
    more() {
      return this.$store.state.ismore
    }
  },
  methods: {
    showAsideMenu() {
      this.$store.commit('showAsideMenu', true)
    },
    back() {
      this.$router.go(-1)
      this.$store.commit('details', {data: this.$store.state.Title, fa: true, fb: false, fc: true})
      this.$store.commit('hidTab', true)
      this.$store.commit('hiddiv', true)
      this.$store.commit('hidfooter', true)
    },
    share() {
      this.$store.commit('share', true)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../common/style/header.scss";
</style>
