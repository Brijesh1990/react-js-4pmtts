import React from "react";
import ReactDOM from 'react-dom/client'
const a=10;
const b=20;
const c=a+b;
const name="my name is nax";
const root=ReactDOM.createRoot(document.getElementById("demo-app"));
root.render(

    // <>

    // <h1>Hello world i am Brijesh and my age is 35 years old</h1>
    // <h3>Additions of numbers is :</h3>

    // </>


    // <div>

    // <h1>Hello world i am Brijesh and my age is 35 years old</h1>
    // <h3>Additions of numbers is :</h3>

    // </div>



// React fragments : fragements are access multiple html elements inside of <></>
<React.Fragment>
<h1>Hello world i am Brijesh and my age is 35 years old</h1>
<h3>Additions of numbers is : {c}</h3>
<h4>{name}</h4>
</React.Fragment>

)