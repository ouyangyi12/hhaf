<template>
  <div class="main">
    <v-head name="设置"></v-head>
    <div class="box-list">
      <div class="list-text">当前版本</div>
      <div class="list-vi">版本: 0.0.0</div>
    </div>
    <div class="app-btn" @click="goOut">注销账号</div>
  </div>
</template>
<!--this.$router.push({path:'路径')};-->
<script>
  import head from '../../common/itemHome.vue'
  export default {
    name: 'setup',
    components:{
      "v-head": head
    },
    data () {
      return {

      }
    },
    created () {

    },
    methods: {
      goOut:function () {
        localStorage.removeItem('token');
        localStorage.removeItem('no');
        this.$router.push({name:'login'});
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
    margin-top: 3rem;
    background-color: #fe5c35;
  }
  .box-list {
    position: relative;
    height: 2.3rem;
    width: 100%;
    background-color: #fff;
  }
  .list-text {
    line-height: 2.3rem;
    padding-left: .5rem;
    font-size: .7rem;
  }
  .list-vi {
    position: absolute;
    top: 0;
    right: 1rem;
    line-height: 2.3rem;
    font-size: .7rem;
  }
</style>
