//入口文件
import Vue from 'vue'

import VueRouter from 'vue-router'

Vue.use(VueRouter)

import  VueResource from  'vue-resource'

Vue.use(VueResource)
Vue.http.options.emulateJSON = true

import "./../node_modules/bootstrap/dist/js/bootstrap.min.js"
import router from './router.js'

import app from './App.vue'

let vm = new Vue({
    el: '#app',
    data: {},
    router,
    render: c => c(app)
});