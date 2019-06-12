<template>
  <div class="main">
    <v-head name="聊天信息"></v-head>
    <div class="item-box">
      <div class="box" v-for="item in 30">
        <div class="box-img"></div>
        <div class="box-text">哈哈哈</div>
      </div>
    </div>
    <div class="item-box">
      <div class="box" v-for="item in 5">
        <div class="box-img box-img2"></div>
        <div class="box-text">哈哈哈</div>
      </div>
      <div class="box-select">查看全部成员</div>
    </div>
    <div class="line-box">
      <div class="line-list">
        <div class="line-name">群聊名称</div>
        <div class="line-text">新年红包群(30-750)</div>
      </div>
      <div class="line-list">
        <div class="line-name">群聊号码</div>
        <div class="line-text">1301</div>
      </div>
      <div class="line-list">
        <div class="line-name">自动清除一个小时以前的记录</div>
        <div class="line-text"></div>
      </div>
    </div>
  </div>
</template>
<!--this.$router.push({path:'路径')};-->
<script>
  import head from '../../common/itemHome.vue'
  export default {
    name: 'chatInfo',
    components:{
      "v-head": head
    },
    data () {
      return {

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
    padding-bottom: 2rem;
  }
  .item-box {
    background-color: #fff;
    display: flex;
    flex-wrap:wrap;
    justify-content:center;
  }
  .box {
    width: 2.5rem;
    height: 3.5rem;
    margin: 3%;
  }
  .box-img{
    width: 100%;
    height: 2.5rem;
    background-color: #6d6d72;
  }
  .box-text {
    line-height: 1rem;
    font-size: .5rem;
    text-align: center;
  }
  .box-img2 {
    background-repeat: no-repeat;
    background-position: center;
    background-size: 1rem 1rem;
    background-color: #fff;
    border: .03rem solid #ebebeb;
    background-image: url("../../../../image/chat-add.png");
  }
  .box-select {
    margin-top: 1rem;
    line-height: 1.5rem;
    font-size: .7rem;
    color: #999;
  }
  .line-box {
    background-color: #fff;
    margin-top: .7rem;
  }
  .line-list {
    position: relative;
    height: 2rem;
    width: 100%;
    border-bottom: .03rem solid #ebebeb;
  }
  .line-name {
    position: absolute;
    top: 0;
    bottom: 0;
    left: .5rem;
    margin: auto 0;
    line-height: 2rem;
    font-size: .7rem;
    color: #333;
  }
  .line-text {
    position: absolute;
    top: 0;
    bottom: 0;
    right: .5rem;
    margin: auto 0;
    line-height: 2rem;
    font-size: .7rem;
    color: #999;
  }
</style>


