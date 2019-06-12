<template>
  <div class="main" v-cloak>
    <myHead :name="nickname"></myHead>
    <div class="info-box">
      <div class="info-img" :style="{backgroundImage:'url('+detail.face+')'}"></div>
      <div class="info-item">
        <div class="info-name" v-text="detail.name"></div>
        <div class="info-text">id: {{detail.id}}</div>
        <div class="info-text">昵称: {{detail.nickname}}</div>
      </div>
    </div>
    <div class="item-inputBox">
      <div class="item-text">设置备注</div>
      <input type="text" placeholder="请输入需要修改的备注名" v-model="myName"/>
    </div>
    <div class="app-btn" @click="save">保存修改</div>
    <div class="app-btn" @click="chatTap">发消息</div>
  </div>
</template>
<!--this.$router.push({path:'路径')};-->
<script>
  import head from '../../common/itemHome.vue';
  export default {
    name: 'friendsDetail',
    components:{
      myHead:head
    },
    data () {
      return {
        nickname:'',
        myName:'',
        detail:{

        },

      }
    },

    created () {
      this.getList();

    },
    methods: {
      getList:function(){

        var that=this;
        that.$post('/api/v1/member/partyList',{id:this.$route.query.id}).then(res=>{
          that.nickname = res.data.name;
          that.detail = res.data;
          that.myName = res.data.name;
           // console.log(res.data);
        }).catch(error=>{

        })
      },
      chatTap:function () {
        this.$router.push({ name:'chat', query: {name: 'chat',id:this.detail.id,title:this.nickname}});
      },
      save:function(){
        var that = this;
        if(!that.myName){
          Toast({
            message: '备注不能为空',
            position: 'middle',
            duration: 5000
          });
          return;
        }
        that.$post('/api/v1/member/UpdateName',{tid:that.detail.id,content:that.myName}).then(res=>{

          //console.log(res.data);
          if(res.error_code===0){
            Toast({
              message: '保存成功',
              position: 'middle',
              duration: 5000
            });
            that.detail.name=that.myName;
            that.nickname=that.myName;
          }
        }).catch(error=>{

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
  .app-btn {
    margin-top: .7rem;
  }
  .main {
    padding-bottom: 4rem;
    width: 100%;
  }
  .info-box {
    position: relative;
    margin-top: .9rem;
    background-color: #fff;
    width: 100%;
    height: 4rem;
  }
  .info-img {
    position: absolute;
    top: 0;
    bottom: 0;
    left: .5rem;
    width: 3rem;
    height: 3rem;
    margin: auto 0;
    background-color: #6d6d72;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
  .info-item {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 4rem;
    width: 9rem;
    height: 2.5rem;
    margin: auto 0;
  }
  .info-name {
    font-size: .7rem;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap
  }
  .info-text {
    font-size: .55rem;
    color: #999;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap
  }
  .item-inputBox {
    position: relative;
    margin-top: .7rem;
    height: 2.5rem;
    background-color: #fff;
  }
  .item-text {
    line-height: 2.5rem;
    padding-left: .6rem;
    font-size: .7rem;
    color: #999;
  }
  .item-inputBox input{
    position: absolute;
    top: 0;
    bottom: 0;
    left: 4rem;
    width: 9rem;
    height: 1rem;
    font-size: .7rem;
    margin: auto 0;
  }
  .app-btn{
    border-radius: 0.2rem;
  }
</style>

