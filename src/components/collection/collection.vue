<template lang="html">
  <div class="container" v-show="isCollection">
    <div class="header">
      我的收藏
      <i @click="showAbout" class="close"></i>
    </div>
    <div class="content">
      <div v-for="item of list" class="item">
        <div class="new" v-html="item"></div>
      </div>
      <div class="textself">
          这是我的收藏页面，暂时还没有数据！
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'collection',
  data () {
    return {
    list: []
    }
  },
  computed: {
    isCollection() {
      return this.$store.state.isCollection
    }
  },
  mounted() {
    var collectionList = localStorage.getItem("collectiondata")
    var cList = JSON.parse(collectionList);
    this.list.push(cList.collection)
  },
  methods: {
    showAbout() {
      this.$store.commit('Collec', false)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../common/style/collection.scss";
</style>
