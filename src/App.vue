<template>
    <div class="haitao">
        <!--固定导航栏-->
        <div class="container fix">
            <nav class="navbar navbar-default navbar-fixed-top">
                <div class="container inner">
                    <div class="navbar-header page-scroll">
                        <button type="button" class="navbar-toggle" data-toggle="collapse"
                                data-target=".navbar-ex1-collapse">
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <h1>
                            <router-link class="navbar-brand" tag="a" to="/home"><img src="../static/images/favicon.png"
                                                                                      alt=""></router-link>
                        </h1>
                    </div>
                    <div class="collapse navbar-collapse navbar-ex1-collapse">
                        <ul class="nav navbar-nav navbar-right">
                            <li>
                                <router-link class="page-scroll scroll active" tag="a" to="/home">首页</router-link>
                            </li>
                            <li>
                                <router-link class="page-scroll scroll" tag="a" to="/resume">简历</router-link>
                            </li>
                            <li>
                                <router-link class="page-scroll scroll" tag="a" to="/project">个人作品</router-link>
                            </li>
                            <li><a class="page-scroll scroll" href="https://me.csdn.net/tonycatgogogo" target="_black">博客</a>
                            </li>
                            <li>
                                <router-link class="page-scroll scroll" tag="a" to="/contact">联系我吧</router-link>
                            </li>
                            <li><a class="page-scroll scroll" href="https://github.com/tonycatgogogo"
                                   target="_black">
                                <span class="icon-github"></span>
                            </a></li>
                            <li>
                                <a class="page-scroll scroll" href="#"><span
                                        class="icon-cog"></span></a>
                            </li>
                        </ul>
                    </div>
                    <!-- /.navbar-collapse -->
                </div>
                <!-- /.container -->
            </nav>
        </div>
        <!--内容组件-->
        <transition mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>
<script>
    export default {
        data() {
            return {
            }
        },
        created(){
        },
        methods: {

        }
    }
</script>
<style lang="css" scoped>
    @import "../static/lib/bootstrap/css/bootstrap.min.css";
    @import "../static/css/style.css";
    @import "../static/font-icon/style.css";
    .v-enter {
        opacity: 0;
        transform: translateX(100%);
    }

    .v-leave-to {
        opacity: 0;
        transform: translateX(-100%);
        position: absolute;
    }

    .v-enter-active,
    .v-leave-active {
        transition: all 0.3s ease
    }

    .haitao {
        z-index: -2;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
    }

    .haitao .container.fix {
        margin: 0;
        padding: 0;
    }

    /*.container.inner {*/
        /*padding: 0;*/
        /*margin-right: 15px;*/
    /*}*/

    .navbar-fixed-bottom .navbar-collapse, .navbar-fixed-top {
        position: fixed;
    }

    .navbar-fixed-bottom .navbar-collapse, .navbar-fixed-top .navbar-collapse {
        max-height: 412px;
    }

</style>
