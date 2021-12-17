import {GET_BANNERS,
        GET_HTO_RECOMMEND,
        GET_ALBUMS,
        GET_UP_LIST,
        GET_NEW_LIST,
        GET_ORIGIN_LIST} from './constants'
import {Map} from 'immutable'
const initState=Map(
  {
    bannerList:[],
    hotRecommendList:[],
    albumList:[],
    upList:{},
    newList:{},
    originList:{},
  }
)

function reducer(state=initState,action){
  switch (action.type) {
    case GET_BANNERS:
      return state.set('bannerList',action.banners)
    case GET_HTO_RECOMMEND:
      return state.set('hotRecommendList',action.hotRecommends)
    case GET_ALBUMS:
      return state.set('albumList',action.albums)
    case GET_UP_LIST:
        return state.set('upList',action.value)
    case GET_NEW_LIST:
        return state.set('newList',action.value)
    case GET_ORIGIN_LIST:
      return state.set('originList',action.value)
    default:
      return state;
  }
}


export default reducer