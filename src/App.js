import logo from './logo.svg';

import './App.css';
import Header from "./components/Header";
import Friends from "./components/Friends";
import Navbar from "./components/Navbar";
import Messenger from "./components/Messenger";
import News from "./components/News";
import Register from "./components/Register";

import { useState, useEffect } from "react";

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

function App() {

  const [isRegister, setIsRegister] = useState(false);
  if (!isRegister)
  {
    return ( 
    <Router>
      <Routes>
        <Route path="*" element={<Navigate  to="/signUp" />} />        
      
      <Route path="/signUp" element={
                
        <Register setIsRegister = {setIsRegister}>
          
        </Register>
              
            }></Route>
      </Routes>
    </Router>
      
    )
  }
  return (
    <div className="App"> 
       <Router>  
          <Header> 
          </Header>
        <Navbar>
        </Navbar>
        <main>
          <Routes>
          <Route exact path="/" element={<Navigate  to="/news" />} />  
          <Route exact path="/signUp" element={<Navigate  to="/news" />} />
            <Route path="/friends/" element={
            <Friends>
                </Friends>
            }></Route>
            <Route path="/messenger/" element={
              <Messenger>

                </Messenger>
            }></Route>


            
            <Route path="/news" element={
                
                <News>
                </News>
              
            }></Route>
          </Routes>
        </main>
        
      </Router> 
    </div>
  );
}

export default App;
