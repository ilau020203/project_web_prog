import './App.css';
import "materialize-css"
import Navbar from "./components/Navbar";

import {useRoutes} from './routes'
import {useAuth} from './hooks/auth.hook'
import { useState } from "react";


import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthContext } from './context/AuthContext';

function App() 
{

  const { token, login, logout, userID } = useAuth()
  console.log(token)
  const isAuthenticated = !!token
  const routes = useRoutes(isAuthenticated)
  console.log(isAuthenticated)
  return (
    <AuthContext.Provider value = 
      {{
        token, login, logout, userID, isAuthenticated
      }}>
      <Router>
        { isAuthenticated && <Navbar /> }
        <div className="container">
          {routes}
        </div>
      </Router>
    </AuthContext.Provider>
  )
}

export default App;
