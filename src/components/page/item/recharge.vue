<template>
  <div class="main">
    <v-head name="充值"></v-head>
    <div class="item-box">
      <div class="item-text">人工充值</div>
      <div class="item-notice"><span>【提示】</span>最近线上充值不稳定,建议使用人工充值</div>
    </div>
    <div class="app-btn" @click="toTap">立即前往</div>
    <div class="recharge-box">
      <div class="item-text">线上支付</div>
      <div class="item-pay"><span></span>支付宝1</div>
      <div class="item-text">支付金额</div>
      <input type="number" class="amount-box" v-model="amount">
      <div class="item-amount">
        <span v-for="item in amountList" @click="amountTap(item.amount)">{{item.amount}}</span>
      </div>
      <div class="item-text2">请输入支付宝真实姓名</div>
      <input class="name-input" type="text" placeholder="*必须为支付宝的真实姓名,否则无法到账"/>
    </div>
    <div class="app-btn">提交订单</div>
  </div>
</template>
<!--this.$router.push({path:'路径')};-->
<script>
  import head from '../../common/itemHome.vue'
  export default {
    name: 'recharge',
    components:{
      "v-head": head
    },
    data () {
      return {
        amount:0,
        amountList:[
          {
            amount:100
          },{
            amount:200
          },{
            amount:300
          },{
            amount:500
          },{
            amount:1000
          },{
            amount:2000
          },{
            amount:3000
          }
        ],
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
      amountTap:function (amount) {
        this.amount = amount;
      },
      toTap:function () {
        this.$router.push({ name:'customer', query: {name: 'customer',title:'客服中心'}});
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
  .app-btn {
    margin-top: .7rem;
  }
  .main {
    font-size: .7rem;
  }
  .item-box {
    padding:.4rem;
    background-color: #fff;
    margin-top: .7rem;
  }
  .item-notice {
    text-indent: .4rem;
    margin-top: 1rem;
    padding-bottom: 1rem;
  }
  .item-notice span{
    color: #e51c23;
  }
  .item-text {
    text-indent: .4rem;
  }
  .recharge-box {
    padding: .4rem .4rem .8rem .4rem;
    background-color: #fff;
    margin-top: .7rem;
  }
  .item-pay {
    padding: .5rem;
    text-align: center;
  }
  .amount-box {
    height: 1.8rem;
    width: 93%;
    margin:.2rem auto 0;
    text-indent: .3rem;
    border: .03rem solid #ebebeb;
  }
  .item-amount span{
    display: inline-block;
    width: 20%;
    height: 1.2rem;
    line-height: 1.2rem;
    margin: .5rem 2.5% 0;
    border-radius: .1rem;
    text-align: center;
    color: #fff;
    background-color: #00acc1;
  }
  .item-text2 {
    text-indent: .4rem;
    margin-top: .5rem;
  }
  .name-input {
    width: 93%;
    height: 1.8rem;
    margin: 0 auto;
    font-size: .7rem;
    text-indent: .2rem;
    border: .03rem solid #ebebeb;
  }
  .name-input::placeholder{
    font-size: .5rem;
    color: #333;
  }


</style>

