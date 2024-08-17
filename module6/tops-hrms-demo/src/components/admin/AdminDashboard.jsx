import React from 'react'
import { Chart } from "react-google-charts";

export default function AdminDashboard() {
     const data = [
        ["Task", "Hours per Day"],
        ["Work", 11],
        ["Eat", 2],
        ["Commute", 2],
        ["Watch TV", 2],
        ["Sleep", 7],
      ];
      
      const options = {
        title: "My Daily Activities",
      };
    
  return (
    <div className="col-md-9 admin-dashboard">
    <div className="container p-5">
      <div className="row">
        <h3 className="ms-4">Welcome to Admin Dashboard</h3>
        <div className="col-md-3 ms-5 bg-danger p-4 mt-4">
          <h4 className="text-white">Total Employee</h4>
          <h2 className="text-center">
            <span className="badge badge-lg bg-white text-dark">10</span>
          </h2>
        </div>
        <div className="col-md-3 ms-5 bg-primary p-4 mt-4">
          <h4 className="text-white">Total Contacts</h4>
          <h2 className="text-center">
            <span className="badge badge-lg bg-white text-dark">10</span>
          </h2>
        </div>
        <div className="col-md-3 ms-5 bg-success p-4 mt-4">
          <h4 className="text-white">Total Feedback</h4>
          <h2 className="text-center">
            <span className="badge badge-lg bg-white text-dark">10</span>
          </h2>
        </div>
      </div>
      {/* graph */}
      <h3 className="ms-4 mt-5">Manage data</h3>
    
{/* <Chart
  chartType="ScatterChart"
  data={[["Age", "Weight"], [4, 5.5], [8, 12]]}
  width="80%"
  height="250px"
  legendToggle
/> */}
 

<Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"300px"}
    />

    </div>
  </div>
  )
}
