import React,{Component} from "react";
const emp={"id":1001,"name":'brijesh',"age":35,"salary":89500};
class StudentApp extends Component
{

    render()
    {
        return(
            <>
               <p>The employee id is :{emp.id}</p>
               <p>The employee name is :{emp.name}</p>
               <p>The employee salary is :{emp.salary}</p>
            </>
        )
    }

}

export default StudentApp