import axios from 'axios';
const local_host = 'http://127.0.0.1:8000'
// 商品详情
export const getCommodityDetail = CommodityId => { return axios.get(`${local_host}/commoditydetail/${CommodityId}` + '/') }
