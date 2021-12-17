import styled from 'styled-components'

export const AlbumWrapper=styled.div`
  margin-top: 30px;
  .content{
    position: relative;
    padding:20px 30px;
    background:#f5f5f5;
    border:1px solid #d3d3d3;
    margin-top: 25px;
    .item{
      display: flex !important;
      justify-content: space-between;
    }
    .btns{ 
      button{
        width: 17px;
        height: 17px;
        position: absolute;
        top:50%;
        margin-top: -20px;
        transform: translateY(-50%);
        cursor: pointer;
      }
      .prev{
        background-position:-260px -75px ;
        left:7px;
      }
      .next{
        background-position:-300px -75px ;
        right: 7px;
      }
    }
  }


`