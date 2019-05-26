import Vue from 'vue'
import Router from 'vue-router'
import MainMenu from './views/MainMenu.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'mainmenu',
      component: MainMenu
    },
    {
      path: '/game',
      name: 'game',
      component: () => import('./views/Game.vue')
    }
  ]
})
