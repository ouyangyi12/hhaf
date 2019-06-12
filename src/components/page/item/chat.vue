<template>
  <div class="main">
    <v-head :name="myName"></v-head>
    <div class="box"  v-if="hide" @click="adT"></div>
    <div class="bottom-box">
      <div class="item-voice"></div>
      <input type="text" placeholder="禁言中" disabled="disabled"/>
      <div class="item-add" @click="addTap"></div>
      <div class="item-box" v-if="hide">
        <div class="item-transfer" @click="transferTap">
          <div class="transfer-img"></div>
          <div class="transfer-text">转账</div>
        </div>
      </div>
    </div>
  </div>
</template>
<!--this.$router.push({path:'路径')};-->
<script>
  import head from '../../common/itemHome.vue'
  export default {
    name: 'chat',
    components:{
      "v-head": head
    },
    data () {
      return {
        hide: 0,
        myName:''
      }
    },
    created () {
      var that=this;
        that.myName=this.$route.query.title;
    },
    methods: {
      adT:function(){
        this.hide = 0
      },
      addTap:function () {
        this.hide = 1
      },
      transferTap:function () {
        var that = this;
        that.$post('/api/v1/setlist/IfMobile').then(res=>{
          if(res.error_code===0){
            that.$post('/api/v1/setlist/IfPass').then(res1=>{
              if(res1.error_code===0){
                that.$router.push({ name:'transfer', query: {name: 'transfer',id:this.$route.query.id,title:'转账'}});
              }
            }).catch(error1=>{
              if(error1.error_code===9999){
                Toast({
                  message: '请设置支付密码',
                  position: 'bottom',
                  duration: 1000
                });
                that.$router.push({ name:'bindingPay', query: {name: 'bindingPay',title:'设置支付密码'}});
              }else{
                Toast({
                  message: error1.msg,
                  position: 'middle',
                  duration: 5000
                });
              }
            })
          }
        }).catch(error=>{

            if(error.error_code===9999){
              that.$router.push({ name:'bindingPhone', query: {name: 'bindingPhone',title:'绑定手机'}});
            }else{
              Toast({
                message: error.msg,
                position: 'middle',
                duration: 5000
              });
            }
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
  .box {
    height: 25rem;
  }
  .bottom-box {
    position: fixed;
    bottom: 0;
    left: 0;
    padding-top: 2.2rem;
    width: 100%;
    background: #fff;
  }
  .item-voice {
    position: absolute;
    top: .5rem;
    left: .5rem;
    width: 1.3rem;
    height: 1.3rem;
    background-image: url("../../../../image/chat/icon-voice.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
  .item-add {
    position: absolute;
    top: .5rem;
    right: .5rem;
    width: 1.3rem;
    height: 1.3rem;
    background-image: url("../../../../image/chat/icon-add.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
  .bottom-box input {
    position: absolute;
    top: .5rem;
    left: 2.3rem;
    width: 75%;
    font-size: .8rem;
    height: 1.3rem;
    border-bottom: .03rem solid #ebebeb;
  }
  .item-box {
    position: relative;
    height: 7rem;
    width: 100%;
    border-top: .03rem solid #ebebeb;
    background-color: #fff;
  }
  .item-transfer {
    position: absolute;
    top: 1rem;
    left: 1rem;
    width: 3rem;
    height: 3rem;
    border-radius: .2rem;
    border: .03rem solid #ebebeb;
  }
  .transfer-img {
    width: 3rem;
    height: 1.9rem;
    background-image: url("../../../../image/chat/icon-transfer.png");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 1.6rem 1.6rem;
  }
  .transfer-text {
    line-height: 1rem;
    text-align: center;
    font-size: .6rem;
    color: #999;
  }
</style>

