import React, { memo } from 'react';
import { AlbumItemWrapper } from './style';


const AlbumItem = memo((props) => {
  const {item}=props
  return (
    <AlbumItemWrapper>
      <div className="pic sprite_covor">
        <img src={item.picUrl} alt={item.name}/>
        <i className="play sprite_icon" />
      </div>
      <div className="name">{item.name}</div>
      <div className="artist">{item.artist.name}</div>
    </AlbumItemWrapper>
  );
});

export default AlbumItem;