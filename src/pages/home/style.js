import styled from 'styled-components'

export const HomeWrapper=styled.div`
  .topMeum{
    height: 35px;
    background-color:#C20C0C;
    .meumList{
      padding-left: 180px;
      padding-top:5px;
      display: flex;
      align-items: center;
      a{
        color:#fff;
        display: block;
        padding:0 17px;
        line-height: 20px;
        border-radius:10px;
        margin:0 14px;
        text-decoration: none;
        &.active,&:hover{
          background:#9B0909;
        }
      }
    }
  }


`