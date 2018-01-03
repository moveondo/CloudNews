<template lang="html">
  <div class="container">
    <div v-html="html"></div>
    <div class="like">
      <div @click="Switch()"><img :src="url[like]" alt=""></div>{{status}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'news',
  data () {
    return {
      html: ''
      // url: [require('../../pic/like_1.png') , require('../../pic/like_2.png')]
    }
  },
  computed: {
    url() {
      return this.$store.state.url
    },
    like() {
      return this.$store.state.like
    },
    status() {
      return this.$store.state.status
    }
  },
  mounted() {
    this.axios.get(this.$route.params.url)
        .then(data => {
          console.log(data);
          this.html = data.data
        })
  },
  methods: {
    Switch() {
      this.$store.commit('like', {a: '收藏', b: '已收藏'})
      this.axios.get(this.$route.params.url)
          .then(data => {
            this.html = data.data
            let Data = {
              'collection': data.data
            }
            localStorage.setItem('collectiondata', JSON.stringify(Data))
          }).catch((error) => {
            console.log(error);
          })


    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  margin-bottom: 48px;
  overflow: auto;
}
a {
  color: black;
}
.like {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  text-align:right;
  padding-right: 20px;
  padding-bottom:10px;
  border-bottom: 2px solid #808080;
}
.img-wrap img{
  height: 100%;
}
img {
  width: 30px;
  height: 30px;
}
</style>
