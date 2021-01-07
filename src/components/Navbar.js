import React,{useState,useEffect,useContext} from 'react'
import { auth } from '../config/firebase'
import { Link } from 'react-router-dom'

import { Context } from './store'

export default function Navbar() {
  const {state,dispatch} = useContext(Context)
  const {user}=state
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if(authUser){
        // setuser(authUser);
        dispatch({type:"one",payload:authUser})
      }else{
        // setuser(null);
        dispatch({type:"one",payload:null})
      }
    })
  
  }, [])
    return (
        <div>
         
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <Link class="navbar-brand head" to='/'><h2>Social App</h2></Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
  
  {user? 
    <ul class="navbar-nav ml-auto head">
      <li class="nav-item active ">
       <h2 className='mr-4 text-capitalize'>{user.displayName}</h2>
      </li>
      <li class="nav-item">
      <button onClick={()=>auth.signOut()} className='btn btn-warning'>Logout</button>
      </li>   
    </ul> :
        
    
    <ul class="navbar-nav ml-auto head">
      <li class="nav-item active">
        <Link class="nav-link" to='/'><h3>Home</h3> <span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to='/signup'><h3>SignUp</h3></Link>
      </li>   
      <li class="nav-item">
        <Link class="nav-link" to='/signin'><h3>SignIn</h3></Link>
      </li>   
    </ul>
  }
  </div>
    
</nav>
       
              
        </div>
    )
}
