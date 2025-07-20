
import React, { useState } from "react";


const API_URL = "http://localhost:3000/goals"


const AddGoalForm = () => {

    const [formData,setFormData] = useState ({
        name:'',
        targetAmount:'',
         savedAmount:'0',
        category:'',
        deadline:'',
        createdAt:''
    })

      const handleChange  = (e)=> {
      console.log(e.target.name, e.target.value)
      setFormData(prev =>{
       return{...prev,[e.target.name]:e.target.value} 
     
      })}

      const handleSubmit = (e)=>{
           e.preventDefault()

           fetch(API_URL,{
                       
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
           })
            .then((res) => res.json())
            .then((data) => {
                console.log("Goal added:", data);
                setFormData({
                    name: '',
                    targetAmount: '',
                    savedAmount: '0',
                    category: '',
                    deadline: '',
                    createdAt: ''
                });
            })
            
      }
       
         
      return (
    <>
        <div>
            <h2>Add Goal</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="Name"></label>
                <input type="text" value={formData.name} name="name" onChange={handleChange} placeholder="Enter Name"/>
                    <br />

                <label htmlFor="Target Amount"></label>
                <input type="number" value={formData.targetAmount} name="targetAmount" onChange={handleChange} placeholder="Enter Target Amount" /> 
                     <br /> 

                <label htmlFor="Saved Amount"></label> 
                <input type="number" value={formData.savedAmount} name="savedAmount" onChange={handleChange} placeholder="Enter Saved Amount"/>  
                     <br /> 

                <label htmlFor="Category"></label>
                <input type="text" value={formData.category} name="category" onChange={handleChange} placeholder="Enter Category"/>
                       <br />

                <label htmlFor="Deadline">Deadline</label>  
                 <input type="date" value={formData.deadline} name="deadline" onChange={handleChange} placeholder="Enter Deadline"/> 
                     <br />   
                <label htmlFor="Created At">CreatedAt</label> 
                <input type="date" value={formData.createdAt}  name="createdAt" onChange={handleChange} placeholder="Enter Created At" />    
                <button type="Submit">Add goal</button>  
            </form>

        </div>
    </>
  ) 

}

export default AddGoalForm
