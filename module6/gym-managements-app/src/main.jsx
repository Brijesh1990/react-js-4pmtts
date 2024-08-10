import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes , Route  } from 'react-router-dom'
// boostrap CDN or libraries 
import './assets/css/style.css'
import './assets/admin/css/style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
// import 'aos/dist/aos.css'
import 'jquery'
// import 'aos/dist/aos.js'
import 'bootstrap/dist/js/bootstrap.min.js'
// customers panel
import Layout from './Layout'
// admin panel
import AdminLogin from './components/admin/AdminLogin'
import AdminLayout from './AdminLayout'
import PageNotFound from './components/customers/PageNotFound'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}></Route>
        <Route path='/admin-login' element={<AdminLogin />}></Route>
        <Route path='/admin-login/admin-dashboard' element={<AdminLayout />}></Route>
        
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </Router>
  </StrictMode>,
)
