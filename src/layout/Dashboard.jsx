import React from "react";
import { Outlet, NavLink } from "react-router-dom";

 // Dashboard component to render the navigation and content
function Dashboard(){
   return(
    <div className="dashboard-layout">
      <nav className="sidebar">
        
          <ul>
            <li><NavLink to={"./Dashboard/GoalTracker"}/>GoalTracker</li>
            <li><NavLink to={"./Dashboard/Deposit"}/>Deposit</li>
            <li><NavLink to={"./Dashboard/AddGoalForm"}/>AddGoalForm</li>
          </ul>
        
      </nav>
       <main className=" main-Content">
         <Outlet/>
       </main>
    
    </div>
   )
}
export default Dashboard