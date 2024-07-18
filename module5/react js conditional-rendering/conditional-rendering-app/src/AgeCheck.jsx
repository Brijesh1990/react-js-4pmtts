import React from "react";
const Age=()=>{
    const ag=10;
    const res=ag>=18?"i am eligible":"i am not eleigible";
    return(
        <>
        <h1>Just check eleigibilty for voting & result is : {res}</h1> 
        </>
    )
}

export default Age