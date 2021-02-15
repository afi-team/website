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
        <link rel="stylesheet" href="/bootstrap.min.css" />
        <link rel="stylesheet" href="/plugins.min.css" />
        <link rel="stylesheet" href="/base.css" />
        <link rel="stylesheet" href="//at.alicdn.com/t/font_2373791_4tagve37lot.css" />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        <script src='https://cdn.bootcdn.net/ajax/libs/three.js/r71/three.min.js' defer></script>
        <script src='/TweenMax.min.js' defer></script>
        <script src='https://gw.alipayobjects.com/os/lib/jquery/3.4.1/dist/jquery.min.js' defer></script>
        <script src='/plugins.min.js' defer></script>
        <script src='/create.min.js' defer></script>
        <script src='/script.js' defer></script>
        <script src='/animation.js' defer></script>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
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
