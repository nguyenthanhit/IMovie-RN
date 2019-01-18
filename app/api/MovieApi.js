import {URL, IMAGE_URL} from '../constants/Constants';
import axios from 'axios';
 
axios.defaults.baseURL = URL

export function getNowPlaying(page = 1) {
  return axios.get(`/now_playing?page=${page}&api_key=a07e22bc18f5cb106bfe4cc1f83ad8ed`)
}