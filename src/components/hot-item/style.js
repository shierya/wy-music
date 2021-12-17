import styled from "styled-components";
export const HotItemWarpper=styled.div`
  width: 140px;
  .pic{
    position: relative;
    img{
      width: 100%;
    }
    .mask{
      width: 100%;
      height: 100%;
      background-position: 0 0;
      position: absolute;
      left:0;
      top:0;
    }
    .text{
      width: 100%;
      padding:0 5px;
      box-sizing: border-box;
      height: 27px;
      background-position: 0 -537px;
      position: absolute;
      left:0;
      bottom: 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color:#ccc;
      span{
        i{
          display: inline-block;
          width: 14px;
          height: 11px;
          background-position: 0 -24px;
          margin-right: 5px;
        }
      }
      .play{
        width: 16px;
        height: 17px;
        background-position: 0 0;
      }
    }
  }
  p{
    font-size: 14px;
    line-height: 20px;
    margin-top: 10px;
  }
`