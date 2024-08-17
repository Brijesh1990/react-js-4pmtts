import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'animate.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
// user panel routing components
import Layout from './Layout.jsx'
import Dashboard from './components/user/Dashboard.jsx'
// admin panel
import AdminLayout from './AdminLayout.jsx'
import AdminContent from './components/admin/AdminContent.jsx'
import ManageEmployee from './components/admin/ManageEmployee.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
       <Routes>
        <Route path='/' element={<Layout />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/admin-login' element={<AdminLayout />} />
        <Route path='/admin-login/admin-dashboard' element={<AdminContent />} />
        <Route path='/admin-login/manage-employee' element={<ManageEmployee />} />
       </Routes>
    </Router>
  </StrictMode>,
)
