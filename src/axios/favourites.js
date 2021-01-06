import instance from './index.js'

export function listFavourites (params) {
  return instance({
    url: 'favourites/favouritesdetail/',
    // 请求方法：get
    method: 'get',
    params: params
  })
}
// 获取个人收藏夹信息

export function insertFavourites (data) {
  return instance({
    url: 'favourites/favouritesdetail/',
    method: 'post',
    data: data
  })
}
// 将指定商品加入收藏夹

export function deleteCommodityFromFavourites (data) {
  return instance({
    url: 'favourites/favouritesdetail/',
    method: 'delete',
    data: data
  })
}
// 将指定商品删除

