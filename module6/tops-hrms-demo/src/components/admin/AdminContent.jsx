import React from 'react'
import AdminHeader from './AdminHeader'
import AdminSidebar from './AdminSidebar'
import AdminDashboard from './AdminDashboard'
export default function AdminContent() {
  return (
     <>
    <div className='dashboard'> 
    <AdminHeader />
    <div className="container-fluid">
    <div className="row">
      {/* sidebar */}
      <AdminSidebar />
     
      {/* dashboard */}
      <AdminDashboard />
    
    </div>
  </div>
  </div>    

  </>
  
  )
}
