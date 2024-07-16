import React from "react";
// initialised stylesheet
const style1={
    width:"50%",
    height:"auto",
    margin:"auto",
    marginTop:"5%",
    backgroundColor:"black",
    color:"white",
    padding:"20px",

}

const style2={
    fontSize:"20px",
    color:"white",
    fontFamily:"cursive",
    textAlign:"center"
}
const App=()=>{
    // combined inline style with spread operator
    const combined={
        ...style1,
        ...style2
    }
    return (
        <>
        <div style={combined}>
            <h1 style={combined}>Contact with us</h1>
            <p>Please contact witn <span>(+91)9998003879</span></p>
        </div>

        </>
    )
}
export default App