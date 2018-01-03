<template>
  <div id="app">
    <Task></Task>
    <Vheader></Vheader>
    <ShareMore></ShareMore>
    <Vcontent></Vcontent>
    <Vcollection></Vcollection>
    <Sooter></Sooter>
    <Asidemenu></Asidemenu>
    <Changec></Changec>
    <About></About>
  </div>
</template>

<script>
import Task from './components/Task/task.vue';
import Vheader from './components/Header/header.vue';
import Vcontent from './components/Content/content.vue';
import Vcollection from './components/collection/collection.vue';
import ShareMore from './components/shareMore/shareMore.vue';
import Asidemenu from './components/Asidemenu/sidemenu.vue';
import Sooter from './components/Footer/footer.vue';
import Like from './components/Like/like.vue';
import Changec from './components/SetColor/changecolor.vue';
import About from './components/About/about.vue';
export default {
  name: 'app',
  components: {
    Vheader,
    Vcontent,
    Vcollection,
    ShareMore,
    Asidemenu,
    Sooter,
    Like,
    Changec,
    About,
    Task
  },
  created() {
    localStorage.addr = '上海';
    localStorage.name = "somebody"
  },
  methods: {
    scroll(event) {
        if (event.target.scrollTop > event.target.clientHeight) {
          this.$store.commit('backTop', true)
        } else {
          this.$store.commit('backTop', false)
        }
    }
  }

}
</script>

<style lang="scss">
@import "./common/style/base.scss";
#app {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  // overflow: hidden;
}

</style>
