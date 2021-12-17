import React from 'react'
import { Redirect } from 'react-router'

const Home=React.lazy(()=>import('@/pages/home'))
const Recommend=React.lazy(()=>import('@/pages/home/c-pages/recommend'))
const TopList=React.lazy(()=>import('@/pages/home/c-pages/toplist'))
const PlayList=React.lazy(()=>import('@/pages/home/c-pages/playlist'))
const DjRadio=React.lazy(()=>import('@/pages/home/c-pages/djradio'))
const Artist=React.lazy(()=>import('@/pages/home/c-pages/artist'))
const Album=React.lazy(()=>import('@/pages/home/c-pages/album'))

const MyMusic=React.lazy(()=>import('@/pages/my-music'))
const Friends=React.lazy(()=>import('@/pages/friends'))
const DownLoad=React.lazy(()=>import('@/pages/download'))
// import Home from '@/pages/home'
// import Recommend from '@/pages/home/c-pages/recommend'
// import TopList from '@/pages/home/c-pages/toplist'
// import PlayList from '@/pages/home/c-pages/playlist'
// import DjRadio from '@/pages/home/c-pages/djradio'
// import Artist from '@/pages/home/c-pages/artist'
// import Album from '@/pages/home/c-pages/album'


// import MyMusic from '@/pages/my-music'
// import Friends from '@/pages/friends'
// import DownLoad from '@/pages/download'

const routes=[
  
  {
    path:'/',
    exact:true,
    render:()=>{
      return <Redirect to='/home'/>
    }
  },
  {
    path:'/home',
    component:Home,
    children:[
      {
        path:'/home',
        exact:true,
        render:()=>{
          return <Redirect to='/home/recommend' />
        }
      },
      {
        path:'/home/recommend',
        component:Recommend
      },
      {
        path:'/home/toplist',
        component:TopList
      },
      {
        path:'/home/playlist',
        component:PlayList
      },
      {
        path:'/home/djradio',
        component:DjRadio
      },
      {
        path:'/home/artist',
        component:Artist
      },
      {
        path:'/home/album',
        component:Album
      },
    ]
  },
  {
    path:'/myMusic',
    component:MyMusic
  },
  {
    path:'/friends',
    component:Friends
  },
  {
    path:'/download',
    component:DownLoad
  }

]

export default routes