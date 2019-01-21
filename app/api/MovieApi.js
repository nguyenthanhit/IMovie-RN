import {URL} from '../constants/Constants';
import axios from 'axios';
 
axios.defaults.baseURL = URL

axios.interceptors.request.use(request => {
  let token = 'a07e22bc18f5cb106bfe4cc1f83ad8ed'
  const {url} = request
  request.url = url + `&api_key=${token}`
  return request
})

export function getNowPlaying(page = 1) {
  return axios.get(`/now_playing?page=${page}`)
}

