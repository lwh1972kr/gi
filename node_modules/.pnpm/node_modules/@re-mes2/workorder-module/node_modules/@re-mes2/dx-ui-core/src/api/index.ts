import axios, { AxiosHeaders } from 'axios'
//import Vue from 'vue'

// 기본 API 주소를 설정할 수 있습니다.
const instance = axios.create({
  baseURL: import.meta.env.VITE_APP_PROXY_URL, // 실제 API 서버 주소로 변경하세요.
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
  },
})

//const vm = new Vue()

instance.interceptors.request.use(
  async (config) => {
    // 요청 보내기 전에 제어할 부분

    //if (config.method !== 'get') {
    // 서버와 통신을 post로 하고 있어서 조건문은 수정 가능
    //config.headers.post['Content-Type'] = 'application/json;charset=UTF-8'
    //config.headers.post['Access-Control-Allow-Origin'] = '*' // cors 방지 코드
    // }

    // store -> sampleAuth파일에 저장된 토큰이 있으면
    // if (store.state.Auth.token !== null) {
    //   // 헤더에 토큰을 담아서 전송
    //   config['headers'] = {
    //     Authorization: `Bearer ${store.state.Auth.token}`
    //   }
    // }

    //vm.$Progress.start()

    return config
  },
  (error) => {
    // 요청 시 에러 처리
    console.error('Request error:', error)
    return Promise.reject(error)
  },
)

instance.interceptors.response.use(
  (response) => {
    // 토큰 만료시 리프래쉬 시키는 로직도 추가해야함
    // 에러메세지 처리도 해주는게 좋을 것 같음 Vuex에 message.js Vuex파일을 만들어서 관리해도 좋을 것 같음

    //vm.$Progress.finish()

    return response
  },
  (error) => {
    console.error('Response error:', error)
    return Promise.reject(error)
  },
)

console.log('baseURL', import.meta.env)
// export const getList = (url: string, params?: any) => {
//   return instance.get(url, { params: params })
// }

// export const createData = (url: string, postData: any) => {
//   return instance.post(url, postData)
// }

// export const getData = (url: string, params?: any) => {
//   return instance.get(url, { params: params })
// }

// export const deleteData = (url: string) => {
//   return instance.delete(url)
// }
export const useAxios = (function () {
  const getData = (url: string, params = {}, headers?: any) => {
    try {
      console.log('getData', import.meta.env.VITE_APP_API_URL + url, params)
      const result = instance.get(url, {
        params,
        headers: headers ?? instance.defaults.headers,
      })
      return result
    } catch (err) {
      console.error('GET request error:', err)
    }
  }

  const postData = async (url: string, data = {}, headers?: any) => {
    try {
      const result = await instance.post(url, data, {
        headers: headers ?? instance.defaults.headers,
      })
      return result.data ?? []
    } catch (err) {
      console.error('POST request error:', err)
    }
  }

  const putData = async (url: string, data = {}, headers?: any) => {
    try {
      const result = await instance.put(url, data, {
        headers: headers ?? instance.defaults.headers,
      })
      return result.data ?? []
    } catch (err) {
      console.error('PUT request error:', err)
    }
  }

  const deleteData = async (url: string, params = {}, headers?: any) => {
    try {
      const result = await instance.delete(url, {
        data: params,
        headers: headers ?? instance.defaults.headers,
      })
      return result.data ?? []
    } catch (err) {
      console.error('DELETE request error:', err)
    }
  }

  return {
    getData,
    postData,
    putData,
    deleteData,
  }
})()

//export default useAxios