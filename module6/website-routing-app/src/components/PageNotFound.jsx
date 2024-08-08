import React from 'react'
import Navbar from './Navbar'
import { Container,Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
export default function PageNotFound() {
  return (
    <div>
    <Navbar />
        <Container className='w-75 shadow p-5 mt-5'>
        <Row>
            <div className='col-md-5'>
                <img src='https://cdn.svgator.com/images/2024/04/detective-animation-404-error-page.gif' alt='photo' className='img-fluid' />
            </div>
            <div className='col-md-7'>
                <h1>Page Not found 404 Erros</h1>
                <h3>Click to <Link to="/"> Go Home Page</Link></h3>
            </div>

        </Row>
      </Container>
    </div>
  )
}
