import React from 'react'
import { NavLink } from 'react-router'

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
      </ul>
    </nav>
  )
}

export default NavBar