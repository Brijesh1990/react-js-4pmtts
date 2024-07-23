import React from "react";
import { MDBContainer,MDBBtn,MDBRow,MDBCard,MDBCardHeader,MDBCardBody,MDBCarousel,MDBCarouselItem,MDBAccordionItem } from "mdb-react-ui-kit";
function Slide()
{
return(
<>
<MDBContainer className="shadow p-5">
<h1 className="ms-3">Slider examples in MDB</h1>
<hr className="w-50" />
<MDBRow>
<div className="col-md-4  p-2 ms-4">
<MDBCard className="border border-danger">
<MDBCardHeader className="bg-danger text-white">Click here</MDBCardHeader>
<MDBCardBody className="">
<img src="https://media.giphy.com/staff/alex-hoang-96MS1JWoHnqg.gif" className="img-fluid"></img>  
</MDBCardBody>
</MDBCard>
</div>
<div className="col-md-7  p-2 ms-4">
<MDBCarousel showControls interval={3000}>
      <MDBCarouselItem itemId={1} interval={1000}>
        <img src='https://mdbootstrap.com/img/new/slides/041.jpg' className='d-block w-100' alt='...' />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={2}>
        <img src='https://mdbootstrap.com/img/new/slides/042.jpg' className='d-block w-100' alt='...' />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={3}>
        <img src='https://mdbootstrap.com/img/new/slides/043.jpg' className='d-block w-100' alt='...' />
      </MDBCarouselItem>
    </MDBCarousel>
</div>

</MDBRow>
</MDBContainer>

</>
)
}
export default Slide