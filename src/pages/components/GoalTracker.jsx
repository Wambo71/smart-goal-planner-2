import React from "react";

import React from 'react'

const GoalTracker = ({goal}) => {
    const saved = goal.savedAmount
    const target = goal.targetAmount
    const remainig = target - saved
    const percentage = (saved / target) * 100;

  return (
    <div>
        <h2>{goal.name}</h2>
        <p>Saved Amount: {saved}</p>
        <p>Remaining Amount: {remainig}</p>
        <p>percentage: {percentage}</p>

    </div>
  )
}

export default GoalTracker