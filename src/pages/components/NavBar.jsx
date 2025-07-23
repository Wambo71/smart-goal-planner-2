import React from 'react'
import { NavLink } from 'react-router'
// NavBar component to provide navigation links
function NavBar() {
  return (
    <nav className='navbar'>
      <ul className='navbar-links'>
        <li>
          <NavLink to="/" className="nav-link">Home</NavLink>
        </li>
        <li>
          <NavLink to="/Dashboard/GoalTracker" className="nav-link">Goal Tracker</NavLink>
        </li>
        <li>
          <NavLink to="/Dashboard/Deposit" className="nav-link">Deposit</NavLink>
        </li>
        <li>
          <NavLink to="/Dashboard/AddGoalForm" className="nav-link">Add Goal</NavLink>
        </li>
        <li>
          <NavLink to ="/Dashboard/overview" className="nav-link">Overview</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar