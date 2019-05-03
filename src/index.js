//入口文件
import Vue from 'vue'

import VueRouter from 'vue-router'

Vue.use(VueRouter)

// import moment from 'moment'
//
// Vue.filter('dateFormat', function (dataStr, pattern = 'YYYY-MM-DD HH:MM:SS') {
//     return moment(dataStr).format(pattern)
// })

import  VueResource from  'vue-resource'

Vue.use(VueResource)

//设置请求根路径

// Vue.http.options.root = 'http://vue.studyit.io'
// Vue.http.options.emulateJSON = true
// import './lib/mui/css/mui.min.css'
// import './lib/mui/css/icons-extra.css'
// import {Header, Swipe, SwipeItem, Button} from 'mint-ui'
//
// Vue.component(Header.name, Header)
// Vue.component(Swipe.name, Swipe)
// Vue.component(SwipeItem.name, SwipeItem)
// Vue.component(Button.name, Button)
// import MintUI from 'mint-ui'
// Vue.use(MintUI)
// import  'mint-ui/lib/style.css'

//图片预览插件
// import VuePreview from 'vue-preview'
// Vue.use(VuePreview)
import './../node_modules/bootstrap/dist/js/bootstrap.min.js';
import router from './router'

import app from './app.vue'

let vm = new Vue({
    el: '#app',
    data: {},
    render: c => c(app),
    router
});