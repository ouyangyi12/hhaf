<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/*#app {*/
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
/*}*/
  body,html{
    position: absolute;
    margin: 0;
    padding: 0;
    height: 100%;
    background-color: #ebebeb;
    top:0;
    left:0;
  }
  #app{
    height: 100%;
  }

  .app-btn {
    width: 90%;
    height: 2rem;
    line-height: 2rem;
    text-align: center;
    color: #fff;
    font-size: .8rem;
    background-color: #1ad143;
    margin-right: auto;
    margin-left: auto;
  }
  .app-btn:active {
    opacity: .8;
  }

/*flex*/
.flex {
  display: -webkit-box; /* OLD - iOS 6-, Safari 3.1-6 */
  display: -moz-box; /* OLD - Firefox 19- (buggy but mostly works) */
  display: -ms-flexbox; /* TWEENER - IE 10 */
  display: -webkit-flex; /* NEW - Chrome */
  display: -moz-flex;
  display: -ms-flex;
  display: -o-flex;
  display: flex; /* NEW, Spec - Opera 12.1, Firefox 20+ */
}
.flex-reverse{
  flex-direction: row-reverse;
  -webkit-flex-direction:  row-reverse;
}
/* 宽度随屏幕改变变化 */

.flex-1 {
  flex: 1;
  -webkit-flex: 1;
}

/* 垂直水平居中 */

.flex-center {
  justify-content: center;
  -webkit-justify-content: center;
  align-items: center;
  -webkit-align-items: center;
}

/* 垂直居中 */

.flex-ver {
  align-items: center;
  -webkit-align-items: center;
}


/* flex 换行 */

.flex-wrap {
  flex-wrap: wrap;
  -moz-flex-wrap: wrap;
  -webkit-flex-wrap: wrap;
}
</style>
