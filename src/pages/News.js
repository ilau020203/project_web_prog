import React  from 'react';

import s from './News.module.css'

import { BrowserRouter as Router,Switch,Route,NavLink} from "react-router-dom";
import Post from "../components/Post.js";

const News =(props)=>{

   
    return (<>
      <div className={s.ribbon} >

        <Post>
          
          </Post>
           
           
        <Post>
          
          </Post>
           
           
        <Post>
          
          </Post>
           
          
        
       
      </div>
      </>
    );
  
}

export default News;