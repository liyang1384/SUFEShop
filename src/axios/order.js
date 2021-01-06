import instance from './index.js'

export function getBoughtOrderList (params) {
  return instance({
    url: 'order/boughtorderlist/',
    method: 'get',
    params: params
  })
}

export function createOrder (data) {
  return instance({
    url: 'order/GenerateOrderDetail/',
    // 请求方法:create
    method: 'create',
    data: data
  })
}
//生成订单

export function payOrder (data) {
  return instance({
    url: 'order/PayOrderDetail/',
    // 请求方法：create
    method: 'create',
    data: data
  })
}
//支付订单

