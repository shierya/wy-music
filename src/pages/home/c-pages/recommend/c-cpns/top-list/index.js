import React, { memo,useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'

import { TopListWrapper } from './style';
import { changeTopList } from '../../store/action';
import { changeCurrentSong,changePlayListAction } from '@/components/player-bar/store/action';
import RecommendTitle from '../recommend-title'


const TopList = memo(() => {
  const topList=useSelector(state=>{
    return [
    state.getIn(['recommend','upList']),
    state.getIn(['recommend','newList']),
    state.getIn(['recommend','originList'])]
  }) || []
  const {playList}=useSelector(state=>({
    playList:state.getIn(['song','playList']) || []
  })) 
  const dispatch=useDispatch()
  useEffect(() => {
    dispatch(changeTopList('3779629'))
    dispatch(changeTopList('19723756'))
    dispatch(changeTopList('2884035'))
  }, [dispatch]);

  const playSong=item=>{
    dispatch(changeCurrentSong(item.id))
  }
  const addSong=item=>{
    dispatch(changePlayListAction([...playList,item]))
  }
  return (
    <TopListWrapper>
      <RecommendTitle title="榜单"/>
      <ul>
        {
          topList.map((item,index)=>{
            return (
              <li key={index}>
                <dl>
                  <dt><img src={item.coverImgUrl} alt={item.name}/></dt>
                  <dd>
                    <h4>{item.name}</h4>
                    <div><span className='play sprite_02'></span><span className='add sprite_02'></span></div>
                  </dd>
                </dl>
                <div className='list'>
                   {item.tracks&&item.tracks.slice(0,10).map((item1,index)=>{
                     return (
                      <div key={item1.id} className='item'>
                        <div className='title'>
                          <span style={{color:(index<3)?'#c10d0c':'#666'}}>{index+1}</span> 
                          <a href='/' title={item.name}>{item1.name}</a>
                        </div>
                        <div className='btns'>
                          <button className='sprite_02 btn1' onClick={e=>playSong(item1)}/>
                          <button className='sprite_icon2 btn2' onClick={e=>addSong(item1)}/>
                          <button className='sprite_02 btn3'/>
                        </div>
                      </div>
                     )
                   })}
                </div>
                <a href='/' className='more'>查看全部 ></a>
              </li>
            )
          })
        }
      </ul>
    </TopListWrapper>
  );
});

export default TopList;