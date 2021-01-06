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
    url: 'commodity/commoditydetail/',
    // 请求方法：get
    method: 'get',
    params: params
  })
}
// 获取指定商品信息明细

// 搜索我的商品
export function getMyCommodity (params) {
  return instance({
    url: 'commodity/MyCommodityList/',
    // 请求方法：get
    method: 'get',
    params: params
  })
}
// 查看浏览记录
export function BrowseHistoryList (params) {
  return instance({
    url: 'commodity/BrowseHistoryList/',
    // 请求方法：get
    method: 'get',
    params: params
  })
}
// 删除我的商品
export function DeleteCommodity (params) {
  return instance({
    url: 'commodity/CommodityDetail/',
    // 请求方法：get
    method: 'get',
    params: params
  })
}
// 发布商品
export function PublishCommodity (params) {
  return instance({
    url: 'commodity/CommodityDetail/',
    // 请求方法：get
    method: 'get',
    params: params
  })
}
// 查找用户主页商品
export function getAllCommodity (params) {
  return instance({
    url: 'commodity/CommodityDetail/',
    // 请求方法：get
    method: 'get',
    params: params
  })
}
