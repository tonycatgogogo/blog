import  VueRouter from 'vue-router'

import HomeContainer from './components/homeComponent.vue'
let router = new VueRouter({
    routes: [
        {path: '/', redirect: '/home'},
        {path: '/home', component: HomeContainer}
    ],
    linkActiveClass: 'active'
})
export default router

