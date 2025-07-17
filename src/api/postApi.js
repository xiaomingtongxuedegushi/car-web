import request from '@/utils/request'
import QS from 'qs'

// POST 请求
export function postAPI (url, data) {
  return request({
    url: url,
    method: 'POST',
    data: QS.stringify(data)
  })
}

// GET 请求
export function getAPI (url, params) {
  return request({
    url: url,
    method: 'get',
    params
  })
}
