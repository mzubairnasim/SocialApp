import React,{useState} from 'react'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { auth } from '../config/firebase'
import Fade from 'react-reveal'
import './Signup.css'
export default function SignIn() {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState("")
    const history=useHistory()
    const SignIn=(e)=>{
        e.preventDefault()
        auth.signInWithEmailAndPassword(email,password)
        .then((authuser=>{
            if(authuser){
                history.push('/')
            }
        }))
        .catch(error=>{
            alert(error.message)
        })
        
    }
    return (
        <div>
            <div className='container'>
                <div className='row'>
                <Fade left cascade>
                    <div className='col-lg-10 col-md-10 col-12 offset-lg-1 offset-md-1'>
                    <div className='card card-body signupone '>
                    <h1 class="card-title text-center head ">SignIn</h1>
                    <form onSubmit={SignIn}>
                        

                        <div class="form-group">
                            <input type='text'  value={email} onChange={e=>setemail(e.target.value)} 
                              class="form-control"   placeholder='Type Email Here'
                             />
                        </div>

                        <div class="form-group">
                            <input type='text'  value={password} onChange={e=>setpassword(e.target.value)}
                              class="form-control" placeholder='Type Password Here'
                             />
                        </div>

                        <button type='submit' className='btn btn-info text-capitalize'>SignIn</button>

                        <Link to='/signup'><h4 className='mt-2 text-capitalize'>New User Click here</h4></Link>
                    </form>
                   
                    </div>
                  
                    </div>
                    </Fade>
                </div>
            </div>
        </div>
    )
}
