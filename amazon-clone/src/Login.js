import React , {useState}from 'react'
import "./Login.css"
import {Link } from "react-router-dom"
import { useNavigate } from 'react-router-dom';
import {auth} from './firebase'
import {useStateValue} from "./StateProvider";
function Login() {
  
  const history = useNavigate();
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [{basket , user},dispatch] = useStateValue();
  
  const signIn = e =>{
    e.preventDefault();
    auth.signInWithEmailAndPassword(email,password)
    .then((auth) =>{
      console.log(auth);
      if(auth){
        history('/')
      }
    })
    .catch(error => alert(error.message))
  }
  const register = e =>{
    e.preventDefault();
    auth.createUserWithEmailAndPassword(email,password)
    .then((auth) =>{
      console.log(auth);
      if(auth){
        history('/')
      }
    })
    .catch(error => alert(error.message))
  }
  
  return (
    <div className='login'>
        <Link to="/">
            <img className='login_logo' 
                src="https://softwareengineeringdaily.com/wp-content/uploads/2021/09/amazon-logo-vector-png-vector-png-free-amazon-logos-705.jpeg" alt="" 
            />
        </Link>
        <div className="login_container">
          <h1>Sign-in</h1>
          <form>
            <h5>E-mail</h5>
            <input type="text" value={email} 
            onChange={e=>setEmail(e.target.value)} />
            <h5>Password</h5>
            <input type="password" value={password} 
            onChange={e=>setPassword(e.target.value)} />
            <button type='sub,it' className='login_button'
            onClick={signIn} >Sign-in</button>
          </form>
          <p>
            By Signing You Agreeing To Amazon Clone Terms & Condition
          </p>
          <button onClick={register} className='signup_button'>Create Account</button>
        </div>
    </div>
  )
}

export default Login