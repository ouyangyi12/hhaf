<template>
  <div class="main">
    <my-head :name="'新朋友'"></my-head>

    <div class="friends-list"  v-for="item in list" :key="item.id">
      <div class="list-img" :style="{backgroundImage:'url('+item.face+')'}" v-if="item.face!=''"></div>
      <div class="list-img"  v-else></div>
      <div class="list-name flex flex-ver" >
          <div class="flex-1" v-text="item.nickname">

          </div>
          <div class="oy-btn" @click="save(item.id)">接受</div>
      </div>

    </div>
  </div>

</template>
<!--this.$router.push({path:'路径')};-->
<script>
  import head from '../../common/itemHome.vue';

  export default {
    name: 'friendList',
    components:{
      myHead:head

    },
    data () {
      return {
        list:[],

      }
    },
    created () {
      this.getList();
    },
    methods: {
      getList:function(num){
        var that=this;

        that.$post('/api/v1/member/NewFriend',{}).then(res=>{

          if(num==1){
            var list = [];
          }else{
            var list = that.list||[];
          }



          for (var i=0;i<res.data.length;i++){
            list.push(res.data[i]);
          }
          that.list = list;

        }).catch(error=>{
          alert(error.msg)
        })
      },
      save:function(id){

        var that =this;
        that.$post('/api/v1/member/TonNewFriend',{id:id}).then(res=>{
          //console.log(res.data);
          if(res.error_code===0){
            Toast({
              message: '添加成功',
              position: 'middle',
              duration: 5000
            });
            that.getList(1);

          }
        }).catch(error=>{
          alert(error.msg)
        })

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
    background-image: url("../../../../image/new-friends.png");
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
    background-image: url("../../../../image/new-friends.png");
  }
  .list-name {
    line-height: 2.5rem;
    padding-left: 3rem;
    font-size: .7rem;
  }

  /*flex*/
  .flex {
    display: -webkit-box; /* OLD - iOS 6-, Safari 3.1-6 */
    display: -moz-box; /* OLD - Firefox 19- (buggy but mostly works) */
    display: -ms-flexbox; /* TWEENER - IE 10 */
    display: -webkit-flex; /* NEW - Chrome */
    display: -moz-flex;
    display: -ms-flex;
    display: -o-flex;
    display: flex; /* NEW, Spec - Opera 12.1, Firefox 20+ */
  }



  /* 宽度随屏幕改变变化 */

  .flex-1 {
    flex: 1;
    -webkit-flex: 1;
  }

  /* 垂直水平居中 */

  .flex-center {
    justify-content: center;
    -webkit-justify-content: center;
    align-items: center;
    -webkit-align-items: center;
  }

  /* 垂直居中 */

  .flex-ver {
    align-items: center;
    -webkit-align-items: center;
  }
  .oy-btn{
    height: 1.4rem;
    padding:0 0.4rem;
    line-height: 1.4rem;
    color: #fff;
    font-size: .7rem;
    margin:0 0.5rem;
    border-radius: 0.2rem;
    background-color: #1ad143;

  }



</style>

