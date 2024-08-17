import React from 'react'
import headerlogo from '../../assets/images/logo-header.png'
import brijesh from '../../assets/images/brijesh.png'

export default function Header() {
  return (
    <div>
<div className="container-fluid shadow">
  <div className="row">
    <div className="col-9">
      <img src={headerlogo} className="img-fluid" />
    </div>
    <div className="col-3 brijesh-img">
      <strong>
        <img src={brijesh} className="img-fluid rounded-circle" />
        &nbsp;Brijesh
      </strong>
    </div>
  </div>
</div>

    </div>
  )
}
