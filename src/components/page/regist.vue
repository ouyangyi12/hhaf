<template>
  <div class="main">
    <header class="item-head">
      <span class="loginText" @click="rigistBack">注册</span>
      <div class="head-icon" @click="rigistBack"></div>
    </header>
    <div class="item-box">
      <div class="box">
        <input type="tel" v-model="phone" placeholder="请输入手机号"/>
      </div>
      <div class="box">
        <input type="text" v-model="nickname" placeholder="请输入您的昵称" />
      </div>
      <div class="box">
        <input type="text" class="codeWth" v-model="img_code" placeholder="请输入图形验证码" />
        <img v-bind:src="img" @click="codeTap" class="code-img"/>
      </div>
      <div class="box">
        <input type="text" maxlength="4" class="codeWth" v-model="code" placeholder="请输入验证码" />
        <div class="codeBtn" @click="codeBtn" :class="{'is-showCode':isSendCode == 1}">{{codeText}}</div>
      </div>
      <div class="box">
        <input type="password" v-model="password" placeholder="请输入6至16位数字或字母密码" />
      </div>
    </div>
    <div class="app-btn" @click="regTap" :class="{'ao-btn': phone==''||nickname==''||img_code==''||code==''||password==''}">注册</div>
  </div>
</template>
<!--this.$router.push({path:'路径')};-->
<script>
  export default {
    name: 'regist',
    data () {
      return {
        phone:'',//手机号
        nickname: '',//昵称
        password:'',
        img:'',
        img_code:'',
        img_code_key:'',
        code: '',
        mobile_code_key:'',
        showPassword: false,
        codeText: '获取验证码',
        isSendCode: 0,
        nextSendSeconds: 60,
      }
    },
    created () {
      var that=this;
      this.codeTap();
      setTimeout(function () {
        that.$nextTick(function () {
        })
      },500)
    },
    methods: {
      codeBtn: function () {
        var that = this
        var phoneReg = /^1[0-9]{10}$/;
        if (this.isSendCode) return;
        else this.isSendCode = 1;
        if (!phoneReg.test(that.phone)){
          that.isSendCode = 0;
          alert('请输入手机号');
          return;
        } else {
          that.getCode();
          that.isSendCode = 1;
        }
      },
      codeTap:function(){
        var the = {}
        this.$get('/api/v1/code/img/get',the).then(res => {
          console.log(res)
            this.img = res.url;
            this.img_code_key = res.img_code_key;
        }).catch(err=> {
          alert(JSON.stringify(err));
        });
        // this.$get('/api/v1/code/img/get',{
        // },typ).then(res => {
        //   console.log(res)
        //   if(res.error_code == 0){
        //     this.img = res.url;
        //     this.img_code_key = res.img_code_key;
        //   }
        // }).catch(err=> {
        //   alert(JSON.stringify(err));
        // });
      },
      regTap:function(){
        var that = this;
        var data = {
          mobile:that.phone,
          password:that.password,
          nickname:that.nickname,
          mobile_code:that.code,
          mobile_code_key:that.mobile_code_key,
        }
        this.$post('/api/v1/auth/register',data).then(response=>{
          console.log(JSON.stringify(response));
          localStorage.setItem('token',response.token);
          this.$router.push({name:'gameHome',query:{name:'gameHome'}});
        }).catch(error=>{
          alert(error.msg);
          this.codeTap();
        });
      },
      getCode:function(){
        var that = this;
        var data = {
          mobile:that.phone,
          img_code:that.img_code,
          img_code_key:that.img_code_key
        }
        this.$get('/api/v1/code/mobile/get',data).then(response=>{
           alert(JSON.stringify(response));
           that.mobile_code_key = response.mobile_code_key
          that.nextGetCodeSeconds = setInterval(that.nextGetCode, 1000);
        }).catch(error=>{
           that.isSendCode = 0
           this.codeTap();
           alert(error.msg);
        });
      },
      nextGetCode: function () {
        var that = this;
        if (this.nextSendSeconds == 1) {
          that.isSendCode = 1;
          that.nextSendSeconds = 60;
          that.codeText = '获取验证码';
          clearInterval(nextGetCodeSeconds);
        } else {
          that.nextSendSeconds--;
          that.codeText = this.nextSendSeconds + 's';
        }
      },
      rigistBack:function () {
        // this.$router.go(-1);
        this.$router.push({name:'initial',query:{name:'initial'}})
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
  .ao-btn {
    background-color: #b6b6b6;
  }
  .is-showCode {
    background-color:#b6b6b6!important;
  }
  .item-head {
    position: relative;
    height: 2.25rem;
    width: 100%;
    background-color: #fff;
    border-bottom: .03rem solid #f1f1f1;
  }
  .head-icon {
    position: absolute;
    top: 0;
    bottom: 0;
    left: .1rem;
    width: 1.5rem;
    height: 2.25rem;
    margin: auto 0;
    background-image: url("../../../image/icon-backTi.png");
    background-size: .9rem .9rem;
    background-repeat: no-repeat;
    background-position: center;
  }
  .loginText {
    display: inline-block;
    line-height: 2.25rem;
    padding-left: 1.5rem;
    font-size: .8rem;
    color: #333;
  }
  .item-box {
    margin-top: .7rem;
    background-color: #fff;
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
  .code-img {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 1rem;
    margin: auto 0;
    width: 5rem;
    height: 2rem;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center;
  }
  .app-btn {
    margin-top: 5rem;
  }
</style>

