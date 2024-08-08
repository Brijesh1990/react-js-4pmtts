import React from 'react'
import Data from './Data'
import { Container,Card,CardBody } from 'react-bootstrap'
export default function UserApp() {
  return (
    <>
        <Container className='w-75 mt-5 p-5'>
            <h2>User Informations</h2>
            <hr />

           <button type='button' className='btn btn-dark bg-dark text-white'>Total Numbers of Users<span className='bi bi-person'></span> <span className='badge badge-danger bg-danger text-white'>{Data.length}</span>  </button> 

            {Data && Data.map((row)=>{
                return(
                    <>
            <Card className='mt-2 shadow'>
            <CardBody>
             <table className='table'>
                <tr align='center'>
                    <td>{row.id}</td>
                    <td>{row.name}</td>
                    <td><img src={row.photo} alt='photo' className='img-fluid w-25 rounded-circle' style={{width:"125px !important",height:"125px"}} /></td>
                    <td>{row.age}</td>
                    <td>{row.salary}</td>
                    <td align='right'><button className='btn btn-danger bg-danger text-white btn-sm'><span className='bi bi-trash'></span></button>
                    
                    |  <button className='btn btn-primary bg-primary text-white btn-sm'><span className='bi bi-pencil'></span></button>
                    
                    </td>
                </tr>
             </table> 
            </CardBody>
            </Card>
                    </>
                )
            })}
         
        </Container>
    </>
  )
}
