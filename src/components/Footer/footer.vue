<template lang="html">
  <div class="container" v-show="isshowf">
    <div class="tab">
      <div class="home option" @click="home">
        <img :src="url1[a]" alt="">
        <router-link to="/">首页</router-link>
      </div>
      <div class="Focus option" @click="focus">
        <img :src="url2[b]" alt="">
        <router-link :to="{name: 'Focus'}">要闻</router-link>
      </div>
      <div class="radio option" @click="radio" v-if="isname">
        <img :src="url3[c]" alt="">
        <router-link to="/Talk">智能室 </router-link>
      </div>
       <div class="radio option" @click="radio" v-else>
        <img :src="url3[c]" alt="">
        <router-link to="/login">智能室 </router-link>
      </div>
      <div class="my option" @click="my" >
        <img :src="url4[d]" alt="">
        <router-link :to="{name: 'Msg'}">我</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'footer',
  data () {
    return {
      a: 1,
      url1: [require('../../pic/home_1.png') , require('../../pic/home_2.png')],
      b: 0,
      url2: [require('../../pic/focus_1.png') , require('../../pic/focus_2.png')],
      c: 0,
      url3: [require('../../pic/radio_1.png') , require('../../pic/radio_2.png')],
      d: 0,
      url4: [require('../../pic/my_1.png') , require('../../pic/my_2.png')]
    }
  },
  computed: {
    isshowf() {
      return this.$store.state.isshowf
    },
    isname() {
      return this.$store.state.name
    }
  },
  methods: {
    my() {
      this.$store.commit('details', {data: '我的简介', fa: false, fb: true, fc: false})
      this.$store.commit('hidTab', false)
      this.$store.commit('hmdTab', false)
      this.$store.commit('hiddiv', false)
      this.$store.commit('showMore', false)
      this.d = 1
      this.a = this.b = this.c = 0
    },
    home() {
      this.$store.commit('hidTab', true)
      this.$store.commit('details', {data: this.$store.state.Title, fa: true, fb: false, fc: true})
      this.$store.commit('hidTab', true)
      this.$store.commit('hodTab', false)
      this.$store.commit('hmdTab', false)
      this.$store.commit('hiddiv', true)
      this.a = 1
      this.d = this.b = this.c = 0
    },
    focus() {
      this.$store.commit('details', {data: this.$store.state.Title, fa: true, fb: false, fc: true})
      this.$store.commit('hidTab', false)
      this.$store.commit('hodTab', true)
      this.$store.commit('hiddiv', true)
      this.b = 1
      this.a = this.c = this.d = 0
    },
    radio() {
      this.$store.commit('details', {data: '智能聊天室', fa: false, fb: true, fc: false})
      this.$store.commit('hidTab', false)
      this.$store.commit('hodTab', false)
      this.$store.commit('hmdTab', true)
      this.$store.commit('hiddiv', false)
      this.$store.commit('hidfooter', false)
      this.a = this.d = this.c = 0
      this.c = 1
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../common/style/footer.scss";
</style>
