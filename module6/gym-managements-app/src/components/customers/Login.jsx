import React from 'react'

export default function Login() {
  return (
    <>
  <div className="modal fade" id="login" role="dialog">
    <div className="modal-dialog" style={{ minWidth: "55%" }}>
      <div className="modal-content m-0">
        <div className="row">

          <div className="col-md-5 login p-5">
            <ul className="login-link">
              <li>
                <a href="">24x7 services</a>
              </li>
              <li>
                <a href="">Return policy</a>
              </li>
              <li>
                <a href="">24x7 customer support</a>
              </li>
              <li>
                <a href="">Call us</a>
              </li>
            </ul>
            <img
              src="https://cdn-icons-png.flaticon.com/512/889/889057.png"
              className="w-50 ms-2 img-fluid"
            />
          </div>

          <div className="col-md-6 bg-white p-5">
            <h4 className="text-center">
              Login Form{" "}
              <button
                type="button"
                className="btn btn-sm bg-primary text-white border border-0 float-end"
                data-bs-dismiss="modal"
              >
                ×
              </button>
            </h4>
            <form method="post">
              <div className="input-group mt-2">
                <input
                  type="text"
                  name="email"
                  placeholder="Email *"
                  className="form-control"
                />
              </div>
              <div className="input-group mt-2">
                <input
                  type="password"
                  name="password"
                  placeholder="Password *"
                  className="form-control"
                />
              </div>
              <div className="input-group mt-2">
                <input
                  type="submit"
                  name="sub"
                  placeholder="Email *"
                  className="btn  btn-sm btn-primary"
                  defaultValue="SignIn"
                />
                <b>
                  <a href="" className="ms-2">
                    Forget Password ?
                  </a>
                </b>
                <a href="" className="ms-2"></a>
              </div>
              <a href="" className="ms-2"></a>
              <div className="input-group mt-2">
                <a href="" className="ms-2"></a>
                <p className="fs-6">
                  <a href="" className="ms-2">
                    Don't have an account ?
                  </a>
                  <a href="">Create account ?</a>
                  <a />
                </p>
                <a></a>
              </div>
              <a></a>
            </form>
          </div>
          <a></a>
        </div>
        <a></a>
      </div>
      <a></a>
    </div>
    <a></a>
  </div>
  <a></a>
</>

  )
}
