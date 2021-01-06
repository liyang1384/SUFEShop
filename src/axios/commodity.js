import instance from './index.js'

export function getCommodityList (params) {
  return instance({
    url: 'commodity/commoditylist/',
    method: 'get',
    params: params
  })
}
