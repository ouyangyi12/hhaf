<template>
  <div class="main">
    <v-head name="转账"></v-head>
    <div class="info-box">
      <div class="info-img" :style="{backgroundImage:'url('+detail.face+')'}"></div>
      <div class="info-title" v-text="detail.name"></div>
    </div>
    <div class="text-title">转账金额</div>
    <div class="transfer-box">
      <span>￥</span>
      <input type="tel" class="transfer-coins" v-model="sum" placeholder="请输入金额"/>
    </div>
    <input type="text" class="transfer-note" placeholder="添加转账说明"/>
    <div class="app-btn" @click="save">转账</div>
  </div>
</template>
<!--this.$router.push({path:'路径')};-->
<script>
  import head from '../../common/itemHome.vue'
  export default {
    name: 'transfer',
    components:{
      "v-head": head
    },
    data () {
      return {
        detail:{

        },
        sum:''
      }
    },
    created () {
      var that=this;
      that.getList();
    },
    methods: {
      getList:function(){

        var that=this;
        that.$post('/api/v1/member/partyList',{id:this.$route.query.id}).then(res=>{

          that.detail = res.data;
          // console.log(res.data);
        }).catch(error=>{
          Toast({
            message: error.msg,
            position: 'middle',
            duration: 5000
          });
        })
      },
      turnOut:function(){
        var that = this;
        that.$post('/api/v1/member/TurnOut',{id:that.$route.query.id,sum:that.sum}).then(res=>{
          if(res.error_code===0){
            Toast({
              message: '转账成功',
              position: 'middle',
              duration: 2000
            });
            setTimeout(function(){
              that.$router.go(-1);
            },2000);

          }
        }).catch(error=>{
          Toast({
            message: error.msg,
            position: 'bottom',
            duration: 1000
          });
        })
      },
      save:function(){
            var that = this;
            if (!that.sum||that.sum=='') {
                Toast({
                  message: '金额不能为空',
                  position: 'middle',
                  duration: 2000
                });
                return;
            } else if (isNaN(that.sum)||that.sum.indexOf('+')!=-1) {

                  Toast({
                    message:  '金额不能为非数字',
                    position: 'middle',
                    duration: 2000
                  });
                  return;
            }else if(that.sum<0.01){
                  Toast({
                    message:  '金额不能小于0.01',
                    position: 'middle',
                    duration: 2000
                  });
                  return;
            }
            var indx = that.sum.indexOf('.');
            if (indx > -1 && indx == that.sum.length - 1) {//判断是否在最后一位
              that.sum =  that.sum.slice(0, indx);
            }
            if (indx > -1 && indx !=that.sum.length - 1) {
                var number1 = that.sum.slice(indx + 1);

                if (number1.length > 2) {
                  Toast({
                    message:  '支付金额最多2位小数',
                    position: 'middle',
                    duration: 2000
                  });
                  return;
                }

            }
            that.$post('/api/v1/member/ifFree').then(res=>{
                if(res.error_code===0){
                  that.turnOut();
                }

            }).catch(error=>{
              if(error.error_code===9999){
                MessageBox.prompt('请输入支付密码', {
                  inputValidator: (val) => {
                    if (val === null) {
                      return true;//初始化的值为null，不做处理的话，刚打开MessageBox就会校验出错，影响用户体验
                    }
                    return !(val.length > 7 || val.length == 7)
                  }, inputErrorMessage: '密码必须为6位数'
                }).then((val) => {
                    var payTap = {
                      pass:val.value
                    }
                    that.$post('/api/v1/setlist/IfPassWorld',payTap).then(res=>{
                      // alert(JSON.stringify(res));
                        if(res.error_code===0){
                          that.turnOut();
                        }


                    }).catch(err=>{
                      Toast({
                        message: err.msg,
                        position: 'bottom',
                        duration: 1000
                      });
                    });
                })
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
  .main {
    width: 92%;
    padding: 1rem;
    margin: 4% auto 0 auto;
    background-color: #fff;
  }
  .info-img {
    width: 2.5rem;
    height: 2.5rem;
    margin: 0 auto;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
  .info-title{
    font-size: .7rem;
    color: #999;
    text-align: center;
    line-height: 2rem;
  }
  .text-title {
    font-size: .7rem;
    color: #333;
  }
  .transfer-box {
    position: relative;
    height: 2.5rem;
    margin-top: .3rem;
    border-bottom: .03rem solid #ebebeb;
  }
  .transfer-coins {
    height: 2.5rem;
    padding-left: 2rem;
  }
  .transfer-box span {
    position: absolute;
    line-height: 2.5rem;
    left: .3rem;
    margin: auto 0;
    font-size: 1.3rem;
  }
  .transfer-note {
    margin-top: .3rem;
    font-size: .7rem;
    color: #9e9e9e;
  }
  .transfer-note::placeholder{
    color: #9e9e9e;
  }
  .app-btn {
    margin-top: 1rem;
  }
</style>

