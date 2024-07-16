import React from "react";

// intialised style1
const style1={
backgroundColor:"black",
fontSize:"18px",
color:"white",
textAlign:"center"
}

// initialised style2
const style2={
fontSize:"38px",
color:"white",
textAlign:"center"
}

// initilised style3
const style3={
textTransform:"uppercase",
color:"red",
textAlign:"center",
padding:"35px"
}

function App()
{
// create a function for combined inline stylesheet

const combined=
{
...style1,

}  

const combined1=
{

...style3

} 
const combined2= 
{
...style2
}
return(
<>
<div style={combined}>
<h1 style={combined1}>I am used inline style with combined objects</h1>
<p style={combined1}>Hey i am used inline stylesheet</p>
</div>
</>
) 
}

export default App