<template>
  <div class="main">
    <v-head name="新年红包群"></v-head>
    <div class="frameBoxTow" v-if="hideFrame" @click="frameClose"></div>
    <div class="frameBox" v-if="hideFrame" @click.stop="frameT">
      <div class="frameBox-top" >
        <div class="frameBoxTop-img"></div>
        <div class="frameBoxTop-name">海贼王</div>
        <div class="frameBoxTop-text">给你发了个红包</div>
        <div class="blessing-text">恭喜发财.大吉大利</div>
        <div class="icon-openPackets"></div>
      </div>
      <div class="icon-close" @click="frameClose"></div>
      <div class="frameText" @click="luckTap">查看大家的手气 ></div>
    </div>
    <div class="aui-chat">
      <div class="aui-chat-header">2016年7月13日</div>
      <div class="aui-chat-item aui-chat-left">
        <div class="aui-chat-media">
          <img src="../../../../image/phone.png" />
        </div>
        <div class="aui-chat-inner">
          <div class="aui-chat-name">AUI <span class="aui-label aui-label-warning">2.0</span></div>
          <div class="chat-packetsBox" @click="openFrame">
            <div class="packets-arrow" :class="{'packets-opacity': num == 1}"></div>
            <div class="packets-top" :class="{'packets-back':num == 1}">
              <div class="packets-img"></div>
              <div class="packets-info">
                <p>30-9</p>
                <p v-if="num == 1">领取红包</p>
                <p v-if="num == 0">已经领取</p>
              </div>
            </div>
            <div class="packets-bottom">金信红包</div>
          </div>
          <!--<img src="../../../../image/phone.png" />-->
        </div>
      </div>
      <div class="aui-chat-header">海贼王抢了<em>1000</em>元,获得<em>399</em></div>
      <div class="aui-chat-item aui-chat-right">
        <div class="aui-chat-media">
          <img src="../../../../image/phone.png" />
        </div>
        <div class="aui-chat-inner">
          <div class="chat-packetsBox chat-pack" @click="openFrame">
            <div class="packets-top" :class="{'packets-back':num == 1}">
              <div class="packets-arrow2" :class="{'packets-opacity': num == 1}"></div>
              <div class="packets-img"></div>
              <div class="packets-info">
                <p>30-9</p>
                <p v-if="num == 1">领取红包</p>
                <p v-if="num == 0">已经领取</p>
              </div>
            </div>
            <div class="packets-bottom">金信红包</div>
          </div>
        </div>
      </div>
      <div class="aui-chat-item aui-chat-left">
        <div class="aui-chat-media">
          <img src="../../../../image/phone.png" />
        </div>
        <div class="aui-chat-inner">
          <div class="aui-chat-name">AUI <span class="aui-label aui-label-warning">2.0</span></div>
            <div class="chat-packetsBox" @click="openFrame">
              <div class="packets-top" :class="{'packets-back':num == 0}">
                <div class="packets-arrow" :class="{'packets-opacity': num == 0}"></div>
                <div class="packets-img"></div>
                <div class="packets-info">
                  <p>30-9</p>
                  <p v-if="num == 1">领取红包</p>
                  <p v-if="num == 0">已经领取</p>
                </div>
              </div>
              <div class="packets-bottom">金信红包</div>
            </div>
            <!--<img src="../../../../image/phone.png" />-->
        </div>
      </div>
      <div class="aui-chat-item aui-chat-right">
        <div class="aui-chat-media">
          <img src="../../../../image/phone.png" />
        </div>
        <div class="aui-chat-inner">
            <div class="chat-packetsBox chat-pack" @click="openFrame">
              <div class="packets-top" :class="{'packets-back':num == 0}">
                <div class="packets-arrow2" :class="{'packets-opacity': num == 0}"></div>
                <div class="packets-img"></div>
                <div class="packets-info">
                  <p>30-9</p>
                  <p v-if="num == 1">领取红包</p>
                  <p v-if="num == 0">已经领取</p>
                </div>
              </div>
              <div class="packets-bottom">金信红包</div>
            </div>
        </div>
      </div>
      <div class="aui-chat-item aui-chat-left">
        <div class="bottomTao"></div>
      </div>
    </div>
    <div class="box"  v-if="hide" @click="adT"></div>
    <div class="bottom-box" @click.stop="ting">
      <div class="item-voice"></div>
      <input type="text" placeholder="此群禁言中" disabled="disabled"/>
      <div class="item-add" @click="addTap"></div>
      <div class="item-box" v-if="hide">
        <div class="item-transfer" @click="packetsTap">
          <div class="transfer-img packets-imgn"></div>
          <div class="transfer-text">红包</div>
        </div>
        <div class="item-transfer tow" @click="openQQTap">
          <div class="transfer-img customer-img"></div>
          <div class="transfer-text">客服</div>
        </div>
      </div>
    </div>
  </div>
