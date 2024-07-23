import React from "react";
import { MDBContainer,MDBBtn,MDBRow,MDBCard,MDBCardHeader,MDBCardBody } from "mdb-react-ui-kit";
function Card()
{
    return(
        <>
        <MDBContainer className="shadow p-5">
        <h1 className="ms-3">Card in MDB</h1>
        <hr className="w-50" />
            <MDBRow>
                <div className="col-md-4  p-2 ms-4">
                    <MDBCard className="border border-danger">
                        <MDBCardHeader className="bg-danger text-white">Click here</MDBCardHeader>
                        <MDBCardBody className="">

                        </MDBCardBody>
                    </MDBCard>
                </div>
                <div className="col-md-7  p-2 ms-4">
                    <MDBCard className="border border-danger">
                        <MDBCardHeader className="bg-primary text-white">Click here</MDBCardHeader>
                        <MDBCardBody className="">

                        </MDBCardBody>
                    </MDBCard>
                </div>
               
            </MDBRow>
        </MDBContainer>
          
        </>
    )
}
export default Card