import './register.css'

export const Register = () => {
  return (
    <div className='register'>
      <div className="registerInfo">
        <h1 className="title">Hari-E-Commerce</h1>
        <p>Register with an account and shop your favourate items with unlimited deals.</p>
      </div>
      <form className="registerDetails" >
        <div className="registerInput">
          <input type="text" placeholder='' required />
          <label className="registerInputPlaceholder">Username</label>
        </div>
        <div className="registerInput">
          <input type="email" placeholder='' required/>
          <label className="registerInputPlaceholder">Email</label>
        </div>
        <div className="registerInput">
          <input type="password" placeholder='' required />
          <label className="registerInputPlaceholder">Password</label>
        </div>
        <div className="registerInput">
          <input type="password" placeholder='' required />
          <label className="registerInputPlaceholder">Confirm Password</label>
        </div>
        <button type='submit' className="registerBtn" >Sign Up</button>
        {/* <a href="#" className="alreadyHaveAccount">Already have an account?</a>
        <button  className="newBtn" >Login to your account</button> */}
      </form>
    </div>
  )
}

