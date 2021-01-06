import instance from './index.js'

export function checkPassword (params) {
  return instance({
    url: 'user/userdetail/',
    method: 'get',
    params: params
  })
}

export function setPassword (data) {
  return instance({
    url: 'user/userdetail/',
    method: 'put',
    data: data
  })
}

export function getUserDetail (params) {
  return instance({
    url: 'user/userdetail/',
    method: 'get',
    params: params
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

export function getUserList (params) {
  return instance({
    url: 'user/userlist/',
    method: 'get',
    params: params
  })
}
