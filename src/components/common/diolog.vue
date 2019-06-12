<template>
    <div>
       <div class="oy-diolog-warper">
            <div class="oy-diolog-cover" v-if="isShow" @click="closeMyself"></div>
            <transition name="drop">
                <div class="oy-diolog-content" v-if="isShow">
                    <p class="oy-diolog-close" @click="closeMyself">&times;</p>
                    <slot>empty</slot>
                </div>
            </transition>
       </div>
    </div>
</template>
<script>
 export default {
     props: {
       isShow: {
         type: Boolean,
         default: false
       }
     },
     data(){
          return{

          }
     },
     methods: {
       closeMyself () {
         this.$emit('on-close')
       }
     }
 }
</script>

<style scoped lang="scss">
    .drop-enter-active {
      transition: all .5s ease;
    }
    .drop-leave-active {
      transition: all .3s ease;
    }
    .drop-enter {
      transform: translateY(-500px);
    }
    .drop-leave-active {
      transform: translateY(-500px);
    }
  .oy-diolog-warper{


      .oy-diolog-cover{
          background: #000;
          opacity: .3;
          position: fixed;
          z-index: 700;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
      }
      .oy-diolog-content{
        position: fixed;
          width: 80%;
          max-height: 50%;
          overflow: auto;
          background: #fff;
          top: 20%;
          left: 50%;
          margin-left: -40%;
          z-index: 999;
          border: 2px solid #464068;
          padding: 2%;
          line-height: 1.6;
          box-sizing: border-box;
          .oy-diolog-close{
              position: absolute;
              right: 5px;
              top: 5px;
              width: 40px;
              height: 40px;
              font-size: 25px;
              line-height: 40px;
              text-align: center;
              cursor: pointer;
          }
          .oy-dialog-close:hover {
            color: #4fc08d;
          }
      }



  }
</style>
