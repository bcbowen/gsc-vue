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
      component: () => import(/* webpackChunkName: "sailorsPoint" */ './views/SailorsPoint.vue'),
      children: [
        {
          path: 'about',
          component: () => import(/* webpackChunkName: "sailorspoint-about" */ './components/SailorsPoint/About.vue')
        },
        {
          path: 'classes',
          component: () => import(/* webpackChunkName: "sailorspoint-classes" */ './components/SailorsPoint/Classes.vue')
        },
        {
          path: 'kidLearnToSail',
          component: () => import(/* webpackChunkName: "sailorspoint-kidsLearnToSail" */ './components/SailorsPoint/KidLearnToSail.vue')
        },
        {
          path: 'adultLearnToSail',
          component: () => import(/* webpackChunkName: "sailorspoint-adultLearnToSail" */ './components/SailorsPoint/AdultLearnToSail.vue')
        },
        {
          path: 'racing',
          component: () => import(/* webpackChunkName: "sailorspoint-racing" */ './components/SailorsPoint/Racing.vue')
        }
      ]
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: () => import(/* webpackChunkName: "contacts" */ './views/Contacts.vue')
    },
    {
      path: '/meetings',
      name: 'meetings',
      component: () => import(/* webpackChunkName: "meetings" */ './views/Meetings.vue')
    },
    {
      path: '/events',
      name: 'events',
      component: () => import(/* webpackChunkName: "events" */ './views/Events.vue')
    },
    {
      path: '/membership',
      name: 'membership',
      component: () => import(/* webpackChunkName: "membership" */ './views/Membership.vue')
    }
  ]
})
