<template>
    <div>
        <div>{{title}}</div>
        <img src="../../../static/images/gh.jpg" data-src='../../../static/images/gh.jpg'  @click="previewImage" >
        <img src="../../../static/images/gh.jpg" data-src='../../../static/images/gh.jpg'  @click="previewImage1" >
        <canvas style="width: 100vw; height: 500px" canvas-id="shareImg"></canvas>
    </div>
    
</template>
<script>
export default {
    data () {
        return {
        title: 'qrcode',
        userInfo: {
            nickName: '',
            avatarUrl: ''
        }
        }
    },
    created () {
  
    },
    methods: {
        previewImage: function (e){
            console.log(1);
        
            console.info(this);
            this.title = this.route || "";
            var current = e.target.dataset.src;   
            // var urls = [ this.getRootPath()+ '/static/images/gh.jpg'];
            var urls = ['http://www.liulangwuyu.com/image/gh_832ade9ccb4e_258.jpg']
            wx.previewImage({
                current: urls[0],
                urls: urls 
            });
        },
        previewImage1: function (e){
            console.log(1);
        
            console.info(this);
            this.title = this.route || "";
            var current = e.target.dataset.src;   
            // var urls = [ this.getRootPath()+ '/static/images/gh.jpg'];
            // var urls = ['http://www.liulangwuyu.com/image/gh_832ade9ccb4e_258.jpg']
            var urls = ['http://www.liulangwuyu.com/image/qrcode_for_gh_2745c02a844e_430.jpg']
            wx.previewImage({
                current: urls[0],
                urls: urls 
            });
        },
        getRootPath: function () {
            var pathName = window.location.pathname.substring(1);
            var webName = pathName == '' ? '' : pathName.substring(0, pathName.indexOf('/'));
            return window.location.protocol + '//' + window.location.host + '/' + webName + '/';
        }

    }
    
}
</script>
