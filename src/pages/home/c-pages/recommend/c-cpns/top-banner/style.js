import styled  from "styled-components";
import download from '@/assets/img/download.png'
import bannerSprite from '@/assets/img/banner_sprite.png'
export const BannerWarpper=styled.div`

  background: url(${props=>props.bgImage}) center center/6000px;
  .content{
    display:flex;
    position: relative;
    .left{
      width: 725px;
      img{
        height: 285px;
      }
    }
    .right{
      width: 255px;
      height: 285px;
      background:url(${download}) no-repeat;
    }
    .btns button{
      position: absolute;
      top:50%;
      transform: translateY(-50%);
      width: 37px;
      height:63px;
      background:url(${bannerSprite}) no-repeat;
      &.prev {
        left: -68px;
        background-position: 0 -360px;
      }
      &.prev:hover{
        background-position: 0 -430px;
      }
      &.next {
        right: -68px;
        background-position: 0 -508px;
      }
      &.next:hover{
        background-position: 0 -578px;
      }
    }
  }
  

`