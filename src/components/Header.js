import React  from 'react';
import LocalizedStrings from 'react-localization';

import s from './Header.module.css'
import {useEffect,useState,useContext}  from 'react';
import {useHttp} from '../hooks/http.hook'
import {AuthContext} from "../context/AuthContext"
import { BrowserRouter as Router,Switch,Route,NavLink} from "react-router-dom";

import Select from 'react-select';

const options = [
  { value: 'ru', label: 'Русский' },
  { value: 'en', label: 'English' },
];


const Header =(props)=>{
  const auth = useContext(AuthContext)
  const [selectedOption, setSelectedOption] = useState('en')
  let strings= new LocalizedStrings({

    en:{
        logout: "Log out",
        social: "DayNa and Ilau"
    },
    ru: {
        logout: "Выйти",
        social: "Биба и Боба"
    }
   })
  

  let handleChange = (selectedOption) => {
    auth.setLanguage(selectedOption.value)
    console.log(strings.getLanguage())
      console.log(`Option selected:`, selectedOption)
      strings.setLanguage(selectedOption.value)
      auth.language=selectedOption.value;
      setSelectedOption( selectedOption )
  };

  
    
  strings.setLanguage(auth.language)

    return (
      <header className='header' >
        <h4 style={{color: "magenta"}}>
          {strings.social}  
        </h4>

        <button onClick={auth.logout}>{strings.logout}</button> 
        <Select
        value={selectedOption}
        onChange={handleChange}
        options={options}
      />
      </header>
    );
  
}

export default Header;