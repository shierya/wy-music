import React, { memo, useEffect, useRef } from 'react';
import {shallowEqual, useDispatch, useSelector} from 'react-redux'
import { AlbumWrapper } from './style';
import RecommendTitle from '../recommend-title'
import { changeAlbumList } from '../../store/action';
import {Carousel} from 'antd'
import AlbumItem from '@/components/album-item';


const Album = memo(() => {
  const {albums}=useSelector(state=>({
    albums:state.getIn(['recommend','albumList'])
  }),shallowEqual)
  const dispatch=useDispatch()

  useEffect(()=>{
    dispatch(changeAlbumList())
  },[dispatch])
  const carouselRef=useRef()

  return (
    <AlbumWrapper>
      <RecommendTitle title="新碟上架"/>
      <div className="content">
        <Carousel dots={false} ref={carouselRef}>
          { 
              [0,1].map(item1=>{
                return (
                  <div key={item1} className="item">
                      {
                        albums.slice(item1*5,item1*5+5).map(item2=>{
                          return <AlbumItem key={item2.id} item={item2}/>
                        })
                      }
                  </div>
                )
              })
            }
        </Carousel>
        <div className="btns">
          <button className="prev sprite_02" onClick={e=>carouselRef.current.prev()}/>
          <button className="next sprite_02" onClick={e=>carouselRef.current.next()}/>
        </div>
      </div>
      
    </AlbumWrapper>
  );
});

export default Album;