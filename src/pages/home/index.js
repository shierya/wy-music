import React, { memo } from 'react';
import {NavLink} from 'react-router-dom'
import { HomeWrapper } from './style';
import {renderRoutes} from 'react-router-config'

const meumList=[
  {
    title:'推荐',
    path:'/home/recommend'
  },
  {
    title:'排行榜',
    path:'/home/toplist'
  },
  {
    title:'歌单',
    path:'/home/playlist'
  },
  {
    title:'主播电台',
    path:'/home/djradio'
  },
  {
    title:'歌手',
    path:'/home/artist'
  },
  {
    title:'新碟上架',
    path:'/home/album'
  },
]

const Home = memo((props) => {
  return (
    <HomeWrapper>
       <div className="topMeum">
          <div className="meumList wrap-v1">
            {
              meumList.map(item=>{
                return <NavLink to={item.path} key={item.title}>{item.title}</NavLink>
              })
            }
          </div>
       </div>
       {renderRoutes(props.route.children)}
    </HomeWrapper>
  );
});

export default Home;