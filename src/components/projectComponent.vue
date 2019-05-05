<template>
    <div class="project">
        <div class="block-big" v-show="screenWidth>768">
            <el-carousel :interval="5000" type="card" height="300px">
                <el-carousel-item v-for="(item,index) in projectList" :key="index">
                    <a class="medium"><img :src='item.src' alt="项目图片"></a>
                </el-carousel-item>
            </el-carousel>
        </div>
        <div class="block-small" v-show="screenWidth<= 768">
            <el-carousel :interval="5000" height="200px">
                <el-carousel-item v-for="(item,index) in projectList_small" :key="index">
                    <a class="medium"><img :src='item.src' alt="项目图片"></a>
                </el-carousel-item>
            </el-carousel>
        </div>
        <div class="portfolio">
            <div class="port-head">
                <h3 class="project-show">作品展示</h3>
            </div>
            <div class="filtr-container">
                <div class="filtr-item" v-for="item in projectList" :key="item.id">
                    <a class="b-animate-go">
                        <figure class="w3ls-gallery">
                            <img :src='item.src' class="img-responsive" alt="项目图片"/>
                            <figcaption class="w3layouts-caption">
                                <h3>{{item.title}}</h3>
                            </figcaption>
                        </figure>
                    </a>
                </div>
             </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                projectList:[
                    {id:1, 'src': require('../../static/images/b.jpg'), title:"我的简历网站"},
                    {id:2, 'src': require('../../static/images/c.jpg'), title:"TodoMVC(原生JS)"},
                    {id:3, 'src': require('../../static/images/d.jpg'), title:"TodoMVC(Vue.js)"},
                    {id:4, 'src': require('../../static/images/e.jpg'), title:"贪吃蛇"},
                    {id:5, 'src': require('../../static/images/f.jpg'), title:"本地宝(微信小程序)"},
                    {id:6, 'src': require('../../static/images/g.jpg'), title:"手机商城(移动端)"},
                    {id:7, 'src': require('../../static/images/w1.jpg'), title:"福利彩票"},
                    {id:9, 'src': require('../../static/images/1.jpg'), title:"博客网站"},
                    {id:10, 'src': require('../../static/images/3.jpg'), title:"苏宁易购(移动端)"},
                    {id:11, 'src': require('../../static/images/w2.jpg'), title:"微金所"},
                ],
                projectList_small:[
                    {id:1, 'src': require('../../static/images/b.jpg')},
                    {id:2, 'src': require('../../static/images/c.jpg')},
                    {id:3, 'src': require('../../static/images/d.jpg')},
                    {id:4, 'src': require('../../static/images/e.jpg')},
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
        background-color: rgba(255, 248, 11, 0.6);
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
    .project-show{
        text-align: center;
        margin: 2% auto;
        font-size: 24px;
        font-weight: 500;
        white-space: nowrap;
    }
</style>