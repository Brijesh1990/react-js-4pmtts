import React from 'react'

export default function AdminSidebar() {
  return (
    <div className="col-md-3 admin-sidebar p-5">
    <ul className="sidebar-link">
      <li>
        <a href="/admin-login/manage-employee">
          <span className="bi bi-person" /> Manage Employee
        </a>
      </li>
      <li className="dropdown">
        <a className="dropdown-toggle" data-bs-toggle="dropdown" href="#">
          <span className="bi bi-calendar" />
          Add Leaves
        </a>
        <ul
          className="dropdown-menu bg-white text-dark p-2"
          style={{ maxWidth: "250px !important" }}
        >
          <li>
            <a href="addleaves.html" className="text-dark">
              AddLeaves <span className="bi bi-calendar" />
            </a>
          </li>
          <li>
            <a href="manageleaves.html" className="text-dark">
              ManageLeaves <span className="bi bi-calendar" />
            </a>
          </li>
        </ul>
      </li>
      <li>
        <a href="addattendance.html">
          <span className="bi bi-calendar" />
          Add Attendance
        </a>
      </li>
      <li>
        <a href="addfaq.html">
          <span className="bi bi-help" />
          Add FAQ
        </a>
      </li>
      <li>
        <a href="managecontacts.html">
          <span className="bi bi-book" />
          Manage Contacts
        </a>
      </li>
      <li>
        <a href="managefeedback.html">
          <span className="bi bi-comment" />
          Manage Feedback
        </a>
      </li>
    </ul>
  </div>
  )
}
