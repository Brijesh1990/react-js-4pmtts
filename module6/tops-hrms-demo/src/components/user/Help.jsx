import React from 'react'

export default function Help() {
  return (
 
      <div className="modal fade" id="help" role="dialog">
    <div className="modal-dialog" style={{minWidth: "55%",marginTop: "5%"}}>
        <div className="modal-content p-5">
            <div className="row">
                <div className="col-md-5">
                    <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/edc3ab78364175.5ca3009cb66a0.gif" className="img-fluid"/>
                </div>
                <div className="col-md-7 mt-5 p-4"><h4>For Any Help ? <button type="button" className="btn btn-sm btn-danger text-white float-end" data-bs-dismiss="modal">&times</button></h4>
                    <hr className="border border-1 border-dark w-50" />
                <h5>Call Us On : (+91)-9998003879</h5>
                </div>
            </div>

        </div>
    </div>
    </div>
   
  )
}
