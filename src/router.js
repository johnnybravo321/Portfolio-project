import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import project from './components/project.vue'
import projects from './views/projects.vue'
import contact from './views/contact.vue'





Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/projects',
      name: 'projects',
      component: projects
    }, 
    {
    path: '/project/:id',
    name: 'project',
    component: project
    },

    {
      path: '/contact',
      name: 'contact',
      component: contact
      
    }
  ]
})
