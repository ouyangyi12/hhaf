<template>
  <div class="main">
    <v-head name="个人信息"></v-head>
    <div class="avatar-box">
      <div class="box-text">头像</div>
      <img :src="img">
      <div class="icon-back"></div>
    </div>
    <div class="name-box">
      <div class="box-text">昵称</div>
      <input type="text" v-model="name" placeholder="请输入昵称">
      <div class="icon-back"></div>
    </div>
    <div class="app-btn" @click="saveTap">保存</div>
  </div>
</template>
<!--this.$router.push({path:'路径')};-->
<script>
  import head from '../../common/itemHome.vue'
  export default {
    name: 'info',
    components:{
      "v-head": head
    },
    data () {
      return {
        img:this.$route.query.face,
        name:this.$route.query.nickname,
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
      saveTap:function(){
        var that = this;
        var data = {
          nickname:that.name,
          face:that.img
        }
        this.$post('/api/v1/member/updateMyList',data).then(res=>{
        }).catch(err=>{
          alert(err.msg);
        });
      },
      ao:function () {
        this.$emit("child");
      }
    },
    mounted(){

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
    margin-top: .5rem;
  }
  .app-btn {
    margin-top: 2rem;
  }
  .box-text {
    line-height: 3rem;
    padding-left: .8rem;
    font-size: .8rem;
    color: #333;
  }
  .avatar-box {
    position: relative;
    height: 3rem;
    width: 100%;
    background-color: #fff;
    border-bottom: .03rem solid #ebebeb;
  }
  .avatar-box img {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 1.5rem;
    margin: auto 0;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background-color: #9e9e9e;
  }
  .name-box {
    position: relative;
    height: 3rem;
    width: 100%;
    background-color: #fff;
  }
  .name-box input {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 1.5rem;
    margin: auto 0;
    height: 2.5rem;
    text-align: right;
    width: 60%;
    line-height: 1.5;
    font-size: .7rem;
  }
  .icon-back {
    position: absolute;
    top: 0;
    bottom: 0;
    right: .3rem;
    margin: auto 0;
    width: .6rem;
    height: .6rem;
    background-image: url("../../../../image/icon-back.png");
    background-size: 100% 100%;
  }
</style>

