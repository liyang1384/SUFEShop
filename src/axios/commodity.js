import instance from './index.js'

export function getCommodityList (params) {
  return instance({
    url: 'commodity/commoditylist/',
    method: 'get',
    params: params
  })
}

export function getCommodity (params) {
  return instance({
    url: 'commodity/CommodityDetail/',
    // 请求方法：get
    method: 'get',
    params: params
  })
}
//获取指定商品信息明细