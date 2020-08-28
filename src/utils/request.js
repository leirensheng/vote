// request拦截器
import axios from 'axios'
import { Notify } from 'vant'

const instance = axios.create({
  baseURL: '/',
  timeout: 10000 * 6,
  headers: {
    'Content-Type': 'application/json'
  }
})

instance.interceptors.response.use(
  response => {
    const res = response.data
    return new Promise((resolve, reject) => {
      const code = Object.hasOwnProperty.call(res, 'code') ? res.code : res.errcode
      let message = Object.hasOwnProperty.call(res, 'message')
        ? res.message
        : Object.hasOwnProperty.call(res, 'msg')
          ? res.msg
          : res.errmsg

      message = message || 'error'
      if (code !== 0) {
        Notify({
          message: message,
          type: 'danger'
        })
        reject(message)
      } else {
        resolve(res)
      }
    })
  },
  error => {
    console.log(error) // for debug
    const res = error.response
    const { msg, message } = res.data
    Notify({
      message: msg || message || error.message,
      type: 'danger'
    })
    return Promise.reject(error)
  }
)

export default instance
