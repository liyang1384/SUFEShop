import instance from './index.js'

export function getUserDetail (data) {
  return instance({
    url: 'user/userdetail/',
    method: 'get',
    data: data
  })
}

export function putUserDetail (data) {
  return instance({
    url: 'user/userdetail/',
    method: 'put',
    data: data
  })
}

export function Login (data) {
  return instance({
    url: 'user/login/',
    method: 'post',
    data: data
  })
}
