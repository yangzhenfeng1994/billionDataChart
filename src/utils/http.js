import axios from 'axios'

// 添加请求前置拦截器
axios.interceptors.request.use(function (request) {
  const token = localStorage.getItem('token')
  request.headers.token = token
  return request
})

export default axios
