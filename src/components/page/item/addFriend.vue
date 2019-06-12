<template>
  <div class="main">
    <v-head name="添加好友"></v-head>
    <div class="aui-searchbar" id="search">
      <div class="aui-searchbar-input aui-border-radius"  onclick="">
        <i class="aui-iconfont aui-icon-search"></i>
        <form action="">
          <input type="search" placeholder="请输入id" v-model="id" id="search-input">
        </form>
      </div>
      <div class="aui-searchbar-cancel od" @click="addTap" >添加</div>
    </div>
  </div>
</template>
<!--this.$router.push({path:'路径')};-->
<script>
  import head from '../../common/itemHome.vue'
  export default {
    name: 'addFriend',
    components:{
      "v-head": head
    },
    data () {
      return {
        id: ''
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
      addTap:function () {
        var that = this;
        if(!that.id){
          Toast({
            message: 'id不能为空',
            position: 'middle',
            duration: 5000
          });
          return;
        }
        that.$post('/api/v1/member/invite',{id:that.id,}).then(res=>{

          //console.log(res.data);
          if(res.error_code===0){
            Toast({
              message: '添加成功',
              position: 'middle',
              duration: 5000
            });

          }
        }).catch(error=>{
          Toast({
            message: error.msg,
            position: 'middle',
            duration: 5000
          });
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
</style>
