import React from 'react';
import Layout from '../components/Layout';
import style from './style.module.css';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';

export default function Team({ location }) {
  return (
    <Layout location={location}>
      <Helmet>
        <title>AFI - 团队概况</title>
      </Helmet>
      <section id="about" className={`section section-about section-about-1 pp-scrollable`}>
        <div className="full-screen">
          <div className="display-center">
            <div className="section-title-1">
              <div className="container">
                <h2>一个小而美的全能团队</h2>
                <p><span className={style.logoFamily}>AFI</span> 团队目前共有 15 人，其中用户产品经理 1 人、数据产品经理 1 人、大数据工程师 1 人，其余均为全栈工程师 / 前端工程师 / Node.js 工程师，另有前端架构师、设计师、技术支持等角色默契配合。</p>
                <p>我们相信 <code> Talk is cheap, show me your code</code>，我们拒绝<code> PUA </code>和无谓加班。我们喜欢发现问题、解决问题，更喜欢做成产品功能为蚂蚁前端开发者带来更美好的开发体验，从而更好地服务亿万蚂蚁用户。</p>
                <p>谁说前端只能当页面仔？容器、编排、K8S、实时计算、即席查询、服务编排、资源调度，只要解决业务问题我们就去实现。虽然身在前端团队，跟交互、视觉、前端、后端、数据、SRE、DBA、安全都能谈笑风生，够不够 <code> Exciting </code>？</p>
                <Link to="/join" className="button button-md button-primary">加入我们</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
