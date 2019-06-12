<template>
  <footer ref="head" class="aui-bar aui-bar-tab" :collapse="collapse" background-color="#ebebeb"
          text-color="#ebebeb" active-text-color="#ebebeb" unique-opened router id="footer">
    <div v-for="(item,index) in items" class="aui-bar-tab-item" v-cloak :class="{'aui-active':itemType == index}" tapmode="aui-active" @click="randomSwitchBtn(index)">
      <div class="flex flex-center">
        <i class="oy-icon-box oy-yes" v-cloak :class="{'oy-icon-home':index == 0,'oy-icon-focus':index == 1,'oy-icon-ranList':index == 2,'oy-icon-user':index == 3,}"></i>
        <i class="oy-icon-box oy-no" v-cloak :class="{'oy-icon-home1':index == 0,'oy-icon-focus1':index == 1,'oy-icon-ranList1':index == 2,'oy-icon-user1':index == 3,}"></i>
      </div>
      <div class="aui-bar-tab-label">{{item.name}}</div>
    </div>
  </footer>
</template>

<script>
    export default {
        props:['itemTpy'],
        data() {
            return {
              collapse: false,
              itemType:this.itemTpy,
              items: [
                {
                  name: '客服',
                  index: 'customer',
                }, {
                  name: '通讯录',
                  index: 'contacts',
                }, {
                  name: '游戏',
                  index: 'game',
                }, {
                  name: '个人中心',
                  index: 'me',
                }
              ]
            }
        },
        computed:{
        },
        created(){
        },
        methods: {
          randomSwitchBtn:function (index) {
            var that = this;
            if(index == this.itemType){
                return
            }else {
              this.itemType = index
            }
            if(this.itemType == 0){
              this.$router.push({ path: '/customer', query: { plan: that.herder }})
            }if(this.itemType == 1){
              this.$router.push({ path: '/contacts', query: { plan: that.herder }})
            }if(this.itemType == 2){
              this.$router.push({ path: '/game', query: { plan: that.herder }})
            }if(this.itemType == 3){
              this.$router.push({ path: '/me', query: { plan: that.herder }})
            }
          }
        },
        mounted(){
        }
      }
</script>

<style scoped>
  body,html{
    margin:0;
    padding:0;
    height: 100%;
    background-color: #ebebeb;
    font-size: 20px;
    width: 750rem;
  }
  [v-cloak] {
    display: none;
  }
  .flex-center {
    margin-top: .3rem;
  }
  #footer {
    background-color: #fff!important;
    border-top: .07rem solid #ededed;
  }
  .aui-bar-tab-item.aui-active{
    color:#19d040;
  }
  .oy-icon-box{
    display: inline-block;
    width: 1.3rem;
    height: 1.3rem;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
  .oy-icon-box.oy-icon-home{
    background-image: url(../../../image/icon/shouye.png)
  }
  .oy-icon-box.oy-icon-home1{
    background-image: url(../../../image/icon/shouye_y.png);
  }
  .oy-no{
    display: none;
  }
  .aui-bar-tab-item.aui-active .oy-no{
    display: inline-block;
  }
  .aui-bar-tab-item.aui-active .oy-yes{
    display: none;
  }
  .oy-icon-box.oy-icon-focus{
    background-image: url(../../../image/icon/dongtai.png)
  }
  .oy-icon-box.oy-icon-focus1{
    background-image: url(../../../image/icon/dongtai_y.png)
  }
  .oy-icon-box.oy-icon-ranList{
    background-image: url(../../../image/icon/paihangbang.png)
  }
  .oy-icon-box.oy-icon-ranList1{
    background-image: url(../../../image/icon/paihangbang_y.png)
  }
  .oy-icon-box.oy-icon-user{
    background-image: url(../../../image/icon/gerenzhongxin.png)
  }
  .oy-icon-box.oy-icon-user1{
    background-image: url(../../../image/icon/gerenzhongxin_y.png)
  }

</style>
