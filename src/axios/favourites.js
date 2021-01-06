import instance from './index.js'

export function listFavourites (params) {
    return instance({
      url: 'favourites/FavouritesDetail/',
      // 请求方法：get
      method: 'get',
      params: params
    })
  }

export function insertFavourites (data) {
  return instance({
    url: 'favourites/FavouritesDetail/',
    method: 'post',
    data: data
  })
}