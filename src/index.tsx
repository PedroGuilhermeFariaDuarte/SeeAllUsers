import React from 'react'
import ReactDOM from 'react-dom'

// Router
import Router from "./routers"

// Global Styles
import GlobalStyle from "./css/global"
import ResponsiveStyle from "./css/responsive"

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <ResponsiveStyle />
    <Router />
  </React.StrictMode>,
  document.getElementById('root')
)
