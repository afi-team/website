import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link rel="icon" href="https://gw.alipayobjects.com/mdn/rms_f3f48a/afts/img/A*ZtzKRZPgCE8AAAAAAAAAAAAAARQnAQ" type="image/png"/>
        <link rel="stylesheet" href="/plugins.min.css" />
        <link rel="stylesheet" href="/base.css" />
        <link rel="stylesheet" href="//at.alicdn.com/t/font_2373791_4tagve37lot.css" />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
        <script src='https://cdn.bootcdn.net/ajax/libs/three.js/r71/three.min.js'></script>
        <script src='https://gw.alipayobjects.com/os/lib/zepto/1.1.7/dist/zepto.min.js' ></script>
        <script src='/vendor1.js'></script>
        <script src='/vendor2.js'></script>
        <script src='/vendor3.js'></script>
        <script src='/animation.js' async></script>
        <script src='/script.js' async></script>
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
