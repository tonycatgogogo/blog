import  VueRouter from 'vue-router'

import HomeContainer from './components/homeComponent.vue'
import Resume from './components/resumeComponent.vue'
import Project from './components/projectComponent.vue'
import Contact from './components/contactComponent.vue'
let router = new VueRouter({
    routes: [
        {path: '/', redirect: '/home'},
        {path: '/home', component: HomeContainer},
        {path: '/resume', component: Resume},
        {path: '/project', component: Project},
        {path: '/contact', component: Contact},
    ],
    linkActiveClass: 'active'
})
export default router

