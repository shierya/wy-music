import React, { memo } from 'react';
import { RecommendTitleWrapper } from './style';


const RecommendTitle = memo((props) => {
  const {title,list=[]}=props
  return (
    <RecommendTitleWrapper>
        <div className="left">
          <h4>{title}</h4>
          <div className="list">
            {
              list.map(item=>{
                return <a href="/" key={item}>{item}</a>
              })
            }
          </div>
        </div> 
        <div className="more">更多<i className="sprite_02"></i></div>
    </RecommendTitleWrapper>
  );
});

export default RecommendTitle;