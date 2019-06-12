<template>
  <div class="main">
    <v-head name="红包记录"></v-head>
    <div class="headText-box">
      <div class="pageText" v-for="(item,index) in itemText" :class="{'textBottom':itemType == index,'textColor':itemType == index}" @click="textBtn(index)">{{item}}</div>
    </div>
    <div class="item-box" v-if="itemType==0">
        <div class="item-img"></div>
        <div class="item-name">强迫症晚期</div>
        <div class="item-money">0.00<em> 元</em></div>
        <div class="item-number">一共抢到0个红包</div>
        <div class="item-showLogs">(只显示最近24小时的记录)</div>
    </div>
    <div class="item-box" v-if="itemType==1">
      <div class="item-img"></div>
      <div class="item-name">强迫症晚期</div>
      <div class="item-money">0.00<em> 元</em></div>
      <div class="item-number">一共发出0个红包</div>
      <div class="item-showLogs">(只显示最近24小时的记录)</div>
    </div>
  </div>
</template>
<!--this.$router.push({path:'路径')};-->
<script>
  import head from '../../common/packetsHome.vue'
  export default {
    name: 'logsMention',
    components:{
      "v-head": head
    },
    data () {
      return {
        itemText:['收到的红包','发出的红包'],
        itemType: 0
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
      textBtn:function (index) {
        var that = this;
        if (index == this.itemType){
          return;
        } else {
          that.itemType = index;
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
  .headText-box {
    width: 100%;
    height: 2.5rem;
    background-color: #fff;
    text-align: center;
  }
  .pageText {
    position: relative;
    display: inline-block;
    padding: 0 2rem;
    height: 2.5rem;
    line-height: 2.5rem;
    text-align: center;
    font-size: .7rem;
  }
  .textBottom::after{
    content: '';
    color: #cd553d;
    position: absolute;
    display: block;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 4rem;
    height: .2rem;
    background-color: #cd553d;
  }
  .textColor{
    color: #cd553d;
  }
  .item-img {
    width: 2rem;
    height: 2rem;
    margin: 1rem auto 0 auto;
    background-color: #6d6d72;
  }
  .item-name {
    line-height: 1.3rem;
    font-size: .6rem;
    color: #fff;
    text-align: center;
  }
  .item-money {
    font-size: 2rem;
    color: #333;
    text-align: center;
  }
  .item-money em{
    vertical-align: center;
    font-size: .7rem;
  }
  .item-number {
    margin-top: 2rem;
    text-align: center;
  }
  .item-showLogs {
    text-align: center;
    font-size: .6rem;
    color: #999;
  }
</style>