</template>
<!--this.$router.push({path:'路径')};-->
<script>
  import head from '../../common/itemHome.vue'
  export default {
    name: 'chat',
    components:{
      "v-head": head
    },
    data () {
      return {
        hideFrame: 0,
        hide: 0,
        num: 0,
        msg: 'Welcome to Your Vue.js App'
      }
    },
    created () {
      var that=this;
      setTimeout(function () {
        that.$nextTick(function () {
        })
      },500)
    },
    methods: {
      openFrame: function(){
        this.hideFrame = 1
      },
      frameT:function(){

      },
      luckTap:function(){
        this.$router.push({ name:'viewLuck', query: {name: 'viewLuck',title:'红包详情',num:1}});
      },
      frameClose:function(){
        this.hideFrame = 0
      },
      adT:function(){
        this.hide = 0
      },
      ting:function(){
      },
      addTap:function () {
        this.hide = 1
      },
      packetsTap:function () {
        this.$router.push({ name:'sendPackets', query: {name: 'sendPackets',title:'发红包'}});
      },
      openQQTap:function () {
        alert('跳转qq客服')
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  body,html{
    margin:0;
    padding:0;
    height: 100%;
    background-color: #e51c23;
    font-size: 20px;
    width: 750rem;
  }
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  /*.frameBoxTow {*/
    /*padding-top: 2.25rem;*/
    /*height: 25rem;*/
    /*width: 100%;*/
    /*position: absolute;*/
  /*}*/
  .frameBox {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: 80%;
    height: 19rem;
    background-color: #cd553d;
    z-index: 100000;
    overflow:hidden;
  }
  .frameBox-top {
    position: relative;
    height: 12rem;
    background-color: #d95940;
  }
  .frameBox-top:after {
    width: 110%;
    height: 4rem;
    position: absolute;
    left: -5%;
    bottom: -1rem;
    z-index: 10000;
    content: '';
    border-radius: 0 0 50% 50%;
    background-color: #d95940;
  }
  .frameBox-top {
    color: #ff9b7e;
    text-align: center;
  }
  .frameBoxTop-img {
    display: inline-block;
    width: 2.5rem;
    height: 2.5rem;
    background-color: #9e9e9e;
    margin: 1rem auto 0;
  }
  .frameBoxTop-name {
    font-size: .7rem;
    padding-top: .3rem;
  }
  .frameBoxTop-text {
    padding-top: .3rem;
  }
  .blessing-text {
    font-size: 1rem;
    padding-top: 1rem;
  }
  .icon-openPackets {
    position: absolute;
    width: 4.5rem;
    height: 4.5rem;
    bottom: -3rem;
    border-radius: 50%;
    left: 0;
    right: 0;
    margin:0 auto;
    z-index: 1111111111111;
    background-color: #eccc99;
    background-size: 2rem 2rem;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url("../../../../image/icon-openText.png");
  }
  .frameText {
    position: absolute;
    bottom: 1rem;
    width: 100%;
    text-align: center;
    font-size: .5rem;
    color: #333;
  }
  .icon-close {
    position: absolute;
    top: 0;
    left: 0;
    width: 2.5rem;
    height: 2.5rem;
    background-image: url("../../../../image/icon-packetsClose.png");
    background-repeat: no-repeat;
    background-size: .8rem .8rem;
    background-position: center;
  }
  .packets-back {
    background-color: rgba(251,159,60,0.5)!important;
  }
  .packets-opacity {
    opacity: 0.5;
  }
  .aui-chat-header em{
    color: #e51c23;
  }
  .chat-packetsBox {
    position: relative;
    margin-left:.5rem;
    border-radius:.2rem;
    width: 9rem;
    height: 3.5rem;
  }
  .chat-pack {
    margin-right: .5rem;
  }
  .packets-arrow2{
    content: '';
    position: absolute;
    display: inline-block;
    width: .7rem;
    height: .7rem;
    right: -.43rem;
    top: .3rem;
    background-size: 100% 100%;
    background-image: url("../../../../image/icon-jiangtou2.png");
  }
  .packets-arrow{
    content: '';
    position: absolute;
    display: inline-block;
    width: .7rem;
    height: .7rem;
    left: -.43rem;
    top: .3rem;
    background-size: 100% 100%;
    background-image: url("../../../../image/icon-jiangtou.png");
  }
  .packets-top {
    position: relative;
    height: 2.6rem;
    border-radius:.2rem .2rem 0 0 ;
    background-color: #fb9f3c;
  }
  .packets-img {
    position: absolute;
    top: 0;
    bottom: 0;
    left: .5rem;
    width: 1.5rem;
    height: 1.5rem;
    margin: auto 0;
    background-size: 100% 100%;
    background-image: url("../../../../image/icon-packets.png");
  }
  .packets-info {
    padding: .3rem .3rem 0 2.5rem;
  }
  .packets-info p{
    color: #fff;
    font-size: .6rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  .packets-bottom {
    height: .9rem;
    line-height: .9rem;
    text-indent: .9rem;
    color: #999;
    font-size: .4rem;
    background-color: #fff;
    border-radius:0 0 .2rem .2rem;
  }
  .aui-chat {
    padding-bottom: 3rem;
  }
  .bottomTao {
    height: 2rem;
  }
  .box {
    position: fixed;
    top: 2.25rem;
    width: 100%;
    height: 100%;
    z-index: 1000;
  }
  .bottom-box {
    position: fixed;
    bottom: 0;
    left: 0;
    padding-top: 2.2rem;
    width: 100%;
    background: #fff;
    z-index: 11000;
  }
  .item-voice {
    position: absolute;
    top: .5rem;
    left: .5rem;
    width: 1.3rem;
    height: 1.3rem;
    background-image: url("../../../../image/chat/icon-voice.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
  .item-add {
    position: absolute;
    top: .5rem;
    right: .5rem;
    width: 1.3rem;
    height: 1.3rem;
    background-image: url("../../../../image/chat/icon-add.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
  .bottom-box input {
    position: absolute;
    top: .5rem;
    left: 2.3rem;
    width: 75%;
    font-size: .8rem;
    height: 1.3rem;
    border-bottom: .03rem solid #ebebeb;
  }
  .item-box {
    position: relative;
    height: 7rem;
    width: 100%;
    border-top: .03rem solid #ebebeb;
    background-color: #fff;
  }
  .item-transfer {
    position: absolute;
    top: 1rem;
    left: 1rem;
    width: 3rem;
    height: 3rem;
    border-radius: .2rem;
    border: .03rem solid #ebebeb;
  }
  .transfer-img {
    width: 3rem;
    height: 1.9rem;
    background-image: url("../../../../image/chat/icon-transfer.png");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 1.6rem 1.6rem;
  }
  .customer-img {
    background-image: url("../../../../image/icon-customer.png")!important;
  }
  .packets-imgn {
    background-image: url("../../../../image/icon-packets2.png")!important;
  }
  .transfer-text {
    line-height: 1rem;
    text-align: center;
    font-size: .6rem;
    color: #999;
  }
  .tow {
    left: 5rem!important;
  }
</style>

