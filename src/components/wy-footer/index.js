import React, { memo } from 'react';
import { FooterWrapper } from './style';

const list=['服务条款','隐私政策','儿童隐私政策','版权投诉指引','意见反馈 ','广告合作']
const iconList=['Amped Studio','用户认证','独立音乐人','赞赏','视频奖励']

const WYFooter = memo(() => {
  return (
    <FooterWrapper>
      <div className="wrap-v1 content">
        <div className="left">
          <ul>
            {list.map(item=>{
              return <li key={item}><a href="/">{item}</a></li>
            })}
          </ul>
          <p><span>网易公司版权所有©1997-2021</span><span>杭州乐读科技有限公司运营：浙网文[2021] 1186-054号</span></p>
          <p><span>违法和不良信息举报电话：0571-89853516</span><span>举报邮箱：ncm5990@163.com</span></p>
          <p><span>粤B2-20090191-18</span><span>工业和信息化部备案管理系统网站</span><span>浙公网安备 33010902002564号</span></p>
        </div>
        <div className="right">
            {
              iconList.map(item=>{
                return <a href="/" key={item}><i></i>{item}</a>
              })
            }
        </div>
      </div>
    </FooterWrapper>
  );
});

export default WYFooter;