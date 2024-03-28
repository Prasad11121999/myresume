import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch(`https://fastapi-app-427j.onrender.com/login/?email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`);
      
      const data = await response.json();

      if (response.ok) {
        setIsAuthenticated(data.isAuthenticated);
        setEmail(data.email);
        if(!isAuthenticated){
            setError('please enter valid credentails');
        }

      } else {
        setError(data.error || 'please enter valid credentails');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred');
    }
  };

  if (isAuthenticated) {
    return (
      <div>
        <h1>Welcome {email}</h1>
        {/* Your dashboard component goes here */}
      </div>
    );
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Login</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
}

export default Login;
