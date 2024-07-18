import React from "react";
const Add=()=>{
    var a=parseInt(prompt("Enter a values :"));
    var b=parseInt(prompt("Enter b values :"));
    var c=a+b;
    alert('Additions of numbers is :'+c);
}
const Subs=()=>{
    var a=parseInt(prompt("Enter a values :"));
    var b=parseInt(prompt("Enter b values :"));
    var c=a-b;
    alert('Substractions of numbers is :'+c);
}
const Mult=()=>{
    var a=parseInt(prompt("Enter a values :"));
    var b=parseInt(prompt("Enter b values :"));
    var c=a*b;
    alert('Multiplications of numbers is :'+c);
}
const Dv=()=>{
    var a=parseInt(prompt("Enter a values :"));
    var b=parseInt(prompt("Enter b values :"));
    var c=a/b;
    alert('Divisions of numbers is :'+c);
}

export {Add,Subs,Mult,Dv};