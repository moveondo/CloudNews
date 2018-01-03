// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios';
import VueAxios from 'vue-axios';
import Vuex from 'vuex';
import moment from 'moment';

Vue.prototype.moment = moment;

Vue.use(VueAxios, axios);
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    // url: [require('../../pic/home_1.png') , require('../../pic/home_2.png')],
    Title: '云新闻',
    newslist: [],
    url: [require('./pic/like_1.png') , require('./pic/like_2.png')],
    isShowAsideMenu: false,
    isShowAbout: false,
    ischangeC: false,
    tab: 'top',
    Tab: 'guoji',
    title: '云新闻',
    showmenu: true,
    showback: false,
    msg: true,
    ismore: true,
    hid: true,
    hod: false,
    hmd: false,
    bgColor: '',
    like: 0,
    status: '收藏',
    v1: true,
    isshowf: true,
    isLoading: false,
    isShare: false,
    isCollection: false,
    name:"",
    avatarUrl: `http://omratag7g.bkt.clouddn.com/icon-avatar${parseInt(Math.random()*10)}.svg`
  },
  mutations: {
    obtain (state, data) {
        state.newslist = data
    },
    details (state, data) {
      state.title = data.data || state.title
      state.showmenu = data.fa
      state.showback = data.fb
      state.msg = data.fc
    },
    showAsideMenu (state, flag) {
      state.isShowAsideMenu = flag;
    },
    showAbout (state, flag) {
      state.isShowAbout = flag;
    },
    changeC (state, flag) {
      state.ischangeC = flag
    },
    changeName(state, name) {
      state.name = name;
    },
    showMore (state, flag) {
      state.ismore = flag
    },
    changeTab (state, data) {
      state.newslist = data.news || state.newslist;
      state.tab = data.type || state.tab;
      state.isLoading = data.isloading
    },
    changeTob (state, data) {
      state.newslist = data.news || state.newslist;
      state.Tab = data.type || state.Tab;
      state.isLoading = data.isloading
    },
    hidTab (state, flag) {
      state.hid = flag
    },
    hodTab (state, flag) {
      state.hod = flag
    },
    hmdTab (state, flag) {
      state.hmd = flag
    },
    setBgColor (state, value) {
      // if(/^#[0-9a-fA-F]{3,6}$/.test(value)) {
        state.bgColor = value;
      // }
    },
    like (state, data) {
      state.like++
      state.status = data.b
      if(state.like > 1) {
        state.like = 0
        state.status = data.a
      }
    },
    hiddiv (state, flag) {
      state.v1 = flag
    },
    hidfooter (state, flag) {
      state.isshowf = flag
    },
    share (state, flag) {
      state.isShare = flag;
      // state.ismore = flag
    },
    Collec (state, flag) {
      state.isCollection = flag
    }
  }
})


Vue.config.productionTip = false;
// Vue.prototype.socket = io.connect('http://localhost:8088/');

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
