import React from "react";
import { Container,Button } from "react-bootstrap";
import {Add,Subs,Mult,Dv} from './Calc'
const Calculator=()=>{
    return (
        <>
         <Container className="w-50 p-5 mt-5 bg-light shadow">
            <h2 className="text-center">Calculator App</h2>
            <hr className="border w-25 border-dark border-1 mx-auto"/>
            <p className="text-center">
            <Button type="button" onClick={Add} className="btn btn-md bg-primary text-white ms-3">Additions</Button>

            <Button type="button" className="btn btn-md bg-primary text-white ms-3" onClick={Subs}>Substractions</Button>

            <Button type="button" onClick={Mult} className="btn btn-md bg-primary text-white ms-3">Multiplications</Button>

            <Button type="button" className="btn btn-md bg-primary text-white ms-3" onClick={Dv}>Divisions</Button>
            </p>
         </Container>
        </>
    )
}
export default Calculator