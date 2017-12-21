import Vue from 'vue'
import Router from 'vue-router'
import EssayDetail from '@/components/EssayDetail'
import Home from '@/components/Home'
Vue.use(Router)

export default new Router({
  routes: [
    {path: '/essay', component: Home},  
    {path: '/essay/:id', component: EssayDetail }
  ]
});
