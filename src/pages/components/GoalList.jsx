import React , { useEffect,useState } from "react"
import GoalTracker from   "./GoalTracker"
import DepositForm from "./DepositForm"

const API_URL = "http://localhost:3000/goals"

// GoalList component to display all goals and handle deposits

const GoalList = () => {
    const [goals, setGoals] = useState([])
    useEffect(() => {
       fetch(API_URL)
        .then((res) => res.json())
        .then((data) =>setGoals(data))
        }, [])


    // Function to handle deposit updates
    const handleDepositUpdate = (updatedGoal) => {
    const updatedGoals = goals.map(goal =>
      goal.id === updatedGoal.id ? updatedGoal : goal
    )
    setGoals(updatedGoals)
  }
// Render the list of goals and deposit forms
  return (
     <div>
        <h2 className="heading"> Savings Goals</h2>
        {goals.map((goal) => (<GoalTracker key={goal.id} goal={goal} />))}

        <h3>Deposit  Goal</h3>
        {goals.map(goal => (
          <div key={goal.id}>
            <h3>{goal.name}</h3>
            <p>Target: Ksh {goal.targetAmount}</p>
            <p>Saved: Ksh {goal.savedAmount}</p>
            <DepositForm goal={goal} onDeposit={handleDepositUpdate} />
          </div>
        ))}
      </div>
    );
}

export default GoalList