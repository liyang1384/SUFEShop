import instance from './index.js'

export function getRefundDetail_char(data) {
  return instance({
    url: 'refund/refunddetail/',
    // 请求方法：get
    method: 'get'
  })
}

export function postRefundDetail_char(data) {
  return instance({
    url: '/refunddetail',
    // 请求方法：get
    method: 'post',
    data
  })
}

export function getRefundDetail_img(data) {
  return instance({
    url: '/refunddetail',
    method: 'get',
    responseType: 'stream'
  })
}

export function postRefundDetail_img(data) {
  return instance({
    url: '/refunddetail',
    method: 'post',
<<<<<<< HEAD
    responseType: 'stream',
    data
=======
    data: data
>>>>>>> d3cdf1b44bc4dece04adf1915a3971406e6a2148
  })
}
