import instance from './index.js'

export function getOrderInfo_appeal (params) {
  return instance({
    url: 'order/refunddetail/',
    method: 'get',
    params: params
  })
}

export function postRefundInfo (data) {
  return instance({
    url: 'order/refunddetail/',
    method: 'post',
    data: data
  })
}

export function getOrderInfo_review (params) {
  return instance({
    url: 'order/refunddetail/',
    method: 'get',
    params: params
  })
}

export function postRefundReview (data) {
  return instance({
    url: 'order/refunddetail/',
    method: 'post',
    data: data
  })
}

