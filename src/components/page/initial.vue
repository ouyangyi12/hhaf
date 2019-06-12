<template>
  <div class="main">
    <header class="item-head">
      <span class="loginText" @click="loginBack">登录</span>
      <div class="head-icon" @click="loginBack"></div>
      <span class="registText" @click="rigistTap">注册</span>
    </header>
    <div class="item-box">
      <div class="box">
          <input type="tel" v-model="username" placeholder="请输入手机号或者会员号" />
      </div>
      <div class="box">
          <input type="password" v-model="password" placeholder="请输入密码" />
      </div>
      <div class="box">
          <input type="text" maxlength="4" v-model="code" placeholder="请输入验证码" />
          <img :src="imgSrc" class="code-img" @click="codeTap"/>
      </div>
    </div>
    <div class="app-btn"  :class="saveOpen" @click="loginTap">登录</div>
  </div>
</template>
<!--this.$router.push({path:'路径')};-->
<script>
  export default {
    name: 'initial',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        username:'',
        password:'',
        code:'',
        img_code_key:'',
        imgSrc:''
      }
    },
    created () {
      var that=this;
      this.codeTap()

    },
    methods: {
      loginBack:function () {
        this.$router.push({name:'login',query:{name:'login'}})
      },
      rigistTap:function () {
        this.$router.push({name:'regist',query:{name:'regist'}})
      },
      loginTap: function () {
        if(this.username==''&&this.password==''&&this.code==''){

          return;
        }
        const  data={
          mobile:this.username,
          password:this.password,
          img_code:this.code,
          img_code_key:this.img_code_key
        };
        this.$postNo('/api/v1/auth/mobile',data).then(res=>{
          localStorage.setItem('token',res.token);
          localStorage.setItem('no',res.no);
          this.$router.push({name:'gameHome',query:{name:'gameHome'}});
        }).catch(err=>{
          alert(JSON.stringify(err));
        })
      },
      codeTap:function () {
        this.$getNo('/api/v1/code/img/get',{
        }).then(res => {
          console.log(res)
          if(res.error_code == 0){
              this.imgSrc = res.url;
              this.img_code_key = res.img_code_key;
          }
        }).catch(err=> {
          alert(JSON.stringify(err));
        });
      }
    },
    computed:{
      saveOpen: function (){
        return  {
          'oy-active':this.username!=''&&this.password!=''&&this.code!=''
        }
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
  .registText {
    position: absolute;
    right: .4rem;
    display: inline-block;
    line-height: 2.25rem;
    font-size: .8rem;
    color: #333;
  }
  .registText:active{
    opacity: .7;
  }
  .item-box {
    margin-top: .7rem;
    background-color: #fff;
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
  .code-img {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 1rem;
    margin: auto 0;
    width: 5rem;
    height: 2rem;
    background-color: #6d6d72;
  }
  .app-btn {
    margin-top: 5rem;
    background-color: #b6b6b6;
  }
  .app-btn.oy-active{
    background-color:#1ad143;
  }
</style>

