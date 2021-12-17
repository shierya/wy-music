import styled from 'styled-components'
import sprite_01 from '@/assets/img/sprite_01.png'
export const HeaderWrapper=styled.div`
  background-color: #242424;
  min-width:1100px ;
  font-size:20px;
  color:red;
  border-bottom: 5px solid #C20C0C;
  .content{
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left{
      display: flex;
      justify-content: flex-start;
      .logo{
        width: 176px;
        height: 69px;
        background-position:0 0;
      }
      .navLink{
        a{
          height: 69px;
          display: inline-block;
          line-height: 69px;
          font-size: 14px;
          padding:0 20px;
          color:#ccc;
          position: relative;
          ::after{
            display: none;
            content: '';
            width: 12px;
            height: 7px;
            background: url(${sprite_01}) -226px 0 no-repeat;
            position: absolute;
            bottom: -1px;
            left:50%;
            transform: translateX(-50%);
          }
          &.active,&:hover{
            color:#fff;
            background-color: #000;
            text-decoration: none;
          }
          &.active::after{
            display: block;
          }
          :last-child::before{
            display: block;
            content:'';
            width:28px;
            height: 19px;
            background: url(${sprite_01}) -190px 0 no-repeat;
            position: absolute;
            right: -10px;
            top:15px;
          }
        }
        
      }
    }
    .right{
      display: flex;
      justify-content: flex-end;
      align-items: center;
      .input{
        width: 158px;
        height: 32px;
        border-radius: 16px;
        input{
          font-size: 12px;
          color:#9b9b9b;
        }
      }
      button{
        font-size: 12px !important;
        color:#ccc !important;
        border-color:#4F4F4F !important;
        line-height: 100%;
        margin:0 10px;
        &:hover{
          color:#fff !important;
          border-color:#fff !important;
        }
      }
      .login{
        color:#787878;
        font-size: 12px;
      }
    }
  }
  
  
`