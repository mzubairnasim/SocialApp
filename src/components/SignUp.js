import React,{useState} from 'react'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { auth } from '../config/firebase'
import Fade from 'react-reveal'
import './Signup.css'
export default function SignUp() {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState("")
    const [username, setusername] = useState('')
    const history=useHistory()
    const SignUp=(e)=>{
        e.preventDefault()
        auth.createUserWithEmailAndPassword(email,password)
        .then((authUser)=>{
            if(authUser){
                authUser.user.updateProfile({
                    displayName:username
                })
            }
            history.push('/')
        })
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
                    <h1 class="card-title text-center head ">SignUp</h1>
                    <form onSubmit={SignUp}>
                        <div class="form-group">
                            <input type='text'  value={username} onChange={e=>setusername(e.target.value)}
                              class="form-control"   placeholder='Type Name Here'
                             />
                        </div>

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

                        <button type='submit' className='btn btn-info text-capitalize'>SignUp</button>

                        <Link to='/signin'><h4 className='mt-2 text-capitalize'>Already user click here</h4></Link>
                    </form>
                   
                    </div>
                  
                    </div>
                    </Fade>
                </div>
            </div>
        </div>
    )
}
