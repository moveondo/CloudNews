<template lang="html">
  <div class="container">
    <div v-for="(item, index) of focusNews" class="item">
      <router-link to="/news">
          <div class="news" @click="details(item.url, item.author_name)">
            <img v-if="item.thumbnail_pic_s" :src="item.thumbnail_pic_s" alt="">
            <div class="msg">
              <p class="title">{{item.title}}</p>
              <div class="more">
                <span>{{item.author_name}}</span>
                <span>{{item.date}}</span>
              </div>
            </div>
          </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'focus',
  data () {
    return {

    }
  },
  computed: {
    focusNews() {
      return this.$store.state.newslist;
    }
  },
  created() {
    this.axios.get('/api/news/shehui')
        .then(data => {
          console.log(data);
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
@import "../../common/style/focus.scss";
</style>
