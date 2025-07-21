import React from 'react'
import { NavLink } from 'react-router'
// NavBar component to provide navigation links
function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/Dashboard/GoalTracker">Goal Tracker</NavLink>
        </li>
        <li>
          <NavLink to="/Dashboard/Deposit">Deposit</NavLink>
        </li>
        <li>
          <NavLink to="/Dashboard/AddGoalForm">Add Goal</NavLink>
        </li>
        <li>
          <NavLink to ="/Dashboard/overview">Overview</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar