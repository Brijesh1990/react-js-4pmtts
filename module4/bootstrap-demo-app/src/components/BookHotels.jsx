import React from "react";
// import { Container,Row,Form,Modal,ModalDialog,ModalHeader } from "react-bootstrap";
import { Container,Row,Form } from "react-bootstrap";
function Book()
{
    return(
        <>
         {/* <Container className="p-5">
            <Modal className="modal fade" role="dialog" id="book">
            <ModalDialog className="modal-dialog">
            <ModalHeader className="text-center">Book Hotels</ModalHeader>
            <div className="modal-content p-4">
             <Row>
                <div className="col-md-4">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZON0lADnHxO4Ohw91U24LBHB8I6lHuIxzZA&s" className="img-fluid w-75" />
                </div>
                <div className="col-md-8">
                    <Form>
                        <div className="form-group mt-2">
                            <input type="text" name="name" placeholder="Name *" className="name *" />
                        </div>
                    </Form>
                </div>
             </Row>

            </div>
            </ModalDialog>
                
            </Modal>
         </Container> */}
            

          <Container className="p-5">
            <div className="modal fade" id="book" role="dialog">
                <div className="modal-dialog">
                    <div className="modal-content p-4">
                        <h1>Book Hotels <button type="button" className="border-0 text-danger float-end" data-bs-dismiss="modal">&times;</button></h1>
                         <Row>
                            <div className="col-md-4">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZON0lADnHxO4Ohw91U24LBHB8I6lHuIxzZA&s" className="img-fluid w-100" />
                            </div>
                            <div className="col-md-8">
                                <Form>
                                  <div className="form-group mt-2">
                                  <input type="text" placeholder="Name *" className="form-control border border-2 border-bottom" />
                                  </div>

                                  <div className="form-group mt-2">
                                  <input type="text" placeholder="Email *" className="form-control border border-2 border-bottom" />
                                  </div>

                                  <div className="form-group mt-2">
                                  <input type="text" placeholder="Rooms type *" className="form-control border border-2 border-bottom" />
                                  </div>
                                  <div className="form-group mt-2">
                                  <input type="text" placeholder="Total members *" className="form-control border border-2 border-bottom" />
                                  </div>
                                  <div className="form-group mt-2">
                                  <input type="submit" value="Book" className="btn btn-md btn-dark text-white" />
                                  </div>
                                     </Form>
                            </div>
                         </Row> 
                    </div>
                </div>
            </div>
          </Container>

        </>
    )
}

export default Book