import {  GET_BANNERS,
          GET_HTO_RECOMMEND,
          GET_ALBUMS,
          GET_NEW_LIST,
          GET_ORIGIN_LIST,
          GET_UP_LIST } from "./constants" 
import { getBannerList,getHotRecommend,getAlbums,getTopList } from "@/network/recommend"

const getBannerListAction=banners=>({
  type:GET_BANNERS,
  banners
})

const getHotRecommendListAction=hotRecommends=>({
  type:GET_HTO_RECOMMEND,
  hotRecommends
})

const getAlbumListAction=albums=>({
  type:GET_ALBUMS,
  albums
})
const getUpListAction=value=>({
  type:GET_UP_LIST,
  value
})
const getNewListAction=value=>({
  type:GET_NEW_LIST,
  value
})
const getOriginListAction=value=>({
  type:GET_ORIGIN_LIST,
  value
})


export const changeBannerList=()=>{
  return dispatch=>{
    getBannerList().then(res=>{
      dispatch(getBannerListAction(res.data.banners))
    })
  }
}

export const changeHotRecommendList=()=>{
  return dispatch=>{
    getHotRecommend({
      limit:8
    }).then(res=>{
      dispatch(getHotRecommendListAction(res.data.result))
    })
  }
}

export const changeAlbumList=()=>{
  return dispatch=>{
    getAlbums ({
      limit:10
    }).then(res=>{
      dispatch(getAlbumListAction(res.data.albums))
    })
  }
}

export const changeTopList=(id)=>{
  return dispatch=>{
    getTopList ({
      id
    }).then(res=>{
      if(id==='19723756'){
        dispatch(getUpListAction(res.data.playlist))
      }else if(id==='3779629'){
        dispatch(getNewListAction(res.data.playlist))
      }else{
        dispatch(getOriginListAction(res.data.playlist))
      }
      
    })
  }
}