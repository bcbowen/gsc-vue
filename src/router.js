import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

/*
import Contacts from './views/Contacts.vue'
import Events from './views/Events.vue'
import Join from './views/Join.vue'
import Meetings from './views/Meetings.vue'
import News from './views/News.vue'
import SailorsPoint from './views/SailorsPoint.vue'
*/

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/sailorsPoint',
      name: 'sailorsPoint',
      component: () => import(/* webpackChunkName: "about" */ './views/SailorsPoint.vue')
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: () => import(/* webpackChunkName: "about" */ './views/Contacts.vue')
    },
    {
      path: '/meetings',
      name: 'meetings',
      component: () => import(/* webpackChunkName: "about" */ './views/Meetings.vue')
    },
    {
      path: '/news',
      name: 'news',
      component: () => import(/* webpackChunkName: "about" */ './views/News.vue')
    },
    {
      path: '/events',
      name: 'events',
      component: () => import(/* webpackChunkName: "about" */ './views/Events.vue')
    },
    {
      path: '/join',
      name: 'join',
      component: () => import(/* webpackChunkName: "about" */ './views/Join.vue')
    }
  ]
})
