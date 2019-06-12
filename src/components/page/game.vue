<template>
  <div class="main">
    <v-head></v-head>
  <div class="item-box">
    <div class="item-roundImg">
      <div class="box">
        <div v-for="(item,index) in haoList" v-if="index < 4">{{item.number}}</div>
      </div>
    </div>
    <div class="TextScroll">
      <div class="notice-text">公告</div>
      <transition-group tag="ul" :name="scrollType">
        <li
          v-for="(item,index) in itemText"
          :key='item.id'
          v-show="index==count"
          scrollType='scroll-left-linear'>
          <p>{{item.content}}</p>
        </li>
      </transition-group>
    </div>
    <div class="item-column">
      <div class="column-img"></div>
      <div class="column-box">
        <div class="column-title">{{gameName}}</div>
        <div class="column-text" @click="rulesTap">查看规则 ></div>
      </div>
      <div class="item-btn" @click="openGame">打开</div>
    </div>
  </div>
    <v-content itemTpy="2"></v-content>
  </div>
</template>
<!--this.$router.push({path:'路径')};-->
<script>
  import head from '../common/Header.vue';
  import content from '../common/Sidebar.vue';
  export default {
    name: 'game',
    components:{
      "v-head": head,
      "v-content" : content
    },
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        gameName:'新年红包群(30-750)',
        itemText:[],
        scrollType:'scroll-left-linear',
        count: 0, // 当前索引  当v-for中的index等于count时 v-show=true 即显示当前元素
        intervalId: null, // 定时器ID
        playTime: 4000, // 定时器执行间隔
        haoList:[]
      }
    },
    created () {
      this.customerDate();
      this.$post('/api/v1/notice/Dlist',{

      }).then(res=>{
        MessageBox.alert(res.data[0].content).then(action => {
          this.intervalId = setInterval(()=>{ // 定义定时器
            this.getList();
          }, this.playTime)
        });
      }).catch(error=>{
        alert(error.msg);
      });
    },
    methods: {
      // 获取数据
      getList:function(){
        this.$post('/api/v1/notice/index',{

        }).then(res=>{
          this.itemText = res.data
          let len = this.itemText.length; // 获取数组长度
          if (len == 0) {
            return // 当数组为空时，直接返回
          }
          if (this.count == len - 1) { // 当前为最后一个时
            this.count = 0 // 从第一个开始
          } else {
            this.count++ // 自增
          }
        }).catch(error=>{
          alert(error.msg);
        });
      },
      customerDate:function () {
        var they = this
        this.$post('/api/v1/member/customer').then(res=>{
          var list = [];
          for(var i=0;i<res.data.length;i++){
            if(res.data[i].type === 0){
              var o =  res.data[i];
              list.push(o);
            }
          }
          they.haoList = list;
        }).catch(err=>{
          alert(JSON.stringify(err));
        })
      },
      // 查看规则
      rulesTap:function () {
        this.$router.push({name:'gameRules',query:{name:'gameRules',title:'游戏规则'}})
      },
      // 打开
      openGame:function () {
        this.$router.push({name:'packets',query:{name:'packets',title:this.gameName,packetsTd:1}})
      }
    },
    destroyed() {
      clearInterval(this.intervalId) // 清除定时器
    },
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
  .item-box {
    padding-bottom: 4rem;
  }
  .box {
    display: flex;
    flex-wrap:wrap;
    margin-left: 10%;
    color: #fff;
    font-size: .8rem;
    padding-top: 3rem;
  }
  .box div {
    width: 45%;
    height: 3rem;
    line-height: 3rem;
    font-weight: 600;
    text-align: center;
    padding: .5rem;
    box-sizing: border-box;
    overflow: hidden;
    text-shadow: .03rem .03rem .03rem .03rem #ebebeb;
  }
  .item-roundImg {
    width: 100%;
    height: 11rem;
    background-size: contain;
    background-image: url("../../../image/game-img.jpg");
    background-repeat: no-repeat;
  }
  .TextScroll{
    background: #fff;
    width: 100%;
    font-size: .65rem;
    height: 2.25rem;
    line-height: 2.25rem;
    overflow: hidden;
    display: flex;
  }
  .notice-text {
    width: 20%;
    color: #e7924f;
    text-align: center;
  }
  .TextScroll ul{
    position: relative;
    width: 80%;
    height: 2.25rem;
    overflow: hidden;
  }
  .TextScroll li{
    width: 100%;
    height: 2.25rem;
    line-height: 2.25rem;
    overflow: hidden;
    position: absolute;
    margin: 0px;
  }
  .TextScroll li p{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .scroll-left-linear-enter-active,
  .scroll-left-linear-leave-active{
    transition: all 4s linear;   /*此时间必须和 playTime 保持一致*/
  }
  .scroll-left-linear-enter{
    transform: translate3d(100%,0,0);
  }
  .scroll-left-linear-leave-to{
    transform: translate3d(-100%,0,0);
  }
  .item-column {
    position: relative;
    width: 100%;
    height: 3.5rem;
    background-color: #fff;
    border-top: .03rem solid #ebebeb;
  }
  .column-img {
    position: absolute;
    top: 0;
    bottom: 0;
    left: .5rem;
    width: 2.2rem;
    height: 2.2rem;
    margin: auto 0;
    border-radius: .2rem;
    background-repeat: no-repeat;
    background-size: contain;
    background-color: #6d6d72;
  }
  .column-box {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 3.2rem;
    width: 8.5rem;
    height: 2rem;
    margin: auto 0;
  }
  .column-title {
    display: inline-block;
    width: 100%;
    font-size: .7rem;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap
  }
  .column-text {
    display: inline-block;
    width: 100%;
    font-size: .5rem;
    line-height: .6rem;
    color: #838383;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap
  }

  .item-btn {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 1rem;
    width: 3.5rem;
    height: 1.5rem;
    line-height: 1.5rem;
    margin: auto 0;
    background-color: #feb244;
    text-align: center;
    font-size: .7rem;
    border-radius: .2rem;
    border: .03rem solid #db7310;
    box-shadow:0 1rem 1rem #f7a34d inset;
    -webkit-box-shadow:0 1rem 1rem #f7a34d inset;
    -moz-box-shadow:0 1rem 1rem #f7a34d inset;

  }
  .item-btn:active{
    opacity: .8;
  }


</style>

