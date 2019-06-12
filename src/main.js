// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
// import '../static/mui/css/mui.min.css'
import '../static/mui/css/aui.css'
// import mui from '../static/mui/js/mui.min'
import url  from './components/common/global.vue';
import {get, post, del,getNo,postNo,putz} from './components/common/global.vue';

import { MessageBox,Toast } from 'mint-ui';
window.MessageBox= MessageBox;
window.Toast = Toast;
Vue.prototype.$axios = axios;
Vue.prototype.url = url.url;
Vue.prototype.$get = get;
Vue.prototype.$post = post;
Vue.prototype.$getNo = getNo;
Vue.prototype.$postNo = postNo;
Vue.prototype.$putz = putz;
Vue.prototype.$del = del;

// Vue.use(mui, { size: 'small' });
Vue.config.productionTip = false

// 拦截响应response，并做一些错误处理
axios.interceptors.response.use((response) => {
  return response
}, (err) => { // 这里是返回状态码不为200时候的错误处理
  if (err && err.response) {
    // console.log(err.response)
    let errStatus=err.response.data.error_code
    switch (err.response.status) {
      case 403:
        if(errStatus==10001 ||errStatus==10002){
          err.message = err.response.data.message;
          localStorage.removeItem('token');//移除token
          router.push('/login')
        }else{
          err.message = err.response.data.message;
        }
        break;
    }
  }
  return Promise.reject(err);
})

export default axios;

// 使用钩子函数对路由进行权限跳转
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token');
  if(!token){
    if(to.path == '/login'){
      next()
    }else {
      if(to.path == '/regist'||to.path == './initial'){
        next();
      }else {
        next('login');
      }
    }
  }else{
    // 简单的判断IE10及以下不进入富文本编辑器，该组件不兼容
    if(navigator.userAgent.indexOf('MSIE') > -1 && to.path === '/editor'){
      Vue.prototype.$alert('vue-quill-editor组件不兼容IE10及以下浏览器，请使用更高版本的浏览器查看', '浏览器不兼容通知', {
        confirmButtonText: '确定'
      });
    }else{
      next();
    }
  }
})
/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>'
// })
new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
