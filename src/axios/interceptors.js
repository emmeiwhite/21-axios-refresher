import axios from 'axios'

// Interceptors: Functions that allows us to intercept & modify  HTTP requests & HTTP responses before they are fully processed.

// Types of Interceptors: Request Interceptor & Response Interceptor

// 1) Request Interceptor: Triggered before a request is sent, often used to add authentication tokens or modify request headers

// 2) Response Interceptor: Triggered after response is received, used to handle errors, log responses or transform data.

/** Let's work with custom instance and use interceptors */

const authFetch = axios.create({
  baseURL: 'https://www.course-api.com'
})

// 1) Request interceptor with two call backs
authFetch.interceptors.request.use(
  request => {
    request.headers['Accept'] = `application/json`
    request.headers['Authentication'] = `open secret`
    // must return request
    return request
  },
  error => {
    return Promise.reject(error)
  }
)

// 2) Response interceptor with two call backs
authFetch.interceptors.response.use(
  response => {
    console.log('got response')
    // must return response
    return response
  },
  error => {
    console.log(error.response)
    if (error.response.status === 404) {
      // do something
      console.log('NOT FOUND')
    }
    return Promise.reject(error)
  }
)

export default authFetch
