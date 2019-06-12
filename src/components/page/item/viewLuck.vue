<template>
  <div class="main">
    <v-head name="查看手气"></v-head>
    <div class="header-box">
      <div class="header-info">
        <div class="header-img"></div>
        <div class="header-name">达瓦更</div>
        <div class="header-text">314.3元 雷号0</div>
      </div>
    </div>
    <div class="item-box">
      <div class="item-text">00分01秒抢完</div>
      <div class="box" v-for="item in 20">
        <div class="box-img"></div>
        <div class="box-info">
          <div class="box-name">海贼王</div>
          <div class="box-time">20:33:09</div>
        </div>
        <div class="box-money">1315元</div>
      </div>
    </div>
  </div>
</template>
<!--this.$router.push({path:'路径')};-->
<script>
  import head from '../../common/packetsHome.vue'
  export default {
    name: 'viewLuck',
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
  .header-box {
    position: relative;
    height: 7rem;
    width: 100%;
    overflow: hidden;
  }
  .header-box:after{
    content: '';
    display: inline-block;
    position: absolute;
    left: -5%;
    top:-1rem;
    width: 110%;
    height: 4rem;
    background-color: #cd553d;
    border-radius: 0 0 50% 50%;
  }
  .header-info {
    position: absolute;
    width: 70%;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    z-index: 3;
    text-align: center;
  }
  .header-img {
    width: 3rem;
    height: 3rem;
    margin: 0 auto;
    background-color: #b3e5fc;
  }
  .header-name {
    line-height: 1.5rem;
  }
  .header-text {
    line-height: 1.2rem;
    color: #999;
  }
  .item-box {
    background-color: #fff;
    margin-top: 2rem;
  }
  .item-text {
    padding-left: .3rem;
    font-size: .5rem;
    height: 1.2rem;
    line-height: 1.2rem;
    color: #999;
    border-bottom: .03rem solid #ebebeb;
  }
  .box {
    position: relative;
    height: 3rem;
    width: 90%;
    padding: 0 5%;
    margin: 0 auto;
    border-bottom: .03rem solid #ebebeb;
  }
  .box-img {
    position: absolute;
    top:0;
    bottom: 0;
    left: 0;
    margin: auto 0;
    width: 2rem;
    height: 2rem;
    background-color: #b3e5fc;
  }
  .box-info {
    padding-left: 1.6rem;
    font-size: .7rem;
    height: 2rem;
    padding-top: .5rem;
    color: #333;
  }
  .box-money {
    position: absolute;
    right: 0;
    top: 0;
    line-height: 2rem;
    font-size: .5rem;
    color: #333;
  }


</style>

