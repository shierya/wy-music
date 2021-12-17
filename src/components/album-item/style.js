import styled from "styled-components";
export const AlbumItemWrapper=styled.div`
  width: 118px;
  .pic{
    padding-right: 18px;
    background-position:0 -570px;
    margin-bottom: 5px;
    position: relative;
    cursor: pointer;
    img{
      width: 100px;
      height: 100px;
    }
    .play{
      width: 22px;
      height: 22px;
      background-position:0 -85px;
      position: absolute;
      right: 24px;
      bottom: 5px;
      display: none;
      cursor: pointer;
    }
    &:hover .play{
      display: block;
    }
  }
  .name{
    color:#000;
    font-size: 12px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .artist{
    font-size: 12px;
    color:#666;
  }
`