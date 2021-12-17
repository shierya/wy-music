import styled from "styled-components";
import sprite_02 from '@/assets/img/sprite_02.png'

export const RecommendTitleWrapper=styled.div`
  display:flex;
  border-bottom: 2px solid #C10D0C;
  justify-content: space-between;
  align-items: center;
  .left{
    display: flex;
    align-items: center;
    h4{
      font-size: 20px;
      background:url(${sprite_02}) no-repeat;
      background-position:-225px -156px;
      padding-left: 35px;
    }
    .list{
      margin-left: 10px;
      a{
        display: inline-block;
        padding:0 15px;
        border-right:1px solid #ccc;
        line-height: 10px;
      }
      a:last-child{
        border-right:0;
      }
    }
  }
  .more{
    i{
      display: inline-block;
      width: 12px;
      height: 12px;
      background-position: 0 -240px;
      margin:0 5px;
    }
  }

`