import request from "./index";

export function getBannerList(){
  return request({
    url:'/banner'
  })
}

export function getHotRecommend(params){
  return request({
    url:'/personalized',
    params
  })
}

export function getAlbums(params){
  return request({
    url:'/top/album',
    params
  })
}

export function getTopList(params){
  return request({
    url:'playlist/detail',
    params
  })
}