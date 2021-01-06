import instance from './index.js'

export function getOrderList (params) {
  return instance({
    url: 'order/orderlist/',
    // 请求方法：get
    method: 'get',
    params: params
  })
}
