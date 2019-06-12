<template>
  <div class="wrapper">
    <!--头部-->
      <div class="content"></div>
      <header class="aui-bar aui-bar-nav aui-bar-light" ref="head"  id="header">
        <div @click="closeTap">
          <span class="item-title">{{name}}</span>
          <span class="item-back"></span>
        </div>
        <span @click="moreTap" v-if="packetsTd" class="gameIcon"></span>
        <span v-if="info" class="tollText">6777人</span>
      </header>
    <!--内容-->
  </div>
</template>

<script>
  export default {
    props:['name'],
    data(){
      return {
        packetsTd: this.$route.query.packetsTd,
        fullscreen: false,
        info:this.$route.query.info,
      }
    },
    created(){

    },
    methods:{
      closeTap:function(){
        this.$router.go(-1);
      },
      moreTap:function () {
        this.$router.push({ name: 'chatInfo', query: { name:'chatInfo',title:'聊天信息',info:1}})
      }
    },
  }
</script>

<style scoped>
  body,html{
    margin:0;
    padding:0;
    height: 100%;
    font-size: 20px;
    width: 750rem;
  }
  .content {
    padding-top: 2.25rem;
  }
  #header{

    background: #000;

    height: 0;

    min-height: 0;

    position: fixed;

    top: 0;

  }
  .gameIcon {
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto 0;
    display: inline-block;
    height: 2.25rem;
    width: 3rem;
    background-image: url("../../../image/icon-more.png");
    background-size: 1.5rem 1.5rem;
    background-repeat: no-repeat;
    background-position: center;
  }

  .oy-tab-item.oy-active .oy-tab-item-line{

    background:#484848;

  }

  .item-title {
    padding-left: 1.3rem;
    font-size: .8rem;
  }

  .aui-bar {
    position: relative;
    text-align: left;
    text-indent: .3rem;
    color: #fff;
    background-color: #303030!important;
  }
  .item-back {
    display: inline-block;
    position: absolute;
    top: 0;
    bottom: 0;
    left: .4rem;
    margin: auto 0;
    vertical-align: center;
    width: 1rem;
    height: 1rem;
    background-repeat: no-repeat;
    background-size: 1rem 1rem;
    background-image: url("../../../image/white-back.png");
  }
  .tollText {
    position: absolute;
    right: .4rem;
    top: 0;
    bottom: 0;
    margin: auto 0;
    line-height: 2.25rem;
    width: 3rem;
    color: #fff;
    font-size: .8rem;
  }

  [v-cloak] {
    display: none;
  }
</style>
