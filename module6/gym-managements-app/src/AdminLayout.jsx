import React from 'react'
import AdminHeader from './components/admin/AdminHeader'
import AdminSidebar from './components/admin/AdminSidebar'
import AdminFooter from './components/admin/AdminFooter'
import AdminLogout from './components/admin/AdminLogout'
export default function AdminLayout() {
  return (
    <div>
    {/* header */}
    <AdminHeader />
    {/* sidebar */}
    <AdminSidebar />

    {/* dashboard */}
    
    {/* footer */}
    <AdminFooter /> 
    <AdminLogout />
    </div>
  )
}
