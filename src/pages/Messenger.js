import React  from 'react';

import s from './Header.module.css'

import { BrowserRouter as Router,Switch,Route,NavLink} from "react-router-dom";

const Header =(props)=>{

   
    return (
      <div className={s.ribbon} >
        Messenger
      </div>
    );
  
}

export default Header;