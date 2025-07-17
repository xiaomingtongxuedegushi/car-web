import axios from 'axios'

const service = axios.create({
  // baseURL: 'https://aaa-api.mcpanl.cn',
  // baseURL: 'http://v.com',
  // baseURL: 'http://127.0.0.1:8000',
  baseURL: 'http://www.car.com',
  timeout: 10000
})

// 配置请求
service.interceptors.request.use(
  config => {
    // 在发送请求前被执行的代码块

    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 配置返回值
service.interceptors.response.use(
  response => {
    const res = response.data
    console.log(res)
    return res
  },
  error => {
    console.log('request error: ', error)
    return Promise.reject(error)
  }
)

export default service
