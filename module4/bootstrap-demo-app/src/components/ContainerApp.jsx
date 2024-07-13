import React from "react";
import { Container,Row,Form,Table,Button } from "react-bootstrap";
import Book from "./BookHotels";
function ContainerApp()
{
    return (
        <>
        {/* <Container className="container p-5 bg-info mt-5">
        <h1 className="text-center">I am Using Container in Bootstrap</h1>
        </Container> */}
        

        {/* <Container className="container p-5 bg-info mt-5">
        <h1 className="text-center">I am Using Container in Bootstrap</h1>
        <Row>
            <div className="col-md-4 bg-danger p-4"></div>
            <div className="col-md-4 bg-success p-4"></div>
            <div className="col-md-4 bg-dark p-4"></div>
            <div className="col-md-12 p-5">
                <Button type="button" className="btn btn-md btn-dark text-white">Click Me</Button>
            </div>
        </Row>
        </Container> */}

        <Container fluid className="p-5 bg-info mt-0">
        <h1 className="text-center">I am Using Container in Bootstrap</h1>
        <Row>
            <div className="col-md-4 bg-danger p-4"></div>
            <div className="col-md-4 bg-success p-4"></div>
            <div className="col-md-4 bg-dark p-4"></div>
            <div className="col-md-12 p-5">
                <Button type="button" className="btn btn-md btn-dark text-white">Click Me</Button>
                <Button type="button" className="btn btn-md btn-dark text-white ms-4" data-bs-toggle="modal" data-bs-target="#book">Book Hotels <span className="bi bi-book"></span></Button>
                {/* Load booking modal */}
                <Book />
            </div>
        </Row>
        </Container>
        </>
    )
}
export default ContainerApp