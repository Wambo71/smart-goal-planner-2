import React, { useState } from "react";

const API_URL = "http://localhost:3000/goals";

const EditGoalForm = ({ goal, onUpdate }) => {
  const [formData, setFormData] = useState({
    name: goal.name,
    targetAmount: goal.targetAmount,
    category: goal.category,
    deadline: goal.deadline,
   
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`${API_URL}/${goal.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Goal updated:", data);
        onUpdate(data);
      });
  };

  return (
    
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="Name"></label>
          <input type="text" value={formData.name} name="name" onChange={handleChange} placeholder="Enter Name" />
             <br />

          <label htmlFor="TaregtAmount"></label>
          <input type="number" value={formData.targetAmount} name="targetAmount" onChange={handleChange} placeholder="Enter Target Amount" />
              <br />

            <label htmlFor="Category"></label> 
            <input type="text" value={formData.category} name="category" onChange={handleChange} placeholder="Enter Category" />
                <br />

             <label htmlFor="Deadline"></label> 
            <input type="date" value={formData.deadline} name="deadline" onChange={handleChange} placeholder="Enter Deadline" />
                   

          <button type="submit" className="button">Update Goal</button>
        </form>
      </div>
    
  );
}

export default EditGoalForm;