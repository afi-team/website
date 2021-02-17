import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import style from './style.module.css';
import { Helmet } from 'react-helmet';
const data = require('../data/fun.json');

export default function Fun({ location }) {
  useEffect(() => {
    window.NUXT.SliderPosts();
  }, []);

  return (
    <Layout location={location}>
    <Helmet>
      <title>AFI - 吃喝玩乐</title>
    </Helmet>
      <section id="blog" className="section section-blog section-blog-1 pp-scrollable">
        <div className="display-wrap bg-gradient-side">
          <span className="bg-color bg-dark-60"></span>
          <span className={style.notice}>更喜欢一个人回家玩游戏？<br />没问题，我们不强制任何团建，也没有酒桌文化。</span>
          <div className="display-screen">
            <div className="section-title-2">
              <div className="container">
                <div className="inner max-w-576">
                  <h2><span>FUN</span></h2>
                  <h3>玩的开心，吃的满足，活得痛快！</h3>
                  <div className="divider divider-1-reverse divider-1-1"></div>
                  <div className="divider divider-1-reverse divider-1-2"></div>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="owl-carousel carousel-blog-1 carousel-style-1" data-items="3" data-margin="30">
                {data.map((d, i) => {
                  const { title, date, img } = d;
                  return (
                    <div className="post-item" key={i}>
                      <a href="#">
                        <div className="post-image bg-primary bg-primary">
                          <img src={img}  />
                        </div>
                      </a>
                      <div className="post-content">
                        <div className="post-data">
                          <h4 className="post-title">
                            <a href="#">{title}</a>
                          </h4>
                          <div className="post-date"><i className="ti-time"></i>{date}</div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
