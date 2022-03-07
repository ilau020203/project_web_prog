import React  from 'react';

import s from './Header.module.css'

import { BrowserRouter as Router,Switch,Route,NavLink} from "react-router-dom";

const Header =(props)=>{

   
    return (
      <header className='header' >
        <h4>
          Social  
        </h4>
       
      </header>
    );
  
}

export default Header;