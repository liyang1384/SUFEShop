import instance from './index.js'

export function getOrderList (data) {
  return instance({
    url: '/OrderList',
    // 请求方法：get
    method: 'get',
    data
  })
}
