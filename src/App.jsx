import {Route,Routes} from "react-router"
import AddGoalForm from "./pages/components/AddGoalForm";
import GoalTracker from "./pages/components/GoalTracker";
import Home from "./pages/components/Home";
import Dashboard from "./layout/Dashboard";
import DepositForm from "./pages/components/DepositForm";
import NavBar from "./pages/components/NavBar";
import GoalList from "./pages/components/GoalList"; 
import "./App.css";


function App(){

  
  return(
    
    <>
      <NavBar/>
        <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Dashboard" element={<Dashboard />}>
            <Route path="GoalTracker" element={<GoalTracker />} />
            <Route path="Deposit" element={<DepositForm />} />
            <Route path="AddGoalForm" element={<AddGoalForm />} />
          </Route>
        </Routes>
      
      
        <main className="main-content">
          <h1 className="heading">My Goal</h1>
          <GoalTracker  />
         
          <GoalList/>
          <DepositForm />
        </main>
    </div>
    </>
    
  )
}
export default App