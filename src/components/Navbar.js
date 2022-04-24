import React  from 'react';
import LocalizedStrings from 'react-localization';
import {useEffect,useState,useContext}  from 'react';
import {useHttp} from '../hooks/http.hook'
import {AuthContext} from "../context/AuthContext"
import s from './Navbar.module.css'

import { NavLink} from "react-router-dom";

const Navbar =(props)=>{
    const auth = useContext(AuthContext)

    let strings = new LocalizedStrings({

        en:{
            friends:"Friends",
            messenger:"Messenger",
            news:"News",
            logout: "Log out",
            like: "Like"
        },
        ru: {
            friends:"Друзья",
            messenger:"Сообщения",
            news:"Новости",
            logout: "Выйти",
            like: "Нравится"
        }
       });
    strings.setLanguage(auth.language)
    return (
      <nav className={s.container}>
             
            <NavLink to="/friends"
            className={s.navlink}
            >
                <h5 style={{color: "red"}}>{strings.friends}</h5>
            </NavLink>
           
            <NavLink to="/messenger"
            className={s.navlink}
            >
                <h5 style={{color: "red"}}>{strings.messenger}</h5>
            </NavLink>
          
            <NavLink to="/news"
            className={s.navlink}
            >
                <h5 style={{color: "red"}}>{strings.news}</h5>
            </NavLink>

          

      </nav>
    );
  
}

export default Navbar;