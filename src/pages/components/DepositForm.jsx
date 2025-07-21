import React, { useState } from "react"

const API_URL = "http://localhost:3000/goals"
  // DepositForm component to handle deposits
function DepositForm({ goal, onDeposit }) {
  const [amount, setAmount] = useState("")

    const handleChange = (e) =>{
        setAmount(e . target. value)
    }
  // handle form submission
  const handleSubmit = (e) => {
    e.preventDefault() //prevent page reload

   const depositAmount = Number (amount)

    const NewSavedAmount = Number(goal.savedAmount) + depositAmount
// Update the goal's saved amount
     fetch(`${API_URL}/${goal.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ savedAmount:   NewSavedAmount })
    })
      .then((res) => res.json())
      .then((updatedGoal) => {
        onDeposit(updatedGoal)
        setAmount("")
      })
    }

    // Render the deposit form
       return (
          <form onSubmit={handleSubmit}> 
             <input type="number" value={amount} onChange={handleChange} placeholder="Enter Amount" />
             <button type="submit" className="button">Deposit</button>
          </form>
       )    

    }

    export default DepositForm