import request from '@/utils/request'

export function send (data) {
  return request({
    url: '/vote-server',
    method: 'post',
    data
  })
}
