<template>
    <div class="project" @click="hide">
        <div class="block-big" v-show="screenWidth>768">
            <el-carousel :interval="5000" type="card" height="300px">
                <el-carousel-item v-for="(item,index) in projectList" :key="index">
                    <a class="medium" :href="item.url" target="_blank"><img v-lazy='item.src' alt="项目图片"></a>
                </el-carousel-item>
            </el-carousel>
        </div>
        <div class="block-small" v-show="screenWidth<= 768">
            <el-carousel :interval="5000" height="200px">
                <el-carousel-item v-for="(item,index) in projectList_small" :key="index">
                    <a class="medium" :href="item.url" target="_blank"><img v-lazy='item.src' alt="项目图片"></a>
                </el-carousel-item>
            </el-carousel>
        </div>
        <div class="portfolio">
            <div class="port-head">
                <h3 class="project-show">作品展示</h3>
            </div>
            <div class="filtr-container clearfloat">
                <div class="filtr-item" v-for="item in projectList" :key="item.id" >
                    <a class="b-animate-go" :href="item.url" target="_blank">
                        <figure class="w3ls-gallery">
                            <img v-lazy='item.src' class="img-responsive" alt="项目图片"/>
                            <figcaption class="w3layouts-caption">
                                <h3>{{item.title}}</h3>
                            </figcaption>
                            <h3 class="project_title">{{item.title}}</h3>
                        </figure>
                    </a>
                </div>
             </div>
        </div>
    </div>
</template>

<script>
    import $ from 'jquery'
    export default {
        data(){
            return{
                projectList:[
                    {id:1, 'src': require('../../static/images/pro1.jpg'), title:"我的简历网站", 'url': 'https://tonycatgogogo.github.io'},
                    {id:3, 'src': require('../../static/images/pro3.jpg'), title:"TodoMVC(Vue.js)", 'url': 'https://tonycatgogogo.github.io/todoList-vue'},
                    {id:4, 'src': require('../../static/images/pro4.jpg'), title:"贪吃蛇", 'url': 'https://tonycatgogogo.github.io/snake_eat'},
                    {id:5, 'src': require('../../static/images/pro5.jpg'), title:"福利彩票", 'url': 'https://tonycatgogogo.github.io/lottery'},
                    {id:7, 'src': require('../../static/images/pro7.jpg'), title:"Resto餐厅",'url': 'https://tonycatgogogo.github.io/Resto_restaurant'},
                    {id:8, 'src': require('../../static/images/pro8.jpg'), title:"360多屏轮状(PC端)", 'url' : 'https://tonycatgogogo.github.io/360pages'},
                    {id:9, 'src': require('../../static/images/pro9.jpg'), title:"京东移动端", 'url':'https://tonycatgogogo.github.io/pratice-m.jd.com'},
                    {id:10, 'src': require('../../static/images/pro10.jpg'), title:"微金所", 'url': 'https://tonycatgogogo.github.io/weijinsuo'},
                ],
                projectList_small:[
                    {id:1, 'src': require('../../static/images/pro1.jpg'), title:"我的简历网站", 'url': 'https://tonycatgogogo.github.io'},
                    {id:3, 'src': require('../../static/images/pro3.jpg'), title:"TodoMVC(Vue.js)", 'url': 'https://tonycatgogogo.github.io/todoList-vue'},
                    {id:7, 'src': require('../../static/images/pro7.jpg'), title:"Resto餐厅",'url': 'https://tonycatgogogo.github.io/Resto_restaurant'},
                    {id:10, 'src': require('../../static/images/pro10.jpg'), title:"微金所", 'url': 'https://tonycatgogogo.github.io/weijinsuo'},
                ],
                screenWidth: document.body.clientWidth,
            }
        },
        mounted () {
            const that = this
            window.onresize = () => {
                return (() => {
                    window.screenWidth = document.body.clientWidth
                    that.screenWidth = window.screenWidth
                })()
            }
        },
        methods: {
            hide(){
                $('.collapse').removeClass('show')
            }
        }
    }
</script>

<style lang="css" scoped>
    @media screen and (max-width: 1920px) {
        .project {
            margin-top: 52px;
        }
    }
    @media screen and (max-width: 1030px) {
        .project {
            margin-top: 52px;
        }
    }
    @media screen and (max-width: 770px) {
        .project {
            margin-top: 50px;
        }
    }
    .block-big {
        background-color: rgba(0, 0, 0, 0.24);
    }
    .el-carousel__item a {
        font-size: 14px;
        opacity: 0.75;
        line-height: 150px;
        margin: 0;
        text-align: center;
    }
    .block-big .el-carousel__item a img {
        display: block;
        height: 300px;
    }
    .block-small .el-carousel__item a img {
        display: block;
        height: 200px;
    }
    .port-head .project-show{
        text-align: center;
        margin: 2% auto;
        font-size: 24px;
        font-weight: 500;
        white-space: nowrap;
    }
    .filtr-container {
        margin: 0 auto;
    }
    .filtr-container .filtr-item{
        margin-bottom: 10px;
    }
    .project_title {
        font-weight: 400;
        font-size: 1.8em;
        color: #666;
        text-align: center;
        margin: 5px 0;
    }
    .filtr-container .w3ls-gallery{
        margin: 0;
        padding: 0;
        position: relative;
        display: block;
        cursor: pointer;
        overflow: hidden;
        border: 1px solid #ccc;
        border-radius: 10px;
        box-sizing: border-box;
    }
</style>