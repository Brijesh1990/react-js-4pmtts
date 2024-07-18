import React from "react";
const Login=()=>{
    const email='bk@gmail.com';
    const pass='b123456';
    if(email=='bk@gmail.com' && pass=='b123456')
    {
        //  return 'You are Logged in successfully'
        const res="You are successfuly Logged in!";
        return res;
    }
    else 
    {
    //   return 'somthing went wrong try again'
    const res="Your email and password are incorrect try again";
    return res;
    }
    return(
        <>
        <h1 style={{color:"red"}}>Logged in status :{res}</h1> 
        </>
    )
}

export default Login