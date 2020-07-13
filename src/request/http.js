import axios from 'axios';
import router from '../router'
import { Message, Loading } from 'element-ui';
import _ from 'lodash';
/** 
 * 提示函数 
 * 禁止点击蒙层、显示一秒后关闭
 */
const tip = msg => {
  Message.error({
    message: msg,     
    duration: 1000
  });
}

/** 
* 跳转登录页
* 携带当前页面路由，以期在登录页面完成登录后返回当前页面
*/
const toLogin = () => {
  router.replace({
    path: '/login',        
    query: {
      redirect: router.currentRoute.fullPath
    }
  });
}

/** 
 * 请求失败后的错误统一处理 
 * @param {Number} status 请求失败的状态码
 */
const errorHandle = (status, other) => {
  // 状态码判断
  switch (status) {
    // 401: 未登录状态，跳转登录页
    case 401:
      toLogin();
      break;
    // 403 token过期
    // 清除token并跳转登录页
    case 403:
      tip('登录过期，请重新登录');
      localStorage.removeItem('token');
      // store.commit('loginSuccess', null);
      setTimeout(() => {
        toLogin();
      }, 1000);
      break;
    // 404请求不存在
    case 404:
      tip('请求的资源不存在');
      break;
    default:
      console.log(other);   
  }
}

/**
 * loading 效果整体封装
 */
//loading对象
let loading;
  
//当前正在请求的数量
let needLoadingRequestCount = 0;
  
//显示loading
function showLoading(target) {
  // 后面这个判断很重要，因为关闭时加了抖动，此时loading对象可能还存在，
  // 但needLoadingRequestCount已经变成0.避免这种情况下会重新创建个loading
  if (needLoadingRequestCount === 0 && !loading) {
    loading = Loading.service({
      lock: true,
      text: "Loading...",
      background: 'rgba(255, 255, 255, 0.5)',
      target: target || "body"
    });
  }
  needLoadingRequestCount++;
}
  
//隐藏loading
function hideLoading() {
  needLoadingRequestCount--;
  needLoadingRequestCount = Math.max(needLoadingRequestCount, 0); //做个保护
  if (needLoadingRequestCount === 0) {
    //关闭loading
    toHideLoading();
  }
}
//防抖：将 300ms 间隔内的关闭 loading 便合并为一次。防止连续请求时， loading闪烁的问题。
var toHideLoading = _.debounce(()=>{
  loading.close();
  loading = null;
}, 300);

// 创建axios实例
var instance = axios.create({ timeout: 1000 * 12});
// 设置post请求头
// instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
instance.defaults.headers.post['Content-Type'] = 'application/json';

// 请求拦截器
instance.interceptors.request.use(
  config => {
    //判断当前请求是否设置了不显示Loading
    if(config.headers.showLoading !== false){
      showLoading(config.headers.loadingTarget);
    }
    
    // 每次发送请求之前判断vuex中是否存在token
    // const token = store.state.token;        
    const token = localStorage.getItem('token');        
    token && (config.headers.Authorization = token);        
    return config;    
  },    
  error => {
    if(config.headers.showLoading !== false){
      hideLoading();
    }
    tip('请求超时!');
    return Promise.error(error);    
  }
)

// 响应拦截器
instance.interceptors.response.use(    
  // 请求成功
  response => {
    //判断当前请求是否设置了不显示Loading（不显示无需隐藏）
    if(response.config.headers.showLoading !== false){
      hideLoading();
    }

    let {data} = response;
    if ("code" in data && data.code == 200) {
      return Promise.resolve(data);
    } else {
      return Promise.reject(data.msg);
    }
    // data.code === 200 ? Promise.resolve(data) : Promise.reject(data)
  },
  // 请求失败
  error => {
    //判断当前请求是否设置了不显示Loading（不显示无需隐藏）
    if(error.config.headers.showLoading !== false){
      hideLoading();
    }

    const { response } = error;
    if (response) {
      // 请求已发出，但是不在2xx的范围 
      errorHandle(response.status, response.statusText);
      return Promise.reject(response.statusText);
    } else {
      // 处理断网的情况
      if (!window.navigator.onLine) {
        // store.commit('changeNetwork', false);
      } else {
        return Promise.reject(error);
      }
    }
  }
);
export default instance;