<template>
    <div class="about" id="about" @click="hide">
        <div class="container">
            <div class="col-md-4 w3-about-top">
                <img src="../../static/images/haitao.jpg" class="img-responsive" alt="about-img"/>
            </div>
            <div class="about-me">
                <div class="about-me-title">
                    <h3>关于我</h3>
                    <i></i>
                </div>
                <div class="about-me-info container">
                    <p class="intro">Hi，我是巩海涛，坐标北京。</p>
                    <ul class="row">
                        <li class="label label-warning">稳重的90后</li>
                        <li class="label label-success">读书狂 文案棒</li>
                        <li class="label label-danger">执行力强</li>
                        <li class="label label-info">计算机相关专业</li>
                        <li class="label label-danger">活没干完不睡觉</li>
                        <li class="label label-success">一本院校</li>
                        <li class="label label-warning">英语流利</li>
                        <li class="label label-success">超爱前端</li>
                    </ul>
                    <p class="w3ls-about-info">
                        互联网时代技术浩如星海，JS这门不完美的语言却越发繁盛，
                        偶然的接触却让我觅得方向，当兴趣变为职业时也就有了持续为之钻研的动力。
                        未来希望能成为技术牛人，目前仍在磨炼自己的前端技术，
                        希望将H5、C3、Bootstrap、Vue等技术都提升至更高水准，业精于勤，熟而能取其巧。
                    </p>
                </div>
                <div class="panel panel-primary">
                        <div class="panel-heading">
                            <h3 class="panel-title">基本信息</h3>
                        </div>
                        <div class="panel-body">
                            <table class="table table-bordered table-hover table-condensed">
                                <tbody>
                                <tr>
                                    <th scope="row">教育背景</th>
                                    <td>2010.9-2014.7</td>
                                    <td>沈阳建筑大学</td>
                                    <td>电气工程专业</td>
                                </tr>
                                <tr>
                                    <th scope="row">个人技能</th>
                                    <td>英语六级,读写能力突出</td>
                                    <td>通讯类稿件撰写</td>
                                    <td>擅长标书及策划类文案</td>
                                </tr>
                                <tr>
                                    <th scope="row">工作经历</th>
                                    <td>2014.7-2018.11</td>
                                    <td>中建八局海外事业部</td>
                                    <td>市场经理</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
            </div>
            <div class="about-skill">
                <div class="about-skill-title">
                    <h3>掌握技术</h3>
                    <i></i>
                </div>
                <p class="w3ls-about-info">
                    1.热爱前端，喜欢用最扎实的代码做出效果上最炫，代码上最合理的页面。<br>
                    2.能够使用photoshop把设计文件按照要求进行效果实现。<br>
                    3.熟悉各种Web前端技术，包括HTML、DIV、CSS、Javascript、jQuery、AJAX、JSON、Cookie等。<br>
                    4.了解移动端的rem布局,响应式布局,解决不同移动端设备的适配和兼容问题<br>
                    5.熟悉bootstrap,Jquery类库进行pc端项目快速开发, 有应用Element,Mint-UI等插件进行移动端项目的开发的经验。<br>
                    6.熟练使用github进行代码管理，使用git版本管理工具。<br>
                    7.熟悉原生JS,熟悉JavaScript的面向对象编程，了解作用域以及闭包的原理。<br>
                    8.熟练使用Chrome 、IE等主流浏览器的开发人员工具调试页面。<br>
                    9.了解Vue,React框架,并对模块化开发有着一定的理解。<br>
                    10.了解Node.JS，php后台语言,了解mysql数据库，并对此有兴趣,期待向全栈方向发展<br>
                </p>
                <div class="about-skill-chart">
                    <div class="about-skill-bar">
                        <em>HTML5</em>
                        <div class="bar-bottom">
                            <div class="bar-bottom-f" data-percentage="60%" style="background: rgb(52, 73, 94); width: 60%;">
                            </div>
                        </div>
                    </div>
                    <div class="about-skill-bar">
                        <em>CSS3</em>
                        <div class="bar-bottom">
                            <div class="bar-bottom-f" data-percentage="55%" style="background: rgb(231, 76, 60); width: 55%;">
                            </div>
                        </div>
                    </div>
                    <div class="about-skill-bar">
                        <em>ES6</em>
                        <div class="bar-bottom">
                            <div class="bar-bottom-f" data-percentage="50%" style="background: rgb(211, 84, 0); width: 50%;">
                            </div>
                        </div>
                    </div>
                    <div class="about-skill-bar">
                        <em>JQUERY</em>
                        <div class="bar-bottom">
                            <div class="bar-bottom-f" data-percentage="45%" style="background: rgb(52, 152, 219); width: 45%;">
                            </div>
                        </div>
                    </div>
                    <div class="about-skill-bar">
                        <em>Vue.js</em>
                        <div class="bar-bottom">
                            <div class="bar-bottom-f" data-percentage="40%" style="background: rgb(155, 89, 182); width: 40%;">
                            </div>
                        </div>
                    </div>
                    <div class="about-skill-bar">
                        <em>Bootstrap</em>
                        <div class="bar-bottom">
                            <div class="bar-bottom-f" data-percentage="55%" style="background: rgb(52,182,44); width: 55%;">
                            </div>
                        </div>
                    </div>
                    <div class="about-skill-bar">
                        <em>PHOTOSHOP</em>
                        <div class="bar-bottom">
                            <div class="bar-bottom-f" data-percentage="35%" style="background: rgb(26, 188, 156); width: 35%;">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import $ from 'jquery'
    export default {
        data() {
            return {
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
    @media screen and (max-width: 1920px){
        .about-me-title h3,
        .about-skill-title h3{
            text-align: center;
            margin: 2% auto 0;
            font-size: 24px;
            font-weight: 500;
            white-space: nowrap;
        }
        .about-me-title i ,
        .about-skill-title i{
            display: block;
            margin: 0 auto 10px;
            width: 90px;
            height: 4px;
            background: rgb(51,122,183);
        }
        .about-me-title i {
            margin-left: 63%;
        }
        /*.about-me-info .w3ls-about-info {*/
            /*position: absolute;*/
            /*left: 36%;*/
            /*top: 15%;*/
            /*font-size: 14px;*/
            /*margin: 5px 15px;*/
        /*}*/
    }
    @media screen and (max-width: 1030px){
        .about-me-title h3,
        .about-skill-title h3{
            text-align: center;
            margin: 2% auto 0;
            font-size: 24px;
            font-weight: 500;
            white-space: nowrap;
        }
        .about-me-title i ,
        .about-skill-title i{
            display: block;
            margin: 0 auto 10px;
            width: 90px;
            height: 4px;
            background: rgb(51,122,183);
        }
        .about-me-title i {
            margin-left: 63%;
        }
    }
    @media screen and (max-width: 991px){
        .about-me-title i ,
        .about-skill-title i{
            display: block;
            margin: 0 auto 10px;
            width: 90px;
            height: 4px;
            background: rgb(51,122,183);
        }
    }
    @media screen and (max-width: 770px){
        .about-me-title i ,
        .about-skill-title i{
            display: block;
            margin: 0 auto 5%;
            width: 60px;
            height: 4px;
            background: rgb(51,122,183);
        }
        .about-me-title h3,
        .about-skill-title h3{
            text-align: center;
            margin: 5% auto 0;
            font-size: 24px;
            font-weight: 500;
            white-space: nowrap;
        }
        .about-me-info .label {
            font-size: 16px;
        }
    }
    .about-me .about-me-info {
        text-align: justify;
        font-size: 18px;
        line-height: 32px;
    }
    .about-me-info .w3ls-about-info {
        display: block;
        margin: 10px 0;
        font-size: 14px;
    }
    .about-me-info .intro {
        text-indent: 32px;
    }
    .about-me-info .row {
        margin: 0 auto;
    }
    .about-skill-bar {
        width: 100%;
        margin-top: 1%;
        color: #333;
    }
    .about-skill-bar em {
        text-transform: uppercase;
        font-style: normal;
        font-size: 16px;
    }
    .about-skill-bar .bar-bottom{
        width: 100%;
        height: 30px;
        background: #bdc3c7;
        position: relative;
        border-radius: 5px;
    }
    .bar-bottom-f {
        position: absolute;
        left: 0;
        top: 0;
        width: 40%;
        background: #1abc9c;
        height: 100%;
        border-radius: 5px;
    }
    .panel-body {
        padding: 5px 5px 0;
    }
</style>