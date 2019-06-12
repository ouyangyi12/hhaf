<template>
  <div>
      <div class="oy-anmite">
          <div class="oy-item flex flex-center" :class="changeA" @click="mytest"></div>
      </div>
      <div class="flex flex-ver oy-input-list">
        <div class="flex-1"></div>
        <div>
            <input type="checkbox"  class="oy-checkbox-input" name="shock" id="shock">

            <label class="oy-arc" for="shock"></label>
        </div>
      </div>
      <div class="my-open-btn flex flex-center" @click="openBtn('isShowAboutDialog')">我是开关</div>
        <input type="file" class="file"  @change="myChange">
      <my-dialog :is-show="isShowAboutDialog" @on-close="closeDialog('isShowAboutDialog')">
        <p>本报告在调研数据的基础上，采用定性与定量相结合的方式深入分析了专车市场发展的驱动因素与阻碍因素、专车市场背后的产业格局、专车企业的竞争格局、用户对专车市场的依赖程度、专车对其他交通工具运力的补充效应等，通过这五个章节的研究反映专车市场的发展态势和面临的问题。报告力求客观、深入、准确地反映中国专车市场发展情况，为政府、企事业单位和社会各界提供决策依据。 </p>
      </my-dialog>
  </div>

</template>

<script>
  import Dialog from '../common/diolog';

  export default {
    name: "scroll_test",
    components:{MyDialog:Dialog},
    data () {
      return {
        isActie:2,
        isShowAboutDialog:false
      }
    },
    created () {

    },
    mounted (){

    },
    methods: {
      openBtn (attr){
        this['isShowAboutDialog'] = true;

        console.log(this['isShowAboutDialog'])
      },
      closeDialog (attr) {
        this[attr] = false
        console.log(this['isShowAboutDialog'])
      },
      mytest:function () {
        var that =this;
        if(that.isActie==1){return}
        that.isActie=1;
        setTimeout(function () {
          that.isActie=2;
          console.log(that.isActie)
        },800)
      },
      myChange (){
        console.log(1)
        var formData = new FormData() // 声明一个FormData对象
        //var formData = new window.FormData() // vue 中使用 window.FormData(),否则会报 'FormData isn't definded'
        formData.append('myfile', document.querySelector('input[type=file]').files[0]) // 'userfile' 这个名字要和后台获取文件的名字一样;
        var options = {  // 设置axios的参数
          url: 'http://183.6.107.68:8888/school/tools/fileUpload.html?token=44fdceca8c5f9262b6ba9bddc8ba7bbe331ab0379d0adfc197f15b22f6011825',
          data: formData,
          method: 'post',
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
        let url = 'http://183.6.107.68:8888/school/tools/fileUpload.html?token=44fdceca8c5f9262b6ba9bddc8ba7bbe331ab0379d0adfc197f15b22f6011825'
            this.$putz(url,formData).then(response=>{
                  console.log(response)

            }).catch(error=>{
              console.log(error)
            });


      }
    },
    computed: {
      changeA:function () {
        var   test = '';
        this.isActie==1?test='oy-active':test='';
        return test;
      }
    }
  }
</script>

<style scoped lang="scss">
 $color:#fe8393;

  .my-open-btn{
    height: 40px;
    font-size: 20px;
  }
  .oy-anmite{
    padding-top: 100px;
    .oy-item{
      width: 50px;
      height: 50px;
      background-image:url(../../../image/openCach.jpg) ;
      border-radius: 50%;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      text-align: center;
      color: #fff;
      margin: 0 auto;
    }
  }

  .oy-item.oy-active{
   transform-style: preserve-3d;

   animation: rotate 800ms linear infinite;
    -webkit-transform-style: preserve-3d;

    -webkit-animation: rotate 800ms linear infinite;

  }

  @keyframes rotate {

    0%{
      transform:rotateY(0deg);
      -webkit-transform:rotateY(0deg);
    }
    100%{
      transform: rotateY(360deg);
      -webkit-transform:rotateY(360deg);
    }

  }
  @-webkit-keyframes  rotate {

    0%{
      transform:rotateY(0deg);
      -webkit-transform:rotateY(0deg);
    }
    100%{
      transform: rotateY(360deg);
      -webkit-transform:rotateY(360deg);
    }
  }
  *{
    -webkit-tap-highlight-color: rgba(255, 0, 0, 0);
  }
  html,body,header,section,footer,div,ul,ol,li,img,a,span,em,del,legend,center,strong,var,fieldset,form,label,dl,dt,dd,cite,input,hr,time,mark,code,figcaption,figure,textarea,h1,h2,h3,h4,h5,h6,p{
    margin:0;
    border:0;
    padding:0;
    font-style:normal;
  }
  html,body {
    -webkit-touch-callout:none;
    -webkit-text-size-adjust:none;
    -webkit-tap-highlight-color:rgba(0, 0, 0, 0);
    -webkit-user-select:none;
    background: #ebf0ef;
  }


  a:active, a:hover {
    outline: 0;
  }
  a, a:visited{
    text-decoration:none;
  }
  .oy-input-list{
    height: 45px;
    background: #fff;
    padding: 0 15px;
  }
  .oy-arc{

    position: relative;

    width: 40px;

    height: 22px;

    margin: 0;

    padding:0;

    display: inline-block;

    float:right;





  }

  .oy-checkbox-input{

    opacity: 0;

    outline: 0;

    display: none;



  }

  .oy-arc:after{

    content: '';

    width: 20px;

    height: 20px;

    position: absolute;

    top:1px;

    left:1px;

    box-sizing: border-box;

    background: #fff;

    transition: all 0.2s;

    -webkit-transition:all 0.2s;

    z-index: 10;

    border-radius: 50%;

  }

  .oy-arc:before{

    content: '';

    width: 100%;

    height: 100%;

    position: absolute;

    top:0;

    left:0;

    border-radius: 13px;

    background: #ccc;

    z-index: 5;

    transition: all 0.2s;

    -webkit-transition:all 0.2s;

  }

  .oy-checkbox-input:checked~label:before{

    background:$color;



  }

  .oy-checkbox-input:checked~label:after{



    left:19px;

  }






</style>
