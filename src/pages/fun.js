import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import style from './style.module.css';
const data = require('../data/fun.json');

export default function Fun({ location }) {
  useEffect(() => {
    window.NUXT.SliderPosts();
  }, []);

  return (
    <Layout location={location}>
      <section id="blog" class="section section-blog section-blog-1 pp-scrollable">
        <div class="display-wrap bg-gradient-side">
          <span class="bg-color bg-dark-60"></span>
          <span className={style.notice}>更喜欢一个人回家玩游戏？<br />没问题，我们不强制任何团建，也没有酒桌文化。</span>
          <div class="display-screen">
            <div class="section-title-2">
              <div class="container">
                <div class="inner max-w-576">
                  <h2><span>FUN</span></h2>
                  <h3>玩的开心，吃的满足，活得痛快！</h3>
                  <div class="divider divider-1-reverse divider-1-1"></div>
                  <div class="divider divider-1-reverse divider-1-2"></div>
                </div>
              </div>
            </div>
            <div class="container">
              <div class="owl-carousel carousel-blog-1 carousel-style-1" data-items="3" data-margin="30">
                {data.map((d, i) => {
                  const { title, date, img } = d;
                  return (
                    <div class="post-item" key={i}>
                      <a href="#">
                        <div class="post-image bg-primary bg-primary">
                          <img src={img}  />
                        </div>
                      </a>
                      <div class="post-content">
                        <div class="post-data">
                          <h4 class="post-title">
                            <a href="#">{title}</a>
                          </h4>
                          <div class="post-date"><i class="ti-time"></i>{date}</div>
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
