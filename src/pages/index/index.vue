<template>
  <div>
    <i-panel title="基础用法">
      <i-input v-model="value1" @change="onUserName" title="收货人" autofocus placeholder="名字" />
      <i-input v-model="value2" type="number" title="联系电话" placeholder="请输入手机号" />
      <i-input v-model="value3" type="textarea" title="详细地址" placeholder="请输入详细地址(最多50字)" maxlength="50" />
      <i-input v-model="value4" title="用户信息" disabled />
    </i-panel>
     <i-card full title="卡片标题" extra="额外内容" thumb="http://www.liulangwuyu.com/image/1.jpg">
      <view slot="content">这是测试？</view>
      <view slot="footer">有啥看啥</view>
    </i-card>
    <div class="container" :class="{active: isActive}"></div>

    <i-button open-type="getUserInfo" lang="zh_CN"  @getuserinfo="getuserinfo" type="success"> 获取用户信息 </i-button>
    <i-button open-type="getPhoneNumber" lang="zh_CN"  @getPhoneNumber="getPhoneNumber" type="success"> 获取手机号 </i-button>
    <i-button open-type="feedback" lang="zh_CN"  @feedback="feedback" type="success"> 反馈 </i-button>
    <button open-type="contact">进入客服会话</button>


    
    <div class="userinfo" @click="bindViewTap">
      <img class="userinfo-avatar" v-if="userInfo.avatarUrl" :src="userInfo.avatarUrl" background-size="cover" />
      <div class="userinfo-nickname">
        <card :text="userInfo.nickName"></card>
      </div>
    </div>

    <div class="usermotto">
      <div class="user-motto">
        <card :text="motto"></card>
      </div>
    </div>

    <form class="form-container" @click="clickHandle">
      <input type="text" class="form-control" :value="motto" placeholder="v-model" />
      <input type="text" class="form-control" v-model="motto" placeholder="v-model" />
      <input type="text" class="form-control" v-model.lazy="motto" placeholder="v-model.lazy" />
    </form>

    <a href="/pages/counter/main" class="counter">去往Vuex示例页面！！！</a>
    <a href="/pages/qrcode/main" class="">前往二维码页面</a>

    <div class="all">
        <div class="left">
        </div>
        <div class="right">
        </div>
    </div>
  </div>
</template>

<script>
import card from '@/components/card'

export default {
  data () {
    return {
      motto: 'Hello miniprograme',
      value1:"",
      value2:"",
      value3:"",
      value4:"",
      isActive:false,
      userInfo: {
        nickName: '',
        avatarUrl: ''
      }
    }
  },

  created() {
    console.log("created")
  },
  onLoad () {
    console.log('监听页面加载');
    console.log(123);
    this.value1 = "$4";
  },
  onShow () {
    console.log('监听页面显示');
  },
  onReady () {
    console.log('监听页面初次渲染完成');
  },
  onHide() {
    console.log('监听页面隐藏');
  },
  onUnload() {
    console.log('监听页面卸载');
  },
  onPullDownRefresh() {
    console.log('监听用户下拉动作');
  },
  onReachBottom() {
    console.log('页面上拉触底事件的处理函数');
  },
  onShareAppMessage() {
    console.log('用户点击右上角分享');
  },
  onPageScroll() {
    console.log('页面滚动');
  },
  onTabItemTap() {
    console.log('当前是 tab 页时，点击 tab 时触发');
  },
  components: {
    card
  },

  methods: {
    getuserinfo: function(e) {
      console.info(e);
      console.log(e.target.errMsg);
      console.log(e.target.userInfo);
      console.log(e.target.rawData);
      try {
        this.userInfo.nickName = e.target.userInfo.nickName;
        this.userInfo.avatarUrl = e.target.userInfo.avatarUrl;
        wx.setStorageSync('nickName', this.nickName);
        wx.setStorageSync('avatarUrl',this.avatarUrl);
        // this.getAccessToken();
        var self = this;
        wx.requestPayment({
            timeStamp: '',
            nonceStr: '',
            package: '',
            signType: 'MD5',
            paySign: '',
            success (res) { 
              console.info(res);
              self.motto = res;
            },
            fail (res) { 
              console.log("err")
              console.info(res);
            }
        })``
        
      } catch (e) { }

    },
    getPhoneNumber(e) {
      console.log("phone");
      console.info(e);
    },
    feedback(e) {
      console.log(e);
    },
    bindViewTap () {
      const url = '../logs/main'
      if (mpvuePlatform === 'wx') {
        mpvue.switchTab({ url })
      } else {
        mpvue.navigateTo({ url })
      }
    },
    clickHandle (ev) {
      console.log('clickHandle:', ev);
      wx.navigateTo({
        url:'../counter/main'
      })
      // throw {message: 'custom test'}
    },
    getAccessToken (id,secret){
      wx.login({
        success (res) {
          if (res.code) {
            //发起网络请求
            wx.request({
              url: 'https://test.com/onLogin',
              data: {
                code: res.code
              }
            })
          } else {
            console.log('登录失败！' + res.errMsg)
          }
        }
      })

      var id = 'wxb1881dd9b5b288b6';
      var secret = '00193a4b046f6e70cb954481acf3c67f';
      wx.request({
        url:`https://api.weixin.qq.com/sns/jscode2session?appid=${id}&secret=${secret}&js_code=JSCODE&grant_type=authorization_code`,
        success:function(res) {  
            console.log('login');
            console.info(res);
          },  
          fail:function(res){  
              console.log('submit fail');  
          },  
          complete:function(res){  
              console.log('submit complete');  
          } 
      });
    },
    onUserName (){
        console.log(this.value1);
    }
  },

  created () {
    // let app = getApp()
  }
}
</script>

<style scoped>
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  margin: 20rpx;
  border-radius: 50%;
}

.userinfo-nickname {
  color: #aaa;
}

.usermotto {
  margin-top: 150px;
}

.form-control {
  display: block;
  padding: 0 12px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
}
.all{
  width:7.5rem;
  height:1rem;
  background-color:blue;
}
.all:after{
  display:block;
  content:'';
  clear:both;
}
.left{
  float:left;
  width:3rem;
  height:1rem;
  background-color:red;
}

.right{
  float:left;
  width:4.5rem;
  height:1rem;
  background-color:green;
}
</style>
