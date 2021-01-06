import instance from './index.js'

export function getRefundDetail_char(params) {
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
    data: data
  })
}
