<template>
  <div class="main">
    <div class="logo-box">
      <div class="logo-img"></div>
    </div>
    <div class="item-LoginBtn" @click="openQQ">
      <div class="item-icon"></div>
      <div class="item-text">QQ账号登录</div>
    </div>
    <div class="item-LoginBtn tow" @click="openPhone">
      <div class="item-icon tow2"></div>
      <div class="item-text">手机号/会员号登录</div>
    </div>
    <div class="bottom-text">登录代表您同意<em>《金信服务协议》</em></div>
  </div>
</template>
<!--this.$router.push({path:'路径')};-->
<script>
  export default {
    name: 'login',
    data () {
      return {
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
      openQQ:function () {

      },
      openPhone: function () {
        this.$router.push({name:'initial',query:{title:'登录'}})
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
    font-size: 20px;
    width: 750rem;
    background-color: #fff;
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
  .logo-box {
    margin-top: 6rem;
  }
  .logo-img {
    width: 4rem;
    height: 4rem;
    margin: 0 auto;
    background-color: #333;
  }
  .item-LoginBtn {
    position: relative;
    width: 80%;
    height: 2.6rem;
    margin: 5rem auto 0 auto;
    background-color: #00bcd4;
    border-radius: 2rem;
    text-align: center;
    box-shadow: .05rem .02rem .03rem .05rem #999;
  }
  .item-LoginBtn:active{
    opacity: .7;
  }
  .item-text {
    text-indent: 2rem;
    font-size: 1rem;
    color: #fff;
    line-height: 2.6rem;
  }
  .item-icon {
    position: absolute;
    left: 3.5rem;
    top: 0;
    bottom: 0;
    margin: auto 0;
    width: 1.5rem;
    height: 1.5rem;
    background-image: url(../../../image/qq.png);
    background-size: 100% 100%;
  }
  .tow {
    margin-top: 2rem;
    background-color: #fc902d;
  }
  .tow2 {
    left: 2.5rem;
    background-image: url(../../../image/phone.png);
  }
  .bottom-text {
    position: fixed;
    bottom: .7rem;
    width: 100%;
    color: #333;
    text-align: center;
    font-size: .7rem;
  }
  .bottom-text em{
    color: #fc902d;
  }
</style>

