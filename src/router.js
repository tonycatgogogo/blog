import  VueRouter from 'vue-router'

import HomeContainer from './components/homeComponent.vue'
import Resume from './components/resumeComponent.vue'
let router = new VueRouter({
    routes: [
        {path: '/', redirect: '/home'},
        {path: '/home', component: HomeContainer},
        {path: '/resume', component: Resume},
    ],
    linkActiveClass: 'active'
})
export default router

