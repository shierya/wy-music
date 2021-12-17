import React, { memo } from 'react';
import { HotItemWarpper } from './style';
import { formatNum } from '../../utils';
const HotItem = memo((props) => {
  const {item}=props
  return (
    <HotItemWarpper>
      <div className="pic">
        <img src={item.picUrl} alt={item.name}/>
        <div className="mask sprite_covor"></div>
        <div className="text sprite_covor">
          <span><i className="sprite_icon"></i>{formatNum(item.playCount)}</span>
          <i className="play sprite_icon"></i>
        </div>
      </div>
      <p>{item.name}</p>
    </HotItemWarpper>
  );
});

export default HotItem;