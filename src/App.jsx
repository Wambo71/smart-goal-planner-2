import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router";
import AddGoalForm from "./pages/components/AddGoalForm";
import GoalTracker from "./pages/components/GoalTracker";
import Home from "./pages/components/Home";
import Dashboard from "./layout/Dashboard";
import DepositForm from "./pages/components/DepositForm";
import NavBar from "./pages/components/NavBar";
import GoalList from "./pages/components/GoalList";
import Overview from "./pages/components/Overview";
import "./App.css";

function App() {
  const goal = {
    name: "My Savings Goal",
    savedAmount: 5000,
    targetAmount: 10000,
  };

  const [goals, setGoals] = useState([])
  useEffect(() => {
    fetch("http://localhost:3000/goals")
      .then((res) => res.json())
      .then((data) => setGoals(data));
  }, []);

  return (
    <>
      <NavBar />
      <div className="app-container">
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Dashboard" element={<Dashboard />}>
            <Route path="GoalTracker" element={<GoalTracker goal={goal} />} />
            <Route path="AddGoalForm" element={<AddGoalForm />} />
            <Route path="Deposit" element={<DepositForm goal={goal} />} />
            <Route path="Overview" element={<Overview goals={goals} />} />

          </Route>
        </Routes>
        <GoalList />
      </div>
    </>
  );
}

export default App;