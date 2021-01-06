import instance from './index.js'

// 发送消息
export function sendMessege (params) {
  return instance({
    url: 'communication/MessageDetail/',
    method: 'get',
    params: params
  })
}

// 发送消息
export function showMessege (params) {
  return instance({
    url: 'communication/MessageList/',
    method: 'get',
    params: params
  })
}
