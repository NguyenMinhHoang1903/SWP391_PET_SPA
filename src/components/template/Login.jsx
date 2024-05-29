import React, { useState } from 'react';
import { Link , useNavigate } from 'react-router-dom';
import SummaryApi from '../../common';
import { toast } from 'react-toastify';
const Login = () => {

  // enter-show-confirm password
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');


  const navigate = useNavigate()

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
    name :"",
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

  const handleSubmit = async(e) =>{
    e.preventDefault()
    if (data.password === data.confirmPassword){
      const dataResponse = await fetch(SummaryApi.signUp.url,{
        method : SummaryApi.signUp.method,
        headers : {
          "content-type" : "application/json"
        },
        body : JSON.stringify(data)
    })
    const dataApi = await dataResponse.json()

      if (dataApi.success){
        toast.success(dataApi.message)
      }
      if (dataApi.error){
        toast.error(dataApi.message)
      }
    } else {
      toast.error("Please check password and confirm password")
    }
  }
    return(
        <body className="loginBody">
          <div id="containerLogin" className={`containerLogin ${isActive ? 'active' : ''}`}>
            <div className="form-containerLogin Loginsign-up">
              <form onSubmit={handleSubmit}>
                <h1>Create Account</h1>
                  <input 
                    type="text" 
                    placeholder="User Name" 
                    name='name'
                    value={data.name}
                    onChange={handleOnChange} 
                  />
                  <input 
                    type={showPassword ? 'text' : 'password'}
                    value={data.password}
                    name='password'
                    onChange={handleOnChange}
                    placeholder="Enter your password" 
                  />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Confirm your password"
                    value={data.confirmPassword}
                    name='confirmPassword'
                    onChange={handleOnChange}
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