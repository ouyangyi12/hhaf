<template>
  <div class="wrapper">
    <!--头部-->
      <div class="content"></div>
      <header class="aui-bar aui-bar-nav aui-bar-light" ref="head"  id="header">
        <div @click="closeTap">
          <span class="item-title">{{name}}</span>
          <span class="item-back"></span>
        </div>
        <span class="item-title2" @click="packetsLogs" v-if="num">红包记录</span>
      </header>
    <!--内容-->
  </div>
</template>

<script>
  // import vSidebar from './packetsContent.vue';
  // import vHead from './packetsHeader.vue';
  export default {
    data(){
      return {
        tagsList: [],
        fullscreen: false,
        collapse: false,
        name: this.$route.query.title,
        num: this.$route.query.num,
      }
    },
    components:{

    },
    created(){
    },
    methods: {
      closeTap: function () {
        this.$router.go(-1);
        // this.$router.push({ name: 'contacts', query: { item: 0 }})
      },
      packetsLogs:function () {
        this.$router.push({name:'packetsLogs',query:{name:'packetsLogs',title:'红包记录'}});
      }
    }
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
    padding-top: 2.2rem;
  }
  #header{

    background: #000;

    height: 0;

    min-height: 0;

    position: fixed;

    top: 0;

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
    background-color: #cd553d!important;
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
  .item-title2{
    position: absolute;
    top: 0;
    bottom: 0;
    right: .4rem;
    line-height: 2.2rem;
    font-size: .8rem;
  }

  [v-cloak] {
    display: none;
  }
</style>
