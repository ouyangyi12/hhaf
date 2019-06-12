<template>
  <div class="main">
    <v-head></v-head>
    <div class="info-box" @click="infoTap">
      <div class="info-img" :style="{backgroundImage:'url('+detail.face+')'}"></div>
      <div class="info-item">
        <div class="info-name" v-text="detail.nickname">强迫症晚期患者</div>
        <div class="info-text" >id: {{detail.id}}</div>
        <div class="info-text">昵称: {{detail.nickname}}</div>
      </div>
    </div>
    <div class="money-item">
      <div class="money-box">
        <div class="money-title">我的钱包 (元)</div>
        <div class="money" v-text="detail.coin">0.00</div>
        <div class="money-view" @click="viewDetailsTap">点击查看详情</div>
      </div>
      <div class="item-butBox">
        <div class="item-butTap but" @click="mentionTap">提现</div>
        <div class="item-butTap2 but" @click="rechargeTap">充值</div>
      </div>
    </div>
    <div class="project-box">
      <div class="item-project" v-for="item in items" @click="itemTap(item.url)">
        <div class="project-img" :class="{'num0':item.num==0,'num1':item.num==1,'num2':item.num==2,'num3':item.num == 3}"></div>
        <div class="project-text">{{item.name}}</div>
        <div class="project-value" v-if="item.num==0">123</div>
        <div class="icon-back"></div>
      </div>
    </div>
    <v-content itemTpy="3"></v-content>
  </div>
</template>
<!--this.$router.push({path:'路径')};-->
<script>
  import head from '../common/Header.vue';
  import content from '../common/Sidebar.vue';
  export default {
    name: 'me',
    components:{
      "v-head": head,
      "v-content" : content
    },
    data () {
      return {
        detail:{

        },
        items:[
          {
            name: '推广收益',
            num:0,
            url:'income'
          },{
            name: '分享',
            num:1,
            url:'share'
          },{
            name: '推广海报',
            num:2,
            url:'posters'
          },{
            name: '设置',
            num:3,
            url:'setup'
          },{
            name: 'imgTest',
            num:3,
            url:'imgTest'
          },{
            name: 'scroll_test',
            num:3,
            url:'scroll_test'
          }
        ]

      }
    },
    created () {
      this.getList();
    },
    methods: {
      getList:function(){
        var that=this;
        that.$post('/api/v1/member/MyList').then(res=>{
          that.detail = res.data;
        }).catch(error=>{
          alert(error.msg)
        })
      },
      infoTap:function(){
        this.$router.push({ name:'info', query: {name: 'info',title:'修改信息',img:this.detail.face,nickname:this.detail.nickname}});
      },
      mentionTap:function(){
        this.$router.push({ name:'mention', query: {name: 'mention',title:'提现'}});
      },
      rechargeTap:function(){
        this.$router.push({ name:'recharge', query: {name: 'recharge',title:'充值中心'}});
      },
      viewDetailsTap: function(){
        this.$router.push({ name:'wallet', query: {name: 'wallet',title:'我的钱包'}});
      },
      itemTap:function(url){
        if(url=='income'){
          this.$router.push({ name:'income', query: {name: 'income',title:'推广收益'}});
        }if(url=='posters'){
          this.$router.push({ name:'posters', query: {name: 'posters',title:'推广海报'}});
        }if(url=='setup'){
          this.$router.push({ name:'setup', query: {name: 'setup',title:'设置'}});
        }if(url=='imgTest'){
          this.$router.push({ name:'imgTest', query: {name: 'imgTest',title:'imgTest'}});
        }if(url=='scroll_test'){
          this.$router.push({ name:'scroll_test', query: {}});
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
    background-color: #3f51b5;
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
  .num0{
    background-image: url("../../../image/my/icon-income.png");
  }
  .num1{
    background-image: url("../../../image/my/icon-share.png");
  }
  .num2{
    background-image: url("../../../image/my/icon-posters.png");
  }
  .num3{
    background-image: url("../../../image/my/icon-setup.png");
  }
  .num4{
    background-image: url("../../../image/my/icon-setup.png");
  }
  .main {
    padding-bottom: 4rem;
  }
  .info-box {
    position: relative;
    margin-top: .7rem;
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
    background-position: center;
    background-size:cover;

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

  .money-item {
    margin-top: .7rem;
    background-color: #fff;
  }
  .money-box {
    position: relative;
    height: 3rem;
    padding-left: .6rem;
  }

  .money-title {
    position: absolute;
    top: .4rem;
    left: .5rem;
    font-size: .7rem;
  }
  .money {
    position: absolute;
    left: .5rem;
    bottom: 0;
    font-size: 1.2rem;
  }
  .money-view {
    position: absolute;
    top: .4rem;
    right: .5rem;
    font-size: .5rem;
    text-decoration: underline;
    color: #f49328;
  }
  .item-butBox {
    position: relative;
    height:  2.5rem;
  }

  .item-butTap {
    position: absolute;
    width: 3.5rem;
    height: 1.3rem;
    right: 4.6rem;
    bottom: .7rem;
    text-align: center;
    line-height: 1.3rem;
    font-size:  .6rem;
    color: #fff;
    border-radius: .1rem;
    box-shadow: .02rem .02rem .02rem #6d6d72;
    background-color: #fe5c35;
  }

  .item-butTap2 {
    position: absolute;
    width: 3.5rem;
    height: 1.3rem;
    right: .5rem;
    bottom: .7rem;
    text-align: center;
    line-height: 1.3rem;
    font-size:  .6rem;
    color: #fff;
    border-radius: .1rem;
    box-shadow: .03rem .03rem .03rem #6d6d72;
    background-color: #1ad143;
  }
  .but:active{
    opacity: .8;
  }
  .project-box {
    background-color: #fff;
    margin-top: .7rem;
  }
  .item-project {
    position: relative;
    height: 2rem;
    border-bottom: .04rem solid #ebebeb;
  }
  .item-project:active{
    opacity: .8;
  }
  .project-img {
    position: absolute;
    top:0;
    bottom: 0;
    left: .5rem;
    margin: auto 0;
    width: .8rem;
    height: .8rem;
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
  .project-text {
    line-height: 2.1rem;
    padding-left: 1.7rem;
    font-size: .7rem;
  }
  .project-value {
    position: absolute;
    top: 0;
    right: 1.4rem;
    font-size: .65rem;
    line-height: 2rem;
  }
  .icon-back {
    position: absolute;
    top: 0;
    right: .4rem;
    width: 1rem;
    height: 1.8rem;
    background-position: center;
    background-repeat: no-repeat;
    background-size: .5rem .5rem;
    background-image: url("../../../image/icon-back.png");
  }
</style>

