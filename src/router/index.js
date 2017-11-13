import Vue from 'vue'
import Router from 'vue-router'
import Pipeline from '@/components/Pipeline'
import Relationship from '@/components/Relationship'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Relationship
    },
    {
      path: '/relationship',
      name: 'Relationship',
      component: Relationship
    },
    {
      path: '/pipeline',
      name: 'Pipeline',
      component: Pipeline
    }
  ]
})
