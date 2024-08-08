import React from "react";
const App=()=>{

    return (
    <>

    {/* header */}
    <div className="header w-full p-8 bg-white flex justify-between">
    
    <div className="text-xl font-thin"><b>Callus:(+91) 9173357854</b></div>
    <div className="ms-0">
        <input type="text" className="form-control w-80 border border-l-indigo-200 p-1" placeholder="search anything here ....." />
    </div>
    
    <div className="">
     <span>Facebook | twitter</span>
    </div>
    

    </div>

    {/* navbar */}

    <div className="bg-black p-3 nav flex">
        <a href="" className="navbar-brand text-white ms-6">Flipkart App</a>
        <div className="text-white ms-32">
        <ul className="navbar-link text-white flex gap-8 text-xl font-thin">
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">services</a></li>
            <li><a href="">account</a></li>
            <li><a href="">contact</a></li>
        </ul>
        </div>
    </div>

    {/* content */}

    <div className="w-full p-2">

    <h4 className="text-center text-3xl mt-5">This is Our content</h4>

    <div className="box flex gap-7">
        <div className="box1 content-between p-4 bg-black  w-52"></div>
        <div className="box1 content-between p-4 bg-black  w-52"></div>
        <div className="box1 content-between p-4 bg-black  w-52"></div>
        <div className="box1 content-between p-4 bg-black  w-52"></div>
        
    </div>

    <div className="box flex gap-7 mt-5">
        <div className="box1 content-between p-4 bg-black  w-52"></div>
        <div className="box1 content-between p-4 bg-black  w-52"></div>
        <div className="box1 content-between p-4 bg-black  w-52"></div>
        <div className="box1 content-between p-4 bg-black  w-52"></div>
        
    </div>

    
    <div className="box flex gap-7 mt-5">
        <div className="box1 content-between p-4 bg-black  w-52"></div>
        <div className="box1 content-between p-4 bg-black  w-52"></div>
        <div className="box1 content-between p-4 bg-black  w-52"></div>
        <div className="box1 content-between p-4 bg-black  w-52"></div>
        
    </div>

    
    <div className="box flex gap-7 mt-5">
        <div className="box1 content-between p-4 bg-black  w-52"></div>
        <div className="box1 content-between p-4 bg-black  w-52"></div>
        <div className="box1 content-between p-4 bg-black  w-52"></div>
        <div className="box1 content-between p-4 bg-black  w-52"></div>
        
    </div>

    </div>

    </>
 )
}


export default App