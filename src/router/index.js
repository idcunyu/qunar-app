import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import CityIn from '@/pages/city/in/City'
import CityOut from '@/pages/city/out/City'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/city/in',
    name: 'CityIn',
    component: CityIn
  }, {
    path: '/city/out',
    name: 'CityOut',
    component: CityOut
  }]
})
