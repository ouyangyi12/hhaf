<template>
  <div>
    <div class="oy-head-top-box">
      <a href="javascript:void(0)" class="flex flex-center oy-left-bar">
        <div class="sh_top_lf flex flex-ver">
          <div class="sh_arrow sh_white sh_left"></div>
        </div>
      </a>
      <div class="sh_top_center flex flex-center">客服</div>
    </div>
    <div class="oy-head-top-box-h"></div>
    <div id="myService-box" >

      <div class="oy-chart-me flex">
        <div class="oy-chart-left">
          <div class="oy-chart-img" ></div>
        </div>
        <div class="oy-chart-right flex-1">
          <div class="oy-chart-right-name">2019-2-22</div>

            <img src="../../../image/my/icon-income.png" class="oy-ms-imgs" alt="">

        </div>
      </div>
    </div>
  </div>

</template>

<script>
  let previewImage = require('../../../static/imgTest/previewImage.min');
    export default {
      name: "imgTest",
      data () {
        return {

        }
      },
      created () {

      },
      mounted:function(){
        var myObj = {};
        /**
         * get multiple elements
         * @public
         */
        myObj.all = function(selector, contextElement) {
          var nodeList,
            list = [];
          if (contextElement) {
            nodeList = contextElement.querySelectorAll(selector);
          } else {
            nodeList = document.querySelectorAll(selector);
          }
          if (nodeList && nodeList.length > 0) {
            list = Array.prototype.slice.call(nodeList);
          }
          return list;
        }

        /**
         * delegate an event to a parent element
         * @public
         * @param  array     $el        parent element
         * @param  string    eventType  name of the event
         * @param  string    selector   target's selector
         * @param  function  fn
         */
        myObj.delegate = function($el, eventType, selector, fn) {
          if (!$el) { return; }
          $el.addEventListener(eventType, function(e) {
            var targets = myObj.all(selector, $el);
            if (!targets) {
              return;
            }
            // findTarget:
            for (var i=0; i<targets.length; i++) {
              var $node = e.target;
              while ($node) {
                if ($node == targets[i]) {
                  fn.call($node, e);
                  break; //findTarget;
                }
                $node = $node.parentNode;
                if ($node == $el) {
                  break;
                }
              }
            }
          }, false);
        };

        var urls = [];
        var imgs = myObj.all('img',myObj.all('#myService-box')[0]);
        imgs.forEach(function(v,i){
          urls.push(v.src);
        })

        myObj.delegate(document.querySelector('#myService-box'), 'click','img',function(){
          var current = this.src;
          var obj = {
            urls : urls,
            current : current
          };
          previewImage.start(obj);
        });
      },
      methods: {

      }
    }
</script>

