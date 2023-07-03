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
import Notification from './Components/Notification/Notification';
import Notifications from './Components/Notifications/Notifications';
import Profile from './Components/Profile/Profile';
import CarDetails from './Components/CarDetails/CarDetails';
import ChangePassword from './Components/ChangePassword/ChangePassword';
import PersonlInformation from './Components/PersonalInformation/PersonlInformation';
import CarEmpty from './Components/CarEmpty/CarEmpty';
import EventEmpty from './Components/EventEmpty/EventEmpty';
import ServiceEmpty from './Components/ServiceEmpty/ServiceEmpty';
import QRcode from './Components/QRcode/QRcode';
import Scan from './Components/Scan/Scan';
import CarList from './Components/CarList/CarList';
import Saved from './Components/Saved/Saved';
import Blogs from './Components/Blogs/Blogs';

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
                <Route path="/notification" element={<Notifications/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/cardetails" element={<CarDetails/>}/>
                <Route path="/changepassword" element={<ChangePassword/>}/>
                <Route path="/personalinformation" element={<PersonlInformation/>}/>
                <Route path="/car" element={<PersonlInformation/>}/>
                <Route path="/carempty" element={<CarEmpty/>}/>
                <Route path="/eventempty" element={<EventEmpty/>}/>
                <Route path="/serviceempty" element={<ServiceEmpty/>}/>
                <Route path="/qr" element={<QRcode/>}/>
                <Route path="/scan" element={<Scan/>}/>
                <Route path="/carlist" element={<CarList/>}/>
                <Route path="/saved" element={<Saved/>}/>
                <Route path="/blogs" element={<Blogs/>}/>
      
        </Routes>  
        
</Router> 
     
    </div>
  );
}

export default App;
