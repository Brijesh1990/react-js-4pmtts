import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './JsxApp'
import 'animate.css'
import './style.css'
import Display from './FragementsApp'
ReactDOM.createRoot(document.getElementById('demo')).render(
  <React.StrictMode>
    {/* <App /> */}

    <Display />
  </React.StrictMode>,
)
