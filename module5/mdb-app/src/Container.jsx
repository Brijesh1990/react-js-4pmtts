import React from "react";
import { MDBContainer,MDBBtn,MDBRow } from "mdb-react-ui-kit";
function App()
{
    return(
        <>
            {/* <MDBContainer className="p-5 shadow mt-5 w-50 mx-auto bg-primary">
             <p className="text-center text-white"> lorem ipsum</p>
            </MDBContainer> */}

            {/* <MDBContainer fluid className="p-5 shadow mt-0  mx-auto bg-primary">
             <p className="text-center text-white"> lorem ipsum</p>
            </MDBContainer> */}

            <MDBContainer fluid className="p-5 shadow mt-0  mx-auto bg-primary">
             <p className="text-center text-white"> lorem ipsum</p>
           
             <MDBBtn className="btn btn-danger text-white">Click here</MDBBtn>
             <MDBBtn className="btn btn-outline-danger text-white ms-4">Click here</MDBBtn>
             <MDBBtn className="btn btn-outline-success text-white ms-4">Register here</MDBBtn>
           
            </MDBContainer>
        </>
    )
}
export default App