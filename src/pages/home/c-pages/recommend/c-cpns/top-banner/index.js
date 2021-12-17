import React, { memo,useCallback,useEffect, useRef, useState} from 'react';
import  {shallowEqual, useDispatch, useSelector} from 'react-redux'
import { changeBannerList } from '../../store/action'; 
import {Carousel} from 'antd'
import { BannerWarpper } from './style';

const TopBanner = memo(() => {
  const [currentIndex,setCurrentIndex]=useState(0)
  
  
  const dispatch=useDispatch()
  const {banners}=useSelector(state=>({
    //banners:state.get('recommend').get('bannerList')
    banners:state.getIn(['recommend','bannerList'])
  }),shallowEqual)
  useEffect(()=>{
    dispatch(changeBannerList())
  },[dispatch])

  const carouselRef=useRef()
  const onChange=useCallback((from,to)=>{
    setCurrentIndex(to)
  },[])
  return (
    <BannerWarpper bgImage={banners[currentIndex]&&banners[currentIndex].imageUrl+'?imageView&blur=40x20'}>
      <div className="content wrap-v2">
        <div className="left">
          <Carousel autoplay beforeChange={onChange} effect="fade" ref={carouselRef}>
            {
              banners.map(item=>{
                return <img src={item.imageUrl} alt={item.typeTitle} key={item.targetId}/>
              })
            }
          </Carousel>
        </div>
        <div className="right"></div>
        <div className="btns">
          <button className="prev" onClick={e=>carouselRef.current.prev()}></button>
          <button className="next" onClick={e=>carouselRef.current.next()}></button>
        </div>
      </div>
    </BannerWarpper>
  );
});

export default TopBanner;