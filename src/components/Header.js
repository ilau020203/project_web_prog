import React  from 'react';

import s from './Header.module.css'
import {useEffect,useState,useContext}  from 'react';
import {useHttp} from '../hooks/http.hook'
import {AuthContext} from "../context/AuthContext"
import { BrowserRouter as Router,Switch,Route,NavLink} from "react-router-dom";

const Header =(props)=>{
    
  const auth = useContext(AuthContext)

    return (
      <header className='header' >
        <h4>
          Social  
        </h4>

        <button onClick={auth.logout}>logout</button> 
      </header>
    );
  
}

export default Header;