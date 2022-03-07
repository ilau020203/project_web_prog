import React  from 'react';

import s from './Navbar.module.css'

import { NavLink} from "react-router-dom";

const Navbar =(props)=>{

   
    return (
      <nav className={s.container}>
             
            <NavLink to="/friends"
            className={s.navlink}
            >
                Friends
            </NavLink>
           
            <NavLink to="/messenger"
            className={s.navlink}
            >
                Messenger
            </NavLink>
          
            <NavLink to="/news"
            className={s.navlink}
            >
                News
            </NavLink>

          

      </nav>
    );
  
}

export default Navbar;