import React  from 'react';
import {useEffect,useState}  from 'react';
import {useHttp} from '../hooks/http.hook'

import s from './Header.module.css'

import { BrowserRouter as Router,Switch,Route,NavLink} from "react-router-dom";

const Friends =(props)=>{
    const [users , setUsers]= useState([])
    const {loading, request, error, clearError} = useHttp()
    useEffect(async() => {
      // Обновляем заголовок документа с помощью API браузера
      const data = await request('/user', 'GET')
      console.log(data)
      setUsers(data)

    });
    return (
      <div >
        Friends
        {users.map((value)=>{
          return (
          <><p>{value.email}</p>
          </>
          )
        })}
      </div>
    );
  
}

export default Friends;