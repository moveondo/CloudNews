import Vue from 'vue'
import Router from 'vue-router'
import NewsList from '../components/NewsList/newslist.vue';
import News from '../components/News/news.vue';
import Msg from '../components/ShowMsg/showmsg.vue';
import Focus from '../components/Focus/focus.vue';
import Talk from '../components/Talk/talk.vue';
import Login from '../components/login/login.vue';
import AI from '../components/AI/AI.vue';
import Enter from '../components/enter/enter.vue';
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'NewsList',
      component: NewsList
    },
    {
      path: '/news',
      name: 'News',
      component: News
    },
    {
      path: '/msg',
      name: 'Msg',
      component: Msg
    },
    {
      path: '/focus',
      name: 'Focus',
      component: Focus
    },
    {
      path: '/talk',
      name: 'Talk',
      component: Talk
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/AI',
      name: 'AI',
      component: AI,
    },
    {
      path: '/enter',
      name: 'Enter',
      component: Enter,
    },
  ]
})
