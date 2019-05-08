<template>
    <div class="contact" :style="{height:clientHeight+'px'}" @click="hide">
        <div class="contact-bg container" :style="{height:clientHeight-50+'px'}">
            <div class="contact-main">
                <div class="right"></div>
                <div class="bottom"></div>
                <div class="mid">
                    <div class="head">
                        <p class="p1">但行好事</p>
                        <p class="p2">莫问前程</p>
                    </div>
                    <div class="body">
                        <p class="p4">
                            把格局放大<br>
                            把小事做好<br>
                            再艰难也要坚持梦想<br>
                            并且想办法让自己活得久一点<br>
                            期待有机会与您共事！
                        </p>
                        <div class="footer clearfloat">
                            <a href="https://github.com/tonycatgogogo" target="_blank" @mouseenter="github=true" @mouseleave="github=false">
                                <p class="github" v-show="github">github</p>
                                <span class="icon-github"></span>
                            </a>
                            <a href="javascript:;" @mouseenter="isShowWe=true" @mouseleave="isShowWe=false">
                                <img src="../../static/images/wechatcode.jpg" alt="..." v-show="isShowWe">
                                <span class="icon-wechat"></span>
                            </a>
                            <a href="javascript:;" target="_blank" @mouseenter="isShowqq=true" @mouseleave="isShowqq=false">
                                <img src="../../static/images/qqcode.jpg" alt="..." v-show="isShowqq">
                                <span class="icon-qq"></span>
                            </a>
                            <a href="javascript:;" @mouseenter="email=true" @mouseleave="email=false">
                                <p class="email" v-show="email">gonghaitao1@163.com</p>
                                <span class="icon-envelop"></span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import $ from "jquery"
    export default {
        data(){
            return{
                isShowWe:false,
                isShowqq:false,
                github: false,
                email: false,
                clientHeight: document.documentElement.clientHeight || document.body.clientHeight
            }
        },
        mounted () {
            const that = this
            window.onresize = () => {
                return (() => {
                    window.screenHeight = document.documentElement.clientHeight || document.body.clientHeight
                    that.clientHeight = window.screenHeight
                })()
            }
        },
        watch: {
            clientHeight (newVal,oldVal) {
                console.log(newVal,oldVal)
                if(newVal !== oldVal){
                    this.clientHeight = newVal
                }
            }
        },
        methods: {
            // getScreen(){
            //     this.clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
            // }
            hide(){
                $('.collapse').removeClass('show')
            }
        }
    }
</script>

<style lang="css" scoped>
    .contact{
        position: relative;
        width: 100%;
        height: 100%;
        background: url(../../static/images/bg.jpg) no-repeat;
        background-size: cover;
        padding-top: 50px;
    }
    .contact .contact-bg {
        background-color: rgba(86, 83, 100, .7);
        width: 100%;
        height: 576px;
    }
    .contact-main {
        width: 500px;
        height: 400px;
        left: 50%;
        top: 50%;
        position: absolute;
        margin: -200px 0 0 -250px;
    }
    .contact-main .right{
        float: right;
        border-top: 6px solid #ffd200;
        border-right: 6px solid #ffd200;
        width: 150px;
        height: 100px;
    }
    .contact-main .bottom {
        width: 488px;
        height: 30px;
        border-bottom: 6px solid #ffd200;
        border-right: 6px solid #ffd200;
        border-left: 6px solid #ffd200;
        position: absolute;
        bottom: 0;
    }
    .contact-main .mid {
        position: absolute;
        width: 400px;
        height: 400px;
        left: 50px;
        top: 30px;
    }
    .mid .head {
        width: 364px;
        margin-left: 18px;
        height: 70px;
        border-bottom: 1px solid #ffd200;
        overflow: hidden;
    }
    .mid .head .p1,
    .mid .head .p2{
        color: #ffd200;
        font-size: 40px;
        font-weight: 800;
        width: 204px;
        line-height: 70px;
        float: left;
    }
    .mid .head .p2 {
        color: #fff;
        width: 160px;
        margin-left: 0;
    }
    .mid .body {
        width: 364px;
        height: auto;
        margin: 0 auto;
        text-align: center;
    }
    .mid .body .p4 {
        margin-top: 28px;
        font-size: 18px;
        color: #fff;
        line-height: 35px;
    }
    .mid .body .footer {
        width: 50%;
        margin: 0 auto;
        height: auto;
        margin-top: 24px;
    }
    .footer a {
        width: 34px;
        height: 34px;
        float: left;
        background: #404040;
        text-align: center;
        line-height: 34px;
        border-radius: 50%;
        cursor: pointer;
        margin-left: 10px;
        position: relative;
    }
    .footer span {
        width: 18px;
        height: 18px;
        border: 0;
        color: #fff;
    }
    .footer img {
        position: absolute;
        width: 154px;
        height: 200px;
        left: -57px;
        top: -220px;
        border: 2px solid #337ab7;
        border-radius: 5px;
        text-align: center;
        line-height: 30px;
        color: #fff;
        font-size: 12px;
    }
    .footer p {
        width: 140px;
        height: 30px;
        background: #337ab7;
        position: absolute;
        top: -42px;
        -moz-border-radius: 5px;
        -webkit-border-radius: 5px;
        border-radius: 5px;
        text-align: center;
        line-height: 30px;
        color: #fff;
        font-size: 12px;
        left: -50%;
    }
    .footer .github{
        width: 60px;
    }
    @media screen and (max-width: 770px) {
        .contact-main {
            width: 100%;
            height: 400px;
            margin: -50% 0 0 -50%;
        }
        .contact-main .right{
            width: 75px;
            height: 50px;
        }
        .contact-main .bottom {
            width: 100%;
            height: 30px;
        }
        .contact-main .mid {
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
            padding: 20px;
        }
        .mid .head {
            width: 100%;
            height: 70px;
            margin: 0;
        }
        .mid .head .p1,
        .mid .head .p2{
            width: 165px;
            font-size: 32px;
            text-align: center;
        }
        .mid .body {
            width: 100%;
            height: auto;
            margin: 0 auto;
            text-align: center;
        }
        .mid .body .p4 {
            margin-top: 28px;
            font-size: 18px;
            color: #fff;
            line-height: 35px;
        }
        .mid .body .footer {
            width: 59%;
            margin: 0 auto;
            height: auto;
            margin-top: 24px;
            text-align: center;
        }
    }
</style>