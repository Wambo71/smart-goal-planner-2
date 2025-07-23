import React from 'react'

const Overview = ({goals}) => {
     
    const selectedGoals = goals.filter(goal => goal.targetAmount >= 10000)
    const totalGoals = selectedGoals.length;
    const totalSaved = selectedGoals.reduce((sum, goal) => sum + goal.savedAmount, 0);
    const completedGoals = selectedGoals.filter(goal=> goal.savedAmount >= goal.targetAmount).length;
  return (
      <div className='overview-container'>
      
      <h2>Overview (Selected Goals)</h2>
      <p>Total Goals: {totalGoals}</p>
      <p>Total Saved: Ksh {totalSaved}</p>
      <p>Completed Goals: {completedGoals}</p>
    </div>
  )
}

export default Overview