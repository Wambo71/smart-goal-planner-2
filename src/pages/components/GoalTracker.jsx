

import React from 'react'
// GoalTracker component to display individual goal details
const GoalTracker = ({goal}) => {

  if (!goal) {
    return <p>No goal data available</p>
  }
  // Destructure goal properties 
    const { name, savedAmount, targetAmount } = goal
    const saved = goal.savedAmount
    const target = goal.targetAmount
    const remaining = targetAmount- savedAmount
    const percentage =(savedAmount / targetAmount) * 100

  return ( // Render the goal details
    <div>
        <h2>{name}</h2>
        <p>Saved Amount: {saved}</p>
        <p>Remaining Amount: {remaining}</p>
       <p>Progress:{percentage}%</p>


    </div>
  )
}

export default GoalTracker