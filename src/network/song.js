import request from "./index";

export function getSongDetail(params){
  return request({
    url:'/song/detail',
    params
  })
}

export function getLyric(params){
  return request({
    url:'/lyric',
    params
  })
}