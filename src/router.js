import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import Todo from './components/Todo/Todo'
import Topics from './components/Topic/Topics'
import Topic from './components/Topic/Topic'
import About from './views/About'

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
      path: '/todo',
      name: 'todo',
      component: Todo
    },
    {
      path: '/topics',
      name: 'topics',
      component: Topics
    },
    {
      path: '/topic/:topicId',
      name: 'topic',
      component: Topic
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
