import React, { useState } from "react"

const API_URL = "http://localhost:3000/goals"

function DepositForm({ goal, onDeposit }) {
  const [amount, setAmount] = useState("")

    const handleChange = (e) =>{
        setAmount(e . target. value)
    }

  const handleSubmit = (e) => {
    e.preventDefault()


    const NewSavedAmount = (goal.SavedAmount) + (amount)

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
          <form onChange={handleSubmit}> 
             <input type="number" value={amount} onChange={handleChange} placeholder="Enter Amount" />
             <button type="Subit">Deposit</button>
          </form>
       )    

    }

    export default DepositForm