import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Login = () => {

  // enter-show-confirm password
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
    if (event.target.value !== password) {
      setError('Passwords do not match');
    } else {
      setError('');
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  // Chang login and register
  const [isActive, setIsActive] = useState(false);

  const handleRegisterClick = () => {
    setIsActive(true);
  };

  const handleLoginClick = () => {
    setIsActive(false);
  };
  // Enter user name and password
  const [data,setData] = useState({
    user :"",
    password : "",
    confirmPassword : "",
  })

  const handleOnChange = (e) => {
    const { name , value } = e.target

    setData((preve)=>{
      return{
        ...preve,
        [name] : value
      }
    })
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
  }

  console.log("data login", data)
    return(
        <body className="loginBody">
          <div id="containerLogin" className={`containerLogin ${isActive ? 'active' : ''}`}>
            <div className="form-containerLogin Loginsign-up">
              <form onSubmit={handleSubmit}>
                <h1>Create Account</h1>
                  <input 
                    type="text" 
                    placeholder="User Name" 
                    name='user'
                    value={data.user}
                    onChange={handleOnChange} 
                  />
                  <input 
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={handlePasswordChange}
                    placeholder="Enter your password" 
                  />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                    placeholder="Confirm your password"
                  />
                  <span>
                  {error && <p className="error">{error}</p>}
                  </span>
                  <label>
                    <input
                      type="checkbox"
                      checked={showPassword}
                      onChange={toggleShowPassword}
                    />
                    Show Password
                  </label>
                  <button>Sign Up</button>
              </form>
            </div>
            <div className="form-containerLogin Loginsign-in">
              <form onSubmit={handleSubmit}>
                <h1>Sign In</h1>
                <div className="loginButton google">
                  <img src= "Google_Icons.png" alt="" className="icon" />
                  Google
                </div>
                <span>or use your account</span>
                <input 
                  type="text" 
                  placeholder="User Name"
                  name='user'
                  value={data.user}
                  onChange={handleOnChange} />
                <input 
                  type={showPassword ? 'text' : 'password'}
                  value={data.password}
                  name='password'
                  onChange={handleOnChange}
                  placeholder="Enter your password" 
                />
                <div>
                  <div>
                      <input
                        type="checkbox"
                        checked={showPassword}
                        onChange={toggleShowPassword}
                      />
                  Show Password
                  </div>
                </div>
                <Link to = {'/forgot-password'} className='block w-fit ml-auto hover:underline'>
                  Forgot password ?
                </Link>
                <button>Sign In</button>
              </form>
            </div>
            <div className="toggle-containerLogin">
              <div className="Logintoggle">
                <div className="toggle-panelLogin Logintoggle-left">
                  <h1>Welcome Back!</h1>
                  <p>Enter your personal details to use all of site features</p>
                  <button className="hidden" id="login" onClick={handleLoginClick}>Sign In</button>
                </div>
                <div className="toggle-panelLogin Logintoggle-right">
                  <h1>Hello, Friend!</h1>
                  <p>Register with your personal details to use all of site features</p>
                  <button className="hidden" id="register" onClick={handleRegisterClick}>Sign Up</button>
                </div>
              </div>
            </div>
          </div>
        </body>
    );
}
export default Login;