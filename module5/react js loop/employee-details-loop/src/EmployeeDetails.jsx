import React from "react";
import Data from "./Data";
const Employee=()=>{
    return (
        <>
            <h1 style={{textAlign:"center"}}>Employee details</h1>
           {Data && Data.map((item)=>{

               return (
                <>
                    <div className="details">
                        <div className="box">
                        <p style={{textAlign:"center"}}><img src={item.photo} alt="photo" style={{width:"85px",height:"85px"}} /></p>
                        <p><b>Id is:</b>{item.id}</p>
                        <p><b>Name is:</b>{item.name}</p>
                        <p><b>Age is:</b>{item.age}</p>
                        <p><b>salary is:</b>{item.salary}</p>
                        </div>
                    </div>
                </>
               )

           })}

            
        </>
    )
}

export default Employee