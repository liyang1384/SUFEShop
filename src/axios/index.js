import axios from 'axios'
// 注释部分为用户Token认证
// import store from '@/store'
// import { getToken } from '@/utils/auth'

const instance = axios.create({
  // baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  baseURL: 'http://localhost:8000/',
  timeout: 3000 // request timeout
})
/*
instance.interceptors.request.use(
  config => {
    // do something before request is sent
    if (store.getters.token) {
      // let each request carry token
      // ['X-Token'] is a custom headers key
      // please modify it according to the actual situation
      config.headers['X-Token'] = getToken()
    }
    return config
  },
  error => {
    // do something with request error
    return Promise.reject(error)
  }
)
*/

// response interceptor
// instance.interceptors.response.use(
/**
 * If you want to get http information such as headers or status
 * Please return  response => response
 */

/**
 * Determine the request status by custom code
 * Here is just an example
 * You can also judge the status by HTTP Status Code
 */
/*
  response => {
    const res = response.data

    // if the custom code is not 20000, it is judged as an error.
    if (res.code !== 20000) {
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return res
    }
  },
  error => {
    return Promise.reject(error)
  }
)
*/
export default instance
