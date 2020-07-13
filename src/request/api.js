/**
 * 模块接口列表
 */
import base from './base'; // 导入接口域名列表
import axios from '@/request/http'; // 导入http中创建的axios实例

const interfaceFile = {
  userLogin (params) {
    return axios.post(`${base.sq}/auth/login`, JSON.stringify(params));
  }, 
  userLogin1 (params) {
    return axios.post(`${base.dw}/checklogin`, JSON.stringify(params));
  },
  detail () {
    return axios.get(`${base.bd}/json/unit.json`);
  },
  articleDetail (id, params) {
    return axios.get(`${base.sq}/topic/${id}`, {
      params: params        
    });
  },
  //项目列表
  projectList() {
    return axios.get(`${base.bd}/json/projectList.json`);
  },
  //数据输入
  dataInput() {
    return axios.get(`${base.bd}/json/dataInput.json`);
  },
  //数据计算
  analysis() {
    return axios.get(`${base.bd}/json/analysis.json`);
  },
  //不需要 loading 效果时，在请求 header 中传递个 showLoading:false 参数
  demo() {
    return axios.get(`${base.bd}/json/projectList.json`,{headers: {'showLoading': false}});
  }
}

export default interfaceFile;