<template>
  <div id="main">
    <v-head></v-head>
    <div class="item-topBox">
      <div class="item-btnTap active-btn" v-cloak v-for="(item,index) in customerList" v-if="item.type==1">{{item.type | type}}客服</div>
    </div>
    <div class="customer-title">人工充值微信</div>
    <div class="item-list">
      <div class="list-box" v-for="(item,index) in customerList" v-if="item.type==0">
        <div class="box-text" v-cloak>{{item.type | type}}: {{item.number}}</div>
        <div class="box-btn active-btn">复制</div>
      </div>
    </div>
    <v-content itemTpy="0"></v-content>
  </div>
</template>
<!--this.$router.push({path:'路径')};-->
<script>
  import head from '../common/Header.vue';
  import content from '../common/Sidebar.vue';
  export default {
    name: 'customer',
    components:{
      "v-head": head,
      "v-content" : content
    },
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        customerItem:{},
        customerList:[],
      }
    },
    created () {
      var that=this;
      this.customerDate();
      setTimeout(function () {
        that.$nextTick(function () {

        })
      },500)
    },
    filters: {
      'type': function (value) {
        if (value == 0){
          var type = '微信'
        }else {
          var type = 'QQ'
        }
        return type;
        // value = value.toString()
        // return value.charAt(0).toUpperCase() + value.slice(1)
      }
    },
    methods: {
      customerDate:function () {
        this.$post('/api/v1/member/customer').then(res=>{
          this.customerList = res.data
          console.log(JSON.stringify(res));
        }).catch(err=>{
          alert(JSON.stringify(err));
        })
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
    background-color: #2ac845;
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
  /*.box-btn2 {*/
    /*background-color: #00bcd4!important;*/
  /*}*/
  #main {
    padding-bottom: 4rem;
  }
  .item-topBox {
    padding: 2rem 0;
    width: 100%;
    background-color: #fff;
    margin-top: 1rem;
  }
  .item-btnTap {
    width: 70%;
    text-align: center;
    height: 2rem;
    line-height: 2rem;
    color: #fff;
    font-size: .8rem;
    margin: .8rem auto 0 auto;
    background-color: #22c320;
  }
  .item-btnTap:nth-child(1){
    margin-top: 0;
  }
  .customer-title {
    height: 2rem;
    line-height: 2rem;
    text-indent: 13%;
    font-size: .7rem;
    color: #333;
    text-align: left;
  }

  .item-list {
    background-color: #fff;
  }

  .list-box {
    position: relative;
    height: 2.2rem;
    line-height: 2.2rem;
    font-size: .66rem;
    color: #333;
    text-align: left;
    border-bottom: .05rem solid #ededed;
  }

  .box-text {
    text-indent: 14%;
  }

  .box-btn {
    position: absolute;
    right: 10%;
    top: 0;
    bottom: 0;
    margin: auto 0;
    width: 3rem;
    height: 1.5rem;
    line-height: 1.5rem;
    border-radius: 0.3rem;
    color: #fff;
    font-size: .6rem;
    text-align: center;
    background-color: #22c320;
    box-shadow: .02rem .02rem 0 .02rem #d1d1d1;
  }

  .active-btn:active{
    opacity: 0.8;
  }

  [v-cloak] {
    display: none;
  }
</style>

