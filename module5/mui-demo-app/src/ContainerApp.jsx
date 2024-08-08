import React from 'react'
import { Button,Container } from '@mui/material'
import { FaUser,FaCartPlus} from 'react-icons/fa'
const App=()=>
{
    return (
        <>

        <Container className=''>
            <h1>Get in touch with Google map</h1>
            <p>Get all details in map</p>
            <Button variant="contained" startIcon={<FaCartPlus />}  color="success" size='small'>Click me</Button>
            <Button variant="outlined"  color="success" size='large' endIcon={<FaUser />}>Click me</Button>


            <Button variant="contained"  color="primary" size='large' endIcon={<FaUser />}>Create Account</Button>
        </Container>

        </>
    )
}

export default App