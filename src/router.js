import  VueRouter from 'vue-router'

import HomeContainer from './components/homeComponent.vue'
import Resume from './components/resumeComponent.vue'
import Project from './components/projectComponent.vue'
let router = new VueRouter({
    routes: [
        {path: '/', redirect: '/home'},
        {path: '/home', component: HomeContainer},
        {path: '/resume', component: Resume},
        {path: '/project', component: Project},
    ],
    linkActiveClass: 'active'
})
export default router

