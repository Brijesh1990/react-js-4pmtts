import React from 'react'
import AdminHeader from './AdminHeader'
import AdminSidebar from './AdminSidebar'
export default function ManageEmployee() {
  return (
    <div className='dashboard'> 
    <AdminHeader />
    <div className="container-fluid">
    <div className="row">
      {/* sidebar */}
      <AdminSidebar />
     
      {/* Manage employee */}
      
      <div className="col-md-9 admin-dashboard">
        <div className="container p-5">
          <div className="row">
            <h3 className="ms-4">Manage All Employee data <span className="bi bi-person" /></h3>
            <hr className="border border-2 border-primary ms-5 w-50" />
            <div className="col-md-12 ms-4 bg-white shadow p-4 mt-4">
              <table className="table table-responsive">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>photo</th>
                    <th>name</th>
                    <th>email</th>
                    <th>phone</th>
                    <th>address</th>
                    <th>departments</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1001</td>
                    <td><img src="https://media.istockphoto.com/id/639085642/vector/user-sign-icon-person-symbol-human-avatar.jpg?s=612x612&w=0&k=20&c=n4Zr1A7GMVTY8rZztu_OnMQ4_dkLBLRRAcTb0IIbQfY=" className="img-fluid" style={{width: '85px', height: '85px'}} /></td>
                    <td>Nupur patel</td>
                    <td>n009@gmail.com</td>
                    <td>9998003879</td>
                    <td>150 feet ring raod rajkot</td>
                    <td>CSE</td>
                    <td><div style={{minWidth: '80px'}}><a href><span className="bi bi-whatsapp text-success fs-2" /></a>
                        <a href><span className="bi bi-trash text-danger fs-2" /></a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>1001</td>
                    <td><img src="https://media.istockphoto.com/id/639085642/vector/user-sign-icon-person-symbol-human-avatar.jpg?s=612x612&w=0&k=20&c=n4Zr1A7GMVTY8rZztu_OnMQ4_dkLBLRRAcTb0IIbQfY=" className="img-fluid" style={{width: '85px', height: '85px'}} /></td>
                    <td>Nupur patel</td>
                    <td>n009@gmail.com</td>
                    <td>9998003879</td>
                    <td>150 feet ring raod rajkot</td>
                    <td>CSE</td>
                    <td><div style={{minWidth: '80px'}}><a href><span className="bi bi-whatsapp text-success fs-2" /></a>
                        <a href><span className="bi bi-trash text-danger fs-2" /></a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>1001</td>
                    <td><img src="https://media.istockphoto.com/id/639085642/vector/user-sign-icon-person-symbol-human-avatar.jpg?s=612x612&w=0&k=20&c=n4Zr1A7GMVTY8rZztu_OnMQ4_dkLBLRRAcTb0IIbQfY=" className="img-fluid" style={{width: '85px', height: '85px'}} /></td>
                    <td>Nupur patel</td>
                    <td>n009@gmail.com</td>
                    <td>9998003879</td>
                    <td>150 feet ring raod rajkot</td>
                    <td>CSE</td>
                    <td><div style={{minWidth: '80px'}}><a href><span className="bi bi-whatsapp text-success fs-2" /></a>
                        <a href><span className="bi bi-trash text-danger fs-2" /></a>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>    
          </div>
        </div>   
      </div>

    </div>
  </div>
  </div>    

  )
}
