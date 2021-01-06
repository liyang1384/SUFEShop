import instance from './index.js'

export function getRefundDetail (data) {
  return instance({
    url: 'refund/refunddetail/',
    // 请求方法：get
    method: 'post',
    data: data
  })
}
