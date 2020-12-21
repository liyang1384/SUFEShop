import axios from 'axios';

//商品详情
export const getCommodityDetail = CommodityId => { return axios.get(`${local_host}/commoditydetail/${CommodityId}`+'/') }