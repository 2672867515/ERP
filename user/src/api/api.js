import { request } from '../utils/request'
export function login(data) {
  return request({
    url: '/system/user/login',
    method: 'post',
    data,
    headers: {
      isToken: false
    }
  })
}
export function menu() {
  return request({
    url: '/system/user/getRouters',
    method: 'get'
  })
}
