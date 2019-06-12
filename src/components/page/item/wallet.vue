<template>
  <div class="main">
    <v-head name="红包详情"></v-head>
    <div class="item-text">余额: 0.00</div>
    <div class="item-box">
      <div class="box-list" v-for="item in items" @click="itemTap(item.url)">
        <div class="list-text">{{item.name}}</div>
        <div class="icon-back"></div>
      </div>
    </div>
  </div>
</template>
<!--this.$router.push({path:'路径')};-->
<script>
  import head from '../../common/itemHome.vue'
  export default {
    name: 'wallet',
    components:{
      "v-head": head
    },
    data () {
      return {
        items:[
          {
            name:'充值记录',
            url:'logsRecharge'
          },{
            name: '转账记录',
            url: 'logsTransfer'
          },{
            name: '提现记录',
            url:'logsMention'
          },{
            name: '红包记录',
            url:'logsPackets'
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
      itemTap:function (url) {
        if(url == 'logsRecharge'){
          this.$router.push({ name:'logsRecharge', query: { name: 'logsRecharge',title:'充值记录'}})
        }if(url == 'logsTransfer'){
          this.$router.push({ name:'logsTransfer', query: { name: 'logsTransfer',title:'转账记录'}})
        }if(url == 'logsMention'){
          this.$router.push({ name:'logsMention', query: { name: 'logsMention',title:'提现记录'}})
        }if(url == 'logsPackets'){
          this.$router.push({ name:'logsPackets', query: { name: 'logsPackets',title:'红包记录'}})
        }
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
  .item-text {
    height: 4rem;
    line-height: 4rem;
    font-size: 1.2rem;
    text-align: center;
  }
  .item-box {
    background-color: #fff;
  }
  .box-list {
    position: relative;
    height: 2rem;
    width: 100%;
    border-bottom: .03rem solid #ebebeb;
  }
  .box-list:active{
    opacity: .8;
  }
  .list-text {
    line-height: 2rem;
    padding-left: .5rem;
    font-size: .7rem;
  }
  .icon-back {
    position: absolute;
    top: 0;
    right: .4rem;
    width: 1rem;
    height: 1.8rem;
    background-position: center;
    background-repeat: no-repeat;
    background-size: .5rem .5rem;
    background-image: url("../../../../image/icon-back.png");
  }
</style>

