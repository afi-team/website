import React from 'react';
import Layout from '../components/Layout';
import style from './style.module.css';
const data = require('../data/share.json');

export default function Share({ location }) {
  const { internal = [], external = [] } = data;
  return (
    <Layout location={location}>
      <section id="about" className={`section section-about section-about-1 pp-scrollable ${style.shareSection}`}>
      <div className="section-resume section-resume-1 my-resume">
        <div className="container">
          <div className="box">
            <div className="row row-0">
              <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6 bg-primary">
                <div className="inner">
                  <div className="resume-row resume-dark">
                    <h4 className="resume-title">外部分享</h4>
                    <ul>
                      {external.map((d, i) => {
                        const { title, date, author, description, link } = d;
                        return (
                          <li>
                            <div className="resume-item">
                              <div className="resume-head">
                                <span className="resume-icon ti-paint-bucket"></span>
                                <h5>{link ? <a href={link} target="_blank" rel="noreferrer">{title}</a> : title}</h5>
                                <h6>{author} <small>({date})</small></h6>
                              </div>
                              <div className="resume-body">
                                <p>{description}</p>
                              </div>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="inner">
                  <div className="resume-row resume-light">
                    <h4 className="resume-title">内部分享</h4>
                    <ul>
                    {internal.map((d, i) => {
                        const { title, date, author, description, link } = d;
                        return (
                          <li>
                            <div className="resume-item">
                              <div className="resume-head">
                                <span className="resume-icon ti-paint-bucket"></span>
                                <h5>{link ? <a href={link} target="_blank" rel="noreferrer">{title}</a> : title}</h5>
                                <h6>{author} <small>({date})</small></h6>
                              </div>
                              <div className="resume-body">
                                <p>{description}</p>
                              </div>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
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
