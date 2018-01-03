<template lang="html">
  <div v-show="isShare" class="container">
    <div class="content">
      <div class="qq group" @click.stop.prevent="share">分享至QQ</div>
      <div class="weixin group" @click.stop.prevent="share">分享至微信</div>
      <div class="weibo group" @click.stop.prevent="share">分享至微博</div>
    </div>
    <div @click.stop.prevent="hidMore" class="mask"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  computed: {
    isShare() {
      return this.$store.state.isShare
    }
  },
  methods: {
    hidMore() {
      this.$store.commit('share', false)
    },
    share() {
      alert('您还没有登录，不能分享哦！')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../common/style/sharemore.scss";

</style>
