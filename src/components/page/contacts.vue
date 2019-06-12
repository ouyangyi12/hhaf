<template>
  <div class="main">
    <v-head></v-head>
    <div class="aui-searchbar" id="search">
      <div class="aui-searchbar-input aui-border-radius">
        <i class="aui-iconfont aui-icon-search"></i>
        <form action="">
          <input type="search" placeholder="请输入搜索内容"  v-model="bid"  id="search-input">
        </form>
      </div>
      <div class="aui-searchbar-cancel od" @click="getList(1)">搜索</div>
    </div>
    <div class="friends-box" @click="openNewList">
      <div class="friends-img"></div>
      <div class="friends-title">新的朋友</div>
    </div>
    <div class="friends-list" @click="friendsDetailTap(item.id)" v-for="item in list" :key="item.id">
      <div class="list-img" :style="{backgroundImage:'url('+item.face+')'}" v-if="item.face!=''"></div>
      <div class="list-img"  v-else></div>
      <div class="list-name" v-text="item.name==''?item.nickname:item.name"></div>
    </div>

    <v-content itemTpy="1"></v-content>
  </div>

</template>
<!--this.$router.push({path:'路径')};-->
<script>
  import head from '../common/Header.vue';
  import content from '../common/Sidebar.vue';
  export default {
    name: 'contacts',
    components:{
      "v-head": head,
      "v-content" : content
    },
    data () {
      return {
        list:[],
        bid:''
      }
    },
    created () {
      this.getList();
    },
    methods: {
      getList:function(num){
        var that=this;
        var data={};
        if(that.bid!=''){
            data.bid = that.bid;
        }

        that.$post('/api/v1/member/list',data).then(res=>{

          //console.log(res);
            if(num==1){
              var list = [];
            }else{
              var list = that.list||[];
            }

          for (var i=0;i<res.list.length;i++){
            list.push(res.list[i]);
          }
          that.list = list;

        }).catch(error=>{
          alert(error.msg)
        })
      },
      friendsDetailTap:function(id){
        this.$router.push({ name:'friendsDetail', query: {name: 'friendsDetail',title:'详细信息',id:id }});
      },
      openNewList:function(){
        this.$router.push({ name:'friendList', query: {name: 'friendList',title:'新朋友'}});
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
  .od {
    padding-right: .4rem;
  }
  .od:active {
    color: #000;
  }
  .main {
    padding-bottom: 4rem;
  }
  .friends-box {
    position: relative;
    width: 100%;
    height: 2.5rem;
    background-color: #fff;
  }
  .friends-img {
    position: absolute;
    top: 0;
    bottom: 0;
    left: .4rem;
    width: 2rem;
    height: 2rem;
    margin: auto 0;
    background-size: 100% 100%;
    background-image: url("../../../image/new-friends.png");
  }
  .friends-title {
    line-height: 2.5rem;
    padding-left: 3rem;
    font-size: .7rem;
  }
  .friends-list {
    position: relative;
    width: 100%;
    height: 2.5rem;
    margin-top: .7rem;
    background-color: #fff;
  }
  .list-img {
    position: absolute;
    top: 0;
    bottom: 0;
    left: .4rem;
    width: 2rem;
    height: 2rem;
    margin: auto 0;
    background-size: 100% 100%;
    background-image: url("../../../image/new-friends.png");
  }
  .list-name {
    line-height: 2.5rem;
    padding-left: 3rem;
    font-size: .7rem;
  }
</style>

