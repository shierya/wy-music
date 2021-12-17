import React, { memo } from 'react';
import { RecommendWrapper } from './style';

import TopBanner from './c-cpns/top-banner';
import HotRecommend from './c-cpns/hot-recommend';
import Album from './c-cpns/album';
import TopList from './c-cpns/top-list';

const Recommend = memo(() => {
  

  return (
    <RecommendWrapper> 
      <TopBanner/>
      <div className="recommendContent wrap-v2">
        <div className="recommendLeft">
          <HotRecommend/>
          <Album />
          <TopList />
        </div>
        <div className="recommendRight">222</div>
      </div>
    </RecommendWrapper>
  );
});

export default Recommend;