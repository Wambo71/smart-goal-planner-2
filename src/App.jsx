import {Route,Routes} from "react-router"
import AddGoalForm from "./pages/components/AddGoalForm";
import GoalTracker from "./pages/components/GoalTracker";
import Home from "./pages/components/Home";
import Dashboard from "./layout/Dashboard";
import DepositForm from "./pages/components/DepositForm";
import NavBar from "./pages/components/NavBar";
import GoalList from "./pages/components/GoalList"; 

function App(){

  
  return(
    <>
    <NavBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Dashboard" element={<Dashboard />}>
          <Route path="GoalTracker" element={<GoalTracker />} />
          <Route path="Deposit" element={<DepositForm />} />
          <Route path="AddGoalForm" element={<AddGoalForm />} />
        </Route>
      </Routes>
    </NavBar>
   
    <div>
      <h1>My Goal</h1>
      <GoalTracker  />
      <AddGoalForm/>
      <GoalList/>
      <DepositForm />
    </div>
    </>
    
  )
}
export default App