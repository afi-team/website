import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import style from './style.module.css';

export default function Index({ location }) {
  useEffect(() => {
    window.NUXT.SliderServices();
  }, []);

  return (
    <Layout location={location}>
      <section id="services" className={`section section-services section-services-1 `}>
        <span className={style.businessSlogan}>By Frontend, For Frontend.</span>
        <div className={`display-full-screen ${style.businessBackground}`}>
          <div className="row row-0">
            <div className="col-12 overlay-color overlay-image">
              <div className="owl-carousel carousel-services-1">
                <div className="item box">
                  <div className="inner">
                    <div className="service-item">
                      <div className="service-head">
                        <span className={`service-icon iconfont icon-yanfa ${style.serviceIcon} ${style.smallerIcon}`}></span>
                        <span className="count">01.</span>
                        <h3><a href="#">持续集成</a></h3>
                      </div>
                      <div className="service-body">
                        <p>从创建应用到构建部署，从 Code Review 到单元测试，我们开发并维护蚂蚁大前端工作台 —— 雨燕，让开发者只关心 Coding 本身。</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item box">
                  <div className="inner">
                    <div className="service-item">
                      <div className="service-head">
                        <span className={`service-icon iconfont icon-jiankong3 ${style.serviceIcon}`}></span>
                        <span className="count">02.</span>
                        <h3><a href="#">变更防御</a></h3>
                      </div>
                      <div className="service-body">
                        <p>大概是国内最强大的实时前端监控系统，由专业 ETL 工程师负责数据架构及维护，丰富的灰度能力与实时监控数据结合，用技术手段助力发布无忧。</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item box">
                  <div className="inner">
                    <div className="service-item">
                      <div className="service-head">
                        <span className={`service-icon iconfont icon-api ${style.serviceIcon}`}></span>
                        <span className="count">03.</span>
                        <h3><a href="#">开发者服务</a></h3>
                      </div>
                      <div className="service-body">
                        <p>无论是配置一段运营文案还是上传一张图片，甚至想再造一个全新的轮子，我们都提供可高度定制的扩展能力和基础设施，让创意和想法不再被技术局限。</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item box">
                  <div className="inner">
                    <div className="service-item">
                      <div className="service-head">
                        <span className={`service-icon iconfont icon-dashuju ${style.serviceIcon}`}></span>
                        <span className="count">04.</span>
                        <h3><a href="#">前端大数据</a></h3>
                      </div>
                      <div className="service-body">
                        <p>谁说前端都是切图仔？在大数据浪潮下我们为前端开发者开放了开箱即用的前端大数据和易于上手的数据能力。以后这个需求做不做，咱们用数据说话。</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item box">
                  <div className="inner">
                    <div className="service-item">
                      <div className="service-head">
                        <span className={`service-icon iconfont icon-dashuju ${style.serviceIcon}`}></span>
                        <span className="count">05.</span>
                        <h3><a href="#">持续创造中</a></h3>
                      </div>
                      <div className="service-body">
                        <p>我们服务整个蚂蚁集团的所有前端业务，业务需求日新月异，对技术的挑战也不曾停止。我们不变的目标是用技术手段释放前端生产力，持续创造中。</p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
