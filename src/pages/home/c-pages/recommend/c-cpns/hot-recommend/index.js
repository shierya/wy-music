import React, { memo,useEffect } from 'react';
import {shallowEqual, useDispatch, useSelector,} from 'react-redux'
import { HotRecommendWrapper } from './style';
import RecommendTitle from '../recommend-title'
import { changeHotRecommendList } from '../../store/action';
import HotItem from '@/components/hot-item'

const HotRecommend = memo(() => {
  const {hotRecommends}=useSelector(state=>({
    hotRecommends:state.getIn(['recommend','hotRecommendList'])
  }),shallowEqual)

  const dispatch=useDispatch()
  useEffect(() => {
      dispatch(changeHotRecommendList())
  }, [dispatch]);



  return (
    <HotRecommendWrapper>
      <RecommendTitle title='热门推荐' list={['华语','流行','摇滚','民谣','电子']}/>
      <div className="hotList">
        {
          hotRecommends.map(item=>{
            return <div className="item"  key={item.id}><HotItem  item={item}/></div>
          })
        }
      </div>
    </HotRecommendWrapper>
  );
});

export default HotRecommend;