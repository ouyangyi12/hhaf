<template>
  <div class="main">
    <v-head name="推广海报"></v-head>
    <div class="box">
      <div class="item-box">
        <p>1.注册即可进入游戏</p>
        <p>2.快速提现,立即到账</p>
        <p>3.正规平台,不封号</p>
        <img :src="img">
        <p class="item-li">扫一扫,关注我们</p>
      </div>
    </div>
  </div>
</template>
<!--this.$router.push({path:'路径')};-->
<script>
  import head from '../../common/itemHome.vue'
  export default {
    name: 'posters',
    components:{
      "v-head": head
    },
    data () {
      return {
        img:''
      }
    },
    created () {
      var that=this;
      this.getList();
      setTimeout(function () {
        that.$nextTick(function () {
        })
      },500)
    },
    methods: {
      getList:function(){
        var that = this;
        var data = {
        }
        this.$post('/api/v1/poster/index',data).then(res=>{
          that.img = res.data;
        }).catch(err=>{
          alert(err.msg);
        });
      },
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
  .main{
    height: 100%;
  }
  .box {
    position: absolute;
    top: 2.25rem;
    left: 0;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    background-color: #6d6d72;
    background-image: url("../../../../image/posters-img.jpg");
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
  .item-box {
    position: absolute;
    right: 0;
    left: 0;
    top: 0;
    bottom: 7rem;
    width:7rem;
    height: 10rem;
    margin:auto;
    text-align: center;
  }
  .item-box p {
    font-size: .7rem;
    line-height: 1rem;
    color: #fff;
  }
  .item-box img {
    display: inline-block;
    width: 5.5rem;
    height: 5.5rem;
    margin: .5rem auto 0 auto;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }
  .item-li {
    text-align: center;
    font-weight: 600;
    font-size: .8rem!important;
    color: #ffff00!important;
  }
</style>
