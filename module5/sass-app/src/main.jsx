import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './components/SassApp'
import Contact from './components/ContactApp'
// import './style.scss'
import './contact.scss'
import 'fontawesome-4.7/css/font-awesome.min.css'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   {/* <App /> */}
   <Contact />
  </React.StrictMode>,
)
