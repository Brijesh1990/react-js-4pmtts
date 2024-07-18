import React from "react";

const App=()=>{
    const age=18;
    if(age>=18)
    {
       return <h1>I am eleigible for voting</h1>;
    }
    else 
    {

        return <h1>I am not eleigible for voting</h1>;
    }

    return (
        <>
         <h1>Conditional rendering</h1>

          <p>  </p>   
        
        </>
    )
}
export default App