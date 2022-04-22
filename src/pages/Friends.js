import React  from 'react';
import {useEffect,useState,useContext}  from 'react';
import {useHttp} from '../hooks/http.hook'
import {AuthContext} from "../context/AuthContext"
import s from './Header.module.css'

import { BrowserRouter as Router,Switch,Route,NavLink} from "react-router-dom";

const Friends =(props)=>{
    const auth = useContext(AuthContext)

    const [users , setUsers]= useState([])
    const {loading, request, error, clearError} = useHttp()
    useEffect( async() => {
      try {
        const data = await request('/user', 'GET',null, {
          Authorization: `Bearer ${auth.token}`
        })
        console.log(data)
        setUsers(data)
        console.log(error)
      } catch (e) {
        console.log(e)
        console.log(error)
      }
      
    },[]);
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