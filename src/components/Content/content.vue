<template lang="html">
  <div class="container">
    <div class="tab" v-show="hid">
      <div @click="changeTab('top')"  :class="{isBorder: tab==='top'}"  class="headlines type"><router-link to="/">头条</router-link></div>
      <div @click="changeTab('yule')" :class="{isBorder: tab==='yule'}" class="entertainment type"><router-link to="/">娱乐</router-link></div>
      <div @click="changeTab('tiyu')" :class="{isBorder: tab==='tiyu'}" class="pe type"><router-link to="/" >体育</router-link></div>
      <div @click="changeTab('caijing')" :class="{isBorder: tab==='caijing'}" class="Finance type"><router-link to="/">财经</router-link></div>
      <div @click="changeTab('keji')" :class="{isBorder: tab==='keji'}" class="science type"><router-link to="/">科技</router-link></div>
      <div @click="changeTab('junshi')" :class="{isBorder: tab==='junshi'}" class="Military type"><router-link to="/">军事</router-link></div>
    </div>
    <div class="tab" v-show="hod">
      <div @click="changeTob('guoji')" :class="{isBorder: Tab==='guoji'}" class="headlines type"><router-link to="/focus" >国际</router-link></div>
      <div @click="changeTob('shishang')" :class="{isBorder: Tab==='shishang'}" class="entertainment type"><router-link to="/focus">时尚</router-link></div>
      <div @click="changeTob('guonei')" :class="{isBorder: Tab==='guonei'}" class="pe type"><router-link to="/focus" >国内</router-link></div>
      <div @click="changeTob('shehui')" :class="{isBorder: Tab==='shehui'}" class="Finance type"><router-link to="/focus">社会</router-link></div>
    </div>
    <div class="talk " v-show="hmd">
      <div @click="changeTab('guoji')" :class="{isBorder: tab==='guoji'}" class="headlines type">群聊</div>
      <div @click="changeTab('shishang')" :class="{isBorder: tab==='shishang'}" class="entertainment type">智能问答</div>
    </div>
    <div class="fill" v-show="v1"></div>

    <div class="news" >
        <div class="loading">
          <i v-show="isLoading" class="icon-loading"></i>
        </div>
        <router-view></router-view>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  computed: {
    tab() {
      return this.$store.state.tab
    },
    Tab() {
      return this.$store.state.Tab
    },
    hid() {
      return this.$store.state.hid
    },
    hod() {
      return this.$store.state.hod
    },
    hmd() {
      return this.$store.state.hmd
    },
    v1() {
      return this.$store.state.v1
    },
    isLoading() {
      return this.$store.state.isLoading
    }
  },
  methods: {
    changeTab(type) {
      // this.$store.commit('changeTab', {news: [], type: type})
      this.$store.commit('changeTab', { news: [],type: type,isloading: true})
      this.axios.get('/api/news/' + type)
          .then(data => {
                //console.log(data);

                if(data.status) {
                  this.$store.commit('changeTab', {news: data.data.result.data, type: type, isloading: false})
                  this.$store.commit('details', {data: this.$store.state.Title, fa: true, fb: false, fc: true,})
                }
            })

    },
    changeTob(type) {
      this.$store.commit('changeTob', { news: [],type: type,isloading: true})
      this.axios.get('/api/news/' + type)
          .then(data => {
                // console.log(data);
                if(data.status) {
                  this.$store.commit('changeTob', {news: data.data.result.data, type: type, isloading: false})
                }
          })
    },
    // toTop() {
    //     if (this.$refs.article.scrollTop <= 0) {
    //       return;
    //     }
    //     let time = setInterval(() => {
    //       if (this.$refs.article.scrollTop <= 0) {
    //         clearInterval(time);
    //       }
    //       this.$refs.article.scrollTop -= 200;
    //     }, 1)
    //   }
  }
}
</script>

<style lang="scss" scoped>
@import "../../common/style/content.scss";
</style>
