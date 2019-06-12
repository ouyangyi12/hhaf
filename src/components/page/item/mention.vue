<template>
  <div class="main">
    <v-head name="提现"></v-head>
    <div class="item-box">
      <div class="box">
        <div class="item-text">银行卡号</div>
        <input type="text" v-model="bank_number" placeholder="请输入正确的卡号"/>
      </div>
      <div class="box">
        <div class="item-text">真实姓名</div>
        <input type="text" v-model="bank_name" placeholder="请填写开户姓名"/>
      </div>
      <div class="box">
        <div class="item-text">开户银行</div>
        <input type="text" v-model="open_bank" placeholder="请填写开户银行"/>
      </div>
      <div class="box">
        <div class="item-text">手机号码</div>
        <input type="text" v-model="bank_mobile" placeholder="请填写手机号"/>
      </div>
      <div class="app-btn btn-top1" @click="TapBtn" :class="{'saveTypeBtn': saveType ==0}">{{saveType | saveTypes}}</div>
      <div class="box box-top">
        <div class="item-text">兑换数额</div>
        <input type="text" v-model="money" placeholder="请输入符合要求的数额"/>
      </div>
      <div class="title-a box-top">可用余额{{balance}},最低{{start_bank}}起提且为{{multiple}}的倍数</div>
      <div class="title-b">(提现金额收取{{service}}%手续费)</div>
      <div class="app-btn btn-top" @click="mentionTap">确认提现</div>
      <div class="tail-text">(每日23:00-00:30为提现系统维护时间,每日提现次数5次)</div>
    </div>
  </div>
</template>
<!--this.$router.push({path:'路径')};-->
<script>
  import head from '../../common/itemHome.vue'
  export default {
    name: 'mention',
    components:{
        "v-head": head
    },
    data () {
      return {
        bank_number:'',//银行卡号
        bank_name:'',//真实姓名
        open_bank:'',//开户银行
        bank_mobile:'',//手机号码
        service:'',//提现手续费
        multiple:'',//提现必须为多少的倍数
        start_bank:'',//多少金额起提
        money:'',//兑换数额
        saveType: 0,
        balance:''
      }
    },
    created () {
      var that=this;
      this.getList();
      this.getList2();
      setTimeout(function () {
        that.$nextTick(function () {
        })
      },500)
    },
    filters: {
      'saveTypes': function (value) {
        if (value == 1){
          var type = '保存信息'
        }else {
          var type = '修改信息'
        }
        return type;
      }
    },
    methods: {
      getList:function(){
        var that = this;
        var data = {
        }
        this.$post('/api/v1/cash/CashList',data).then(res=>{
          that.service = res.data.service_charge_bank;
          that.multiple = res.data.multiple_bank;
          that.start_bank = res.data.start_bank;
        }).catch(err=>{
        });
        this.$post('/api/v1/member/MyList',data).then(res=>{
          that.balance = res.data.coin;
        }).catch(err=>{
        });
      },
      getList2:function () {
        var that = this
        var data = {
        }
        this.$post('/api/v1/cash/MyBankList',data).then(res=>{
          var that = this;
          if(that.bank_number==''||that.bank_name==''||that.open_bank==''||that.bank_mobile==''){
            that.saveType = 1;
          }else {
            that.saveType = 0;
          }
          that.bank_number = res.data.bank_number;
          that.bank_name = res.data.bank_name;
          that.open_bank = res.data.open_bank;
          that.bank_mobile = res.data.bank_mobile;
        }).catch(err=>{
        });
      },

      TapBtn:function () {
        var data = {
          bank_number:this.bank_number,
          bank_name:this.bank_name,
          open_bank:this.open_bank,
          bank_mobile:this.bank_mobile,
        }
        this.$post('/api/v1/cash/index',data).then(res=>{
          Toast({
            message: '修改成功',
            position: 'bottom',
            duration: 1000
          });
          this.getList();
        }).catch(err=>{
          Toast({
            message: err.msg,
            position: 'bottom',
            duration: 1000
          });
        });
      },
      request:function(){
        var that = this;
        var data = {
          money:this.money
        }
        this.$post('/api/v1/cash/submission',data).then(res=>{//成功申请
          Toast({
            message: '申请成功',
            position: 'bottom',
            duration: 1000
          });
          that.getList();
        }).catch(err=>{
          Toast({
            message: err.msg,
            position: 'bottom',
            duration: 1000
          });
        });
      },
      IfPass:function(){//判断是否设置密码
        var that = this;
        that.$post('/api/v1/setlist/IfPass').then(res=>{
          if(res.error_code==0){
            that.$post('/api/v1/member/ifFree').then(res=>{
                that.request();
            }).catch(err=>{
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
                  alert(JSON.stringify(res));
                  return;
                  that.request();
                }).catch(err=>{
                  Toast({
                    message: err.msg,
                    position: 'bottom',
                    duration: 1000
                  });
                });
              }, () => {
              })
            });
          }else {

          }
        }).catch(err=>{
          Toast({
            message: '请设置支付密码',
            position: 'bottom',
            duration: 1000
          });
          this.$router.push({name:'bindingPay',query:{name:'bindingPay',title:'设置支付密码'}})
        });
      },
      mentionTap:function () {
        var that = this;
        this.$post('/api/v1/setlist/IfMobile').then(res=>{ //判断是否绑定手机号
          if(res.error_code==0){
            that.IfPass();
          }
        }).catch(err=>{
          Toast({
            message: '请绑定手机号',
            position: 'bottom',
            duration: 1000
          });
          this.$router.push({name:'bindingPhone',query:{name:'bindingPhone',title:'设置手机号'}})
        });
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
    font-size: .7rem;
  }
  .item-box {
    margin-top: .3rem;
  }
  .box {
    position: relative;
    height: 2.5rem;
  }
  .box input {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 1.5rem;
    margin: auto 0;
    width: 12rem;
    font-size: .7rem;
    height: 1.8rem;
    line-height: 1.5;
    background-color: #fff;
    border: .03rem solid #d1d1d1;
    text-indent: .3rem;
  }
  .box input::placeholder{
    font-size: .7rem;
  }
  .item-text {
    padding-left: .8rem;
    line-height: 2.5rem;
    font-size: .7rem;
  }
  .btn-top1{
    margin-top: .3rem;
  }
  .box-top {
    margin-top: .5rem;
  }
  .title-a {
    text-align: center;
  }
  .title-b {
    text-align: center;
    font-size: .5rem;
    color: #999;
  }
  .btn-top {
    margin-top: .8rem;
  }
  .tail-text {
    text-align: center;
    font-size: .5rem;
    color: #999;
    margin-top: .5rem;
  }
  .saveTypeBtn {
    background-color: #fe5c35;
  }
</style>

