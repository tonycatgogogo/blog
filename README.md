# 个人网站

### 网址：[个人博客https://tonycatgogogo.github.io/](https://tonycatgogogo.github.io/)



### 2019.5.2

完成项目基本框架

├─.idea
├─dist
├─src
│  ├─components
│  ├─store
│  └─utils
└─static
    ├─css
    ├─font-icon
    │  ├─demo-files
    │  └─fonts
    ├─fonts
    ├─images
    └─lib
        └─bootstrap
            ├─css
            ├─fonts
            └─js

顶部通栏完成

![1556897366930](.\static\images\1556897366930.png)

### 2019.5.3

home组件完成

整个下午踩了一个大坑

为了网站炫酷，使用了bing的每日一图接口，但是返回的是json数据，浏览器跨域直接拦截了，请求不到，在网上搜了好久，有个大神介绍了一个代理[jsonp代理https://jsonp.afeld.me/](https://jsonp.afeld.me/)，可以将json转为jsonp使用；

同事放弃了vue-resource，安装了vue-jsonp插件，代码如下，稳得一批；

bing每日一图真的很好看，API如下：

[bing每日一图API](https%3A%2F%2Fcn.bing.com%2FHPImageArchive.aspx%3Fformat%3Djs%26idx%3D0%26n%3D1)

```
getImg() {
    this.$jsonp('https://jsonp.afeld.me/?callback=getImg&url=https%3A%2F%2Fcn.bing.com%2FHPImageArchive.aspx%3Fformat%3Djs%26idx%3D0%26n%3D1')
        .then(data => {
            this.imgList = data.images[0]
            console.log(this.imgList)
            this.url = this.getImgUrl + data.images[0].url
        })
}
```

![1556898063211](.\static\images\1556898063211.png)



### 2019.5.4

制作resume组件，用了bootstrap的panel和table组件

响应式应该用rem来写好一些，但是一开始没用 所以就没改，用媒体查询做的很头大，以后响应式还应该在开始前布局再周全一点

技能展示部分想加入一个echarts 目前先放着，等后面做的差不多再回来补，这一部分做的挺烂的

### 2019.5.5

完成了作品展示部分

作品展示使用了Element的轮播图，感觉跟vue确实很搭 以后要多研究尝试这个库

