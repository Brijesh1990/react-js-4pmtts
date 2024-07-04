import React,{Component} from "react";

const name="Rakesh";
const age=35;
class Employee extends Component
{
    
    render()
    {
        return(
            <>
           
            <h1 style={{color:'red',textAlign:'center',fontSize:'45px',fontFamily:'fantasy'}}>My name is {name} and my age is {age}</h1>

            </>
        )
    }

}

export default Employee