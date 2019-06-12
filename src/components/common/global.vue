<script>
  import axios from 'axios';
  const url="http://3591.yitiansheji.vip";
  // const url="/app";
  export default
  {
    url,//地址
  }

  /* 封装get方法*/
  export function get(urlz,params){
      axios.defaults.headers.common['Content-Type'] = 'application/json';
      axios.defaults.headers.common['TOKEN'] = localStorage.getItem('token');
      axios.defaults.headers.common['MEMBER-NO'] = localStorage.getItem('no');
    return new Promise((resolve,reject)=>{
      axios.get(url+urlz,{params:params}).then(response=>{
        resolve(response.data);
      }).catch(error=>{
        if(error.response.data.error_code==40003){
          localStorage.removeItem('token');
          localStorage.removeItem('no');
          this.$router.push({name:'login'});
        }else{
          reject(error.response.data);
        }
      })
    })
  }

  /* 封装post方法 */
  export function post(urlz,params){
    axios.defaults.headers.common['Content-Type'] = 'application/json';
    axios.defaults.headers.common['TOKEN'] = localStorage.getItem('token');
    axios.defaults.headers.common['MEMBER-NO'] = localStorage.getItem('no');
    return new Promise((resolve,reject)=>{
      axios.post(url+urlz,params).then(response=>{
        resolve(response.data);
      }).catch(error=>{
        if(error.response.data.error_code==40003){
          localStorage.removeItem('token');
          localStorage.removeItem('no');
          this.$router.push({name:'login'});
        }else{
          reject(error.response.data);
        }
      })
    })
  }

  /* 封装get方法*/
  export function getNo(urlz,params){

    axios.defaults.headers.common['Content-Type'] = 'application/json';


    return new Promise((resolve,reject)=>{
      axios.get(url+urlz,{params:params}).then(response=>{
        resolve(response.data);
      }).catch(error=>{
        reject(error.response.data);
      })
    })
  }

  /* 封装post方法 */
  export function postNo(urlz,params){
    axios.defaults.headers.common['Content-Type'] = 'application/json';

    return new Promise((resolve,reject)=>{
      axios.post(url+urlz,params).then(response=>{
        resolve(response.data);
      }).catch(error=>{
        reject(error.response.data);
      })
    })
  }

  /* 封装put方法 */
  export function put(urlz,params){
    axios.defaults.headers.common['Content-Type'] = 'application/json';
    return new Promise((resolve,reject)=>{
      params['token']=localStorage.getItem('token');
      axios.put(this.url+urlz,params).then(response=>{
        resolve(response.data);
      }).catch(error=>{
        reject(error);
      })
    })
  }
  export function putz(urlz,params){
    axios.defaults.headers.common['Content-Type'] = 'multipart/form-data';
    return new Promise((resolve,reject)=>{

      axios.post(urlz,params).then(response=>{
        resolve(response.data);
      }).catch(error=>{
        reject(error);
      })
    })
  }

  /* 封装del方法 */
  export function del(urlz,params){
    return new Promise((resolve,reject)=>{
      params['token']=localStorage.getItem('token');
      axios.delete(this.url+urlz,params).then(response=>{
        resolve(response.data);
      }).catch(error=>{
        reject(error);
      })
    })
  }
</script>
