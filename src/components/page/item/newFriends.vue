<template>
  <div class="main">
    <v-head name="新朋友"></v-head>
    <div class="friends-box">
      <div class="friends-img"></div>
      <div class="friends-title">新的朋友</div>
    </div>
    <div class="friends-list" @click="friendsDetailTap">
      <div class="list-img"></div>
      <div class="list-name">强迫症</div>
    </div>
  </div>
</template>
<!--this.$router.push({path:'路径')};-->
<script>
  import head from '../../common/itemHome.vue'
  export default {
    name: 'logRecharge',
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
</style>

