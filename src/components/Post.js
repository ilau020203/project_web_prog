import React  from 'react';


import LocalizedStrings from 'react-localization';
import {useEffect,useState,useContext}  from 'react';
import {useHttp} from '../hooks/http.hook'
import {AuthContext} from "../context/AuthContext"
import s from './Post.module.css'

import { BrowserRouter as Router,Switch,Route,NavLink} from "react-router-dom";

const Post =(props)=>{
  const auth = useContext(AuthContext)
  console.log(props.username)
  let strings = new LocalizedStrings({

      en:{
        username:"You",
        date:"Just now",
        like: "Like"
      },
      ru: {
          username:"Вы",
          date:"Только что",
          like: "Любо"
      }
     });
  strings.setLanguage(auth.language)
   
    return (
      <div className={s.main}  >
        <div className={s.info}>
          <img src ="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/User_font_awesome.svg/768px-User_font_awesome.svg.png?20160212005950" alt="some avatar" className={s.avatar}></img>
          <div className={s.infoText}>
            <div className={s.username}>
                {props.username} 
            </div>
            <div className={s.infoDate}>
                {(new Date(Date.parse(props.date))).toTimeString()}
            </div>
          </div>
        </div>
        <h1>{props.title}</h1>
        
      <p>    
         {props.text}
      </p>
      <button disabled ={!props.enable} onClick={props.like}> {strings.like} </button> {props.count}
      </div>
    );
  
    
}

export default Post;