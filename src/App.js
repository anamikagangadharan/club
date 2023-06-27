import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signin from './Components/Signin/Signin';
import ForgotPassword from './Components/ForgotPassword/ForgotPassword';
import Otp from './Components/Otp/Otp';
import ResetPassword from './Components/ResetPassword/ResetPassword';

import SignUp from './Components/Signup/Signup'; 
import Addcar from './Components/Addcar/Addcar';
import Membership from './Components/Membership/Membership';
import Interest from './Components/Interest/Interest';

function App() {
  return (
    <div className="App">
 <Router>
     

        <Routes>
          
                <Route path="/" exact element={<Signin />} />
                <Route path="/forgotpassword" element={<ForgotPassword/>} />
                <Route path="/otp" element={<Otp/>} />
                <Route path="/resetpassword" ex element={<ResetPassword/>} />
                <Route path="/signup"  element={<SignUp/>} />
                <Route path="/addcar" element={<Addcar/>}/>
                <Route path="/membership" element={<Membership/>}/>
                <Route path="/interest" element={<Interest/>}/>
      
        </Routes>  
        
</Router> 
     
    </div>
  );
}

export default App;
