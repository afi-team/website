import React from 'react';
import Layout from '../components/Layout';
import style from './style.module.css';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';

export default function Join({ location }) {
  return (
    <Layout location={location}>
      <Helmet>
        <title>AFI - 加入我们</title>
      </Helmet>
      <section id="about" className={`section section-about section-about-1 pp-scrollable`}>
        <div className="full-screen">
          <div className="display-center">
            <div className="section-title-1">
              <div className="container">
                <h2>我们需要怎样的你？</h2>
                <ul>
                  <li>基础扎实之类的废话不多赘述</li>
                  <li>聪明、有好奇心、有求知欲、不喜欢重复的工作、不给自己打「前端」的标签</li>
                  <li>开发过复杂的 Node.js 应用、VSCode 插件、Chrome 插件等，<code>加分</code></li>
                  <li>有 Webpack、Rollup、TypeScript、React 等源码贡献或阅读经验，<code>加分</code></li>
                  <li>主导过团队框架升级、工作套件升级（CLI、构建工具、编辑器等），<code>加分</code></li>
                  <li><Link to="/business">业务简介</Link> 中提到的内容任意一项有深入的探索或显著成果，<code>大加分</code></li>
                  <li>写 CSS 特别溜而且享受这个过程的，<code>不加分，但熟练掌握 CSS preprocessors 的加分🤣</code></li>
                </ul>

                <a href="https://hire.alibaba-inc.com/i18n/positionDetail.html?positionId=641981" className="button button-md button-primary" target="_blank" rel="noreferrer">投简历</a>
                <a className={`button button-md button-link ${style.buttonMai}`} href="https://maimai.cn/contact/share/card?u=zho31wtz0ifp&_share_channel=copy_link" target="_blank" rel="noreferrer">在脉脉聊聊</a>
                <p>* 投简历或脉脉联系时请注明来自 AFI 网站</p>
                <h2 style={{ marginTop: 20 }}>团队优势</h2>
                <ul>
                  <li>无频繁变动的外部需求，对自己的产品负责即可</li>
                  <li>无冗长会议、PPT，无抓手、闭环、PUA，更多时间 Coding</li>
                  <li>不考虑兼容性问题，只需兼容 latest Chromium</li>
                  <li>有成熟的导师和培养机制，帮助新人更好落地</li>
                  <li>在前端领域能够做到更深入的探索和实践</li>
                  <li>在服务端甚至数据领域同样可以做到深入的探索和实践</li>
                  <li>自由、平等、开放、有爱的团队文化</li>
                  <li>男女比例在技术团队里不算低</li>
                </ul>

                <h2 style={{ marginTop: 20 }}>FAQ</h2>
                <ul>
                  <li>工作地在哪儿？<br />杭州 - 浙商创投中心（Z 空间对面），如有特殊要求可协调至上海、成都、广州。</li>
                  <li>工资待遇如何？<br />以工作 2 - 5 年 P6 定级为例，参考薪资范围为 25K - 35K，固定 13 薪，年终 3 个月起步。其他福利可自行 Google，都比较透明。</li>
                  <li>平时加班多吗？<br />不忙的时候一般朝 10 晚 8，如果赶项目可能会走的更晚点，一年赶项目的时间控制不超过 25%。</li>
                  <li>有 HC（招人名额）吗？你们团队是否要求会比其他团队高一些？<br />HC 充足，如果招满会及时更新此内容。大体上说 <span className={style.logoFamily}>AFI</span> 会比业务团队要求高一些，我们喜欢跟聪明的人共事，你的同事也都是各个领域的大牛，前后左右前端网红也不少。</li>
                  <li>有校招 HC（招人名额）吗？<br />有，一般是每年 3 - 5 月，9 - 12 月招聘，其余时间也可以联系看是否能补录。</li>
                  <li>还有其他问题？<br />随时联系，我们很乐意跟你沟通。</li>
                </ul>

              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
