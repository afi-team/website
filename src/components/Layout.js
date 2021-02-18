import React, { useEffect } from 'react';
import { Link } from 'gatsby';
import './style.css';

export default function Layout({ children, location }) {
  useEffect(() => {
    window.NUXT.Sidenav();
  }, []);

  return (
    <>
      <header className="site-header">
        <div className="header-logo">
          <Link to="/" title="AFI" className="logo">AFI</Link>
        </div>
        <span className="button button-menu button-open-sidenav">
          <span></span>
        </span>
        <ul className="header-nav">
          <li data-menuanchor="intro" className={location.pathname === '/' ? 'active' : ''}>
            <Link to="/">
              <span className="count">01</span>
              <span className="anchor">首页</span>
            </Link>
          </li>
          <li data-menuanchor="about" className={location.pathname.startsWith('/business') ? 'active' : ''}>
            <Link to="/business">
              <span className="count">02</span>
              <span className="anchor">了解业务</span>
            </Link>
          </li>
          <li data-menuanchor="services" className={location.pathname.startsWith('/team') ? 'active' : ''}>
            <Link to="/team">
              <span className="count">03</span>
              <span className="anchor">认识团队</span>
            </Link>
          </li>
          <li data-menuanchor="portfolio" className={location.pathname.startsWith('/share') ? 'active' : ''}>
            <Link to="/share">
              <span className="count">04</span>
              <span className="anchor">技术分享</span>
            </Link>
          </li>
          <li data-menuanchor="blog" className={location.pathname.startsWith('/fun') ? 'active' : ''}>
            <Link to="/fun">
              <span className="count">05</span>
              <span className="anchor">吃喝玩乐</span>
            </Link>
          </li>
          <li data-menuanchor="contact" className={location.pathname.startsWith('/join') ? 'active' : ''}>
            <Link to="/join">
              <span className="count">06</span>
              <span className="anchor">加入我们</span>
            </Link>
          </li>
        </ul>
      </header>
      <div className="site-sidenav">
        <div className="sidenav-menu">
          <Link to="/" className="logo">AFI</Link>
          <button className="button button-close-sidenav"></button>
          <ul className="sidenav-nav">
            <li data-menuanchor="intro" className={location.pathname === '/' ? 'active' : ''}>
              <Link to="/">
                <span className="anchor">首页</span>
              </Link>
            </li>
            <li data-menuanchor="about" className={location.pathname.startsWith('/business') ? 'active' : ''}>
              <Link to="/business">
                <span className="anchor">了解业务</span>
              </Link>
            </li>
            <li data-menuanchor="services" className={location.pathname.startsWith('/team') ? 'active' : ''}>
              <Link to="/team">
                <span className="anchor">认识团队</span>
              </Link>
            </li>
            <li data-menuanchor="portfolio" className={location.pathname.startsWith('/share') ? 'active' : ''}>
              <Link to="/share">
                <span className="anchor">技术分享</span>
              </Link>
            </li>
            <li data-menuanchor="blog" className={location.pathname.startsWith('/fun') ? 'active' : ''}>
              <Link to="/fun">
                <span className="anchor">吃喝玩乐</span>
              </Link>
            </li>
            <li data-menuanchor="contact" className={location.pathname.startsWith('/join') ? 'active' : ''}>
              <Link to="/join">
                <span className="anchor">加入我们</span>
              </Link>
            </li>
          </ul>
          <div className="sidenav-links">
            <ul>
              <li>
                <a href="https://github.com/afi-team" target="_blank" rel="noreferrer"><i className="iconfont icon-huaban88"></i></a>
              </li>
            </ul>
            <p>欢迎加入蚂蚁前端基础设施团队</p>
          </div>
        </div>
        <span className="sidenav-close"></span>
      </div>
      <div id="site-wrapper">
        {children}
      </div>
    </>
  );
}
