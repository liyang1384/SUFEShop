import instance from './index.js'

export function postUserDetail (data) {
  return instance({
    url: 'user/userdetail/',
    method: 'post',
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
