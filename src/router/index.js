import Vue from 'vue'
import Router from 'vue-router'
import LogFeed from '@/components/LogFeed'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LogFeed',
      component: LogFeed
    }
  ]
})
