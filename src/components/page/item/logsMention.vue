<template>
  <div class="main">
    <v-head name="提现记录"></v-head>
    <div class="item-listBox">
      <div class="item-infoBox" v-for="item in dataList">
        <div class="item-info">
          <span>银行号: {{item.bank_number}}</span>
          <span>开户银行: {{item.open_bank}}</span>
        </div>
        <div class="item-info">
          <span>真实姓名: {{item.bank_name}}</span>
          <span>手机号: {{item.bank_mobile}}</span>
        </div>
        <div class="item-info">
          <span>实际到账: {{item.bank_number}}</span>
          <span>扣除的手续费: {{item.service_charge}}</span>
        </div>
        <div class="item-time">
          <div class="time-t" >{{item.stime}}</div>
          <div class="time-t">提现金额: {{item.money}}</div>
        </div>
        <div class="item-status" :class="{'noPass': item.etime == 0,'pass':item.etime == 1,'audit':item.etime == 2}"></div>
        <!--:class="{'noPass': item.status == 0,'pass':item.status == 1,'audit':item.status == 2}"-->
      </div>
    </div>
  </div>
</template>
<!--this.$router.push({path:'路径')};-->
<script>
  import head from '../../common/itemHome.vue';
  export default {
    name: 'logsMention',
    components:{
      "v-head": head
    },
    data () {
      return {
        dataList:[
        ]
      }
    },
    created () {
      this.getData();
      var that=this;
      setTimeout(function () {
        that.$nextTick(function () {
        })
      },500)
    },
    methods: {
      getData:function () {
        var they = this
        this.$post('/api/v1/member/customer').then(res=>{
          var list = [];
          for(var i=0;i<res.data.length;i++){
              var o =  res.data[i];
              list.push(o);
          }
          they.dataList = list;
        }).catch(err=>{
          alert(JSON.stringify(err));
        })
        this.$post('/api/v1/log/cashLog',data).then(res=>{
          alert(JSON.stringify(res));
        }).catch(err=>{
          alert(err.msg);
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
  .item-infoBox {
    position: relative;
    height: 5rem;
    width: 100%;
    line-height: 5rem;
    margin-top: .7rem;
    background-color: #fff;
    border-bottom: 0.03rem solid #ebebeb;
  }

  .item-info {
    width: 100%;
    line-height: 1.5rem;
  }

  .item-info span {
    font-size: .7rem;
    color: #333;
    line-height: 1.5rem;
  }

  .item-info span:nth-child(1){
    margin-left: .7rem;
  }

  .item-income span {
    color: #cd1f3a;
    font-size: .7rem;
  }

  .item-status {
    position: absolute;
    top: 0;
    bottom: 0;
    right: .7rem;
    width: 4rem;
    height: 4rem;
    margin: auto 0;
    background-size: 100%;
    background-repeat: no-repeat;
  }

  .item-time {
    position: absolute;
    top: 0;
    bottom: 0;
    right: .7rem;
    margin: auto 0;
    font-size: .7rem;
    color: #333;
  }

  .pass {
    background-image: url("../../../../image/item-pass.png");
  }

  .noPass {
    background-image: url("../../../../image/item-noPass.png");
  }

  .audit {
    background-image: url("../../../../image/icon-audit.png");
  }

  .time-t {
    line-height: 2rem;
    font-size: .7rem;
    color: #999;
  }

  [v-cloak] {
    display: none;
  }

  @keyframes animationNull {
    0%{opacity: 0;}
    20%{opacity: .2;}
    60%{opacity: .6;}
    80%{opacity: .8;}
    100%{opacity: 1;}
  }

  -webkit-@keyframes animationNull {
            0%{opacity: 0;}
            20%{opacity: .2;}
            60%{opacity: .6;}
            80%{opacity: .8;}
            100%{opacity: 1;}
          }

  .animation-null {
    -webkit-animation: 1s;
    -webkit-animation-name: animationNull;
    animation: 1s;
    animation-name: animationNull;
  }
</style>

