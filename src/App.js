import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signin from './Components/Signin/Signin';
import ForgotPassword from './Components/ForgotPassword/ForgotPassword';

function App() {
  return (
    <div className="App">
 <Router>
     

        <Routes>
          
                <Route path="/" exact element={<Signin />} />
                <Route path="/fp" exact element={<ForgotPassword/>} />
      
        </Routes>  
        
</Router> 
     
    </div>
  );
}

export default App;
