import React, { useState } from "react"

const API_URL = "http://localhost:3000/goals"

function DepositForm({ goal, onDeposit }) {
  const [amount, setAmount] = useState("")

    const handleChange = (e) =>{
        setAmount(e . target. value)
    }

  const handleSubmit = (e) => {
    e.preventDefault()

   const depositAmount = Number (amount)

    const NewSavedAmount = Number(goal.savedAmount) + depositAmount

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

    
       return (
          <form onSubmit={handleSubmit}> 
             <input type="number" value={amount} onChange={handleChange} placeholder="Enter Amount" />
             <button type="submit" className="button">Deposit</button>
          </form>
       )    

    }

    export default DepositForm