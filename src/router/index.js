import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/legacy-letter',
    name: 'LegacyLetter',
    component: () => import(/* webpackChunkName: "legacy-letter" */ '../views/LegacyLetter.vue')
  },
  {
    path: '/intro',
    name: 'Intro',
    component: () => import(/* webpackChunkName: "intro" */ '../views/Intro.vue')
  },
  {
    path: '/day-one',
    name: 'DayOne',
    component: () => import(/* webpackChunkName: "day-one" */ '../views/DayOne.vue')
  },
  {
    path: '/day-two',
    name: 'DayTwo',
    component: () => import(/* webpackChunkName: "day-two" */ '../views/DayTwo.vue')
  },
  {
    path: '/day-three',
    name: 'DayThree',
    component: () => import(/* webpackChunkName: "day-three" */ '../views/DayThree.vue')
  },
  {
    path: '/day-four',
    name: 'DayFour',
    component: () => import(/* webpackChunkName: "day-four" */ '../views/DayFour.vue')
  },
  {
    path: '/day-five',
    name: 'DayFive',
    component: () => import(/* webpackChunkName: "day-five" */ '../views/DayFive.vue')
  },
  {
    path: '/day-six',
    name: 'DaySix',
    component: () => import(/* webpackChunkName: "day-six" */ '../views/DaySix.vue')
  },
  {
    path: '/time-line',
    name: 'TimeLine',
    component: () => import(/* webpackChunkName: "time-line" */ '../views/TimeLine.vue')
  },
  {
    path: '/help-lines',
    name: 'HelpLines',
    component: () => import(/* webpackChunkName: "help-lines" */ '../views/HelpLines.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import(/* webpackChunkName: "contact" */ '../views/Contact.vue')
  }
]
// small change
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
