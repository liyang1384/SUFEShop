import instance from './index.js'

export function getBoughtOrderList (params) {
  return instance({
    url: 'order/boughtorderlist/',
    method: 'get',
    params: params
  })
}
