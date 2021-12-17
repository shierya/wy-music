import React, { memo } from 'react';
import { HeaderWrapper } from './style';
import { NavLink } from 'react-router-dom';
import {Input,Button} from 'antd' 
import {SearchOutlined} from '@ant-design/icons'

const navList=[
  {
    title:'发现音乐',
    path:'/home'
  },
  {
    title:'我的音乐',
    path:'/myMusic'
  },
  {
    title:'朋友',
    path:'/friends'
  },
  {
    title:'商城',
    url:'https://music.163.com/store/product'
  },
  {
    title:'音乐人',
    url:'https://music.163.com/st/musician'
  },
  {
    title:'下载客户端',
    path:'/download'
  },
]

const WYHeader = memo(() => {
  return (
    <HeaderWrapper>
      <div className="content wrap-v1">
        <div className="left">
          <div className="logo sprite_01"></div>
          <div className="navLink">
            {
              navList.map(item=>{
                return item.path?
                <NavLink to={item.path} key={item.title}>{item.title}</NavLink>:
                <a href={item.url} key={item.title}>{item.title}</a>
              })
            }
          </div>
        </div>
        <div className="right">
          <Input 
            className="input"
            placeholder="音乐/视频/电台/用户"
            prefix={<SearchOutlined />}/>
          <Button ghost shape="round">创作者中心</Button>
          <a href="/" className="login">登录</a>
        </div>
      </div>
    </HeaderWrapper>
  );
});

export default WYHeader;