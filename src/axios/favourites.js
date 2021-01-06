import instance from './index.js'

export function listFavourites (params) {
  return instance({
    url: 'favourites/FavouritesDetail/',
    // 请求方法：get
    method: 'get',
    params: params
  })
}
// 获取个人收藏夹信息

export function insertFavourites (data) {
  return instance({
    url: 'favourites/FavouritesDetail/',
    method: 'post',
    data: data
  })
}
// 将指定商品加入收藏夹

export function deleteCommodityFromFavourites (params) {
  return instance({
    url: 'favourites/FavouritesDetail/',
    method: 'delete',
    params: params
  })
}
// 将指定商品加入收藏夹

