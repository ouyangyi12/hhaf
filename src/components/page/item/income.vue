<template>
  <div class="main">
    <v-head name="我的收益"></v-head>
    <div class="income-box">
      <div class="income-title">实时返佣</div>
      <div class="income-text">-- 我的收益 --</div>
      <div class="today-income">今日收益: <em class="money-color">0.00</em></div>
      <div class="total-income">收益总金额 <em class="money-color">0.00</em></div>
    </div>
    <div class="item-box">
      <span class="item-text" v-for="item in items">{{item}}</span>
    </div>
  </div>
</template>
<!--this.$router.push({path:'路径')};-->
<script>
  import head from '../../common/itemHome.vue'
  export default {
    name: 'income',
    components:{
      "v-head": head
    },
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        items: ['昵称','佣金','佣金类型','日期']
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
    background-color: #ededed;
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
    height: 100%;
    font-size: .7rem;
    background-color: #ededed;
  }
  .income-box {
    width: 100%;
    padding: .4rem;
    margin-top: .7rem;
    background-color: #fff;
  }
  .income-title {
    width: 100%;
  }
  .income-text {
    text-align: center;
    line-height: 1.4rem;
  }
  .today-income {
    text-align: center;
    line-height: 1.2rem;
  }
  .total-income {
    text-align: center;
    line-height: 1.2rem;
  }
  .money-color {
    color: #e51c23;
  }
  .item-box {
    margin-top: .7rem;
    height: 1.5rem;
    line-height: 1.5rem;
    color: #939393;
    text-align: center;
    background-color: #f6f6f6;
  }
  .item-text {
    display: inline-block;
    width: 25%;
  }
</style>
