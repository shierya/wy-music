import styled from 'styled-components'
import  footer_02 from '@/assets/img/sprite_footer_02.png'
export const FooterWrapper=styled.div`
    border-top:1px solid #d3d3d3;
    background:#f2f2f2;
    padding:20px 0 80px;
    min-width: 1100px;
    .content{
      display: flex;
      justify-content: space-between;
      .left{
        ul{
          display: flex;
          margin-bottom: 5px;
          li{
            margin-right: 10px;
            a{
              color:#999;
              padding-right: 10px;
              border-right: 1px solid #999;
              line-height: 12px;
            }
            &:last-child a{
              border-right: 0;
            }
          }
        }
        span{
          margin-right:10px;
          line-height: 24px;
          color:#666;
        }
      }
      .right{
        display: flex;
        justify-content: flex-end;
        margin-top:10px;
        a{
          display: block;
          width: 100px;
          text-align:center;
          i{
            display:block;
            margin:0 auto 6px;
            width: 45px;
            height: 45px;
            background:url(${footer_02}) 0 0 no-repeat ;
            background-size: 104px 444px;
          }
          &:nth-child(1) i{
            background-position:-60px 0;
          }
          &:nth-child(2) i{
            background-position:-60px -100px;
          }
          &:nth-child(4) i{
            background-position:-60px -50px;
          }
          &:nth-child(5) i{
            background-position:0 -100px;
          }
        }
        
        
      }
    }


`