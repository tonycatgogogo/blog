<template>
    <div class="header home" id="home" :style="
     {backgroundImage:'url('+this.url+')'}" @click="hide">
        <div class="container">
            <div class="banner-text text-center">
                        <h2>我是巩海涛</h2>
                        <h3> - 前端工程师 - </h3>
                        <p>相信代码可以改变世界 </p>
                <div class="home_content row">
                    <span class="time col-xs-12" v-if="imgList.enddate">{{(imgList.enddate) | dateFormat}}</span>
                    <p class="disc col-xs-12" :key="imgList.enddate">{{imgList.copyright}}</p>
                </div>
                <span title="bing" class="tips">每日一图由 bing 提供 | 其他都由TonyCat提供
                </span>
            </div>
        </div>
    </div>
</template>
<script>
    import $ from 'jquery'
    export default {
        data() {
            return {
                imgList:{},
                url: '',
                getImgUrl: 'https://s.cn.bing.net',
            }
        },
        created(){
            this.getImg()
        },
        methods: {
            getImg() {
                this.$jsonp('https://jsonp.afeld.me/?callback=getImg&url=https%3A%2F%2Fcn.bing.com%2FHPImageArchive.aspx%3Fformat%3Djs%26idx%3D0%26n%3D1')
                    .then(data => {
                        this.imgList = data.images[0]
                        console.log(this.imgList)
                        this.url = this.getImgUrl + data.images[0].url
                    })
            },
            hide(){
                $('.collapse').removeClass('show')
            }
        }
    }
</script>

<style lang="css" scoped>
    .text-center .home_content {
        padding:  20px 30px;
        margin-top: 20px;
        position: relative;
        text-align: left;
    }
    .text-center .home_content .time {
        font-size: 18px;
        vertical-align: bottom;
        font-weight: 400;
        margin: 50px 0 20px 20px;
        padding: 20px 0;
        display: block;
        color: #fff;
    }
    .text-center .home_content .disc {
        font-size: 14px;
        color: #fff;
        line-height: 40px;
        text-transform: none;
        letter-spacing: normal;
    }
    .header .tips {
        position: absolute;
        right: 30px;
        left: 30px;
        bottom: 0;
        color: #fff;
        height: 40px;
        line-height: 40px;
        font-size: 10px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        text-align: right;
    }
</style>