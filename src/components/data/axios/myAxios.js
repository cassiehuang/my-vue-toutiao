import axios from 'axios'
import qs from 'qs'

const baseURL = 'https://easy-mock.com/mock/5a83160c948cfd365a524088/apis/';
export default {
  get(url, params) {
    if (!url) return;
    return axios({
      method: 'get',
      url: baseURL + url,
      params,
      timeout: 30000
    })
  },
  post(url, params) {
    if (!url) return;
    return axios({
      method: 'post',
      url: baseURL + url,
      params,
      timeout: 30000
    })
  }
}

