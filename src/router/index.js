import Vue from 'vue'
import Router from 'vue-router'
import EssayDetail from '@/components/EssayDetail'
import Home from '@/components/Home'
Vue.use(Router)

Router.prototype.goBack = function () {
  this.isBack = true
  window.history.go(-1)
}

export default new Router({
  routes: [
    { path: '/essay', component: Home },
    { path: '/essay/:id', component: EssayDetail }
  ]
})
