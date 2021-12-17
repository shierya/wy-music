import styled from 'styled-components'

export const PlayerBarWarpper=styled.div`
  height: 53px;
  padding-top:6px;
  background-position: 0 0;
  background-repeat: repeat-x;
  position: fixed;
  width: 100%;
  bottom:0;
  .lyric{
    position: absolute;
    top:-50px;
    left:50%;
    transform: translateX(-50%);
    background-color: rgba(100, 100, 100, 0.8);
    line-height: 30px;
    font-size: 16px;
    padding: 0 15px;
    color:#fff;
  }
  .lock{
    width: 52px;
    height: 67px;
    background-position: 0 -380px;
    position: absolute;
    top:-14px;
    right: 15px;
    i{
      display: block;
      width: 18px;
      height: 18px;
      background-position: -80px -380px;
      margin:5px auto;
      
    }
  }
  .content{
    height:100%;
    display: flex;
    justify-content: space-between;
    align-items:center;
    color:#fff;
    .left{
      button{
        vertical-align:middle;
      }
      .prev{
        width:28px;
        height:28px;
        background-position:0 -130px;
        &:hover{
          background-position:-30px -130px;
        }
      }
      .play{
        width:36px;
        height:36px;
        background-position:${props=>{
          return props.isPlaying?'0 -165px':'0 -204px'
        }};
        margin:0 8px;
        &:hover{
          background-position:${props=>{
          return props.isPlaying?'-40px -165px':'-40px -204px'
        }};
        }
       
      }
      .next{
        width:28px;
        height:28px;
        background-position:-80px -130px;
        &:hover{
          background-position:-110px -130px;
        }
      }
    }
    .center{
      flex:1;
      padding:0 30px;
      display:flex;
      align-items:center;
      .pic{
        border-radius: 4px;
        overflow: hidden;
        border:1px solid #000;
      }
      .song{
        padding-left:20px;
        flex:1;
        .title{          
          .name{
            color:#e8e8e8;
          }
          .singer{
            color:#9b9b9b;
            margin:0 10px;
          }
          .link{
            font-size: 0;
            display: inline-block;
            width: 14px;
            height: 15px;
            background-position: -110px -103px;
            vertical-align: middle;
            &:hover{
              background-position: -130px -103px;
            }
          }
        }
        .slider{
          display: flex;
          align-items: center;
          .ant-slider{
            flex:1;
            padding:0;
            margin:7px 10px 0 0;
            .ant-slider-rail{
              background-color:#535353;
              border-radius: 5px;
              height: 9px;
            }
            .ant-slider-track{
              background-color:#c70c0c;
              border-radius: 5px;
              height: 9px;
            }
            .ant-slider-handle{
              width: 16px;
              height: 16px;
              background-color:#c70c0c;
              border-radius: 50%;
              border:5px solid #fff;
              margin-top:-3px;
            }
          }
          span{
            color:#797979;
          }
        }
      }
    }
    .right{
      .line{
        display:inline-block;
        height:24px;
        width:2px;
        margin:0 10px;
        background-position:-149px -250px;
        vertical-align:middle;
      }
      button{
        width:25px;
        height:25px;
        vertical-align:middle;
      }
      .add{
        background-position:-88px -163px;
        &:hover{
          background-position:-88px -189px;
        }
      }
      .share{
        background-position:-114px -163px;
        &:hover{
          background-position:-114px -189px;
        }
      }
      .vol{
        background-position:-2px -248px;
        &:hover{
          background-position:-31px -248px;
        }
      }
      .loop{
        background-position:${props=>{
          switch (props.playMode) {
            case 1:
              return '-66px -248px'
            case 2:
              return '-66px -344px'
            default:
              return '-3px -344px'
          }
        }};
        &:hover{
          background-position:${props=>{
          switch (props.playMode) {
            case 1:
              return '-93px -248px'
            case 2:
              return '-93px -344px'
            default:
              return '-33px -344px'
          }
        }};
        }
      }
      .list{
        width:59px;
        background-position:-42px -68px;
        color:#fff;
        padding-left: 22px;
        line-height: 26px;
        text-align:center;
        &:hover{
          background-position:-42px -98px;
        }
      }
    }
  }

`