import React from 'react'
import ReactDOM from 'react-dom/client'
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
// import App from './Container'
// import Card from './Card'
import Slide from './Slider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Card /> */}
    <Slide />
  </React.StrictMode>,
)
