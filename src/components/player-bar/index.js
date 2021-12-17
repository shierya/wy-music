import React, { memo, useCallback, useEffect, useRef, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { PlayerBarWarpper } from './style';
import {Slider} from 'antd'
import { changeCurrentSong,changeCurrentSongIndex,changePlayModeAction} from './store/action';
import { formatMinuteSecond } from '@/utils';

const PlayerBar = memo(() => {
  //props and state
  const [currentTime,setCurrentTime]=useState(0)
  const [sliderValue,setSliderValue]=useState(0)
  const [isChange,setIsChange]=useState(false)
  const [isPlaying,setIsPlaying]=useState(false)

  const audioRef=useRef()
  //redux hooks
  const {currentSong,playList,playMode}=useSelector(state=>({
    currentSong:state.getIn(['song','currentSong']),
    playList:state.getIn(['song','playList']),
    playMode:state.getIn(['song','playMode'])
  }))

  const dispacth=useDispatch()

  useEffect(()=>{
    dispacth(changeCurrentSong(playList[0].id))
  },[dispacth])

  useEffect(()=>{
    audioRef.current.src=`https://music.163.com/song/media/outer/url?id=${currentSong.id}.mp3`
    audioRef.current.play().then(res=>{
      setIsPlaying(true)
    }).catch(res=>{
      setIsPlaying(false)
    })
  },[currentSong])

  //other hooks
  const play=()=>{
    setIsPlaying(!isPlaying)
    isPlaying?audioRef.current.pause():audioRef.current.play()
    
  }
  const changeSong=(tag)=>{
    dispacth(changeCurrentSongIndex(tag))
  }
  const changePlayMode=()=>{
    let newPlayMode=playMode+1
    if(newPlayMode>2)newPlayMode=0
    dispacth(changePlayModeAction(newPlayMode))
  }
  const getPlayTime=e=>{ 
    if(!isChange){
      setCurrentTime(e.target.currentTime*1000)
      setSliderValue((currentTime/currentSong.dt)*100)
    }
  }
  const playEnd=()=>{
    if(playMode===2){
      audioRef.current.currentTime=0;
      audioRef.current.play()
    }else{
      dispacth(changeCurrentSongIndex(1))
    }
    
  }
  //监听组件事件用useCallback，防止一直重新渲染
  const changeSlider=useCallback(value=>{
    setIsChange(true)
    setSliderValue(value)
    setCurrentTime((value/100)*currentSong.dt)
  },[currentSong.dt])

  const sliderAfterChange=useCallback(value=>{
    const currentTime=(value/100)*currentSong.dt/1000
     audioRef.current.currentTime=currentTime
     setCurrentTime(currentTime*1000)
     setIsChange(false)
  },[currentSong.dt])

  return (
    <PlayerBarWarpper className="sprite_playbar" isPlaying={isPlaying} playMode={playMode}>
      <div className="content wrap-v2">
        <div className="left">
          <button className="prev sprite_playbar" onClick={e=>changeSong(-1)} />
          <button className="play sprite_playbar" onClick={play}/>
          <button className="next sprite_playbar" onClick={e=>changeSong(1)}/>
        </div>
        <div className="center">
          <a href='/' className='pic'><img src={currentSong.al && currentSong.al.picUrl +'?param=34y34'} alt="图片" /></a>
          <div className='song'>
            <div className='title'><a href='/' className='name'>{currentSong.name}</a> <a href='/' className='singer'>{currentSong.ar && currentSong.ar[0].name}</a><a href='/' className='link sprite_playbar'>11</a></div>
            <div className='slider'>
              <Slider 
                defaultValue={0} 
                value={sliderValue}
                onChange={changeSlider}
                onAfterChange={sliderAfterChange}
              />
              <span>{formatMinuteSecond(currentTime)} / {formatMinuteSecond(currentSong.dt)}</span>
            </div>
          </div>
        </div>
        <div className="right">
          <button className="add sprite_playbar"/>
          <button className="share sprite_playbar"/>
          <span className='line sprite_playbar'></span>
          <button className="vol sprite_playbar"/>
          <button className="loop sprite_playbar" onClick={changePlayMode}/>
          <button className="list sprite_playbar">{playList.length}</button>
        </div>
        <audio src='/' ref={audioRef} onTimeUpdate={getPlayTime} onEnded={playEnd}/>
      </div>
      <div className="lock sprite_playbar"><i className="sprite_playbar"></i></div>
    </PlayerBarWarpper>
  );
});

export default PlayerBar;