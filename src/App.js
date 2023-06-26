import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signin from './Components/Signin/Signin';
import ForgotPassword from './Components/ForgotPassword/ForgotPassword';
import Otp from './Components/Otp/Otp';
import ResetPassword from './Components/ResetPassword/ResetPassword';

function App() {
  return (
    <div className="App">
 <Router>
     

        <Routes>
          
                <Route path="/" exact element={<Signin />} />
                <Route path="/forgotpassword" exact element={<ForgotPassword/>} />
                <Route path="/otp" exact element={<Otp/>} />
                <Route path="/resetpassword" exact element={<ResetPassword/>} />
      
        </Routes>  
        
</Router> 
     
    </div>
  );
}

export default App;
