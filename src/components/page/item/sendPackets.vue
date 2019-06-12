<template>
  <div class="main">
    <v-head name="发红包"></v-head>
    <div class="item-box">
      <div class="item-balance">余额: 0</div>
      <div class="item-inputBox">
        <div class="box">
          <div class="box-text">红包个数</div>
          <div class="box-unit">个</div>
        </div>
        <div class="item-title">游戏倍数: 1.6倍</div>
        <div class="box box-top">
          <div class="box-text">总金额</div>
          <input type="text" class="input-r" placeholder="0.00">
          <div class="box-unit">元</div>
        </div>
        <div class="item-title">红包发布范围:30.00-750.00</div>
        <div class="box box-top">
          <div class="box-text">雷号</div>
          <input type="text" placeholder="请输入雷号"/>
        </div>
      </div>
      <div class="item-balance">￥ 0.00</div>
      <div class="app-btn">塞钱进红包</div>
      <div class="bottom-text">未领取的红包,将于3分钟后发起退款</div>
    </div>
  </div>
</template>
<!--this.$router.push({path:'路径')};-->
<script>
  import head from '../../common/itemHome.vue'
  export default {
    name: 'logRecharge',
    components:{
      "v-head": head
    },
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
  .main {
    width: 90%;
    margin: 0 auto;
  }
  .item-balance {
    line-height: 4rem;
    font-size: 1.5rem;
    text-align: center;
  }
  .box {
    position: relative;
    height: 2rem;
    background-color: #fff;
  }
  .input-r {
    right: 1.6rem!important;
  }
  .box-top {
    margin-top: .5rem;
  }
  .box input{
    position: absolute;
    top: 0;
    right: 1rem;
    width: 40%;
    height: 2rem;
    text-align: right;
    font-size: .7rem;
    color: #333;
  }
  .box-text {
    padding-left: .5rem;
    line-height: 2rem;
    color: #333;
    font-size: .7rem;
  }
  .box-unit {
    position: absolute;
    right: .7rem;
    top: 0;
    line-height: 2rem;
    font-size: .7rem;
  }
  .item-title {
    line-height: 1.8rem;
    font-size: .7rem;
    color: #666;
  }
  .bottom-text {
    padding-top: 1rem;
    text-align: center;
    font-size: .7rem;
    color: #666;
  }
  .app-btn {
    width: 100%;
    background-color: #fe5c35;
  }
</style>

