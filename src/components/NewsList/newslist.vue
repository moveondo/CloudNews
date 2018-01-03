<template lang="html">
    <div class="container">
      <!-- <transition-group name="slide-top"> -->
        <div v-for="(item, index) of newslist" :key="index" class="item">
          <router-link :to="{name: 'News'}">
            <div class="news" @click="details(item.url, item.author_name)">
              <div class="title">
                <p>
                  <span class="flag">{{item.title}}</span>
                </p>
              </div>
              <div class="pic">
                <img v-if="item.thumbnail_pic_s" class="photo" :src="item.thumbnail_pic_s" alt="">
                <img v-if="item.thumbnail_pic_s02" class="photo" :src="item.thumbnail_pic_s02" alt="">
                <img v-if="item.thumbnail_pic_s03" class="photo" :src="item.thumbnail_pic_s03" alt="">
              </div>
              <div class="more">
                <span>
                  <img class="avatar" :src="item.thumbnail_pic_s" alt="">
                </span>
                <span class="autor">
                  {{item.author_name}}
                </span>
                <span class="date">
                  {{Math.ceil(500 * Math.random())}}跟贴
                </span>
              </div>
            </div>
          </router-link>
        </div>
      <!-- </transition-group> -->

    </div>
</template>

<script>
export default {
  name: 'newslist',
  data () {
    return {

    }
  },
  computed: {
    newslist() {
        return this.$store.state.newslist;
    },
     
  },
   mounted () {
  this.$store.commit('details', {data: '云新闻', fa: true, fb: false, fc: true});
   this.$store.commit('hidfooter', true);
  },
  created() {
    this.axios.get('/api/news/top')
        .then(data => {
          if(data.status) {
            this.$store.commit('obtain', data.data.result.data)
          }
      })
  },
  methods: {
    details(url, name) {
      this.$router.push({ name: 'News', params: {url: url }})
      this.$store.commit('details', {data: name, fa: false, fb: true, fc: false})
      this.$store.commit('showMore', true)

    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../common/style/newslist.scss";
</style>
