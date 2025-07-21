import React from "react";
import { Outlet, NavLink } from "react-router-dom";

 // Dashboard component to render the navigation and content
function Dashboard(){
   return(
    <>
      <nav>
        <ul>
          <ul>
            <li><NavLink to={"./Dashboard/GoalTracker"}/>GoalTracker</li>
            <li><NavLink to={"./Dashboard/Deposit"}/>Deposit</li>
            <li><NavLink to={"./Dashboard/AddGoalForm"}/>AddGoalForm</li>
          </ul>
        </ul>Content
      </nav>
       <div className="Content">
         <Outlet/>
       </div>
    
    </>
   )
}
export default Dashboard