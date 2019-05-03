<template>
    <div class="header home" id="home" :style="
     {backgroundImage:'url('+this.url+')'}">
        <div class="container">
            <div class="banner-text text-center">
                <h2>我是巩海涛</h2>
                <h3> - 前端工程师 - </h3>
                <p>相信代码可以改变世界 </p>
                <div class="home_content row">
                    <span class="time col-xs-12" v-if="imgList.enddate">{{(imgList.enddate)}}</span>
                    <p class="disc col-xs-12" :key="imgList.enddate">{{imgList.copyright}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                imgList:{},
                url: '',
                getImgUrl: 'http://s.cn.bing.net'
            }
        },
        created(){
            this.getImg()
        },
        methods: {
            getImg: function(){
                let that = this;
                that.$http({           //调用接口
                    method:'GET',
                    url: 'http://cn.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1'
                }).then(function(response){  //接口返回数据
                    this.imgList = response.body.images[0]
                    console.log(this.imgList)
                    this.url=this.getImgUrl+response.body.images[0].url
                },function(error){
                })
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
</style>