<style scoped>

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




  .oy-chart-me{
    padding:8px 0;
  }
  .oy-chart-left{
    width:12%;
    margin-left:4%;
    margin-right:4%;

  }
  .oy-chart-img{
    width:100%;
    padding-top: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    border-radius: 50%;
    background-image: url(../../../image/my/icon-income.png);
  }
  .oy-chart-right-name{
    color: #333;
    font-size: 13px;
    word-break: break-all;
    padding-bottom: 7px;
  }
  .oy-chart-right{
    margin-right: 20%;
  }
  .oy-chart-title-box{
    border-radius: 4px;
    padding:10px;
    /*  background: #fff;*/
    background:#32ce5b;
    position: relative;
    z-index: 10;
    line-height: 20px;
    word-wrap:break-word;
    word-break:break-all;
    display: inline-block;
    margin-top:2%;
    font-size: 15px;
    color:#fff;
  }
  .oy-san-box{
    position: absolute;
    top:10px;
    left:-8px;
    border-top: 4px solid transparent;
    border-bottom: 4px solid transparent;
    border-left: 4px solid transparent;
    border-right: 4px solid #32ce5b;

  }
  .oy-chart-me.flex-reverse .oy-chart-right{
    text-align: right;
    margin: 0 0 0 20%;
  }
  .oy-chart-me.flex-reverse .oy-chart-title-box{
    background:#fe8393;
    text-align: left;
  }
  .oy-chart-me.flex-reverse  .oy-san-box{
    left: auto;
    right:-8px;
    border-left: 4px solid #fe8393;
    border-right: 4px solid transparent;
  }
  .oy-chart-me-time-box{
    padding:10px;
  }
  .oy-chart-me-time{
    background: rgba(255,255,255,0.5);
    color: #333;
    font-size: 11px;
    padding:3px 4px;
    border-radius: 4px;
  }
  .oy-chart-me-time-box span{
    margin-left: 2px;
  }
  .oy-footer-input-box{
    min-height: 50px;
    position: fixed;
    width: 100%;
    bottom: 0;
    z-index: 500;
    left:0;
    background: #fff;
    box-sizing: border-box;
    border-top: 1px solid #dbdee0;

  }
  .oy-footer-input-box-main{
    padding: 1.8666% 0;
  }
  #oy-my-textarea{
    min-height: 36px;
    border: 1px solid #dbdee0;
    border-radius: 4px;
    color:#000;
    padding:9px 10px;
    outline: none;
    resize: none;
    overflow-x: hidden;
    overflow-y: auto;
    line-height: 20px;
    font-size: 14px;
    caret-color: #fe8496;
    margin:0 5px 0 4%;
    max-height: 110px;

    word-break: break-all;

    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    -o-user-select: text;
    user-select: text;
  }
  ::-webkit-scrollbar{
    width:0px;
    height:0px;
    background-color:transparent;
  }
  #oy-my-textarea:empty:before{
    content: attr(placeholder);
    color:#aeaeae;
  }
  #oy-my-textarea:focus:before{
    content:none;
  }

  .oy-add-box{
    width: 16.6666%;
    padding:0 1%;
    box-sizing: border-box;
  }
  .oy-send-btn{
    line-height: 36px;
    height: 36px;
    color: #fff;
    background: #fe8496;
    border-radius: 3px;
    text-align: center;
    font-size: 14px;
    display: none;
  }
  .oy-footer-input-height{
    height: 50px;
  }
  .oy-footer-icon-item{
    position:absolute;
    top:0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
  }
  .oy-footer-icon-main{

    width: 22.9332%;
    margin-top:4.2666%;


  }
  .oy-footer-icon-main.oy-active{
    margin-left:4.1333%;
  }
  .oy-footer-icon-main-box{
    padding-top: 63.9535%;
    width: 63.9535%;
    border:1px solid #797787;
    box-sizing: border-box;
    position: relative;
    border-radius: 6px;
    margin: 0 auto;

  }
  .oy-footer-icon-item img{
    width: 54.5454%;
    height:  54.5454%;

  }
  .oy-footer-icon-box{
    border-top: 1px solid #dbdee0;
    padding-bottom:70px;
    display: none;
  }
  .oy-footer-icon-box2{
    border-top: 1px solid #dbdee0;
    display: none;
  }
  .oy-fixed-white-box{
    position: fixed;
    z-index: 300;
    width: 100%;
    height: 100%;
    left:0;
    top:0;
    display: none;

  }
  .oy-head-top-box{
    background: #fe8393;
    height: 45px;
    color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 400;
    width: 100%;

  }
  .oy-head-top-box-h{
    height: 45px;
  }
  .oy-left-bar{
    position: absolute;
    top:0;
    left:0;
    z-index: 400;
    height: 100%;
    padding:0 20px;

  }

  .sh_arrow{
    height: 14px;
    width:14px;
    margin-left: 5px;

  }

  .sh_white{
    border-top: 2px solid #fff;
    border-right: 2px solid #fff;

  }

  .sh_left{
    -webkit-transform: rotate(-135deg);
    transform: rotate(-135deg);

  }
  .sh_top_center {
    height: 100%;
    font-size: 18px;
  }

  .oy-ms-imgs{
    min-width: 20%;
    max-width:50%;
  }
  .oy-add-photo-input{
    opacity: 0;
    position: absolute;
    top:0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
  }
  .oy-footer-icon-title{
    font-size: 12px;
    color: #000;
  }


</style>
