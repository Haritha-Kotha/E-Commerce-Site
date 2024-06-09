import { useRef } from 'react'
import './login.css'
import {useDispatch} from 'react-redux'
import { login } from '../../../../client/src/redux/apiCalls'
//import { useNavigate } from 'react-router-dom'

export const Login = () => {

  const username = useRef()
  const password = useRef()
  const dispatch = useDispatch()
  //const navigate = useNavigate()

  const handleClick = (e) => {
    e.preventDefault()
    login(dispatch, {username : username.current.value, password : password.current.value})
   // navigate("/")
  }

  return (
    <div className='login'>
      <div className="loginInfo">
        <h1 className="title">Hari-E-Commerce</h1>
        <p>Login with your account and start shopping and get your orders instantly.feel free to shop now!</p>
      </div>
      <form className="loginDetails">
        <div className="loginInput">
          <input type="text" placeholder='' required  ref={username} />
          <label className="loginInputPlaceholder">Username</label>
        </div>
        <div className="loginInput">
          <input type="password" placeholder='' required ref={password} />
          <label className="loginInputPlaceholder">Password</label>
        </div>
        <button className="loginBtn" onClick={handleClick} >Login</button>
        {/* <a href="#" className="forgotPassword">Forgot Password?</a>
        <button type='submit' className="newBtn" >Create a new account</button> */}
      </form>
    </div>
  )
}
