import React from 'react'

export default function Navbar() {
  return (
    <div>
      <nav className="nav navbar navbar-expand-md bg-dark">
  <a href="" className="navbar-brand ms-5 text-white">
    Tops Hrms Dashboard
  </a>
  {/* button */}
  <button
    type="button"
    className="navbar-toggler"
    data-bs-toggle="collapse"
    data-bs-target="#coll"
  >
    <span className="bi bi-grid text-white fs-2" />
  </button>
  <div className="collapse navbar-collapse" id="coll">
    <ul className="navbar-link">
      <li>
        <a href="#">
          <span className="bi bi-house" />
          &nbsp; Dashboard
        </a>
      </li>
      <li>
        <a href="#">My Request</a>
      </li>
      <li>
        <a href="#">Report</a>
      </li>
      <li>
        <a href="#" data-bs-toggle="modal" data-bs-target="#help">
          <span className="bi bi-question-circle" />
          &nbsp; Help
        </a>
      </li>
    </ul>
  </div>
</nav>

    </div>
  )
}
