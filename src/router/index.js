import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Pipeline from '@/components/Pipeline'
import Relationship from '@/components/Relationship'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
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
