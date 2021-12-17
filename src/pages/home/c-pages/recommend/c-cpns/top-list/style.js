import styled from 'styled-components'
import recommendBg from '@/assets/img/recommend-top-bg.png'
export const TopListWrapper=styled.div`
  margin-top:30px;
  ul{
    height: 472px;
    background: url(${recommendBg}) center top no-repeat;
    margin-top:20px;
    display: flex;
    li{
      padding:21px;
      width: 230px;
      dl{
        display: flex;
        dd{
          margin-left: 10px;
        }
        img{
          width: 80px;
          height: 80px;
        }
        h4{
          font-size: 14px;
          line-height: 36px;
          margin-top: 4px;
        }
        span{
          display: inline-block;
          width: 22px;
          height: 22px;
          margin-right: 10px;
        }
        .play{
          background-position: -267px -205px;
          &:hover{
            background-position: -267px -235px;
          }
        }
        .add{
          background-position: -300px -206px;
          &:hover{
            background-position: -300px -236px;
          }
        }
      }
      .list{ 
        margin-top:20px;
        .item{
          height: 32px;
          line-height: 32px;
          position:relative ;
          .title{
            display: flex;
            span{
              display: inline-block;
              width: 26px;
              text-align:center;
              font-size: 16px;  
              color:#666;
            }
            a{
              color:#000;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
          }
          &:hover .btns{
            display: block;
          }
          .btns{
            position: absolute;
            right: 0;
            top:0;
            display: none;
            button{
              width: 17px;
              height: 17px;
              margin-left: 10px;
              vertical-align: middle;
              cursor: pointer;
            }
            .btn1{
              background-position: -267px -268px;
            }
            .btn2{
              background-position: 0 -698px;
            }
            .btn3{
              background-position: -297px -268px;
            }
          }
        }
        
      }
      .more{
        line-height: 32px;
        display: block;
        text-align:right;
      }
    }
  }

`