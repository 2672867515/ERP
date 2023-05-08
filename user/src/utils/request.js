import axios from 'axios'
import { getToken } from '../utils/cookie'
export function request(config) {
  const ins = axios.create({
    baseURL: process.env.VUE_APP_BASE_API
  })
  // 请求拦截
  ins.interceptors.request.use(function(config) {
    if (config.headers.isToken !== false) {
      if (getToken('token')) {
        config.headers.token = getToken('token')
      }
    }
    // config.headers.'Content-type'= 'form-data'
    return config
  }, function(error) {
    return Promise.reject(error)
  })
  // 响应拦截
  // ins.interceptors.response.use(function(response) {
  //     return response.data
  // }, function(error) {
  //     return Promise.reject(error)
  // })

  return ins(config)
}
