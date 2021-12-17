import { CHANGE_PLAY_LIST,CHANGE_CURRENT_SONG_INDEX,CHANGE_CURRENT_SONG,CHANGE_PLAY_MODE } from "./contanst"
import { getSongDetail } from '@/network/song';

export const changeCurrentSongAction=value=>({
  type:CHANGE_CURRENT_SONG,
  value
})

export const changePlayListAction=value=>({
  type:CHANGE_PLAY_LIST,
  value
})

export const changeCurrentSongIndexAction=value=>({
  type:CHANGE_CURRENT_SONG_INDEX,
  value
})

export const changePlayModeAction=value=>({
  type:CHANGE_PLAY_MODE,
  value
})

export const changeCurrentSong=(ids)=>{
  return (dispatch,getState)=>{
    const playList=getState().getIn(['song','playList'])
    const index= playList.findIndex(item=>item.id===ids)
    if(index!==-1){ 
      //在列表中
      dispatch(changeCurrentSongAction(playList[index]))
      dispatch(changeCurrentSongIndexAction(index))
    }else{
      //不在列表中
      getSongDetail({ids}).then(res=>{
        const newPlayList=[...playList,res.data.songs[0]]
        dispatch(changePlayListAction(newPlayList))
        dispatch(changeCurrentSongAction(newPlayList[newPlayList.length-1]))
        dispatch(changeCurrentSongIndexAction(newPlayList.length-1))
      })
      
    }
    
  }
}


export const changeCurrentSongIndex=(tag)=>{
  return (dispatch,getState)=>{
    const playList=getState().getIn(['song','playList'])
    const playMode=getState().getIn(['song','playMode'])
    const currentSongIndex=getState().getIn(['song','currentSongIndex'])
    if(playMode===1){ 
      //随机播放
      let  newIndex=Math.floor(Math.random()*playList.length)
      dispatch(changeCurrentSongAction(playList[newIndex]))
      dispatch(changeCurrentSongIndexAction(newIndex))
    }else{
      //顺序播放
      let newIndex=currentSongIndex+tag
      if(newIndex>playList.length-1) newIndex=0
      if(newIndex<0) newIndex=playList.length-1
      dispatch(changeCurrentSongAction(playList[newIndex]))
      dispatch(changeCurrentSongIndexAction(newIndex))
    }
    
  }
}