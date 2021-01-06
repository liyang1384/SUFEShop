import instance from './index.js'

export function getOrderInfo_appeal (params) {
  return instance({
    url: 'refund/refunddetail/',
    method: 'get',
    params: params
  })
}

export function postRefundInfo (data) {
  return instance({
    url: 'refund/refunddetail/',
    method: 'post',
    data: data
  })
}

export function getOrderInfo_review (params) {
  return instance({
    url: 'refund/refunddetail/',
    method: 'get',
    params: params
  })
}

export function patchRefundReview (data) {
  return instance({
    url: 'refund/refunddetail/',
    method: 'patch',
    data: data
  })
}

