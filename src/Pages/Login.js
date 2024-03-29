import React, { useState } from 'react';
import Button from '../Components/Button';
import Dashboard from './DashBoard';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);//profileId
  const [profileId, setProfileId] = useState(0);//profileId
  const styleElement= {
    boxShadow: '0px 0px 9px 7px lightgray',
    borderRadius:'10px'
  }; 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch(`https://fastapi-app-427j.onrender.com/login/?email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`);
            
      const data = await response.json();

      if (response.ok) {
        setIsAuthenticated(data.isAuthenticated);
        setEmail(data.email);
        setProfileId(data.profileId);
        if(!isAuthenticated){
            setError('please enter valid credentails');
            setIsLoading(false);
        }else{
          setIsLoading(false);
        }

      } else {
        setError(data.error || 'please enter valid credentails');
        setIsLoading(false);
      }
    } catch (error) {
      setError('An error occurred');
      setIsLoading(false);
    }
  };

  if (isAuthenticated) {
    return (
      <div>
        <Dashboard 
        profileId={profileId}/>
      </div>
    );
  }

  return (
    <div className='login-container'>
      <div className='login-wraper'>
        <div style={styleElement}>
          <h1 className='header'>Login</h1>
          <form className='login-form'>
            {error && <p className='loginform-error'>{error}</p>}
            <input 
              type="email" 
              placeholder="Email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
            <input 
              type="password" 
              placeholder="Password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
            <Button
              text='Login'
              className='DiPraxias-btn-secondary'
              isDisabled={isLoading}
              isLoading={isLoading}
              onClick={handleSubmit}
            />
          </form>
        </div>        
      </div>
    </div>    
  );
}

export default Login;
