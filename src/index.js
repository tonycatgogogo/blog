//入口文件
import Vue from 'vue'

import VueRouter from 'vue-router'

Vue.use(VueRouter)

import  VueResource from  'vue-resource'

Vue.use(VueResource)
Vue.http.options.emulateJSON = true
import moment from 'moment'

Vue.filter('dateFormat', function (dataStr, pattern = 'YYYY-MM-DD') {
    return moment(dataStr).format(pattern)
})
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)
import vueJsonp from 'vue-jsonp'
Vue.use(vueJsonp)
import "./../node_modules/bootstrap/dist/js/bootstrap.min.js"
import animate from 'animate.css'
import $ from 'jquery'
import router from './router.js'

import app from './App.vue'

let vm = new Vue({
    el: '#app',
    data: {},
    router,
    render: c => c(app)
});