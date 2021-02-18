import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import style from './style.module.css';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';

export default function Index({ location }) {
  useEffect(() => {
    let cancel;
    setTimeout(() => {
      cancel = window.plot('plot-target', [
        'DevOps',
        '监控报警',
        '持续集成',
        '服务编排',
        'K8S',
        '变更防御',
        '资源调度',
        '实时计算',
        'Node.js',
        '研发迭代',
        'Serverless',
        '数据资产',
      ]);
    });

    return () => cancel();
  }, []);

  return (
    <Layout location={location}>
      <Helmet>
        <title>AFI - 蚂蚁前端基础设施团队</title>
      </Helmet>
      <section id="intro" className="section section-hero section-hero-1">
        <div className="display-full-screen">
          <div className="hero-content" id="plot-target">
          </div>
          <div className="site-sidebar overlay-color">
            <span className="bg-color bg-primary"></span>
              <div className="display-center">
                <h1 className={style.slogan}>
                  <span className={style.part1}>我们支撑</span>
                  <span className={style.part2}>蚂蚁集团</span>
                  <span className={style.part3}>所有前端业务<sup className={style.sup}>*</sup></span>
                </h1>
                <p className={style.siteText}>
                  蚂蚁前端基础设施团队（<span className={style.bold}>A</span>nt <span className={style.bold}>F</span>rontend <span className={style.bold}>I</span>nfrastructure）来自
                  <a href="https://xtech.antfin.com/" target="_blank" rel="noreferrer" className={style.link}>蚂蚁集团 - 体验技术部</a>，
                  为前端业务提供
                  <span className="typo-em test">持</span><span className="typo-em">续</span><span className="typo-em">集</span><span className="typo-em">成</span>、
                  <span className="typo-em">监</span><span className="typo-em">控</span><span className="typo-em">报</span><span className="typo-em">警</span>、
                  <span className="typo-em">数</span><span className="typo-em">据</span><span className="typo-em">分</span><span className="typo-em">析</span>
                  等全链路服务能力。我们的系统平均每天响应数十亿次请求、处理上百亿监控日志，为蚂蚁前端业务发展保驾护航。
                </p>
                <div className={style.heroAction}>
                  <Link to="/join/" className="button button-md button-light">加入我们</Link>
                  <div className={style.extraHeroAction}>
                    <Link to="/team/" className={style.footerLink}>认识团队</Link>
                    <Link to="/business/" className={style.footerLink}>了解业务</Link>
                  </div>
                </div>
              </div>
              <div className={`site-sidebar-links ${style.footer}`}>
                <ul>
                  <li>
                    <a href="https://github.com/afi-team" target="_blank" rel="noreferrer"><i className="iconfont icon-huaban88"></i></a>
                  </li>
                </ul>
                <p className={style.textLink}>
                  <Link to="/team/" className={style.footerLink}>认识团队</Link>
                  <Link to="/business/" className={style.footerLink}>了解业务</Link>
                </p>
                <p className={style.extraNote}>* 包括但不限于小程序、H5、Node.js 服务端、npm 包等</p>
              </div>
            </div>
          </div>
      </section>
    </Layout>
  );
}
