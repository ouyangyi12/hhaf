<template>
  <div class="main">
    <v-head name="设置支付密码"></v-head>
    <div class="item-box">
      <div class="box">
        <input type="tel" v-model="phone" maxlength="11" placeholder="请输入手机号"/>
      </div>
      <div class="box">
        <input type="tel" v-model="password" maxlength="11" placeholder="请设置支付密码"/>
      </div>
      <div class="box">
        <input type="text" maxlength="4" class="codeWth" v-model="code" placeholder="请输入验证码" />
        <div class="codeBtn" @click="codeBtn" :class="{'is-showCode':isSendCode  == 1}">{{codeText}}</div>
      </div>
      <div class="app-btn" @click="tapBtp" :class="{'ao-btn':phone==''||code==''}">确定</div>
    </div>
  </div>
</template>
<!--this.$router.push({path:'路径')};-->
<script>
  import head from '../../common/itemHome.vue'
  export default {
    name: 'logsMention',
    components:{
      "v-head": head
    },
    data () {
      return {
        phone:'',
        code:'',
        password:'',
        pay_code_key:'',
        codeText: '获取验证码',
        isSendCode: 0,
        nextSendSeconds: 60,
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
      tapBtp:function () {
        var that = this;
        var data = {
          mobile:that.phone,
          pass:that.password,
          verf:that.code,
          code:that.pay_code_key
        }
        this.$post('/api/v1/setlist/BindingPass',data).then(res=>{
          this.$router.go(-1);
        }).catch(err=>{
          alert(err.msg);
        });
      },
      codeBtn: function () {
        var that = this
        var phoneReg = /^1[0-9]{10}$/;
        // if (this.isSendCode) return;
        // else this.isSendCode = 1;
        if (!phoneReg.test(that.phone)){
          that.isSendCode = 0;
          alert('请输入手机号');
          return;
        } else {
          that.getCode();
          that.isSendCode = 1;
        }
      },
      getCode:function(){
        var that = this;
        var data = {
          mobile:that.phone,
        }
        this.$post('/api/v1/setlist/SendCodes',data).then(res=>{
          that.pay_code_key = res.code
          that.nextGetCodeSeconds = setInterval(that.nextGetCode, 1000);
        }).catch(error=>{
          that.isSendCode = 0
          alert(error.msg);
        });
      },
      nextGetCode: function () {
        var that = this;
        if (this.nextSendSeconds == 1) {
          that.isSendCode = 0;
          that.nextSendSeconds = 60;
          that.codeText = '获取验证码';
          clearInterval(nextGetCodeSeconds);
        } else {
          that.nextSendSeconds--;
          that.codeText = this.nextSendSeconds + 's';
        }
      },
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  body,html{
    margin:0;
    padding:0;
    height: 100%;
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
  .ao-btn {
    background-color: #b6b6b6;
  }
  .is-showCode {
    background-color:#b6b6b6!important;
  }
  .item-box {
    margin-top: .7rem;
  }
  .codeBtn {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 1rem;
    margin: auto 0;
    border-radius: 1rem;
    background-color: #1ad143;
    width: 5rem;
    height: 1.5rem;
    font-size: .7rem;
    text-align: center;
    line-height: 1.5rem;
    color: #fff;
  }
  .box {
    position: relative;
    height: 3rem;
    border-bottom: .03rem solid #ebebeb;
    background-color: #fff;
  }
  .box input {
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto 0;
    height: 2.5rem;
    width: 85%;
    padding-left: 5%;
    font-size: .7rem;
  }
  .codeWth {
    width: 45%!important;
  }
  .app-btn {
    margin-top: 5rem;
  }
</style>

