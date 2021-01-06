import instance from './index.js'

export function postOrderReview (data) {
  return instance({
    url: 'order/boughtorderlist/',
    method: 'post',
    data: data
  })
}

export function getOrderInfo_Review (params) {
  return instance({
    url: 'order/boughtorderlist/',
    method: 'get',
    params: params
  })
}

export function getOrderInfo_Info (params) {
  return instance({
    url: 'order/boughtorderlist/',
    method: 'get',
    params: params
  })
}

export function getBoughtOrderList (params) {
  return instance({
    url: 'order/orderlist/',
    method: 'get',
    params: params
  })
}

export function createOrder (data) {
  return instance({
    url: 'order/GenerateOrderDetail/',
    // 请求方法:post
    method: 'post',
    data: data
  })
}
// 生成订单

export function payOrder (data) {
  return instance({
    url: 'order/PayOrderDetail/',
    // 请求方法：post
    method: 'post',
    data: data
  })
}
// 支付订单

export function getOrderList (params) {
  return instance({
    url: 'order/orderlist/',
    method: 'get',
    params: params
  })
}
