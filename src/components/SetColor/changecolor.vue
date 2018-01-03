<template lang="html">
  <transition name="abc" >
    <div class="container" v-show="ischangeC">
      <div class="red box" @click="red"></div>
      <div class="black box" @click="black"></div>
      <div class="blue box" @click="blue"></div>
      <div class="green box" @click="green"></div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'changeC',
  data () {
    return {

    }
  },
  computed: {
    ischangeC() {
      return this.$store.state.ischangeC;
    }
  },
  methods: {
    red() {
      this.$store.commit('setBgColor', '#BE0122');

    },
    green() {
      this.$store.commit('setBgColor', 'green');
      // this.$store.commit('setColor', '#808080');
    },
    black() {
      this.$store.commit('setBgColor', '#61689E');
    },
    blue() {
      this.$store.commit('setBgColor', 'blue');
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../common/style/changecolor.scss";
</style>
