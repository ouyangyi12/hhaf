<template>
  <div class="hello">
    <div class="content"></div>
    <header class="aui-bar aui-bar-nav aui-bar-light" ref="head"  id="header">
      <span>金信</span>
      <span class="item-add" @click="addFriendTap"></span>
    </header>
  </div>
</template>
<script>
    export default {
        data() {
            return {
                collapse: false,
                fullscreen: false,
                name: '',
            }
        },
        created(){
        },
        methods:{
            addFriendTap:function(){
              this.$router.push({ name:'addFriend', query: { name: 'addFriend',title:'添加好友'}})
            },
        },
        mounted(){

        }
    }
</script>
<style scoped>
  body,html{
    margin:0;
    padding:0;
    height: 100%;
    background-color: #000;
    font-size: 20px;
    width: 750rem;
  }
  #header{

    background: #000;

    height: 0;

    min-height: 0;

    position: fixed;

    top: 0;

  }
  .content {
    padding-top: 2.25rem;
  }
  .oy-tab-item.oy-active .oy-tab-item-line{

    background:#484848;

  }

  .rr-bar {
    text-align: center;
    text-indent: 0;
    color: #7c8187!important;
  }

  .aui-bar {
    text-align: left;
    text-indent: .5rem;
    color: #fff;
    font-size: .9rem;
    background-color: #303030!important;
  }
  .item-add {
    display: inline-block;
    position: absolute;
    top: 0;
    bottom: 0;
    right: .4rem;
    margin: auto 0;
    vertical-align: center;
    width: 1rem;
    height: 1rem;
    background-repeat: no-repeat;
    background-size: 1rem 1rem;
    background-image: url("../../../image/customer/icon-add.png");
  }

  [v-cloak] {
    display: none;
  }
</style>
