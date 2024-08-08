import React from 'react'
import { Container,Row } from 'react-bootstrap'
import Navbar from './Navbar'
export default function Feedback() {
  return (
    <div>
      <Navbar />
         <Container className='w-75 shadow p-5 mt-5'>
        <Row>
            <div className='col-md-5'>
                <img src='https://i.pinimg.com/originals/74/71/ec/7471ecc04911615ae0813d738f0983f3.gif' alt='photo' className='img-fluid' />
            </div>
            <div className='col-md-7'>
                <h1>Feedback page</h1>
                <p>welcome to Our Feedback Page</p>
            </div>

        </Row>
      </Container>
    </div>
  )
}
