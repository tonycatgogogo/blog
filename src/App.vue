<template>
    <div class="haitao">
        <div class="container">
            <nav class="navbar navbar-default navbar-fixed-top">
                <div class="container">
                    <div class="navbar-header page-scroll">
                        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <h1><a class="navbar-brand" href="index.html"><img src="../static/images/favicon.png" alt=""></a></h1>
                    </div>
                    <!-- Collect the nav links, forms, and other content for toggling -->
                    <div class="collapse navbar-collapse navbar-ex1-collapse">
                        <ul class="nav navbar-nav navbar-right">
                            <!-- Hidden li included to remove active class from about link when scrolled up past about section -->
                            <li class="hidden"><a class="page-scroll" href="#page-top"></a></li>
                            <li><a class="page-scroll scroll active" href="#home">Home</a></li>
                            <li><a class="page-scroll scroll" href="#about">About</a></li>
                            <li><a class="page-scroll scroll" href="#port">Portfolio</a></li>
                            <li><a class="page-scroll scroll" href="#edu">Education</a></li>
                            <li><a class="page-scroll scroll" href="#exp">Experience</a></li>
                            <li><a class="page-scroll scroll" href="#contact">Contact</a></li>
                        </ul>
                    </div>
                    <!-- /.navbar-collapse -->
                </div>
                <!-- /.container -->
            </nav>
        </div>
        <router-view class="main"></router-view>
    </div>
</template>
<script>
    export default {
        data() {
            return {}
        }
    }
</script>
<style lang="css" scoped>
    @import "../static/lib/bootstrap/css/bootstrap.min.css";
    @import "../static/css/style.css";
    .haitao {
        position: fixed;
        z-index: -2;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        background: url("../static/images/0.jpg") no-repeat center/cover;
    }

    /*.navbar {*/
        /*background:rgba(0, 0, 0, 0.01);*/
        /*border: none;*/
        /*-webkit-transition:.5s all;*/
        /*-moz-transition:.5s all;*/
        /*transition:.5s all;*/
    /*}*/
    /*h1 a.navbar-brand {*/
        /*font-size: 1em;*/
        /*color: #fff !important;*/
        /*padding: 0;*/
        /*height: inherit;*/
        /*margin: 17px 0;*/
        /*letter-spacing: 5px;*/
        /*text-transform: uppercase;*/
    /*}*/
    /*.navbar-default .navbar-nav > li > a {*/
        /*display: inline-block;*/
        /*font-size: 14px;*/
        /*padding: 0 14px;*/
        /*margin: 0;*/
        /*color: #fff;*/
        /*cursor: pointer;*/
        /*font-family: Segoe UI,Segoe,Tahoma,Arial,Verdana,sans-serif;*/
        /*text-decoration: none;*/
    /*}*/
</style>
