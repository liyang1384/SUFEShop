import instance from './index.js'

export function getAuditCommodityList (params) {
  return instance({
    url: 'commodity/auditcommoditylist/',
    // 请求方法：get
    method: 'get',
    params: params
  })
}
