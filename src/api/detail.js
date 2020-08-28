import request from '@/utils/request'

export function send (data) {
  return request({
    url: '/excel/fields/list',
    method: 'post',
    data
  })
}
